// IMPORTANT: Replace 'YOUR_FINNHUB_API_KEY' with your actual API key from https://finnhub.io/
const FINNHUB_API_KEY = 'd4duha1r01qmhtc68pc0d4duha1r01qmhtc68pcg';
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';

// Stock metadata with company info
const stockMetadata = [
    { name: "Reliance Industries", symbol: "RIL", sector: "Energy" },
    { name: "TCS (Tata Consultancy Services)", symbol: "TCS", sector: "Technology" },
    { name: "HDFC Bank", symbol: "HDFCBANK", sector: "Finance" },
    { name: "ICICI Bank", symbol: "ICICIBANK", sector: "Finance" },
    { name: "Axis Bank", symbol: "AXISBANK", sector: "Finance" },
    { name: "Infosys", symbol: "INFY", sector: "Technology" },
    { name: "Wipro", symbol: "WIPRO", sector: "Technology" },
    { name: "HCL Technologies", symbol: "HCLTECH", sector: "Technology" },
    { name: "ITC", symbol: "ITC", sector: "Consumer" },
    { name: "Hindustan Unilever", symbol: "HNDLUNIV", sector: "Consumer" },
    { name: "Maruti Suzuki", symbol: "MARUTI", sector: "Consumer" },
    { name: "Bajaj Auto", symbol: "BAJAJAUTH", sector: "Consumer" },
    { name: "Power Grid Corporation", symbol: "POWERGRID", sector: "Utilities" },
    { name: "Coal India", symbol: "COALINDIA", sector: "Energy" },
    { name: "JSW Steel", symbol: "JSWSTEEL", sector: "Energy" },
    { name: "Bharti Airtel", symbol: "BHARTIARTL", sector: "Technology" },
    { name: "Bajaj Finserv", symbol: "BAJAJFINSV", sector: "Finance" },
    { name: "ICICI Prudential", symbol: "ICICIPRULI", sector: "Finance" },
    { name: "SBI (State Bank of India)", symbol: "SBIN", sector: "Finance" },
    { name: "NTPC Limited", symbol: "NTPC", sector: "Energy" }
];

