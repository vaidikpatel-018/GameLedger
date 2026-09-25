# Development Log & Progress Tracker

> **Project:** GameLedger  
> **Live Site:** `https://thegameledger.vercel.app`  
> **Repository:** `https://github.com/vaidikpatel-018/GameLedger.git` (`main` branch)  
> **Stack:** Vanilla HTML5, CSS3 (Glassmorphism), JavaScript (ES6+), Supabase Client SDK  

---

## Architecture & Core Components

### 1. File Structure
* **[`index.html`](file:///C:/Projects%20learning%20spectro/game-anime-vault/index.html)**:
  * SPA layout with navigation tabs (`Games`, `News`).
  * Modals: Add/Edit Game Modal, Item Detail Modal, Custom Delete Confirmation Modal (`#delete-confirm-modal`), Feedback Modal, Auth Screen Modal.
  * Profile Drawer (`#profile-drawer`) with avatar preview and username editing.
  * Search, Year Filter, and Sorting controls.
* **[`style.css`](file:///C:/Projects%20learning%20spectro/game-anime-vault/style.css)**:
  * Modern dark glassmorphic design system using CSS custom properties (`--bg-color`, `--card-bg`, `--accent-color`, etc.).
  * Dynamic mouse glow effect (`--mouse-x`, `--mouse-y`).
  * Responsive grids, drawer slide-out animations, and badge styles.
* **[`app.js`](file:///C:/Projects%20learning%20spectro/game-anime-vault/app.js)**:
  * **Database / Backend**: Supabase client (`jyjpobfgdwvbyltkvlmu.supabase.co`) with `vault_items` table.
  * **Authentication**: Supabase Auth (Sign Up, Log In, Log Out, Forgot/Reset Password).
  * **Demo Account Guard**: `demo@example.com` is protected from destructive edits unless developer console admin mode is active (`localStorage.setItem("demo_admin", "true")`).
  * **State**: In-memory `entertainmentList`, active tab filter, search queries, sort orders, and stats calculator.
  * **Image Processing**: Canvas-based center-crop to 100x100 JPEG compression for profile photos and item covers.
  * **Import / Export**: JSON backup and restore with deduplication.
  * **RSS News Feed**: Gaming news integration.
* **[`README.md`](file:///C:/Projects%20learning%20spectro/game-anime-vault/README.md)**: Public-facing user guide and deployment instructions (GitHub Pages / Vercel).

---

## Git Commit Milestones & History

| Commit | Summary |
| :--- | :--- |
| `7f5e3e3` | `fix`: resolve auth screen transition without requiring manual browser refresh |
| `0a91fc6` | `feat`: add password visibility toggle, username login support, and performance optimizations |
| `be2beb7` | `feat`: add forgot and reset password flow using Supabase |
| `6470526` | `style`: remove emojis, clean up AI slop, and apply mature color palettes |
| `fb730f4` | `style`: add `.gitattributes` to force linguist to detect `app.js` in repo statistics |
| `3963103` | `feat`: replace browser native `confirm()` delete popup with custom glassmorphic confirmation modal |
| `40cae77` | `security`: remove guessable URL admin query parameters and transition to secure developer console activation |

---

## Key Conventions & Rules to Remember

1. **Local-First Workflow**: Always implement, test, and verify changes locally before staging and pushing to git remote.
2. **Design Language**: Maintain the sleek glassmorphic dark theme without generic emojis or visual clutter.
3. **Safety Checks**: Keep the demo account protections intact for public viewers while retaining the `demo_admin` bypass for testing.
4. **Image Handling**: Ensure client-side image compression is applied to avoid bloating `localStorage` or Supabase storage limits.

---

## Ongoing & Upcoming Progress

- [x] Initial codebase inspection & verification
- [x] Create developer progress tracking guide (`PROGRESS.md`)
- [x] **Performance & Load Time Optimization**:
  - [x] Compressed `favicon.jpg` from 550KB to 4KB (99.2% reduction in size)
  - [x] Added `preconnect` and `dns-prefetch` resource hints in `index.html`
  - [x] Implemented instant 0ms screen resolution and local-first hydration (`initLocalCache`)
  - [x] Added stale-while-revalidate background synchronization for Supabase database & auth
  - [x] Added client-side caching for news feeds, item CRUD mutations, and profile state
- [x] **Authentication & UX Enhancements**:
  - [x] Added password visibility toggle button with eye open/close SVG icons in login, signup, and reset password views
  - [x] Enabled login using either email address or username with automatic mapping and local caching
  - [x] Implemented same-month chronological tie-breaker sorting so latest added games/anime are listed first
  - [x] Comprehensive button and interactive bug audit:
    - Fixed Restore Vault (`#import-btn`) file picker re-selection by resetting `fileInput.value`
    - Fixed Profile Avatar photo picker re-selection by resetting `e.target.value`
    - Added demo account protection to Detail Modal "Edit Details" button
    - Fixed null-safety when deleting/updating items if user session is local or pending
    - Fixed `auth-toggle-link` mode switching when cancelling password recovery
    - Expanded year filters and form select inputs to cover 2022-2027
  - [x] Pure SPA State Transitions & Auth Architecture:
    - Replaced hard `window.location.reload()` calls with `transitionToLoggedIn()` and `transitionToLoggedOut()`
    - Eliminated white/black flashes and race conditions between form submit and Supabase `onAuthStateChange`
    - Preserved external event support (session expiry, multi-tab logout, token refresh, password recovery)
    - Full DOM sanitation on logout (cards, stats, modals, header avatar)
    - Instant 0ms startup via local cache and seamless background cloud sync
- [x] **GameLedger Rebrand & Complete Anime Removal**:
  - Rebranded application completely across UI, headers, modals, auth screens, and docs to `GameLedger`
  - Completely purged the Anime section: removed Anime tab, Anime Tracker badges, and `defaultAnime` data
  - Sanitized database loading: automatically deletes legacy anime records from user accounts in Supabase
  - Sanitized local cache & backup import: filters out legacy anime records so they never render
- [x] **Custom Glassmorphic Dropdown & Select UI Upgrade**:
  - Replaced legacy OS-native dropdown select boxes across the app with custom-built dark glassmorphic dropdowns.
  - Upgraded Filter Section: Year filter (`#year-filter`) and Sorting filter (`#sort-filter`) now feature frosted glass triggers, animated chevrons, and smooth floating option menus.
  - Upgraded Add/Edit Game Modal: Rating (`#form-rating`), Month (`#form-month`), and Year (`#form-year`) inputs now match the modal aesthetic with glowing borders and amber star badges (`★★★★★`).
  - Implemented boundary-aware dropup detection, keyboard navigation, outside-click dismissal, and two-way synchronization with native `<select>` elements for seamless backend/Supabase persistence.
- [x] Local testing & code review

