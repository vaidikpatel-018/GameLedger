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

- **Game Status Tracking**: Track games across 3 clear statuses (*Playing*, *Completed*, and *Dropped*) with glowing color-coded badges.
- **Playtime Hours**: Log total hours played with quick filters and `Most Hours` sorting.
- **Favorites & Hall of Fame**: Star your all-time favorite masterpieces with golden ambient glows and dedicated Hall of Fame showcase.
- **Dual View Mode**: Switch seamlessly between visual **Poster Grid View** and high-density **Compact Ledger Table View**.
- **Interactive Analytics & Insights**: In-depth stats dashboard calculating completion rates, total hours, average star rating, and status distribution.
- **Social Showcase Card Export (PNG)**: One-click export of a high-res (1200x630) gamer trophy showcase card ready to share on Discord or Reddit.
- **Gaming News Feed**: Integrated live RSS feed for top PC and console gaming headlines.
- **Supabase Cloud Sync & Auth**: Secure cross-device account syncing with email or username login and local-first offline caching.
- **Power Gamer Shortcuts**: Keyboard shortcuts (`/` or `Ctrl+K` to search, `N` for new game, `I` for insights, `G` for grid, `L` for ledger list, `Esc` to close).
- **Dark Glassmorphic UI**: Ambient reactive mouse-glow backdrop and responsive layout for desktop and mobile.

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