// Default/cached stock data for fallback
const stockData = [
    { name: "Reliance Industries", symbol: "RIL", sector: "Energy", price: 2847.50, change: 45.00, changePercent: 1.61, marketCap: "22.5T", peRatio: 24.3, high52w: 3050, low52w: 1900, dividendYield: 1.2, volume: 15234500 },
    { name: "TCS (Tata Consultancy Services)", symbol: "TCS", sector: "Technology", price: 3890.00, change: -25.50, changePercent: -0.65, marketCap: "14.2T", peRatio: 28.5, high52w: 4200, low52w: 3100, dividendYield: 1.8, volume: 3456000 },
    { name: "HDFC Bank", symbol: "HDFCBANK", sector: "Finance", price: 1598.75, change: 12.50, changePercent: 0.79, marketCap: "9.8T", peRatio: 22.1, high52w: 1750, low52w: 1350, dividendYield: 2.1, volume: 28934500 },
    { name: "ICICI Bank", symbol: "ICICIBANK", sector: "Finance", price: 959.25, change: 8.75, changePercent: 0.92, marketCap: "7.5T", peRatio: 19.8, high52w: 1050, low52w: 750, dividendYield: 2.3, volume: 45120300 },
    { name: "Axis Bank", symbol: "AXISBANK", sector: "Finance", price: 1125.50, change: -15.25, changePercent: -1.34, marketCap: "3.8T", peRatio: 16.5, high52w: 1250, low52w: 850, dividendYield: 1.9, volume: 18234500 },
    { name: "Infosys", symbol: "INFY", sector: "Technology", price: 1845.00, change: 22.00, changePercent: 1.21, marketCap: "7.8T", peRatio: 25.2, high52w: 2000, low52w: 1450, dividendYield: 2.0, volume: 8934500 },
    { name: "Wipro", symbol: "WIPRO", sector: "Technology", price: 423.50, change: -8.50, changePercent: -1.97, marketCap: "1.8T", peRatio: 20.1, high52w: 550, low52w: 380, dividendYield: 1.6, volume: 12345600 },
    { name: "HCL Technologies", symbol: "HCLTECH", sector: "Technology", price: 1267.85, change: 18.15, changePercent: 1.45, marketCap: "3.4T", peRatio: 23.4, high52w: 1450, low52w: 980, dividendYield: 1.4, volume: 4567800 },
    { name: "ITC", symbol: "ITC", sector: "Consumer", price: 432.10, change: 5.90, changePercent: 1.38, marketCap: "4.2T", peRatio: 18.7, high52w: 475, low52w: 350, dividendYield: 3.8, volume: 32456700 },
    { name: "Hindustan Unilever", symbol: "HNDLUNIV", sector: "Consumer", price: 2134.75, change: -10.25, changePercent: -0.48, marketCap: "2.4T", peRatio: 48.2, high52w: 2300, low52w: 1800, dividendYield: 1.5, volume: 2345600 },
    { name: "Maruti Suzuki", symbol: "MARUTI", sector: "Consumer", price: 12385.00, change: 185.00, changePercent: 1.52, marketCap: "1.8T", peRatio: 11.3, high52w: 13500, low52w: 9200, dividendYield: 0.8, volume: 1234560 },
    { name: "Bajaj Auto", symbol: "BAJAJAUTH", sector: "Consumer", price: 8945.50, change: -65.50, changePercent: -0.73, marketCap: "2.1T", peRatio: 13.2, high52w: 10200, low52w: 7100, dividendYield: 1.1, volume: 1567890 },
    { name: "Power Grid Corporation", symbol: "POWERGRID", sector: "Utilities", price: 278.40, change: 3.60, changePercent: 1.31, marketCap: "3.2T", peRatio: 15.8, high52w: 300, low52w: 210, dividendYield: 4.2, volume: 28456700 },
    { name: "Coal India", symbol: "COALINDIA", sector: "Energy", price: 475.25, change: 8.75, changePercent: 1.87, marketCap: "1.9T", peRatio: 7.2, high52w: 510, low52w: 320, dividendYield: 5.1, volume: 15678900 },
    { name: "JSW Steel", symbol: "JSWSTEEL", sector: "Energy", price: 870.50, change: -12.50, changePercent: -1.42, marketCap: "2.7T", peRatio: 8.9, high52w: 1020, low52w: 600, dividendYield: 1.3, volume: 9123450 },
    { name: "Bharti Airtel", symbol: "BHARTIARTL", sector: "Technology", price: 1425.80, change: 20.20, changePercent: 1.44, marketCap: "4.5T", peRatio: 45.6, high52w: 1550, low52w: 1000, dividendYield: 0, volume: 23456700 },
    { name: "Bajaj Finserv", symbol: "BAJAJFINSV", sector: "Finance", price: 1587.45, change: -18.55, changePercent: -1.16, marketCap: "1.9T", peRatio: 35.2, high52w: 1800, low52w: 1200, dividendYield: 0.3, volume: 4567800 },
    { name: "ICICI Prudential", symbol: "ICICIPRULI", sector: "Finance", price: 532.10, change: 12.90, changePercent: 2.48, marketCap: "1.4T", peRatio: 32.1, high52w: 620, low52w: 410, dividendYield: 0.5, volume: 8934560 },
    { name: "SBI (State Bank of India)", symbol: "SBIN", sector: "Finance", price: 758.90, change: 14.10, changePercent: 1.89, marketCap: "7.9T", peRatio: 17.4, high52w: 850, low52w: 540, dividendYield: 2.2, volume: 42345600 },
    { name: "NTPC Limited", symbol: "NTPC", sector: "Energy", price: 319.75, change: 5.25, changePercent: 1.67, marketCap: "4.8T", peRatio: 12.3, high52w: 350, low52w: 210, dividendYield: 3.5, volume: 38456700 }
];

// State Management
let currentStocks = [...stockData];
let filteredStocks = [...stockData];
let refreshInterval;

// DOM Elements
const tableBody = document.getElementById('tableBody');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const sectorFilter = document.getElementById('sectorFilter');
const sortSelect = document.getElementById('sortSelect');
const refreshBtn = document.getElementById('refreshBtn');
const lastUpdate = document.getElementById('lastUpdate');
const loadingIndicator = document.getElementById('loadingIndicator');
const errorMessage = document.getElementById('errorMessage');
const noResults = document.getElementById('noResults');
const stockTable = document.getElementById('stockTable');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    // Load demo data immediately
    currentStocks = [...stockData];
    filteredStocks = [...stockData];
    handleSearch();
    updateTimestamp();
    // Then try to fetch live data
    refreshData();
    startAutoRefresh();
});

// Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    sectorFilter.addEventListener('change', applyFilters);
    sortSelect.addEventListener('change', handleSort);
    refreshBtn.addEventListener('click', refreshData);
}

// Search Handler
function handleSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        filteredStocks = [...currentStocks];
    } else {
        filteredStocks = currentStocks.filter(stock =>
            stock.name.toLowerCase().includes(query) ||
            stock.symbol.toLowerCase().includes(query)
        );
    }
    applyFilters();
}

// Filter Handler
function applyFilters() {
    const sector = sectorFilter.value;
    let filtered = [...filteredStocks];

    if (sector) {
        filtered = filtered.filter(stock => stock.sector === sector);
    }

    handleSort(null, filtered);
}

// Sort Handler
function handleSort(event, stocksToSort = null) {
    const sortValue = sortSelect.value;
    const stocks = stocksToSort || filteredStocks;

    switch (sortValue) {
        case 'price-high':
            stocks.sort((a, b) => b.price - a.price);
            break;
        case 'price-low':
            stocks.sort((a, b) => a.price - b.price);
            break;
        case 'change':
            stocks.sort((a, b) => b.changePercent - a.changePercent);
            break;
        case 'name':
        default:
            stocks.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (!stocksToSort) {
        filteredStocks = stocks;
    }
    renderStocks(stocks);
}

// Refresh Data from Finnhub API
async function refreshData() {
    showLoading(true);

    // Check if API key is configured
    if (FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') {
        showError('Please configure your Finnhub API key in script.js');
        showLoading(false);
        return;
    }

    try {
        // Fetch quote data for all stocks
        const quotePromises = stockMetadata.map(stock =>
            fetch(`${FINNHUB_BASE_URL}/quote?symbol=${stock.symbol}&token=${FINNHUB_API_KEY}`)
                .then(response => {
                    if (!response.ok) throw new Error(`API Error: ${response.status}`);
                    return response.json();
                })
                .catch(error => {
                    console.error(`Error fetching ${stock.symbol}:`, error);
                    return null;
                })
        );

        const quoteData = await Promise.all(quotePromises);

        // Fetch company profile data for additional info
        const profilePromises = stockMetadata.map(stock =>
            fetch(`${FINNHUB_BASE_URL}/stock/profile2?symbol=${stock.symbol}&token=${FINNHUB_API_KEY}`)
                .then(response => response.json())
                .catch(error => {
                    console.error(`Error fetching profile for ${stock.symbol}:`, error);
                    return {};
                })
        );

        const profileData = await Promise.all(profilePromises);

        // Combine the data
        currentStocks = stockMetadata.map((stock, index) => {
            const quote = quoteData[index] || {};
            const profile = profileData[index] || {};

            // Calculate change and changePercent from previous close
            const currentPrice = quote.c || stock.price || 0;
            const previousClose = quote.pc || quote.c || 0;
            const change = currentPrice - previousClose;
            const changePercent = previousClose ? ((change / previousClose) * 100) : 0;

            return {
                name: stock.name,
                symbol: stock.symbol,
                sector: stock.sector,
                price: currentPrice,
                change: change,
                changePercent: changePercent,
                marketCap: profile.marketCapitalization ? formatMarketCap(profile.marketCapitalization) : "N/A",
                peRatio: profile.pe ? profile.pe.toFixed(2) : "N/A",
                high52w: quote.h || "N/A",
                low52w: quote.l || "N/A",
                dividendYield: profile.dividendYield ? (profile.dividendYield * 100).toFixed(2) : "N/A",
                volume: quote.v || 0
            };
        });

        // Remove any stocks with invalid data
        currentStocks = currentStocks.filter(stock => stock.price > 0);

        if (currentStocks.length === 0) {
            showError('No valid stock data received. Using cached data.');
            currentStocks = [...stockData];
        }

        handleSearch();
        updateTimestamp();
    } catch (error) {
        console.error('Error fetching stock data:', error);
        showError('Failed to fetch stock data. Check your API key and try again.');
    } finally {
        showLoading(false);
    }
}

// Format market cap to readable format
function formatMarketCap(marketCap) {
    if (!marketCap) return "N/A";
    if (marketCap >= 1e12) return (marketCap / 1e12).toFixed(2) + 'T';
    if (marketCap >= 1e9) return (marketCap / 1e9).toFixed(2) + 'B';
    if (marketCap >= 1e6) return (marketCap / 1e6).toFixed(2) + 'M';
    return marketCap.toFixed(2);
}

// Render Stocks Table
function renderStocks(stocks = filteredStocks) {
    if (stocks.length === 0) {
        tableBody.innerHTML = '';
        stockTable.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    stockTable.style.display = 'table';
    noResults.style.display = 'none';

    tableBody.innerHTML = stocks.map(stock => `
        <tr>
            <td>
                <div class="company-name">${stock.name}</div>
            </td>
            <td>
                <span class="symbol">${stock.symbol}</span>
            </td>
            <td>
                <span class="sector">${stock.sector}</span>
            </td>
            <td>
                <span class="price">₹${typeof stock.price === 'number' ? stock.price.toFixed(2) : stock.price}</span>
            </td>
            <td>
                <span class="${stock.change >= 0 ? 'positive' : 'negative'}">
                    ₹${typeof stock.change === 'number' ? Math.abs(stock.change).toFixed(2) : stock.change}
                </span>
            </td>
            <td>
                <span class="${stock.changePercent >= 0 ? 'positive' : 'negative'}">
                    ${typeof stock.changePercent === 'number' ? (stock.changePercent >= 0 ? '+' : '') + stock.changePercent.toFixed(2) + '%' : stock.changePercent}
                </span>
            </td>
            <td>
                <span class="metric">${stock.marketCap}</span>
            </td>
            <td>
                <span class="metric">${stock.peRatio}</span>
            </td>
            <td>
                <span class="metric">₹${typeof stock.high52w === 'number' ? stock.high52w.toFixed(2) : stock.high52w}</span>
            </td>
            <td>
                <span class="metric">₹${typeof stock.low52w === 'number' ? stock.low52w.toFixed(2) : stock.low52w}</span>
            </td>
            <td>
                <span class="metric">${typeof stock.dividendYield === 'number' ? stock.dividendYield.toFixed(2) + '%' : stock.dividendYield}</span>
            </td>
            <td>
                <span class="metric">${formatVolume(stock.volume)}</span>
            </td>
        </tr>
    `).join('');
}

// Utility Functions
function formatVolume(volume) {
    if (volume >= 1000000) {
        return (volume / 1000000).toFixed(2) + 'M';
    } else if (volume >= 1000) {
        return (volume / 1000).toFixed(2) + 'K';
    }
    return volume.toString();
}

function updateTimestamp() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-IN');
    const dateString = now.toLocaleDateString('en-IN');
    lastUpdate.textContent = `Last updated: ${dateString} ${timeString}`;
}

function showLoading(show) {
    loadingIndicator.style.display = show ? 'block' : 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

function startAutoRefresh() {
    // Refresh data every 5 minutes (300000 ms)
    refreshInterval = setInterval(() => {
        console.log('Auto-refreshing stock data...');
        refreshData();
    }, 300000);
}

// Stop refresh on page unload
window.addEventListener('beforeunload', () => {
    clearInterval(refreshInterval);
});

/*
SETUP INSTRUCTIONS - Finnhub API Integration
==============================================

STEP 1: Get Your API Key
1. Go to https://finnhub.io/register
2. Sign up with your email
3. Verify your email
4. Go to your dashboard and copy your API key

STEP 2: Update this script
1. Find line 2: const FINNHUB_API_KEY = 'YOUR_FINNHUB_API_KEY';
2. Replace 'YOUR_FINNHUB_API_KEY' with your actual API key
3. Save the file

STEP 3: Run the application
1. Open index.html in a web browser, OR
2. Start a local server:
   - Python 3: python3 -m http.server 8000
   - Node.js: npx http-server
3. Open http://localhost:8000

FEATURES:
- Real-time stock prices (updated every 5 minutes)
- Company profiles & market data
- 52-week highs/lows
- P/E ratios and market caps
- Live search & filtering by sector
- Sort by price and change percentage

API RATE LIMIT: Finnhub free tier allows 60 API calls per minute.
The app refreshes every 5 minutes to stay within limits.

TROUBLESHOOTING:
- If you see "Please configure your Finnhub API key":
  → Replace 'YOUR_FINNHUB_API_KEY' with your actual key
- If data doesn't load:
  → Check your API key is correct
  → Verify you have an internet connection
  → Check browser console for error messages
  → Ensure you haven't exceeded the free tier rate limit
*/
