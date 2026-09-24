# GameLedger

A premium, interactive web dashboard to manage, review, and show off your gaming achievements and game log records.

> **Live Deployment:** [https://thegameledger.vercel.app](https://thegameledger.vercel.app)  
> **GitHub Pages Mirror:** [https://vaidikpatel-018.github.io/GameLedger/](https://vaidikpatel-018.github.io/GameLedger/)  
> **Repository:** [https://github.com/vaidikpatel-018/GameLedger](https://github.com/vaidikpatel-018/GameLedger)  

This is a local-first single-page application built using HTML5, Vanilla CSS (Glassmorphism), and modern JavaScript, with Supabase cloud database synchronization and offline-first client caching.

---

## How to Run Locally

You can open the project immediately without installing any external runtime:
1. Open [`index.html`](file:///C:/Projects%20learning%20spectro/game-anime-vault/index.html) in Google Chrome, Brave, Edge, or any modern web browser.
2. The dashboard will initialize with 0ms startup latency.

---

## Features

- **Games Logging**: Document games played, completion status, review notes, release year, and star ratings.
- **Gaming News**: Integrated RSS feed for top PC and console gaming news.
- **Supabase Cloud Sync & Auth**: Secure cross-device account syncing with email or username login.
- **Backup & Restore**: Instant JSON backup (`gameledger_backup.json`) and restore utility with automated deduplication.
- **Dark Glassmorphic UI**: Ambient mouse-glow reactive backdrop and responsive layout for mobile and desktop.

---

## Deployment

### Option A: GitHub Pages (Recommended - 100% Free)
1. Go to your repository on [GitHub](https://github.com/).
2. Rename or create the repository as `gameledger`.
3. Go to repository **Settings** -> **Pages**.
4. Set Branch to `main` and Folder to `/ (root)`, then click **Save**.
5. Your website will be live at: `https://[your-username].github.io/gameledger/`

### Option B: Vercel
1. Import the repository directly on [Vercel](https://vercel.com/).
2. Vercel automatically deploys static projects without build configurations.

