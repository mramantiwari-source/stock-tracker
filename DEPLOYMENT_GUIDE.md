# 🚀 Deploy Your Stock Tracker - Easy Options

Choose one of these simple methods to get a permanent, shareable URL:

---

## Option 1: REPLIT (Easiest - 2 minutes) ⭐

1. Go to https://replit.com/
2. Click "Create Repl"
3. Choose "Import from GitHub" (or paste files directly)
4. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
5. Click "Run" - your app gets a live URL instantly!
6. Share the URL with friends

**Pros:** Instant, no password, always live while you're logged in

---

## Option 2: GitHub Pages (Free, Permanent) ⭐⭐

1. Go to https://github.com (create account if needed)
2. Click "New Repository"
3. Name it: `stock-tracker`
4. Check "Public"
5. Click "Create Repository"
6. Upload these files via GitHub web interface:
   - `index.html`
   - `styles.css`
   - `script.js`
7. Go to Settings → Pages
8. Set "Source" to "main" branch
9. Your URL will be: `https://YOUR-USERNAME.github.io/stock-tracker`

**Pros:** Permanent, free, always live

---

## Option 3: Surge.sh (1 Command!) ⭐

```bash
cd /Users/aman/stock-tracker
surge
```

Then:
- Enter your email
- Enter a password
- Choose a domain (or press Enter for random)
- Done! You get a live URL

**Pros:** Super fast, one command, shareable

---

## Option 4: Vercel (1 Command)

```bash
cd /Users/aman/stock-tracker
vercel --yes --prod
```

**Pros:** Professional, fast, auto-updates

---

## Option 5: Netlify Drag & Drop

1. Go to https://netlify.com
2. Create account
3. Drag and drop your folder
4. Done! Instant live URL

---

## ⚡ QUICKEST: Use Surge Right Now

In your terminal:

```bash
surge --project . --domain stock-tracker-india.surge.sh
```

You'll get: `https://stock-tracker-india.surge.sh`

---

## 🎯 Don't Forget: Add Your API Key!

Once deployed, edit `script.js` line 2:
```javascript
const FINNHUB_API_KEY = 'your_key_here';
```

To get a key: https://finnhub.io/register (free)

Then redeploy or refresh!

---

Pick any option above and you'll have a permanent URL to share! 🎉
