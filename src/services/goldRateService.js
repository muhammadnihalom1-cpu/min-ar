/**
 * Kerala Gold Rate Service
 * Mirrors the Python scraper logic:
 *   → Fetches https://www.goodreturns.in/gold-rates/kerala.html
 *   → Finds div.gold_silver_table rows with "1 Gram"
 *   → Extracts today's 22K & 24K prices
 *
 * Uses a CORS proxy since browsers block direct cross-origin fetches.
 */

// ── Fallback / cached rates (updated periodically) ──────────────────────────
const FALLBACK = {
  rate22K: 7260,   // ₹7,260 / gram
  rate24K: 7920,   // ₹7,920 / gram
  rate18K: 5445,   // ₹5,445 / gram
};

const TARGET_URL = 'https://www.goodreturns.in/gold-rates/kerala.html';

// CORS proxy – allorigins returns { contents: "<html>…</html>" }
const PROXY = (url) =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

/** Parse the GoodReturns page HTML exactly like the Python script */
function parseGoodReturnsHTML(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Equivalent to: soup.find_all("div", class_="gold_silver_table")
  const tables = doc.querySelectorAll('div.gold_silver_table');

  let rate22K = null;
  let rate24K = null;

  for (const block of tables) {
    const rows = block.querySelectorAll('tr');

    for (const row of rows) {
      const text = row.innerText || row.textContent || '';

      // Equivalent to: if "1 Gram" in row.text
      if (!text.includes('1 Gram')) continue;

      // Equivalent to: cells = row.find_all("td"); cells[1].text.strip()
      const cells = row.querySelectorAll('td');
      if (cells.length < 2) continue;

      const priceText = cells[1].textContent.trim();
      // Strip ₹ symbol, commas, spaces → parse as int
      const price = parseInt(priceText.replace(/[₹,\s]/g, ''), 10);
      if (!price || isNaN(price)) continue;

      // Determine 22K vs 24K from the table heading or row context
      const blockText = block.textContent || '';
      const is22K = blockText.includes('22') || blockText.includes('916');
      const is24K = blockText.includes('24') || blockText.includes('999') || blockText.includes('24 Carat');

      if (is22K && !rate22K) rate22K = price;
      else if (is24K && !rate24K) rate24K = price;
    }
  }

  // Fallback: if only one was found, derive the other mathematically
  if (rate22K && !rate24K) rate24K = Math.round(rate22K * (24 / 22));
  if (rate24K && !rate22K) rate22K = Math.round(rate24K * (22 / 24));

  return { rate22K, rate24K };
}

/** Format the current time in IST */
function nowIST() {
  return new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Fetch live Kerala gold rates from GoodReturns.
 * Falls back to cached rates if scraping fails.
 */
export async function fetchLiveGoldRates() {
  try {
    const response = await fetch(PROXY(TARGET_URL), {
      signal: AbortSignal.timeout(10_000), // 10 s timeout
    });

    if (!response.ok) throw new Error(`Proxy HTTP ${response.status}`);

    const json = await response.json();
    const html = json?.contents;
    if (!html) throw new Error('Empty proxy response');

    const { rate22K, rate24K } = parseGoodReturnsHTML(html);

    if (!rate22K || !rate24K) throw new Error('Could not locate 1-gram price rows');

    return {
      rate22K,
      rate24K,
      rate18K: Math.round(rate24K * (18 / 24)),
      isLive: true,
      source: 'GoodReturns (Live)',
      lastUpdated: `Live · ${nowIST()} IST`,
    };

  } catch (err) {
    console.warn('[GoldRateService] Live scrape failed, using cached rates:', err.message);

    return {
      rate22K: FALLBACK.rate22K,
      rate24K: FALLBACK.rate24K,
      rate18K: FALLBACK.rate18K,
      isLive: false,
      isCached: true,
      source: 'Cached (GoodReturns fallback)',
      lastUpdated: `Cached · ${nowIST()} IST`,
    };
  }
}
