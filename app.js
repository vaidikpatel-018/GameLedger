// Supabase Client Initialization
const SUPABASE_URL = "https://jyjpobfgdwvbyltkvlmu.supabase.co";
const SUPABASE_KEY = "sb_publishable_t9LzWsD_4gb2fxyvsImtmw_oGApwksI";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Admin bypass check for demo account (can be enabled via browser console: localStorage.setItem("demo_admin", "true"))
const isAdminMode = localStorage.getItem("demo_admin") === "true";

// Default Game data templates (poster-enriched defaults)
const defaultGames = [
    {
        "id": "g1",
        "title": "Minecraft",
        "category": "games",
        "rating": 5,
        "month": "January",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp",
        "notes": "Fascinating block building. Started playing via TLauncher."
    },
    {
        "id": "g3",
        "title": "Hitman (2016)",
        "category": "games",
        "rating": 5,
        "month": "June",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x77.webp",
        "notes": "Sleek assassination contracts in Paris, Sapienza, and Hokkaido."
    },
    {
        "id": "g4",
        "title": "Assassin's Creed IV: Black Flag",
        "category": "games",
        "rating": 5,
        "month": "June",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7e.webp",
        "notes": "Edward Kenway's journey. Sailing and singing sea shanties."
    },
    {
        "id": "g5",
        "title": "Assassin's Creed Rogue",
        "category": "games",
        "rating": 4,
        "month": "July",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7h.webp",
        "notes": "Playing as a Templar hunter Shae hunting down my former brothers."
    },
    {
        "id": "g6",
        "title": "Assassin's Creed Brotherhood",
        "category": "games",
        "rating": 5,
        "month": "July",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7k.webp",
        "notes": "Ezio Auditore leading the brotherhood in Rome."
    },
    {
        "id": "g7",
        "title": "Call of Duty: Modern Warfare 1",
        "category": "games",
        "rating": 5,
        "month": "August",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x1e.webp",
        "notes": "Soap and Captain Price in a legendary modern campaign."
    },
    {
        "id": "g8",
        "title": "Call of Duty: Modern Warfare 2 Remastered",
        "category": "games",
        "rating": 5,
        "month": "September",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co242t.webp",
        "notes": "Cliffhanger, Soap, and Ghost. Best remaster ever."
    },
    {
        "id": "g9",
        "title": "God of War",
        "category": "games",
        "rating": 5,
        "month": "November",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp",
        "notes": "An emotional journey of Kratos and Atreus in Norse mythology."
    },
    {
        "id": "g10",
        "title": "Detroit: Become Human",
        "category": "games",
        "rating": 5,
        "month": "December",
        "year": 2024,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wz4.webp",
        "notes": "Interactive narrative that is incredibly visual and emotional."
    },
    {
        "id": "g11",
        "title": "Call of Duty: Modern Warfare 3",
        "category": "games",
        "rating": 4,
        "month": "April",
        "year": 2025,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9f.webp",
        "notes": "Soap's final stand and the conclusion of the trilogy."
    },
    {
        "id": "g12",
        "title": "Tomb Raider: Definitive Edition",
        "category": "games",
        "rating": 4,
        "month": "May",
        "year": 2025,
        "image": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8?resize=1&w=480&h=270&quality=medium",
        "notes": "Lara Croft's origins. Surviving Yamatai island."
    },
    {
        "id": "g13",
        "title": "Grand Theft Auto III (GTA 3)",
        "category": "games",
        "rating": 4,
        "month": "June",
        "year": 2025,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2044.webp",
        "notes": "Classic 3D Liberty City open world."
    },
    {
        "id": "g14",
        "title": "Hitman 2",
        "category": "games",
        "rating": 5,
        "month": "June",
        "year": 2025,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x76.webp",
        "notes": "Amazing levels like Miami and Mumbai. Brilliant stealth sandbox."
    },
    {
        "id": "g15",
        "title": "Batman: Arkham Origins",
        "category": "games",
        "rating": 4,
        "month": "July",
        "year": 2025,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7b.webp",
        "notes": "Facing 8 assassins on Christmas Eve as a younger Batman."
    },
    {
        "id": "g16",
        "title": "Rise of the Tomb Raider",
        "category": "games",
        "rating": 4,
        "month": "July",
        "year": 2025,
        "image": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7c.webp",
        "notes": "Searching for the Divine Source in the snowy peaks of Siberia."
    },
    {
        "id": "g17",
        "title": "Batman: Arkham Asylum",
        "category": "games",
        "rating": 5,
        "month": "August",
        "year": 2025,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizhgV8yMlW1XdCLXqSxvkzNkrqCbt5_gxDQhYNqm6RSiNEjkwsIUgq1xW&s=10",
        "notes": "Infiltrating the asylum to stop Joker's takeover."
    },
    {
        "id": "g18",
        "title": "Batman: Arkham City",
        "category": "games",
        "rating": 5,
        "month": "September",
        "year": 2025,
        "image": "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/store/software/switch/70010000045911/bc90570730494cfa1ee0ab09820ac4669818b61afb6aaa26def9f4600e2706ea",
        "notes": "Navigating Gotham's mega-prison ruled by Hugo Strange."
    },
    {
        "id": "g19",
        "title": "Call of Duty: Black Ops 1",
        "category": "games",
        "rating": 5,
        "month": "October",
        "year": 2025,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-rooxG0V7IRXmI_Rytl-THWzjTOEVPKZVIcFSSLz-A&s=10",
        "notes": "Alex Mason, Vietnam, and the mystery of the numbers."
    },
    {
        "id": "g20",
        "title": "Grand Theft Auto IV (GTA 4)",
        "category": "games",
        "rating": 5,
        "month": "October",
        "year": 2025,
        "image": "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/gta4-cover-1.jpg?w=1200&h=628&fit=crop",
        "notes": "Niko Bellic's story. Great physics and dark atmosphere."
    },
    {
        "id": "g21",
        "title": "Need for Speed: Most wanted",
        "category": "games",
        "rating": 5,
        "month": "November",
        "year": 2025,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnDXQetNpmWdTfaySzumH5dWIle9-_Egoj4hxw6CCJg&s",
        "notes": "Classic arcade street racing."
    },
    {
        "id": "g22",
        "title": "Call of Duty: Black Ops II",
        "category": "games",
        "rating": 5,
        "month": "December",
        "year": 2025,
        "image": "https://wallofartstudio.com/cdn/shop/files/Sd350e2f9626c4f339e4f5cf1b2248a92V.webp?v=1725285031",
        "notes": "David Mason fighting Raul Menendez in the future."
    },
    {
        "id": "g24",
        "title": "Shadow of the Tomb Raider",
        "category": "games",
        "rating": 5,
        "month": "February",
        "year": 2026,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJ7RCbSzGXB3xf4eFN-gQ2I4iQd1IeRT_P-amxY-Q1Q&s=10",
        "notes": "Lara Croft preventing a Mayan apocalypse."
    },
    {
        "id": "g25",
        "title": "Red Dead Redemption 2",
        "category": "games",
        "rating": 5,
        "month": "March",
        "year": 2026,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-Iq6KzMy0Sb5Aky8yTPIo6Q5R-5gU6qwQ9hcO2oJvw&s",
        "notes": "Arthur Morgan and the outlaw gang. An emotional masterpiece."
    },
    {
        "id": "g26",
        "title": "Tekken 3",
        "category": "games",
        "rating": 5,
        "month": "July",
        "year": 2026,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefGMvs2SQ1erWc6aiv2iotGYGGwuUmp1AS9Iki6Ml0RXVqga4Tbj89JpY&s=10",
        "notes": "Played using RetroArch. Best PS1 fight game ever."
    },
    {
        "id": "g27",
        "title": "Watch Dogs 2",
        "category": "games",
        "rating": 5,
        "month": "July",
        "year": 2026,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTbORQFlLL70GRXNHdqhUSxlljU6S3AN_jhEMA91ExT5gRIZWnRpCLUs&s=10",
        "notes": "Marcus Holloway hacking the San Francisco Bay Area."
    }
];

// Universal High-Resolution Game Cover Art Map & Helper
const KNOWN_GAME_COVERS = {
    "minecraft": "https://images.igdb.com/igdb/image/upload/t_cover_big/co49x5.webp",
    "hitman (2016)": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x77.webp",
    "hitman": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x77.webp",
    "hitman 1": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x77.webp",
    "hitman 2": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x76.webp",
    "assassin's creed iv: black flag": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7e.webp",
    "assassin's creed 4: black flag": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7e.webp",
    "assassin's creed black flag": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7e.webp",
    "assassin's creed rogue": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7h.webp",
    "assassin's creed brotherhood": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7k.webp",
    "call of duty: modern warfare 1": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x1e.webp",
    "call of duty 4: modern warfare": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x1e.webp",
    "call of duty modern warfare": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x1e.webp",
    "call of duty: modern warfare 2 remastered": "https://images.igdb.com/igdb/image/upload/t_cover_big/co242t.webp",
    "call of duty modern warfare 2": "https://images.igdb.com/igdb/image/upload/t_cover_big/co242t.webp",
    "call of duty: modern warfare 2": "https://images.igdb.com/igdb/image/upload/t_cover_big/co242t.webp",
    "call of duty: modern warfare 3": "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9f.webp",
    "call of duty modern warfare 3": "https://images.igdb.com/igdb/image/upload/t_cover_big/co7f9f.webp",
    "god of war": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp",
    "detroit: become human": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wz4.webp",
    "tomb raider: definitive edition": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8?resize=1&w=480&h=270&quality=medium",
    "tomb raider": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TombRaiderGAMEOFTHEYEAREDITION_CrystalDynamics_S1_2560x1440-0c41fcc8db62992e8d098d304b2277f8?resize=1&w=480&h=270&quality=medium",
    "rise of the tomb raider": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7c.webp",
    "shadow of the tomb raider": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJ7RCbSzGXB3xf4eFN-gQ2I4iQd1IeRT_P-amxY-Q1Q&s=10",
    "grand theft auto iii (gta 3)": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2044.webp",
    "grand theft auto 3": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2044.webp",
    "gta 3": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2044.webp",
    "grand theft auto iv (gta 4)": "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/gta4-cover-1.jpg?w=1200&h=628&fit=crop",
    "grand theft auto 4": "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/gta4-cover-1.jpg?w=1200&h=628&fit=crop",
    "gta 4": "https://static0.polygonimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/gta4-cover-1.jpg?w=1200&h=628&fit=crop",
    "batman: arkham origins": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7b.webp",
    "batman arkham origins": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1x7b.webp",
    "batman: arkham asylum": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizhgV8yMlW1XdCLXqSxvkzNkrqCbt5_gxDQhYNqm6RSiNEjkwsIUgq1xW&s=10",
    "batman arkham asylum": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizhgV8yMlW1XdCLXqSxvkzNkrqCbt5_gxDQhYNqm6RSiNEjkwsIUgq1xW&s=10",
    "batman: arkham city": "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/store/software/switch/70010000045911/bc90570730494cfa1ee0ab09820ac4669818b61afb6aaa26def9f4600e2706ea",
    "batman arkham city": "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_400/store/software/switch/70010000045911/bc90570730494cfa1ee0ab09820ac4669818b61afb6aaa26def9f4600e2706ea",
    "call of duty: black ops 1": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-rooxG0V7IRXmI_Rytl-THWzjTOEVPKZVIcFSSLz-A&s=10",
    "call of duty black ops": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-rooxG0V7IRXmI_Rytl-THWzjTOEVPKZVIcFSSLz-A&s=10",
    "call of duty: black ops ii": "https://wallofartstudio.com/cdn/shop/files/Sd350e2f9626c4f339e4f5cf1b2248a92V.webp?v=1725285031",
    "call of duty black ops 2": "https://wallofartstudio.com/cdn/shop/files/Sd350e2f9626c4f339e4f5cf1b2248a92V.webp?v=1725285031",
    "need for speed: most wanted": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnDXQetNpmWdTfaySzumH5dWIle9-_Egoj4hxw6CCJg&s",
    "need for speed most wanted": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqnDXQetNpmWdTfaySzumH5dWIle9-_Egoj4hxw6CCJg&s",
    "red dead redemption 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR-Iq6KzMy0Sb5Aky8yTPIo6Q5R-5gU6qwQ9hcO2oJvw&s",
    "tekken 3": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefGMvs2SQ1erWc6aiv2iotGYGGwuUmp1AS9Iki6Ml0RXVqga4Tbj89JpY&s=10",
    "watch dogs 2": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTbORQFlLL70GRXNHdqhUSxlljU6S3AN_jhEMA91ExT5gRIZWnRpCLUs&s=10"
};

function getKnownGameCover(title) {
    if (!title || typeof title !== "string") return "";
    const clean = title.trim().toLowerCase();
    if (KNOWN_GAME_COVERS[clean]) return KNOWN_GAME_COVERS[clean];
    for (const [key, url] of Object.entries(KNOWN_GAME_COVERS)) {
        if (clean === key || clean.includes(key) || key.includes(clean)) {
            return url;
        }
    }
    return "";
}


// App State
let currentTab = "games";
let entertainmentList = [];
let currentUser = null;
let authMode = "login"; // "login" or "signup"
let newsList = [];
let isNewsLoading = false;
let itemToDeleteId = null;

// Local Cache Synchronization Utilities (Instant 0ms App Startup)
function saveUserToCache(user) {
    if (!user) return;
    try {
        localStorage.setItem("vault_cached_user", JSON.stringify(user));
    } catch (e) {
        console.warn("Could not cache user:", e);
    }
}

function clearUserCache() {
    try {
        localStorage.removeItem("vault_cached_user");
    } catch (e) {}
}

function saveItemsToCache(userId, items) {
    if (!userId || !Array.isArray(items)) return;
    try {
        const cleanItems = items.filter(item => item.category !== "anime");
        localStorage.setItem("vault_cached_items_" + userId, JSON.stringify(cleanItems));
    } catch (e) {
        console.warn("Could not cache items:", e);
    }
}

function getCachedItems(userId) {
    if (!userId) return [];
    try {
        const str = localStorage.getItem("vault_cached_items_" + userId);
        if (!str) return [];
        const parsed = JSON.parse(str);
        return Array.isArray(parsed) ? parsed.filter(item => item.category !== "anime") : [];
    } catch (e) {
        return [];
    }
}

// Username-to-Email Mapping for flexible login
function getUsernameMap() {
    const defaultMap = {
        "demo": "demo@example.com",
        "vaidik": "patelvaidik2232@gmail.com",
        "vaidikpatel": "patelvaidik2232@gmail.com",
        "vaidikpatel-018": "patelvaidik2232@gmail.com"
    };
    try {
        const stored = localStorage.getItem("vault_username_map");
        if (stored) {
            return Object.assign(defaultMap, JSON.parse(stored));
        }
    } catch (e) {}
    return defaultMap;
}

function registerUsernameMapping(username, email) {
    if (!username || !email) return;
    try {
        const map = getUsernameMap();
        map[username.toLowerCase().trim()] = email.toLowerCase().trim();
        localStorage.setItem("vault_username_map", JSON.stringify(map));
    } catch (e) {
        console.warn("Could not save username mapping:", e);
    }
}

// Centralized SPA State Transitions
function transitionToLoggedIn(user, options = {}) {
    if (!user) return;

    // Check if we are already in the logged-in state for this exact user
    const isAlreadyLoggedInThisUser = currentUser && currentUser.id === user.id &&
        document.documentElement.classList.contains("auth-logged-in") &&
        document.getElementById("auth-container")?.style.display === "none";

    currentUser = user;
    saveUserToCache(currentUser);

    // Switch View Visibility cleanly
    document.documentElement.classList.remove("auth-logged-out");
    document.documentElement.classList.add("auth-logged-in");

    const appContainer = document.getElementById("app-container");
    const authContainer = document.getElementById("auth-container");
    if (authContainer) authContainer.style.display = "none";
    if (appContainer) appContainer.style.display = "block";

    // Clean up auth form inputs & state
    const authForm = document.getElementById("auth-form");
    if (authForm) authForm.reset();
    const authError = document.getElementById("auth-error-msg");
    if (authError) authError.style.display = "none";
    const submitBtn = document.getElementById("auth-submit-btn");
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Log In";
    }

    // Update Header Avatar & Profile Drawer UI
    updateUserProfileUI(currentUser);

    // Apply Tab Theme
    applyThemeForTab(currentTab);

    // If already initialized in memory for this user, avoid wiping or redundant rendering
    if (isAlreadyLoggedInThisUser && entertainmentList.length > 0) {
        if (!options.skipCloudSync) {
            loadUserData();
        }
        return;
    }

    // Hydrate cached items for 0ms instant display
    const cachedItems = getCachedItems(currentUser.id);
    if (cachedItems && cachedItems.length > 0) {
        entertainmentList = cachedItems;
        render();
    } else {
        entertainmentList = [];
        render();
    }

    // Fetch latest user data from cloud in background without blocking UI
    if (!options.skipCloudSync) {
        loadUserData();
    }
}

function transitionToLoggedOut(options = {}) {
    // Close Profile Drawer if open
    const profileDrawer = document.getElementById("profile-drawer");
    if (profileDrawer) profileDrawer.classList.remove("open");

    // Close all open modals to prevent orphaned overlays
    const modals = document.querySelectorAll(".modal");
    modals.forEach(m => m.style.display = "none");

    // Clear In-Memory Protected State
    currentUser = null;
    entertainmentList = [];
    newsList = [];
    itemToDeleteId = null;

    // Clear Local Storage Auth Cache
    clearUserCache();

    // Sanitize Protected Content in DOM
    const grid = document.getElementById("grid-section");
    if (grid) grid.innerHTML = "";
    const statsSummary = document.getElementById("stats-summary");
    if (statsSummary) statsSummary.innerHTML = "";
    const headerAvatar = document.getElementById("header-avatar");
    const headerAvatarFallback = document.getElementById("header-avatar-fallback");
    if (headerAvatar) {
        headerAvatar.src = "";
        headerAvatar.style.display = "none";
    }
    if (headerAvatarFallback) {
        headerAvatarFallback.style.display = "flex";
        headerAvatarFallback.innerText = "U";
    }

    // Switch View Visibility cleanly
    document.documentElement.classList.remove("auth-logged-in");
    document.documentElement.classList.add("auth-logged-out");

    const appContainer = document.getElementById("app-container");
    const authContainer = document.getElementById("auth-container");
    if (appContainer) appContainer.style.display = "none";
    if (authContainer) authContainer.style.display = "flex";

    // Reset Auth Form
    const authError = document.getElementById("auth-error-msg");
    if (authError) authError.style.display = "none";
    const authForm = document.getElementById("auth-form");
    if (authForm) authForm.reset();
    const submitBtn = document.getElementById("auth-submit-btn");
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = "Log In";
    }
    setAuthMode("login");
}

// Backward-compatibility aliases
function showAuthScreen() {
    transitionToLoggedOut();
}

function showAppScreen(user) {
    transitionToLoggedIn(user);
}

function setAuthMode(mode) {
    authMode = mode;
    const subtitle = document.getElementById("auth-subtitle");
    const submitBtn = document.getElementById("auth-submit-btn");
    const toggleLink = document.getElementById("auth-toggle-link");
    const toggleText = toggleLink ? toggleLink.parentNode : document.querySelector(".auth-toggle-text");
    const errorDiv = document.getElementById("auth-error-msg");
    const usernameGroup = document.getElementById("username-group");
    const authUsernameInput = document.getElementById("auth-username");
    const emailGroup = document.getElementById("email-group");
    const emailLabel = document.getElementById("email-label");
    const authEmailInput = document.getElementById("auth-email");
    const passwordGroup = document.getElementById("password-group");
    const authPasswordInput = document.getElementById("auth-password");
    const passwordLabel = document.getElementById("password-label");
    const forgotLink = document.getElementById("auth-forgot-link");
    const demoBadge = document.querySelector(".demo-badge");
    const featuresPreview = document.querySelector(".auth-features-preview");
    const eyeIconShow = document.getElementById("eye-icon-show");
    const eyeIconHide = document.getElementById("eye-icon-hide");
    
    errorDiv.style.display = "none";

    // Reset password visibility to hidden on mode change
    if (authPasswordInput) {
        authPasswordInput.setAttribute("type", "password");
    }
    if (eyeIconShow) eyeIconShow.style.display = "block";
    if (eyeIconHide) eyeIconHide.style.display = "none";
    
    if (authMode === "login") {
        subtitle.innerText = "Log in to manage your private gaming logs & reviews";
        submitBtn.innerText = "Log In";
        usernameGroup.style.display = "none";
        authUsernameInput.removeAttribute("required");
        
        emailGroup.style.display = "block";
        if (emailLabel) emailLabel.innerText = "Email or Username";
        authEmailInput.setAttribute("type", "text");
        authEmailInput.setAttribute("required", "true");
        authEmailInput.placeholder = "Enter email address or username";
        
        passwordGroup.style.display = "block";
        authPasswordInput.setAttribute("required", "true");
        authPasswordInput.placeholder = "••••••••";
        if (passwordLabel) passwordLabel.innerText = "Password";
        if (forgotLink) forgotLink.style.display = "inline";
        
        if (demoBadge) demoBadge.style.display = "block";
        if (featuresPreview) featuresPreview.style.display = "block";
        
        toggleText.innerHTML = `Don't have an account? <a href="#" id="auth-toggle-link" style="color: var(--accent-color); text-decoration: none; font-weight: 600;">Sign Up</a>`;
    } else if (authMode === "signup") {
        subtitle.innerText = "Create a new account to sync your lists across devices";
        submitBtn.innerText = "Create Account";
        usernameGroup.style.display = "block";
        authUsernameInput.setAttribute("required", "true");
        
        emailGroup.style.display = "block";
        if (emailLabel) emailLabel.innerText = "Email Address";
        authEmailInput.setAttribute("type", "email");
        authEmailInput.setAttribute("required", "true");
        authEmailInput.placeholder = "name@example.com";
        
        passwordGroup.style.display = "block";
        authPasswordInput.setAttribute("required", "true");
        authPasswordInput.placeholder = "••••••••";
        if (passwordLabel) passwordLabel.innerText = "Password";
        if (forgotLink) forgotLink.style.display = "none";
        
        if (demoBadge) demoBadge.style.display = "block";
        if (featuresPreview) featuresPreview.style.display = "block";
        
        toggleText.innerHTML = `Already have an account? <a href="#" id="auth-toggle-link" style="color: var(--accent-color); text-decoration: none; font-weight: 600;">Log In</a>`;
    } else if (authMode === "forgot_password") {
        subtitle.innerText = "Enter your email address to receive a password reset link";
        submitBtn.innerText = "Send Reset Link";
        usernameGroup.style.display = "none";
        authUsernameInput.removeAttribute("required");
        
        emailGroup.style.display = "block";
        if (emailLabel) emailLabel.innerText = "Email Address";
        authEmailInput.setAttribute("type", "email");
        authEmailInput.setAttribute("required", "true");
        authEmailInput.placeholder = "name@example.com";
        
        passwordGroup.style.display = "none";
        authPasswordInput.removeAttribute("required");
        
        if (demoBadge) demoBadge.style.display = "none";
        if (featuresPreview) featuresPreview.style.display = "none";
        
        toggleText.innerHTML = `Back to <a href="#" id="auth-toggle-link" style="color: var(--accent-color); text-decoration: none; font-weight: 600;">Log In</a>`;
    } else if (authMode === "reset_password") {
        subtitle.innerText = "Enter a new secure password for your account";
        submitBtn.innerText = "Update Password";
        usernameGroup.style.display = "none";
        authUsernameInput.removeAttribute("required");
        
        emailGroup.style.display = "none";
        authEmailInput.removeAttribute("required");
        
        passwordGroup.style.display = "block";
        authPasswordInput.setAttribute("required", "true");
        authPasswordInput.placeholder = "Enter new password";
        if (passwordLabel) passwordLabel.innerText = "New Password";
        if (forgotLink) forgotLink.style.display = "none";
        
        if (demoBadge) demoBadge.style.display = "none";
        if (featuresPreview) featuresPreview.style.display = "none";
        
        toggleText.innerHTML = `Cancel and <a href="#" id="auth-toggle-link" style="color: var(--accent-color); text-decoration: none; font-weight: 600;">Log In</a>`;
    }
    
    // Re-attach listener since we modified innerHTML
    const newToggleLink = document.getElementById("auth-toggle-link");
    if (newToggleLink) {
        newToggleLink.addEventListener("click", async (e) => {
            e.preventDefault();
            if (authMode === "reset_password") {
                try { await supabaseClient.auth.signOut(); } catch(err) {}
                setAuthMode("login");
            } else if (authMode === "forgot_password") {
                setAuthMode("login");
            } else {
                setAuthMode(authMode === "login" ? "signup" : "login");
            }
        });
    }
}

// Password Visibility Toggle Listener
const togglePasswordBtn = document.getElementById("toggle-password-btn");
if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const pwdInput = document.getElementById("auth-password");
        const eyeShow = document.getElementById("eye-icon-show");
        const eyeHide = document.getElementById("eye-icon-hide");
        if (!pwdInput) return;

        const isCurrentlyPassword = pwdInput.getAttribute("type") === "password";
        if (isCurrentlyPassword) {
            pwdInput.setAttribute("type", "text");
            if (eyeShow) eyeShow.style.display = "none";
            if (eyeHide) eyeHide.style.display = "block";
            togglePasswordBtn.setAttribute("title", "Hide Password");
        } else {
            pwdInput.setAttribute("type", "password");
            if (eyeShow) eyeShow.style.display = "block";
            if (eyeHide) eyeHide.style.display = "none";
            togglePasswordBtn.setAttribute("title", "Show Password");
        }
    });
}

// Attach initial listeners
const toggleLink = document.getElementById("auth-toggle-link");
if (toggleLink) {
    toggleLink.addEventListener("click", async (e) => {
        e.preventDefault();
        if (authMode === "reset_password") {
            try { await supabaseClient.auth.signOut(); } catch(err) {}
            setAuthMode("login");
        } else if (authMode === "forgot_password") {
            setAuthMode("login");
        } else {
            setAuthMode(authMode === "login" ? "signup" : "login");
        }
    });
}

const forgotLink = document.getElementById("auth-forgot-link");
if (forgotLink) {
    forgotLink.addEventListener("click", (e) => {
        e.preventDefault();
        setAuthMode("forgot_password");
    });
}

// Auth Form Submission (Handles Login, Sign Up, Forgot Password, and Reset Password)
document.getElementById("auth-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const rawIdentifier = document.getElementById("auth-email").value.trim();
    const password = document.getElementById("auth-password").value;
    const errorDiv = document.getElementById("auth-error-msg");
    const submitBtn = document.getElementById("auth-submit-btn");
    
    errorDiv.style.display = "none";
    submitBtn.disabled = true;
    
    if (authMode === "login") {
        submitBtn.innerText = "Logging in...";
        let loginEmail = rawIdentifier;

        // If user entered a username instead of an email (no '@')
        if (!rawIdentifier.includes("@")) {
            const usernameMap = getUsernameMap();
            const lowerUser = rawIdentifier.toLowerCase();
            if (usernameMap[lowerUser]) {
                loginEmail = usernameMap[lowerUser];
            } else {
                errorDiv.innerText = "Username not recognized on this device. Please enter your email address to log in.";
                errorDiv.style.display = "block";
                submitBtn.innerText = "Log In";
                submitBtn.disabled = false;
                return;
            }
        }

        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: loginEmail,
            password: password
        });

        if (error) {
            errorDiv.innerText = error.message;
            errorDiv.style.display = "block";
            submitBtn.innerText = "Log In";
            submitBtn.disabled = false;
        } else {
            submitBtn.innerText = "Log In";
            submitBtn.disabled = false;
            if (data && data.user) {
                const metaUsername = data.user.user_metadata?.username;
                if (metaUsername) {
                    registerUsernameMapping(metaUsername, data.user.email);
                }
                if (!rawIdentifier.includes("@")) {
                    registerUsernameMapping(rawIdentifier, data.user.email);
                }
                
                transitionToLoggedIn(data.user);
                showToast("Welcome back!");
            }
        }
    } else if (authMode === "signup") {
        submitBtn.innerText = "Creating account...";
        const username = document.getElementById("auth-username").value.trim();
        const { data, error } = await supabaseClient.auth.signUp({
            email: rawIdentifier,
            password: password,
            options: {
                data: {
                    username: username,
                    avatar_url: ""
                }
            }
        });

        if (error) {
            errorDiv.innerText = error.message;
            errorDiv.style.display = "block";
            submitBtn.innerText = "Create Account";
            submitBtn.disabled = false;
        } else {
            submitBtn.innerText = "Create Account";
            submitBtn.disabled = false;
            registerUsernameMapping(username, rawIdentifier);
            if (data && data.user) {
                transitionToLoggedIn(data.user);
                showToast("Account created successfully! You are now logged in.");
            } else {
                showToast("Account created successfully! Please check your email or log in.");
                setAuthMode("login");
            }
        }
    } else if (authMode === "forgot_password") {
        submitBtn.innerText = "Sending link...";
        const redirectUrl = (window.location.protocol.startsWith("http") && window.location.origin && window.location.origin !== "null")
            ? window.location.href.split("#")[0]
            : undefined;
        const { data, error } = await supabaseClient.auth.resetPasswordForEmail(rawIdentifier, redirectUrl ? { redirectTo: redirectUrl } : undefined);

        if (error) {
            errorDiv.innerText = error.message;
            errorDiv.style.display = "block";
            submitBtn.innerText = "Send Reset Link";
            submitBtn.disabled = false;
        } else {
            showToast("A password reset link has been sent to your email address!");
            setAuthMode("login");
            submitBtn.disabled = false;
        }
    } else if (authMode === "reset_password") {
        submitBtn.innerText = "Updating password...";
        const { data, error } = await supabaseClient.auth.updateUser({
            password: password
        });

        if (error) {
            errorDiv.innerText = error.message;
            errorDiv.style.display = "block";
            submitBtn.innerText = "Update Password";
            submitBtn.disabled = false;
        } else {
            submitBtn.innerText = "Update Password";
            submitBtn.disabled = false;
            setAuthMode("login");
            const { data: { user } } = await supabaseClient.auth.getUser();
            if (user) {
                transitionToLoggedIn(user);
                showToast("Your password has been updated successfully!");
            } else {
                transitionToLoggedOut();
            }
        }
    }
});

document.getElementById("profile-logout-btn").addEventListener("click", async () => {
    const profileDrawer = document.getElementById("profile-drawer");
    if (profileDrawer) profileDrawer.classList.remove("open");
    
    // Clean SPA transition to logged-out state
    transitionToLoggedOut();
    showToast("Logged out successfully.");

    try {
        await supabaseClient.auth.signOut();
    } catch (e) {
        console.warn("Sign out error:", e);
    }
});

// Instant Local-First Hydration (0ms Startup)
async function initLocalCache() {
    // 1. Check if user is opening a shared public showcase link (?share=...)
    const isShared = await checkAndHydrateShareView();
    if (isShared) return;

    try {
        const cachedUserStr = localStorage.getItem("vault_cached_user");
        if (cachedUserStr) {
            currentUser = JSON.parse(cachedUserStr);
            transitionToLoggedIn(currentUser, { isStartup: true });
        } else {
            transitionToLoggedOut({ isStartup: true });
        }
    } catch (e) {
        console.error("Local cache hydration error:", e);
        transitionToLoggedOut({ isStartup: true });
    }
}
initLocalCache();

// Listen for Auth Changes (Background Session Sync)
supabaseClient.auth.onAuthStateChange(async (event, session) => {
    console.log("Auth State Changed Event:", event, session ? session.user.id : null);

    if (event === "PASSWORD_RECOVERY") {
        currentUser = session ? session.user : null;
        document.documentElement.classList.remove("auth-logged-in");
        document.documentElement.classList.add("auth-logged-out");
        const appContainer = document.getElementById("app-container");
        const authContainer = document.getElementById("auth-container");
        if (appContainer) appContainer.style.display = "none";
        if (authContainer) authContainer.style.display = "flex";
        setAuthMode("reset_password");
        return;
    }

    if (event === "SIGNED_OUT") {
        // Legitimate sign out: triggered by user logout, session expiry, or cross-tab sign out
        if (currentUser || localStorage.getItem("vault_cached_user")) {
            transitionToLoggedOut();
        }
        return;
    }

    if (session && session.user) {
        if (authMode === "reset_password") {
            currentUser = session.user;
            return;
        }

        // If user is already active and logged in as this exact user:
        if (currentUser && currentUser.id === session.user.id) {
            currentUser = session.user;
            saveUserToCache(currentUser);
            // On startup or token refresh, sync user items with cloud
            if (event === "INITIAL_SESSION" || event === "TOKEN_REFRESHED") {
                loadUserData();
            }
            return;
        }

        // Fresh login, user switch, or session restore from external tab
        transitionToLoggedIn(session.user);
    } else {
        // No session: if user is in memory or cache, session is no longer valid
        if (currentUser || localStorage.getItem("vault_cached_user")) {
            transitionToLoggedOut();
        }
    }
});

// Database Sync: Load User Items (Auto-populate defaults ONLY for allowed emails if empty)
async function loadUserData() {
    if (!currentUser) return;

    const { data, error } = await supabaseClient
        .from("vault_items")
        .select("*");

    if (error) {
        console.error("Error loading user data:", error);
        return;
    }

    // Automatically purge any remaining anime items from the cloud database
    const hasAnimeInCloud = data && data.some(item => item.category === "anime");
    if (hasAnimeInCloud) {
        try {
            await supabaseClient
                .from("vault_items")
                .delete()
                .eq("category", "anime")
                .eq("user_id", currentUser.id);
        } catch (delErr) {
            console.warn("Could not purge anime items from cloud:", delErr);
        }
    }

    const cleanData = (data || []).filter(item => item.category !== "anime");

    if (cleanData.length > 0) {
        entertainmentList = cleanData;
        saveItemsToCache(currentUser.id, entertainmentList);
        render();
    } else {
        const allowedEmails = [
            "demo@example.com", 
            "patelvaidik2232@gmail.com", 
            "patelvaidik2232@gmail"
        ];
        const userEmail = currentUser && currentUser.email ? currentUser.email.toLowerCase() : "";
        const shouldPopulate = allowedEmails.includes(userEmail);

        if (shouldPopulate) {
            console.log("Empty database for authorized account, initializing defaults...");
            const defaults = defaultGames.map(item => ({
                id: item.id,
                user_id: currentUser.id,
                title: item.title,
                category: "games",
                rating: item.rating,
                month: item.month,
                year: item.year,
                image: item.image || "",
                notes: item.notes || ""
            }));

            const { error: insertError } = await supabaseClient
                .from("vault_items")
                .insert(defaults);

            if (insertError) {
                console.error("Error inserting defaults:", insertError);
            } else {
                entertainmentList = defaults;
                saveItemsToCache(currentUser.id, entertainmentList);
                render();
            }
        } else {
            console.log("Empty database for new account, starting from scratch.");
            entertainmentList = [];
            saveItemsToCache(currentUser.id, entertainmentList);
            render();
        }
    }
}

// Generate Cover Color Gradients based on string hashes
function getGlowStyle(title) {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 60) % 360;
    return `background: linear-gradient(135deg, hsl(${h1}, 70%, 15%) 0%, hsl(${h2}, 80%, 25%) 100%);`;
}

// Render rating stars as SVG icons (completely emoji-free)
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<svg viewBox="0 0 24 24" class="star-icon filled" style="width: 14px; height: 14px; fill: var(--accent-color); stroke: var(--accent-color); display: inline-block; margin-right: 2px;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        } else {
            html += `<svg viewBox="0 0 24 24" class="star-icon" style="width: 14px; height: 14px; fill: none; stroke: var(--text-secondary); stroke-width: 1.5; display: inline-block; margin-right: 2px;"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>`;
        }
    }
    return html;
}

function applyThemeForTab(tab) {
    const root = document.documentElement;
    if (tab === "news") {
        root.style.setProperty('--bg-color', '#08090a');
        root.style.setProperty('--card-bg', 'rgba(24, 27, 30, 0.65)');
        root.style.setProperty('--border-color', 'rgba(107, 130, 150, 0.15)');
        root.style.setProperty('--accent-color', '#6b8296');
        root.style.setProperty('--accent-glow', 'rgba(107, 130, 150, 0.15)');
        root.style.setProperty('--btn-text-color', '#ffffff');
        root.style.setProperty('--text-secondary', '#9ca3af');
        root.style.setProperty('--glow-color', 'rgba(107, 130, 150, 0.12)');
        document.body.style.background = 'radial-gradient(ellipse at 50% -20%, #11161b 0%, #07080a 80%)';
        document.body.style.backgroundAttachment = 'fixed';
    } else {
        // Default: games tab theme
        root.style.setProperty('--bg-color', '#090809');
        root.style.setProperty('--card-bg', 'rgba(22, 20, 21, 0.65)');
        root.style.setProperty('--border-color', 'rgba(191, 59, 87, 0.15)');
        root.style.setProperty('--accent-color', '#bf3b57');
        root.style.setProperty('--accent-glow', 'rgba(191, 59, 87, 0.15)');
        root.style.setProperty('--btn-text-color', '#ffffff');
        root.style.setProperty('--text-secondary', '#9ca3af');
        root.style.setProperty('--glow-color', 'rgba(191, 59, 87, 0.12)');
        document.body.style.background = 'radial-gradient(ellipse at 50% -20%, #1f0f13 0%, #090809 80%)';
        document.body.style.backgroundAttachment = 'fixed';
    }
}

async function loadNewsData() {
    if (newsList.length > 0) {
        render();
        return;
    }
    
    // Check local storage cache for instant news display
    const cachedNews = localStorage.getItem("vault_cached_news");
    if (cachedNews) {
        try {
            newsList = JSON.parse(cachedNews);
            render();
        } catch (e) {}
    } else {
        isNewsLoading = true;
        render();
    }
    
    try {
        const polygonUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://www.polygon.com/rss/gaming/index.xml";
        const pcGamerUrl = "https://api.rss2json.com/v1/api.json?rss_url=https://www.pcgamer.com/rss/";
        
        const [polygonRes, pcGamerRes] = await Promise.all([
            fetch(polygonUrl).then(r => r.json()),
            fetch(pcGamerUrl).then(r => r.json())
        ]);
        
        let mergedItems = [];
        if (polygonRes.status === "ok" && polygonRes.items) {
            mergedItems.push(...polygonRes.items);
        }
        if (pcGamerRes.status === "ok" && pcGamerRes.items) {
            mergedItems.push(...pcGamerRes.items);
        }
        
        // Sort items by pubDate descending
        mergedItems.sort((a, b) => {
            const dateA = new Date(a.pubDate.replace(/-/g, "/"));
            const dateB = new Date(b.pubDate.replace(/-/g, "/"));
            return dateB - dateA;
        });
        
        if (mergedItems.length > 0) {
            newsList = mergedItems;
            try {
                localStorage.setItem("vault_cached_news", JSON.stringify(newsList));
            } catch (e) {}
        }
        
    } catch (err) {
        console.error("Error fetching news feeds:", err);
    } finally {
        isNewsLoading = false;
        render();
    }
}

// Helper to extract numeric timestamp from item id
function extractTimestampFromId(id) {
    if (!id) return 0;
    const str = String(id);
    const num = Number(str);
    if (!isNaN(num) && num > 1000000000) return num;
    const impMatch = str.match(/^imp_(\d{10,})/);
    if (impMatch) {
        const impNum = Number(impMatch[1]);
        if (!isNaN(impNum)) return impNum;
    }
    return 0;
}

// Compare two items by when they were added/created (latest added first)
function compareItemsByCreation(a, b) {
    // 1. Try created_at timestamp
    if (a.created_at && b.created_at) {
        const tA = new Date(a.created_at).getTime();
        const tB = new Date(b.created_at).getTime();
        if (!isNaN(tA) && !isNaN(tB) && tB !== tA) {
            return tB - tA;
        }
    } else if (a.created_at && !b.created_at) {
        return -1;
    } else if (!a.created_at && b.created_at) {
        return 1;
    }

    // 2. Try timestamp extracted from id
    const timeIdA = extractTimestampFromId(a.id);
    const timeIdB = extractTimestampFromId(b.id);
    if (timeIdA && timeIdB) {
        if (timeIdB !== timeIdA) return timeIdB - timeIdA;
    } else if (timeIdA && !timeIdB) {
        return -1;
    } else if (!timeIdA && timeIdB) {
        return 1;
    }

    // 3. Try default item IDs like g1, g2... a1, a2...
    const matchA = String(a.id || "").match(/^([ga])(\d+)$/);
    const matchB = String(b.id || "").match(/^([ga])(\d+)$/);
    if (matchA && matchB && matchA[1] === matchB[1]) {
        const idNumA = Number(matchA[2]);
        const idNumB = Number(matchB[2]);
        if (idNumB !== idNumA) return idNumB - idNumA;
    }

    // 4. Fallback to position in entertainmentList
    const idxA = entertainmentList.indexOf(a);
    const idxB = entertainmentList.indexOf(b);
    if (idxA !== -1 && idxB !== -1 && idxA !== idxB) {
        return idxA - idxB;
    }

    return 0;
}

// Render Cards

// ==========================================================================
// ADVANCED GAME METADATA SYSTEM (v30)
// ==========================================================================

let currentViewMode = localStorage.getItem("vault_view_mode") || "grid";

// Extract metadata from item notes (<!--GL_META:{...}-->)
function parseItemMetadata(item) {
    let status = "completed";
    let hours = 0;
    let favorite = false;
    let rawNotes = item.notes || "";
    let cleanNotes = rawNotes;

    const metaMatch = rawNotes.match(/<!--GL_META:(.*?)-->/);
    if (metaMatch) {
        try {
            const meta = JSON.parse(metaMatch[1]);
            if (meta.status) {
                const s = String(meta.status).toLowerCase();
                if (s === "playing" || s === "dropped" || s === "completed") {
                    status = s;
                } else {
                    status = "completed";
                }
            }
            if (meta.hours !== undefined) hours = parseInt(meta.hours, 10) || 0;
            if (meta.fav !== undefined) favorite = !!meta.fav;
            cleanNotes = rawNotes.replace(/<!--GL_META:(.*?)-->/, "").trim();
        } catch (e) {
            console.warn("Error parsing metadata for item:", item.title, e);
        }
    }

    // Ensure valid cover photo, replacing base64 or empty with known cover lookup
    let resolvedImage = (item.image && item.image.startsWith("http")) ? item.image : "";
    if (!resolvedImage) {
        resolvedImage = getKnownGameCover(item.title) || (item.image || "");
    }

    return {
        ...item,
        image: resolvedImage,
        status,
        hours,
        favorite,
        cleanNotes
    };
}

// Serialize clean notes and metadata for cloud/cache storage
function serializeNotesWithMetadata(cleanNotes, status, hours, favorite) {
    const metaObj = {
        status: status || "completed",
        hours: parseInt(hours, 10) || 0,
        fav: !!favorite
    };
    const metaStr = `<!--GL_META:${JSON.stringify(metaObj)}-->`;
    const stripped = (cleanNotes || "").replace(/<!--GL_META:(.*?)-->/, "").trim();
    return stripped ? `${stripped}\n\n${metaStr}` : metaStr;
}

// Helper to format status text and classes (Completed, Playing, Dropped)
function getStatusMeta(status) {
    const s = String(status || "completed").toLowerCase();
    switch (s) {
        case "playing":
            return { label: "● Playing", cls: "status-playing" };
        case "dropped":
            return { label: "✕ Dropped", cls: "status-dropped" };
        case "completed":
        default:
            return { label: "✓ Completed", cls: "status-completed" };
    }
}

function render() {
    const grid = document.getElementById("grid-section");
    const searchInput = document.getElementById("search-input");
    const rawSearch = searchInput ? searchInput.value : "";
    const isSearching = rawSearch.trim().length > 0;
    const searchQuery = rawSearch.trim().toLowerCase();
    
    const yearFilterElem = document.getElementById("year-filter");
    const yearFilter = yearFilterElem ? yearFilterElem.value : "all";
    
    const sortFilterElem = document.getElementById("sort-filter");
    const sortFilter = sortFilterElem ? sortFilterElem.value : "newest";

    const statusFilterElem = document.getElementById("status-filter");
    const statusFilter = statusFilterElem ? statusFilterElem.value : "all";

    // Toggle search clear button
    const clearBtn = document.getElementById("search-clear-btn");
    if (clearBtn) {
        clearBtn.style.display = isSearching ? "block" : "none";
    }

    grid.innerHTML = "";

    if (currentTab === "news") {
        document.getElementById("add-btn").style.display = "none";
        document.querySelector(".controls-section").style.display = "none";
        const statsSummary = document.getElementById("stats-summary");
        if (statsSummary) statsSummary.style.display = "none";
        
        if (isNewsLoading) {
            grid.innerHTML = `
                <div class="news-loading-container" style="grid-column: 1 / -1; text-align: center; padding: 100px 0;">
                    <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid rgba(255, 255, 255, 0.1); border-top-color: var(--accent-color); border-radius: 50%; animation: spin 1s infinite linear;"></div>
                    <p style="margin-top: 20px; color: var(--text-secondary); font-family: 'Space Grotesk', sans-serif;">Loading gaming feed...</p>
                </div>
            `;
            return;
        }
        
        if (newsList.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 50px 0; color: var(--text-secondary);">
                    <h3 style="margin-bottom: 10px;">Failed to load news feed</h3>
                    <p style="margin-bottom: 20px;">Please check your internet connection and try again.</p>
                    <button id="retry-news-btn" class="btn btn-primary">Retry Connection</button>
                </div>
            `;
            const retryBtn = document.getElementById("retry-news-btn");
            if (retryBtn) retryBtn.addEventListener("click", loadNewsData);
            return;
        }
        
        newsList.forEach(item => {
            const card = document.createElement("div");
            card.className = "card news-card";
            
            const image = (item.enclosure && item.enclosure.link) || item.thumbnail || "";
            let imageHtml = "";
            if (image) {
                imageHtml = `<img src="${image}" class="card-img" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
            }
            
            const fallbackGradient = "background: linear-gradient(135deg, #111111 0%, #333333 100%);";
            
            card.innerHTML = `
                <div class="card-img-container" style="${fallbackGradient}">
                    ${imageHtml}
                    <div class="card-fallback" style="display: ${image ? 'none' : 'flex'}">
                        NEWS
                    </div>
                </div>
                <div class="card-content">
                    <div style="font-size: 11px; color: var(--text-secondary); margin-bottom: 6px; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">
                        By ${item.author || "Polygon"}
                    </div>
                    <h3 class="card-title" style="-webkit-line-clamp: 2; height: 48px; margin-bottom: 8px;">${item.title}</h3>
                    <p class="card-notes" style="-webkit-line-clamp: 3; height: 54px; margin-bottom: 15px;">${item.description || 'No snippet preview available.'}</p>
                    <div class="card-actions" style="margin-top: auto;">
                        <a href="${item.link}" target="_blank" class="btn btn-primary btn-block" style="text-decoration: none; font-size: 13px; padding: 8px 12px; box-shadow: none;">Read Article ↗</a>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        
        return;
    }

    // Games Tab Controls Active
    document.getElementById("add-btn").style.display = "inline-flex";
    document.querySelector(".controls-section").style.display = "flex";

    // Parse metadata for all games
    const parsedGames = entertainmentList
        .filter(item => item.category === currentTab)
        .map(parseItemMetadata);

    // Filter items
    let filtered = parsedGames.filter(item => {
        const matchesSearch = isSearching ? item.title.toLowerCase().includes(searchQuery) : true;
        const matchesYear = yearFilter === "all" ? true : item.year.toString() === yearFilter;
        
        let matchesStatus = true;
        if (statusFilter === "favorites") {
            matchesStatus = item.favorite === true;
        } else if (statusFilter !== "all") {
            matchesStatus = item.status === statusFilter;
        }

        return matchesSearch && matchesYear && matchesStatus;
    });

    // Compute Overall Stats for Summary Bar
    const totalGames = parsedGames.length;
    const totalHours = parsedGames.reduce((acc, curr) => acc + (curr.hours || 0), 0);
    const avgRating = totalGames > 0 
        ? (parsedGames.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalGames).toFixed(1)
        : "0.0";

    const statsSummary = document.getElementById("stats-summary");
    if (statsSummary) {
        statsSummary.style.display = "flex";
        const elGames = document.getElementById("stat-total-games");
        const elHours = document.getElementById("stat-total-hours");
        const elRating = document.getElementById("stat-avg-rating");
        if (elGames) elGames.innerText = totalGames;
        if (elHours) elHours.innerText = totalHours > 0 ? `${totalHours}h` : "0h";
        if (elRating) elRating.innerText = `${avgRating} ★`;
    }

    // Sorting
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    filtered.sort((a, b) => {
        if (sortFilter === "alpha") {
            const cmp = a.title.localeCompare(b.title);
            if (cmp !== 0) return cmp;
            return compareItemsByCreation(a, b);
        }

        if (sortFilter === "rating") {
            if (b.rating !== a.rating) return b.rating - a.rating;
            return compareItemsByCreation(a, b);
        }

        if (sortFilter === "hours") {
            const hA = a.hours || 0;
            const hB = b.hours || 0;
            if (hB !== hA) return hB - hA;
            return compareItemsByCreation(a, b);
        }
        
        const dateWeightA = parseInt(a.year, 10) * 12 + months.indexOf(a.month);
        const dateWeightB = parseInt(b.year, 10) * 12 + months.indexOf(b.month);

        if (sortFilter === "newest") {
            if (dateWeightB !== dateWeightA) {
                return dateWeightB - dateWeightA;
            }
            return compareItemsByCreation(a, b);
        } else {
            if (dateWeightA !== dateWeightB) {
                return dateWeightA - dateWeightB;
            }
            return -compareItemsByCreation(a, b);
        }
    });

    // Check empty state
    if (filtered.length === 0) {
        const placeholder = document.createElement("div");
        placeholder.className = "empty-vault-state";
        
        if (isSearching) {
            placeholder.innerHTML = `
                <div class="empty-state-icon" style="margin-bottom: 15px;">
                    <svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--text-secondary)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5; display: inline-block;">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <h3>Not found or spelling mistake</h3>
                <p style="max-width: 380px;">No matching game found. It may not be added to your ledger or there might be a spelling mistake.</p>
                <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="document.getElementById('search-input').value = ''; render();">Clear Search</button>
                    <button class="btn btn-primary" onclick="document.getElementById('add-btn').click()">+ Add Game</button>
                </div>
            `;
        } else if (totalGames === 0) {
            placeholder.innerHTML = `
                <div class="empty-state-icon" style="margin-bottom: 15px;">
                    <svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--text-secondary)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5; display: inline-block;">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <h3>Your Ledger is empty</h3>
                <p>You haven't logged any games yet. Let's create your first record!</p>
                <button class="btn btn-primary" onclick="document.getElementById('add-btn').click()">+ Add First Log</button>
            `;
        } else {
            placeholder.innerHTML = `
                <div class="empty-state-icon" style="margin-bottom: 15px;">
                    <svg viewBox="0 0 24 24" width="48" height="48" stroke="var(--text-secondary)" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.5; display: inline-block;">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <h3>No games found</h3>
                <p>You haven't logged any games for the selected filters.</p>
                <button class="btn btn-secondary" onclick="document.getElementById('status-filter').value = 'all'; document.getElementById('year-filter').value = 'all'; syncAllCustomSelects(); render();">Reset Filters</button>
            `;
        }
        grid.appendChild(placeholder);
        return;
    }

    // =========================================================================
    // RENDER: COMPACT LEDGER (TABLE / LIST) VIEW
    // =========================================================================
    if (currentViewMode === "list") {
        const tableContainer = document.createElement("div");
        tableContainer.className = "ledger-table-container";
        
        let rowsHtml = "";
        filtered.forEach(item => {
            const statusInfo = getStatusMeta(item.status);
            const stars = renderStars(item.rating);
            const favIcon = item.favorite ? "★" : "☆";
            const favClass = item.favorite ? "active" : "";

            let thumbHtml = "";
            if (item.image) {
                thumbHtml = `<img src="${item.image}" class="ledger-thumb-img" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
            }

            rowsHtml += `
                <tr class="ledger-row ${item.favorite ? 'is-favorite' : ''}" data-id="${item.id}">
                    <td style="width: 54px; padding-right: 0;">
                        <div class="ledger-thumb-wrap">
                            ${thumbHtml}
                            <div class="ledger-thumb-fallback" style="display: ${item.image ? 'none' : 'flex'}">
                                ${item.title.substring(0, 2).toUpperCase()}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="ledger-title-text">
                            ${item.favorite ? '<span style="color: #fbbf24; font-size: 14px;">★</span>' : ''}
                            <span>${item.title}</span>
                        </div>
                        ${item.hours ? `<div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${item.hours} hrs played</div>` : ''}
                    </td>
                    <td>
                        <span class="status-badge ${statusInfo.cls}">${statusInfo.label}</span>
                    </td>
                    <td>
                        <div class="card-rating" style="margin-bottom: 0;">${stars}</div>
                    </td>
                    <td style="color: var(--text-secondary); font-family: 'Space Grotesk', sans-serif;">
                        ${item.hours ? item.hours + 'h' : '--'}
                    </td>
                    <td style="color: var(--text-secondary); font-size: 12.5px;">
                        ${item.month} ${item.year}
                    </td>
                    <td style="text-align: right;">
                        <div class="ledger-table-actions" style="justify-content: flex-end;">
                            <button type="button" class="btn-action btn-favorite ${favClass}" data-id="${item.id}" title="Toggle Favorite">
                                <svg viewBox="0 0 24 24" width="15" height="15" fill="${item.favorite ? '#fbbf24' : 'none'}" stroke="currentColor" stroke-width="2">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </button>
                            <button type="button" class="btn-action btn-edit" data-id="${item.id}" title="Edit Game">
                                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                    <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                            </button>
                            <button type="button" class="btn-action btn-delete" data-id="${item.id}" title="Delete Game">
                                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });

        tableContainer.innerHTML = `
            <table class="ledger-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Game Title</th>
                        <th>Status</th>
                        <th>Rating</th>
                        <th>Hours</th>
                        <th>Logged Date</th>
                        <th style="text-align: right;">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        `;
        grid.appendChild(tableContainer);
    } else {
        // =========================================================================
        // RENDER: POSTER GRID VIEW
        // =========================================================================
        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = `card ${item.favorite ? 'is-favorite' : ''}`;
            card.setAttribute("data-id", item.id);
            
            const stars = renderStars(item.rating);
            const statusInfo = getStatusMeta(item.status);
            
            let imageHtml = "";
            if (item.image) {
                imageHtml = `<img src="${item.image}" class="card-img" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
            }
            
            const style = getGlowStyle(item.title);
            const favPill = item.favorite ? `<div class="card-fav-badge" title="All-Time Favorite">★</div>` : "";
            
            card.innerHTML = `
                <div class="card-img-container" style="${style}">
                    ${imageHtml}
                    <div class="card-fallback" style="display: ${item.image ? 'none' : 'flex'}">
                        ${item.title.substring(0, 2).toUpperCase()}
                    </div>
                    
                    <!-- Backlog Status Badge (Top Left) -->
                    <div class="card-status-badge status-badge ${statusInfo.cls}">
                        ${statusInfo.label}
                    </div>

                    <!-- Favorite Star Badge (Top Right) -->
                    ${favPill}

                    <!-- Date Badge (Bottom Left) -->
                    <div class="card-date-badge" style="top: auto; bottom: 10px; left: 10px;">
                        ${item.month} ${item.year}
                    </div>

                    <!-- Platform & Hours Pill (Bottom Right) -->
                    ${item.hours ? `<div class="card-platform-pill"><span>${item.hours}h</span></div>` : ''}
                    
                    <!-- Hover Actions Overlay -->
                    <div class="card-actions-overlay">
                        <button type="button" class="btn-action btn-favorite ${item.favorite ? 'active' : ''}" data-id="${item.id}" title="Toggle Favorite">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="${item.favorite ? '#fbbf24' : 'none'}" stroke="currentColor" stroke-width="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </button>
                        <button type="button" class="btn-action btn-edit" data-id="${item.id}" title="Edit Game">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                        <button type="button" class="btn-action btn-delete" data-id="${item.id}" title="Delete Game">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-rating">${stars}</div>
                    <p class="card-notes">${item.cleanNotes || 'No review notes written yet.'}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Attach card event listeners
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const deleteBtn = e.target.closest(".btn-delete");
            const id = deleteBtn.getAttribute("data-id");

            if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
                showToast("This is a demo account. You can't delete or edit anything, please create a new account!", false);
                return;
            }

            const item = entertainmentList.find(item => item.id === id);
            if (item) {
                itemToDeleteId = id;
                document.getElementById("delete-item-name").innerText = item.title;
                document.getElementById("delete-confirm-modal").style.display = "flex";
            }
        });
    });

    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const editBtn = e.target.closest(".btn-edit");
            const id = editBtn.getAttribute("data-id");
            const item = entertainmentList.find(item => item.id === id);
            if (item) {
                openModal(item);
            }
        });
    });

    document.querySelectorAll(".btn-favorite").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const favBtn = e.target.closest(".btn-favorite");
            const id = favBtn.getAttribute("data-id");
            toggleFavorite(id);
        });
    });

    // Attach row / card click listener to open Detail Modal
    document.querySelectorAll(".card, .ledger-row").forEach(el => {
        el.addEventListener("click", (e) => {
            if (e.target.closest(".btn-action") || e.target.closest("button") || e.target.closest("a")) {
                return;
            }
            const id = el.getAttribute("data-id") || el.querySelector(".btn-edit")?.getAttribute("data-id");
            if (!id) return;
            const item = entertainmentList.find(item => item.id === id);
            if (item) {
                openDetailModal(item);
            }
        });
    });
}

// Toggle Favorite status with cloud sync
async function toggleFavorite(id) {
    if (!id) return;

    if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
        showToast("This is a demo account. Create a free account to customize favorites!", false);
        return;
    }

    const idx = entertainmentList.findIndex(item => item.id === id);
    if (idx === -1) return;

    const item = entertainmentList[idx];
    const parsed = parseItemMetadata(item);
    const newFavState = !parsed.favorite;

    const updatedNotes = serializeNotesWithMetadata(parsed.cleanNotes, parsed.status, parsed.hours, newFavState);

    entertainmentList[idx].notes = updatedNotes;

    // Background sync with Supabase
    if (currentUser) {
        saveItemsToCache(currentUser.id, entertainmentList);
        try {
            await supabaseClient
                .from("vault_items")
                .update({ notes: updatedNotes })
                .eq("id", id)
                .eq("user_id", currentUser.id);
        } catch (e) {
            console.warn("Could not sync favorite to Supabase:", e);
        }
    }

    showToast(newFavState ? `Added "${item.title}" to Hall of Fame ⭐` : `Removed "${item.title}" from favorites`);
    render();
}

// Modal handling and Image Upload Compression
const modal = document.getElementById("item-modal");
const closeModal = document.querySelector(".close-modal");
let uploadedImageBase64 = "";

function updatePreview(src) {
    const previewGroup = document.getElementById("image-preview-group");
    const previewImg = document.getElementById("modal-image-preview");
    if (src) {
        previewImg.src = src;
        previewGroup.style.display = "block";
    } else {
        previewGroup.style.display = "none";
        previewImg.src = "";
    }
}

document.getElementById("form-image-file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) {
        uploadedImageBase64 = "";
        updatePreview(document.getElementById("form-image").value.trim());
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            
            let width = img.width;
            let height = img.height;
            const maxDim = 400;
            
            if (width > height) {
                if (width > maxDim) {
                    height = Math.round(height * (maxDim / width));
                    width = maxDim;
                }
            } else {
                if (height > maxDim) {
                    width = Math.round(width * (maxDim / height));
                    height = maxDim;
                }
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            uploadedImageBase64 = canvas.toDataURL("image/jpeg", 0.7);
            
            document.getElementById("form-image").value = "";
            updatePreview(uploadedImageBase64);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById("form-image").addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val !== "") {
        document.getElementById("form-image-file").value = "";
        uploadedImageBase64 = "";
        updatePreview(val);
    } else {
        updatePreview("");
    }
});

function openModal(editItem = null) {
    modal.style.display = "flex";
    const form = document.getElementById("item-form");
    form.reset();
    uploadedImageBase64 = "";
    updatePreview("");

    if (editItem) {
        const parsed = parseItemMetadata(editItem);
        document.getElementById("modal-title").innerText = "Edit Game";
        document.getElementById("item-id").value = editItem.id;
        document.getElementById("form-title").value = editItem.title;
        
        const catElem = document.getElementById("form-category");
        if (catElem) catElem.value = "games";

        const statusElem = document.getElementById("form-status");
        if (statusElem) statusElem.value = parsed.status || "completed";

        const hoursElem = document.getElementById("form-hours");
        if (hoursElem) hoursElem.value = parsed.hours > 0 ? parsed.hours : "";

        const favElem = document.getElementById("form-favorite");
        if (favElem) favElem.checked = !!parsed.favorite;
        
        document.getElementById("form-rating").value = editItem.rating;
        document.getElementById("form-month").value = editItem.month;
        document.getElementById("form-year").value = editItem.year.toString();
        
        document.getElementById("form-image").value = editItem.image.startsWith("data:") ? "" : editItem.image;
        uploadedImageBase64 = editItem.image.startsWith("data:") ? editItem.image : "";
        document.getElementById("form-notes").value = parsed.cleanNotes || editItem.notes || "";
        
        if (editItem.image) {
            updatePreview(editItem.image);
        }
    } else {
        document.getElementById("modal-title").innerText = "Add New Game";
        document.getElementById("item-id").value = "";
        const catElem = document.getElementById("form-category");
        if (catElem) catElem.value = "games";

        const statusElem = document.getElementById("form-status");
        if (statusElem) statusElem.value = "completed";

        const hoursElem = document.getElementById("form-hours");
        if (hoursElem) hoursElem.value = "";

        const favElem = document.getElementById("form-favorite");
        if (favElem) favElem.checked = false;
    }
    syncAllCustomSelects();
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        if (modal) modal.style.display = "none";
        closeAllCustomSelects();
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        closeAllCustomSelects();
    }
});

// Form Submission Sync with Supabase
const itemForm = document.getElementById("item-form");
if (itemForm) {
    itemForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const id = document.getElementById("item-id").value;
        const title = document.getElementById("form-title").value.trim();
        const category = document.getElementById("form-category").value;
        const rating = parseInt(document.getElementById("form-rating").value, 10);
        const month = document.getElementById("form-month").value;
        const year = parseInt(document.getElementById("form-year").value, 10);
        const rawNotes = document.getElementById("form-notes").value.trim();

        const status = document.getElementById("form-status") ? document.getElementById("form-status").value : "completed";
        const hours = document.getElementById("form-hours") ? parseInt(document.getElementById("form-hours").value, 10) || 0 : 0;
        const favorite = document.getElementById("form-favorite") ? document.getElementById("form-favorite").checked : false;

        const combinedNotes = serializeNotesWithMetadata(rawNotes, status, hours, favorite);
        
        let image = "";
        if (uploadedImageBase64) {
            image = uploadedImageBase64;
        } else {
            image = document.getElementById("form-image").value.trim();
        }

        const submitBtn = e.target.querySelector("button[type='submit']");
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerText = "Saving...";
        }

        if (id) {
            if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
                showToast("This is a demo account. You can't delete or edit anything, please create a new account!", false);
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = "Save Item";
                }
                modal.style.display = "none";
                return;
            }

            let error = null;
            if (currentUser) {
                const res = await supabaseClient
                    .from("vault_items")
                    .update({ title, category, rating, month, year, image, notes: combinedNotes })
                    .eq("id", id)
                    .eq("user_id", currentUser.id);
                error = res.error;
            }

            if (error) {
                showToast("Error updating item: " + error.message, false);
            } else {
                const idx = entertainmentList.findIndex(item => item.id === id);
                if (idx !== -1) {
                    const existing = entertainmentList[idx];
                    entertainmentList[idx] = { 
                        id, 
                        user_id: currentUser ? currentUser.id : "local", 
                        title, 
                        category, 
                        rating, 
                        month, 
                        year, 
                        image, 
                        notes: combinedNotes,
                        created_at: existing.created_at || new Date().toISOString()
                    };
                }
                showToast(`Updated "${title}" successfully!`);
            }
        } else {
            const newId = Date.now().toString();
            const createdAt = new Date().toISOString();
            const newItem = { 
                id: newId, 
                user_id: currentUser ? currentUser.id : "local", 
                title, 
                category, 
                rating, 
                month, 
                year, 
                image, 
                notes: combinedNotes, 
                created_at: createdAt 
            };
            
            let error = null;
            if (currentUser) {
                const res = await supabaseClient
                    .from("vault_items")
                    .insert([newItem]);
                error = res.error;
            }

            if (error) {
                showToast("Error saving item: " + error.message, false);
            } else {
                entertainmentList.unshift(newItem);
                showToast(`Added "${title}" to your ledger!`);
            }
        }

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Save Item";
        }
        modal.style.display = "none";
        if (currentUser) {
            saveItemsToCache(currentUser.id, entertainmentList);
        }
        render();
    });
}

// Event Listeners for Filters
document.getElementById("search-input").addEventListener("input", render);
document.getElementById("year-filter").addEventListener("change", render);
document.getElementById("sort-filter").addEventListener("change", render);

// ==========================================================================
// Custom Glassmorphic Select Component
// ==========================================================================

function getSelectOptionBadge(selectId, opt) {
    if (selectId === "form-rating") {
        const val = parseInt(opt.value, 10);
        if (!isNaN(val)) {
            return "★".repeat(val) + "☆".repeat(Math.max(0, 5 - val));
        }
    }
    if (selectId === "status-filter" || selectId === "form-status") {
        const val = String(opt.value).toLowerCase();
        if (val === "playing") return "● Playing";
        if (val === "completed") return "✓ Done";
        if (val === "dropped") return "✕ Drop";
        if (val === "favorites") return "★ Favs";
    }
    return "";
}

function openCustomSelect(wrapper) {
    closeAllCustomSelects();
    const dropdown = wrapper.querySelector(".custom-select-dropdown");
    const trigger = wrapper.querySelector(".custom-select-trigger");
    if (!dropdown || !trigger) return;

    // Check bounds for dropup
    const triggerRect = trigger.getBoundingClientRect();
    const dropdownHeight = 220;
    if (triggerRect.bottom + dropdownHeight > window.innerHeight && triggerRect.top > dropdownHeight) {
        wrapper.classList.add("dropup");
    } else {
        wrapper.classList.remove("dropup");
    }

    wrapper.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");

    const selectedOpt = dropdown.querySelector(".custom-select-option.selected");
    if (selectedOpt) {
        selectedOpt.scrollIntoView({ block: "nearest" });
    }
}

function closeCustomSelect(wrapper) {
    wrapper.classList.remove("open");
    wrapper.classList.remove("dropup");
    const trigger = wrapper.querySelector(".custom-select-trigger");
    if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
    }
}

function closeAllCustomSelects() {
    document.querySelectorAll(".custom-select-wrapper.open").forEach(closeCustomSelect);
}

function syncCustomSelect(select) {
    if (!select) return;
    const wrapper = select.closest(".custom-select-wrapper");
    if (!wrapper) return;

    const trigger = wrapper.querySelector(".custom-select-trigger");
    const textSpan = trigger ? trigger.querySelector(".custom-select-text") : null;
    const currentOpt = select.options[select.selectedIndex] || select.options[0];
    if (!textSpan || !currentOpt) return;

    const badge = getSelectOptionBadge(select.id, currentOpt);
    if (badge) {
        textSpan.innerHTML = `<span>${currentOpt.textContent}</span> <span class="custom-select-option-badge">${badge}</span>`;
    } else {
        textSpan.innerHTML = `<span>${currentOpt.textContent}</span>`;
    }

    const dropdown = wrapper.querySelector(".custom-select-dropdown");
    if (dropdown) {
        dropdown.querySelectorAll(".custom-select-option").forEach(optDiv => {
            const isSelected = optDiv.getAttribute("data-value") === select.value;
            optDiv.classList.toggle("selected", isSelected);
            optDiv.setAttribute("aria-selected", isSelected ? "true" : "false");
        });
    }
}

function syncAllCustomSelects() {
    document.querySelectorAll("select").forEach(syncCustomSelect);
}

function initCustomSelects() {
    const selects = document.querySelectorAll("select");
    selects.forEach(select => {
        if (select.dataset.customSelectInitialized === "true") {
            syncCustomSelect(select);
            return;
        }
        select.dataset.customSelectInitialized = "true";

        const wrapper = document.createElement("div");
        wrapper.className = "custom-select-wrapper";
        if (select.id) {
            wrapper.setAttribute("data-target-id", select.id);
        }

        // Hide original select visually while keeping accessible to form serialization
        select.classList.add("custom-select-hidden");
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);

        // Trigger button
        const trigger = document.createElement("button");
        trigger.type = "button";
        trigger.className = "custom-select-trigger";
        trigger.setAttribute("aria-haspopup", "listbox");
        trigger.setAttribute("aria-expanded", "false");

        const textSpan = document.createElement("span");
        textSpan.className = "custom-select-text";

        const arrowSpan = document.createElement("span");
        arrowSpan.className = "custom-select-arrow";
        arrowSpan.innerHTML = `
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        `;

        trigger.appendChild(textSpan);
        trigger.appendChild(arrowSpan);
        wrapper.appendChild(trigger);

        // Options dropdown
        const dropdown = document.createElement("div");
        dropdown.className = "custom-select-dropdown";
        dropdown.setAttribute("role", "listbox");

        Array.from(select.options).forEach((opt, idx) => {
            const optDiv = document.createElement("div");
            optDiv.className = "custom-select-option";
            optDiv.setAttribute("role", "option");
            optDiv.setAttribute("data-value", opt.value);
            optDiv.setAttribute("data-index", idx);

            const badge = getSelectOptionBadge(select.id, opt);
            let optionContent = `<span class="custom-select-option-label">${opt.textContent}</span>`;
            if (badge) {
                optionContent += `<span class="custom-select-option-badge">${badge}</span>`;
            }

            const checkSvg = `
                <span class="custom-select-check">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
            `;

            optDiv.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 8px;">${optionContent}</div>
                    ${checkSvg}
                </div>
            `;

            optDiv.addEventListener("click", (e) => {
                e.stopPropagation();
                select.value = opt.value;
                syncCustomSelect(select);
                closeCustomSelect(wrapper);
                select.dispatchEvent(new Event("change", { bubbles: true }));
                select.dispatchEvent(new Event("input", { bubbles: true }));
            });

            dropdown.appendChild(optDiv);
        });

        wrapper.appendChild(dropdown);

        // Click trigger to toggle
        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            if (wrapper.classList.contains("open")) {
                closeCustomSelect(wrapper);
            } else {
                openCustomSelect(wrapper);
            }
        });

        // Keyboard navigation
        trigger.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
                e.preventDefault();
                if (!wrapper.classList.contains("open")) {
                    openCustomSelect(wrapper);
                } else if (e.key === "ArrowDown") {
                    navigateCustomSelect(dropdown, 1);
                }
            } else if (e.key === "ArrowUp" && wrapper.classList.contains("open")) {
                e.preventDefault();
                navigateCustomSelect(dropdown, -1);
            } else if (e.key === "Escape") {
                closeCustomSelect(wrapper);
            }
        });

        if (select.id) {
            const label = document.querySelector(`label[for="${select.id}"]`);
            if (label) {
                label.addEventListener("click", (e) => {
                    e.preventDefault();
                    trigger.focus();
                    if (!wrapper.classList.contains("open")) {
                        openCustomSelect(wrapper);
                    }
                });
            }
        }

        syncCustomSelect(select);
    });
}

function navigateCustomSelect(dropdown, direction) {
    const options = Array.from(dropdown.querySelectorAll(".custom-select-option"));
    if (!options.length) return;
    const currentIndex = options.findIndex(o => o.classList.contains("selected") || o.classList.contains("focused"));
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= options.length) nextIndex = options.length - 1;
    options.forEach((o, i) => o.classList.toggle("focused", i === nextIndex));
    options[nextIndex].scrollIntoView({ block: "nearest" });
}

// Global listener to close dropdowns on outside click
window.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-select-wrapper")) {
        closeAllCustomSelects();
    }
});

// Sync custom selects on form reset
const itemFormElem = document.getElementById("item-form");
if (itemFormElem) {
    itemFormElem.addEventListener("reset", () => {
        setTimeout(syncAllCustomSelects, 0);
    });
}

// Initialize custom selects immediately
initCustomSelects();

// Tab switching
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        const targetBtn = e.currentTarget || e.target.closest(".tab-btn");
        if (!targetBtn) return;
        targetBtn.classList.add("active");
        currentTab = targetBtn.getAttribute("data-tab");
        applyThemeForTab(currentTab);
        if (currentTab === "news") {
            await loadNewsData();
        } else {
            render();
        }
    });
});

const addBtn = document.getElementById("add-btn");
if (addBtn) {
    addBtn.addEventListener("click", () => {
        if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
            showToast("This is a demo account. You can't delete or edit anything, please create a new account!", false);
            return;
        }
        openModal();
    });
}

// Export JSON Utility (Client-side formatting)
const exportBtn = document.getElementById("export-btn");
if (exportBtn) {
    exportBtn.addEventListener("click", () => {
        const cleanedList = entertainmentList
            .filter(item => item.category !== "anime")
            .map(({ id, title, category, rating, month, year, image, notes, created_at }) => ({
                id, title, category: "games", rating, month, year, image, notes, ...(created_at ? { created_at } : {})
            }));
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cleanedList, null, 4));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "gameledger_backup.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    });
}

// Import JSON Utility Sync with Supabase
const fileInput = document.getElementById("import-file");
const importBtn = document.getElementById("import-btn");
if (importBtn && fileInput) {
    importBtn.addEventListener("click", () => {
        if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
            showToast("This is a demo account. You can't delete or edit anything, please create a new account!", false);
            return;
        }
        fileInput.value = "";
        fileInput.click();
    });
}

if (fileInput) {
    fileInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(evt) {
        try {
            const rawImported = JSON.parse(evt.target.result);
            if (Array.isArray(rawImported)) {
                // Filter out any legacy anime items from import
                const imported = rawImported.filter(item => item && item.category !== "anime");
                const confirmOverwrite = confirm("Do you want to overwrite your current database list? Click OK to overwrite, or Cancel to merge imported items.");
                
                if (confirmOverwrite) {
                    const { error: deleteError } = await supabaseClient
                        .from("vault_items")
                        .delete()
                        .eq("user_id", currentUser.id);
                    
                    if (deleteError) {
                        showToast("Error clearing database: " + deleteError.message, false);
                        return;
                    }
                    
                    const itemsToInsert = imported.map(item => ({
                        id: item.id.startsWith("g") ? item.id + "_" + currentUser.id.substring(0, 5) : item.id,
                        user_id: currentUser.id,
                        title: item.title,
                        category: "games",
                        rating: item.rating,
                        month: item.month,
                        year: item.year,
                        image: item.image || "",
                        notes: item.notes || "",
                        created_at: item.created_at || new Date().toISOString()
                    }));

                    const { error: insertError } = await supabaseClient
                        .from("vault_items")
                        .insert(itemsToInsert);

                    if (insertError) {
                        showToast("Error importing items: " + insertError.message, false);
                    } else {
                        entertainmentList = itemsToInsert;
                        saveItemsToCache(currentUser.id, entertainmentList);
                        render();
                        showToast("Import successful! All items written to cloud.");
                    }
                } else {
                    const itemsToInsert = [];
                    imported.forEach(imp => {
                        if (!entertainmentList.some(item => item.title.toLowerCase() === imp.title.toLowerCase())) {
                            const newId = "imp_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7);
                            itemsToInsert.push({
                                id: newId,
                                user_id: currentUser.id,
                                title: imp.title,
                                category: "games",
                                rating: imp.rating,
                                month: imp.month,
                                year: imp.year,
                                image: imp.image || "",
                                notes: imp.notes || "",
                                created_at: imp.created_at || new Date().toISOString()
                            });
                        }
                    });

                    if (itemsToInsert.length > 0) {
                        const { error: insertError } = await supabaseClient
                            .from("vault_items")
                            .insert(itemsToInsert);

                        if (insertError) {
                            showToast("Error merging items: " + insertError.message, false);
                        } else {
                            entertainmentList.unshift(...itemsToInsert);
                            saveItemsToCache(currentUser.id, entertainmentList);
                            render();
                            showToast(`Merged ${itemsToInsert.length} new games into your ledger!`);
                        }
                    } else {
                        showToast("No new items to merge — everything is already in your ledger.", false);
                    }
                }
            } else {
                showToast("Invalid format! Import file must be a JSON array.", false);
            }
        } catch (err) {
            showToast("Error parsing JSON file: " + err.message, false);
        }
    };
    reader.readAsText(file);
    fileInput.value = "";
    });
}

// Feedback Modal Handling & Form Submission (with Supabase sync & mailto fallback)
const feedbackModal = document.getElementById("feedback-modal");
const closeFeedbackModal = document.querySelector(".close-feedback-modal");
const feedbackTrigger = document.getElementById("feedback-trigger");

if (feedbackTrigger) {
    feedbackTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        feedbackModal.style.display = "flex";
        document.getElementById("feedback-form").reset();
    });
}

if (closeFeedbackModal) {
    closeFeedbackModal.addEventListener("click", () => {
        feedbackModal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === feedbackModal) {
        feedbackModal.style.display = "none";
    }
});

document.getElementById("feedback-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const feedbackText = document.getElementById("feedback-text").value.trim();
    const submitBtn = e.target.querySelector("button[type='submit']");
    
    submitBtn.disabled = true;
    submitBtn.innerText = "Submitting...";
    
    try {
        const { error } = await supabaseClient
            .from("feedback")
            .insert([{
                user_id: currentUser ? currentUser.id : null,
                email: currentUser ? currentUser.email : "anonymous",
                message: feedbackText
            }]);
        
        if (error) {
            console.error("Supabase feedback insert error:", error.message);
        }
    } catch (err) {
        console.error("Error submitting feedback:", err);
    }
    
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit Feedback";
    feedbackModal.style.display = "none";
    
    showToast("Thank you! Your feedback has been submitted.");
});

// Custom Toast Notification System
function showToast(message, isSuccess = true) {
    const existing = document.querySelector(".custom-toast");
    if (existing) {
        existing.remove();
    }

    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.innerHTML = `
        <span class="toast-icon" style="display: inline-flex; align-items: center; justify-content: center; margin-right: 8px;">
            ${isSuccess ? 
                `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#10b981" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>` : 
                `<svg viewBox="0 0 24 24" width="18" height="18" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
            }
        </span>
        <span class="toast-message">${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Glassmorphic Detail View Modal Logic
const detailModal = document.getElementById("detail-modal");
const closeDetailModal = document.querySelector(".close-detail-modal");
const detailCloseBtn = document.getElementById("detail-close-btn");

function openDetailModal(item) {
    const parsed = parseItemMetadata(item);
    const statusInfo = getStatusMeta(parsed.status);

    document.getElementById("detail-title").innerText = item.title;
    document.getElementById("detail-rating").innerHTML = renderStars(item.rating);
    document.getElementById("detail-date-badge").innerText = `${item.month} ${item.year}`;
    document.getElementById("detail-notes").innerText = parsed.cleanNotes || "No review notes written yet.";
    
    // Status Badge
    const statusBadge = document.getElementById("detail-status-badge");
    if (statusBadge) {
        statusBadge.className = `badge status-badge ${statusInfo.cls}`;
        statusBadge.innerText = statusInfo.label;
    }

    // Favorite Badge & Button
    const favBadge = document.getElementById("detail-fav-badge");
    if (favBadge) {
        favBadge.style.display = parsed.favorite ? "inline-block" : "none";
    }

    const favBtn = document.getElementById("detail-fav-btn");
    if (favBtn) {
        favBtn.setAttribute("data-id", item.id);
        favBtn.innerHTML = parsed.favorite ? "★ Favorited" : "☆ Favorite";
        favBtn.style.color = parsed.favorite ? "#fbbf24" : "var(--text-primary)";
    }

    const poster = document.getElementById("detail-poster");
    const fallback = document.getElementById("detail-poster-fallback");
    
    const displayPoster = parsed.image || (item.image && item.image.startsWith("http") ? item.image : "") || getKnownGameCover(item.title);
    if (displayPoster) {
        poster.src = displayPoster;
        poster.style.display = "block";
        fallback.style.display = "none";
    } else {
        poster.src = "";
        poster.style.display = "none";
        fallback.style.display = "flex";
        fallback.innerText = item.title.substring(0, 2).toUpperCase();
    }
    
    document.getElementById("detail-edit-btn").setAttribute("data-id", item.id);
    detailModal.style.display = "flex";
}

if (closeDetailModal) {
    closeDetailModal.addEventListener("click", () => {
        detailModal.style.display = "none";
    });
}

if (detailCloseBtn) {
    detailCloseBtn.addEventListener("click", () => {
        detailModal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === detailModal) {
        detailModal.style.display = "none";
    }
});

const detailEditBtn = document.getElementById("detail-edit-btn");
if (detailEditBtn) {
    detailEditBtn.addEventListener("click", () => {
        if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
            showToast("This is a demo account. You can't delete or edit anything, please create a new account!", false);
            return;
        }
        const id = detailEditBtn.getAttribute("data-id");
        const item = entertainmentList.find(item => item.id === id);
        if (item) {
            detailModal.style.display = "none";
            openModal(item);
        }
    });
}

// Profile Settings Side Drawer & Metadata Updates
const profileDrawer = document.getElementById("profile-drawer");
const profileTrigger = document.getElementById("header-profile-trigger");
const closeDrawerBtn = document.querySelector(".close-drawer");
let uploadedAvatarBase64 = "";

function updateUserProfileUI(user) {
    if (!user) return;
    const metadata = user.user_metadata || {};
    const username = metadata.username || user.email.split("@")[0];
    const avatar = metadata.avatar_url || "";
    
    // Header avatar
    const headerAvatar = document.getElementById("header-avatar");
    const headerAvatarFallback = document.getElementById("header-avatar-fallback");
    if (avatar) {
        headerAvatar.src = avatar;
        headerAvatar.style.display = "block";
        headerAvatarFallback.style.display = "none";
    } else {
        headerAvatar.src = "";
        headerAvatar.style.display = "none";
        headerAvatarFallback.style.display = "flex";
        headerAvatarFallback.innerText = username.substring(0, 2).toUpperCase();
    }
    
    // Drawer avatar
    const drawerAvatar = document.getElementById("profile-drawer-avatar");
    const drawerAvatarFallback = document.getElementById("profile-drawer-avatar-fallback");
    if (avatar) {
        drawerAvatar.src = avatar;
        drawerAvatar.style.display = "block";
        drawerAvatarFallback.style.display = "none";
    } else {
        drawerAvatar.src = "";
        drawerAvatar.style.display = "none";
        drawerAvatarFallback.style.display = "flex";
        drawerAvatarFallback.innerText = username.substring(0, 2).toUpperCase();
    }
    
    document.getElementById("profile-username").value = username;
    document.getElementById("profile-email-readonly").value = user.email;
}

if (profileTrigger) {
    profileTrigger.addEventListener("click", () => {
        uploadedAvatarBase64 = ""; // Reset file state
        updateUserProfileUI(currentUser);
        profileDrawer.classList.add("open");
    });
}

if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener("click", () => {
        profileDrawer.classList.remove("open");
    });
}

// Close drawer when clicking outside it
window.addEventListener("click", (e) => {
    if (profileDrawer && profileDrawer.classList.contains("open")) {
        const isClickInside = profileDrawer.contains(e.target) || profileTrigger.contains(e.target);
        if (!isClickInside) {
            profileDrawer.classList.remove("open");
        }
    }
});

// Profile avatar image upload compression (cropped center to 100x100 jpeg)
document.getElementById("profile-avatar-file").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement("canvas");
            canvas.width = 100;
            canvas.height = 100;
            const ctx = canvas.getContext("2d");
            
            // Draw square cropped center of image to canvas
            const size = Math.min(img.width, img.height);
            const sx = (img.width - size) / 2;
            const sy = (img.height - size) / 2;
            ctx.drawImage(img, sx, sy, size, size, 0, 0, 100, 100);
            
            uploadedAvatarBase64 = canvas.toDataURL("image/jpeg", 0.7);
            
            // Update preview immediately
            const drawerAvatar = document.getElementById("profile-drawer-avatar");
            const drawerAvatarFallback = document.getElementById("profile-drawer-avatar-fallback");
            drawerAvatar.src = uploadedAvatarBase64;
            drawerAvatar.style.display = "block";
            drawerAvatarFallback.style.display = "none";
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
});

// Profile Settings Form Submission
document.getElementById("profile-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    if (currentUser && currentUser.email === "demo@example.com" && !isAdminMode) {
        showToast("This is a demo account. You can't delete or edit anything, please create a new account!", false);
        profileDrawer.classList.remove("open");
        return;
    }

    const newUsername = document.getElementById("profile-username").value.trim();
    const submitBtn = e.target.querySelector("button[type='submit']");
    
    if (!newUsername) {
        showToast("Username cannot be empty!", false);
        return;
    }
    
    submitBtn.disabled = true;
    submitBtn.innerText = "Saving Profile...";
    
    const updateData = {
        username: newUsername
    };
    
    if (uploadedAvatarBase64) {
        updateData.avatar_url = uploadedAvatarBase64;
    } else if (currentUser.user_metadata && currentUser.user_metadata.avatar_url) {
        updateData.avatar_url = currentUser.user_metadata.avatar_url;
    } else {
        updateData.avatar_url = "";
    }
    
    const { data, error } = await supabaseClient.auth.updateUser({
        data: updateData
    });
    
    submitBtn.disabled = false;
    submitBtn.innerText = "Save Profile";
    
    if (error) {
        showToast("Error updating profile: " + error.message, false);
    } else {
        currentUser = data.user;
        registerUsernameMapping(newUsername, currentUser.email);
        saveUserToCache(currentUser);
        updateUserProfileUI(currentUser);
        uploadedAvatarBase64 = ""; // Reset
        profileDrawer.classList.remove("open");
        showToast("Profile updated successfully!");
    }
});

// Option A: Welcome Hero Card dismissing logic
const welcomeBanner = document.getElementById("welcome-banner");
const closeWelcomeBtn = document.querySelector(".close-welcome");

if (localStorage.getItem("welcome-dismissed") === "true") {
    if (welcomeBanner) welcomeBanner.style.display = "none";
}

if (closeWelcomeBtn) {
    closeWelcomeBtn.addEventListener("click", () => {
        if (welcomeBanner) {
            welcomeBanner.style.opacity = "0";
            welcomeBanner.style.transform = "translateY(-10px)";
            welcomeBanner.style.transition = "all 0.3s ease";
            setTimeout(() => {
                welcomeBanner.style.display = "none";
                localStorage.setItem("welcome-dismissed", "true");
            }, 300);
        }
    });
}

// Interactive Mouse Follow background glow
window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
});

// Custom Delete Confirmation Modal Logic
const deleteConfirmModal = document.getElementById("delete-confirm-modal");
const deleteConfirmBtn = document.getElementById("delete-confirm-btn");
const deleteCancelBtn = document.getElementById("delete-cancel-btn");

if (deleteCancelBtn) {
    deleteCancelBtn.addEventListener("click", () => {
        deleteConfirmModal.style.display = "none";
        itemToDeleteId = null;
    });
}

if (deleteConfirmBtn) {
    deleteConfirmBtn.addEventListener("click", async () => {
        if (!itemToDeleteId) return;

        deleteConfirmBtn.disabled = true;
        deleteConfirmBtn.innerText = "Deleting...";

        let error = null;
        if (currentUser) {
            const res = await supabaseClient
                .from("vault_items")
                .delete()
                .eq("id", itemToDeleteId)
                .eq("user_id", currentUser.id);
            error = res.error;
        }

        deleteConfirmBtn.disabled = false;
        deleteConfirmBtn.innerText = "Yes, Delete";
        deleteConfirmModal.style.display = "none";

        if (error) {
            showToast("Error deleting item: " + error.message, false);
        } else {
            entertainmentList = entertainmentList.filter(item => item.id !== itemToDeleteId);
            if (currentUser) {
                saveItemsToCache(currentUser.id, entertainmentList);
            }
            itemToDeleteId = null;
            render();
            showToast("Item deleted successfully.");
        }
    });
}

// Close delete confirm modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === deleteConfirmModal) {
        deleteConfirmModal.style.display = "none";
        itemToDeleteId = null;
    }
});

// Ensure custom selects are initialized upon DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCustomSelects);
} else {
    initCustomSelects();
}


// ==========================================================================
// ADVANCED INSIGHTS, SHOWCASE CARD GENERATOR, & EVENT HOOKS
// ==========================================================================

// Favorite Button inside Detail Modal
const detailFavBtn = document.getElementById("detail-fav-btn");
if (detailFavBtn) {
    detailFavBtn.addEventListener("click", () => {
        const id = detailFavBtn.getAttribute("data-id");
        if (id) {
            toggleFavorite(id);
            const item = entertainmentList.find(it => it.id === id);
            if (item) {
                openDetailModal(item);
            }
        }
    });
}

// View Mode Switcher Listeners
const viewGridBtn = document.getElementById("view-grid-btn");
const viewListBtn = document.getElementById("view-list-btn");

if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener("click", () => {
        currentViewMode = "grid";
        localStorage.setItem("vault_view_mode", "grid");
        viewGridBtn.classList.add("active");
        viewListBtn.classList.remove("active");
        render();
    });

    viewListBtn.addEventListener("click", () => {
        currentViewMode = "list";
        localStorage.setItem("vault_view_mode", "list");
        viewListBtn.classList.add("active");
        viewGridBtn.classList.remove("active");
        render();
    });

    // Hydrate initial view state
    if (currentViewMode === "list") {
        viewListBtn.classList.add("active");
        viewGridBtn.classList.remove("active");
    } else {
        viewGridBtn.classList.add("active");
        viewListBtn.classList.remove("active");
    }
}

// Search Clear Button Listener
const searchClearBtn = document.getElementById("search-clear-btn");
if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
            searchInput.value = "";
            render();
            searchInput.focus();
        }
    });
}

// Status Filter Change Listener
const statusFilterSelect = document.getElementById("status-filter");
if (statusFilterSelect) {
    statusFilterSelect.addEventListener("change", () => {
        render();
    });
}

// ==========================================================================
// INSIGHTS & ANALYTICS MODAL LOGIC
// ==========================================================================
const insightsModal = document.getElementById("insights-modal");
const insightsBtn = document.getElementById("insights-btn");
const closeInsightsBtn = document.querySelector(".close-insights-modal");
const exportShowcaseBtn = document.getElementById("export-showcase-btn");

function openInsightsModal() {
    if (!insightsModal) return;

    const games = entertainmentList
        .filter(item => item.category === "games")
        .map(parseItemMetadata);

    const totalGames = games.length;
    const totalHours = games.reduce((acc, curr) => acc + (curr.hours || 0), 0);
    const avgRating = totalGames > 0
        ? (games.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalGames).toFixed(1)
        : "0.0";

    const completedCount = games.filter(g => g.status === "completed").length;
    const playingCount = games.filter(g => g.status === "playing").length;
    const droppedCount = games.filter(g => g.status === "dropped").length;

    const compRate = totalGames > 0
        ? Math.round((completedCount / totalGames) * 100)
        : 0;

    // Set numbers
    document.getElementById("ins-total-games").innerText = totalGames;
    document.getElementById("ins-total-hours").innerText = totalHours > 0 ? `${totalHours}h` : "0h";
    document.getElementById("ins-avg-rating").innerText = `${avgRating} ★`;
    document.getElementById("ins-completion-rate").innerText = `${compRate}%`;

    // Render Status Progress Bar
    const statusBar = document.getElementById("insights-status-bar");
    const statusLegend = document.getElementById("insights-status-legend");
    if (statusBar && statusLegend) {
        statusBar.innerHTML = "";
        statusLegend.innerHTML = "";

        const statuses = [
            { key: "playing", label: "Playing", count: playingCount, color: "#10b981" },
            { key: "completed", label: "Completed", count: completedCount, color: "#38bdf8" },
            { key: "dropped", label: "Dropped", count: droppedCount, color: "#fb7185" }
        ];

        statuses.forEach(st => {
            if (st.count > 0 && totalGames > 0) {
                const pct = (st.count / totalGames) * 100;
                const seg = document.createElement("div");
                seg.className = "insights-status-bar-seg";
                seg.style.width = `${pct}%`;
                seg.style.background = st.color;
                seg.title = `${st.label}: ${st.count} (${Math.round(pct)}%)`;
                statusBar.appendChild(seg);
            }

            const item = document.createElement("div");
            item.className = "insights-legend-item";
            item.innerHTML = `
                <span class="insights-legend-dot" style="background: ${st.color};"></span>
                <span>${st.label}: <strong style="color: var(--text-primary);">${st.count}</strong></span>
            `;
            statusLegend.appendChild(item);
        });
    }

    // Render Hall of Fame (5-Star & Favorites)
    const hallGrid = document.getElementById("insights-hall-of-fame");
    if (hallGrid) {
        hallGrid.innerHTML = "";
        const topGames = games.filter(g => g.favorite || g.rating === 5).slice(0, 12);

        if (topGames.length === 0) {
            hallGrid.innerHTML = "<div style='grid-column: 1 / -1; color: var(--text-secondary); font-size: 13px;'>Rate games 5 stars or mark them with ★ Favorite to feature them in the Hall of Fame!</div>";
        } else {
            topGames.forEach(tg => {
                const card = document.createElement("div");
                card.className = "hall-game-card";
                
                let imgHtml = "";
                if (tg.image) {
                    imgHtml = `<img src="${tg.image}" class="hall-game-img" alt="${tg.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
                }

                card.innerHTML = `
                    ${imgHtml}
                    <div class="hall-game-fallback" style="display: ${tg.image ? 'none' : 'flex'}">
                        ${tg.title.substring(0, 2).toUpperCase()}
                    </div>
                    <div class="hall-game-title" title="${tg.title}">${tg.title}</div>
                    <div class="hall-game-rating">${renderStars(tg.rating)}</div>
                `;
                card.addEventListener("click", () => {
                    insightsModal.style.display = "none";
                    openDetailModal(tg);
                });
                hallGrid.appendChild(card);
            });
        }
    }

    insightsModal.style.display = "flex";
}

if (insightsBtn) {
    insightsBtn.addEventListener("click", openInsightsModal);
}

if (closeInsightsBtn) {
    closeInsightsBtn.addEventListener("click", () => {
        insightsModal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === insightsModal) {
        insightsModal.style.display = "none";
    }
});

// =========================================================================
// HTML5 CANVAS: EXPORT GAMING SHOWCASE CARD (1200x630 Social Banner)
// =========================================================================
if (exportShowcaseBtn) {
    exportShowcaseBtn.addEventListener("click", () => {
        generateShowcaseCard();
    });
}

function generateShowcaseCard() {
    showToast("Generating high-res gaming showcase card...");

    const games = entertainmentList
        .filter(item => item.category === "games")
        .map(parseItemMetadata);

    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext("2d");

    // 1. Background gradient
    const bgGrad = ctx.createRadialGradient(600, 100, 50, 600, 315, 700);
    bgGrad.addColorStop(0, "#240b12");
    bgGrad.addColorStop(0.6, "#10090c");
    bgGrad.addColorStop(1, "#070607");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 630);

    // Decorative ambient glow
    ctx.fillStyle = "rgba(191, 59, 87, 0.12)";
    ctx.beginPath();
    ctx.arc(600, 0, 450, 0, Math.PI * 2);
    ctx.fill();

    // 2. Card frame / border
    ctx.strokeStyle = "rgba(191, 59, 87, 0.25)";
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, 1140, 570);

    // 3. Header Branding
    ctx.font = "bold 32px 'Space Grotesk', sans-serif, Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("GAME", 70, 85);
    const w = ctx.measureText("GAME").width;
    ctx.fillStyle = "#bf3b57";
    ctx.fillText("LEDGER", 70 + w, 85);

    ctx.font = "500 16px 'Outfit', sans-serif, Arial";
    ctx.fillStyle = "#9ca3af";
    ctx.fillText("GAMER TROPHY SHOWCASE", 70, 115);

    // User details (top right)
    const username = currentUser && currentUser.user_metadata && currentUser.user_metadata.username
        ? currentUser.user_metadata.username
        : (currentUser ? currentUser.email.split("@")[0] : "Player One");

    ctx.font = "bold 20px 'Space Grotesk', sans-serif, Arial";
    ctx.fillStyle = "#f3f4f6";
    ctx.textAlign = "right";
    ctx.fillText(`@${username}`, 1130, 85);

    ctx.font = "14px 'Outfit', sans-serif, Arial";
    ctx.fillStyle = "#9ca3af";
    ctx.fillText("Verified Gamer Ledger", 1130, 112);
    ctx.textAlign = "left";

    // 4. Metrics Cards Row
    const totalGames = games.length;
    const totalHours = games.reduce((acc, curr) => acc + (curr.hours || 0), 0);
    const avgRating = totalGames > 0
        ? (games.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalGames).toFixed(1)
        : "0.0";
    const completed = games.filter(g => g.status === "completed" || g.status === "mastered").length;
    const compRate = totalGames > 0 ? Math.round((completed / totalGames) * 100) : 0;

    const metrics = [
        { label: "GAMES LOGGED", val: String(totalGames) },
        { label: "HOURS PLAYED", val: totalHours > 0 ? `${totalHours}h` : "0h" },
        { label: "AVERAGE RATING", val: `${avgRating} ★` },
        { label: "COMPLETION RATE", val: `${compRate}%` }
    ];

    const boxW = 245;
    const boxH = 90;
    const startX = 70;
    const boxY = 145;

    metrics.forEach((m, idx) => {
        const x = startX + idx * (boxW + 30);
        
        // Glass card
        ctx.fillStyle = "rgba(22, 20, 25, 0.7)";
        ctx.strokeStyle = "rgba(191, 59, 87, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(x, boxY, boxW, boxH, 10);
        ctx.fill();
        ctx.stroke();

        ctx.font = "bold 28px 'Space Grotesk', sans-serif, Arial";
        ctx.fillStyle = "#bf3b57";
        ctx.fillText(m.val, x + 20, boxY + 45);

        ctx.font = "600 12px 'Space Grotesk', sans-serif, Arial";
        ctx.fillStyle = "#9ca3af";
        ctx.fillText(m.label, x + 20, boxY + 72);
    });

    // 5. Section Header for Hall of Fame
    ctx.font = "bold 18px 'Space Grotesk', sans-serif, Arial";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("HALL OF FAME FAVORITES", 70, 275);

    // 6. Draw Top 4 Games Cards
    const top4 = games
        .filter(g => g.favorite || g.rating === 5)
        .slice(0, 4);

    const cardW = 245;
    const cardH = 260;
    const cardY = 295;

    if (top4.length === 0) {
        ctx.font = "16px 'Outfit', sans-serif, Arial";
        ctx.fillStyle = "#9ca3af";
        ctx.fillText("Add or favorite games to showcase them here!", 70, 340);
        triggerDownload();
        return;
    }

    let loadedImages = 0;
    const totalToLoad = top4.length;

    function finishDrawing() {
        // Footer branding
        ctx.font = "14px 'Space Grotesk', sans-serif, Arial";
        ctx.fillStyle = "#6b7280";
        ctx.fillText("thegameledger.vercel.app • Cloud-synced offline-first gaming dashboard", 70, 580);

        ctx.textAlign = "right";
        ctx.fillText("Made with ❤️ in India", 1130, 580);
        ctx.textAlign = "left";

        triggerDownload();
    }

    function triggerDownload() {
        try {
            const dataUrl = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.href = dataUrl;
            a.download = `GameLedger_Showcase_${username}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            showToast("Showcase card downloaded! Ready to share on Discord or Reddit.");
        } catch (e) {
            console.error("Canvas export failed:", e);
            showToast("Export failed due to image CORS policy. Try games with uploaded images!", false);
        }
    }

    top4.forEach((g, idx) => {
        const x = startX + idx * (cardW + 30);

        // Card bg
        ctx.fillStyle = "rgba(18, 16, 20, 0.8)";
        ctx.strokeStyle = g.favorite ? "rgba(251, 191, 36, 0.5)" : "rgba(191, 59, 87, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(x, cardY, cardW, cardH, 10);
        ctx.fill();
        ctx.stroke();

        // Game text & stars
        ctx.font = "bold 15px 'Space Grotesk', sans-serif, Arial";
        ctx.fillStyle = "#ffffff";
        const titleText = g.title.length > 20 ? g.title.substring(0, 18) + "..." : g.title;
        ctx.fillText(titleText, x + 15, cardY + 205);

        ctx.font = "13px 'Outfit', sans-serif, Arial";
        ctx.fillStyle = "#fbbf24";
        ctx.fillText("★★★★★", x + 15, cardY + 228);

        ctx.font = "12px 'Outfit', sans-serif, Arial";
        ctx.fillStyle = "#9ca3af";
        ctx.fillText(g.hours ? `${g.hours} hrs played` : 'Completed', x + 15, cardY + 248);

        // Poster image
        if (g.image) {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                ctx.save();
                ctx.beginPath();
                ctx.roundRect(x + 12, cardY + 12, cardW - 24, 165, 8);
                ctx.clip();
                ctx.drawImage(img, x + 12, cardY + 12, cardW - 24, 165);
                ctx.restore();

                loadedImages++;
                if (loadedImages === totalToLoad) {
                    finishDrawing();
                }
            };
            img.onerror = () => {
                // Draw fallback placeholder
                ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
                ctx.beginPath();
                ctx.roundRect(x + 12, cardY + 12, cardW - 24, 165, 8);
                ctx.fill();

                ctx.font = "bold 28px 'Space Grotesk', sans-serif, Arial";
                ctx.fillStyle = "#9ca3af";
                ctx.textAlign = "center";
                ctx.fillText(g.title.substring(0, 2).toUpperCase(), x + cardW / 2, cardY + 105);
                ctx.textAlign = "left";

                loadedImages++;
                if (loadedImages === totalToLoad) {
                    finishDrawing();
                }
            };
            img.src = g.image;
        } else {
            // Draw fallback placeholder
            ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
            ctx.beginPath();
            ctx.roundRect(x + 12, cardY + 12, cardW - 24, 165, 8);
            ctx.fill();

            ctx.font = "bold 28px 'Space Grotesk', sans-serif, Arial";
            ctx.fillStyle = "#9ca3af";
            ctx.textAlign = "center";
            ctx.fillText(g.title.substring(0, 2).toUpperCase(), x + cardW / 2, cardY + 105);
            ctx.textAlign = "left";

            loadedImages++;
            if (loadedImages === totalToLoad) {
                finishDrawing();
            }
        }
    });

    // Timeout safety fallback if images hang
    setTimeout(() => {
        if (loadedImages < totalToLoad) {
            finishDrawing();
        }
    }, 2500);
}

// =========================================================================
// GLOBAL KEYBOARD SHORTCUTS FOR POWER GAMERS
// =========================================================================
window.addEventListener("keydown", (e) => {
    // If user is currently typing in an input or textarea, don't hijack keys
    const tag = e.target.tagName.toLowerCase();
    const isTyping = tag === "input" || tag === "textarea" || e.target.isContentEditable;

    // Escape closes any active modal or drawer
    if (e.key === "Escape") {
        if (modal && modal.style.display === "flex") modal.style.display = "none";
        if (detailModal && detailModal.style.display === "flex") detailModal.style.display = "none";
        if (insightsModal && insightsModal.style.display === "flex") insightsModal.style.display = "none";
        const delModal = document.getElementById("delete-confirm-modal");
        if (delModal && delModal.style.display === "flex") delModal.style.display = "none";
        const feedModal = document.getElementById("feedback-modal");
        if (feedModal && feedModal.style.display === "flex") feedModal.style.display = "none";
        if (profileDrawer && profileDrawer.classList.contains("open")) profileDrawer.classList.remove("open");
        closeAllCustomSelects();
        return;
    }

    if (isTyping) return;

    // / or Ctrl+K: Focus Search Bar
    if (e.key === "/" || (e.ctrlKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
        return;
    }

    // N: Add New Game
    if (e.key.toLowerCase() === "n") {
        e.preventDefault();
        const addBtn = document.getElementById("add-btn");
        if (addBtn && addBtn.style.display !== "none") {
            addBtn.click();
        }
        return;
    }

    // I: Open Insights Modal
    if (e.key.toLowerCase() === "i") {
        e.preventDefault();
        openInsightsModal();
        return;
    }

    // G: Switch to Grid View
    if (e.key.toLowerCase() === "g") {
        e.preventDefault();
        if (viewGridBtn) viewGridBtn.click();
        return;
    }

    // L: Switch to Ledger Table View
    if (e.key.toLowerCase() === "l") {
        e.preventDefault();
        if (viewListBtn) viewListBtn.click();
        return;
    }
});


// ==========================================================================
// COMPRESSION & SOCIAL PROFILE SHARING ENGINE (v32)
// ==========================================================================

function uint8ToBase64Url(uint8) {
    let bin = "";
    const len = uint8.byteLength;
    for (let i = 0; i < len; i++) {
        bin += String.fromCharCode(uint8[i]);
    }
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToUint8(str) {
    str = str.replace(/-/g, "+").replace(/_/g, "/");
    while (str.length % 4) str += "=";
    const bin = atob(str);
    const len = bin.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = bin.charCodeAt(i);
    }
    return bytes;
}

async function compressToShareUrl(obj) {
    const jsonStr = JSON.stringify(obj);
    if (window.CompressionStream) {
        try {
            const stream = new Response(
                new Blob([jsonStr]).stream().pipeThrough(new CompressionStream("deflate-raw"))
            );
            const buffer = await stream.arrayBuffer();
            return uint8ToBase64Url(new Uint8Array(buffer));
        } catch (e) {
            console.warn("CompressionStream fallback:", e);
        }
    }
    // Fallback: URI component base64
    return uint8ToBase64Url(new TextEncoder().encode(jsonStr));
}

async function decompressFromShareUrl(str) {
    const bytes = base64UrlToUint8(str);
    if (window.DecompressionStream) {
        try {
            const stream = new Response(
                new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"))
            );
            const text = await stream.text();
            return JSON.parse(text);
        } catch (e) {
            console.warn("DecompressionStream fallback:", e);
        }
    }
    // Fallback: TextDecoder
    const text = new TextDecoder().decode(bytes);
    return JSON.parse(text);
}

// Share Modal Elements
const shareModal = document.getElementById("share-modal");
const closeShareModalBtn = document.querySelector(".close-share-modal");
const headerShareBtn = document.getElementById("header-share-btn");
const drawerShareBtn = document.getElementById("drawer-share-btn");
const copyShareLinkBtn = document.getElementById("copy-share-link-btn");
const shareLinkInput = document.getElementById("share-link-input");


// URL Shortening Service (Vercel Serverless + Client Fallback)
async function getShortShareUrl(fullShareUrl) {
    // 1. Try Vercel Serverless Function (/api/shorten)
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(`/api/shorten?url=${encodeURIComponent(fullShareUrl)}`, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (res.ok) {
            const data = await res.json();
            if (data && data.shortUrl && data.shortUrl.startsWith("http")) {
                return data.shortUrl;
            }
        }
    } catch (e) {
        console.warn("/api/shorten fallback:", e);
    }

    // 2. Client-side fallback with open CORS (clck.ru)
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3500);
        const res = await fetch(`https://clck.ru/--?url=${encodeURIComponent(fullShareUrl)}`, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (res.ok) {
            const shortText = await res.text();
            if (shortText && shortText.startsWith("http")) {
                return shortText.trim();
            }
        }
    } catch (e) {
        console.warn("clck.ru shortener fallback:", e);
    }

    // 3. Fallback to full compressed URL
    return fullShareUrl;
}

function updateShareLinks(url, username) {
    const shareLinkInput = document.getElementById("share-link-input");
    if (shareLinkInput) {
        shareLinkInput.value = url;
    }

    const shareMsg = `Check out my GameLedger gaming profile & reviews: ${url}`;

    // WhatsApp Button
    const waBtn = document.getElementById("share-whatsapp-btn");
    if (waBtn) {
        waBtn.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMsg)}`;
    }

    // Telegram Button
    const tgBtn = document.getElementById("share-telegram-btn");
    if (tgBtn) {
        tgBtn.href = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent("Check out my GameLedger gaming profile!")}`;
    }

    // Twitter / X Button
    const twBtn = document.getElementById("share-twitter-btn");
    if (twBtn) {
        twBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out my gaming records on @GameLedger: ${url}`)}`;
    }

    // Native Share Sheet (on mobile phones / supporting browsers like Instagram, etc.)
    const nativeBtn = document.getElementById("share-native-btn");
    if (nativeBtn) {
        if (navigator.share) {
            nativeBtn.style.display = "inline-flex";
            nativeBtn.onclick = () => {
                navigator.share({
                    title: `GameLedger - @${username}`,
                    text: "Check out my gaming records and reviews on GameLedger!",
                    url: url
                }).catch(() => {});
            };
        } else {
            nativeBtn.style.display = "none";
        }
    }
}

async function openShareModal() {
    if (!shareModal) return;

    const username = currentUser && currentUser.user_metadata && currentUser.user_metadata.username
        ? currentUser.user_metadata.username
        : (currentUser ? currentUser.email.split("@")[0] : "Player");

    const avatarUrl = currentUser && currentUser.user_metadata && currentUser.user_metadata.avatar_url
        ? currentUser.user_metadata.avatar_url
        : "";

    const games = entertainmentList
        .filter(item => item.category === "games")
        .map(parseItemMetadata);

    if (games.length === 0) {
        showToast("Add at least one game to your ledger before sharing!", false);
        return;
    }

    // Open modal immediately for snappy response
    shareModal.style.display = "flex";

    if (shareLinkInput) {
        shareLinkInput.value = "Creating short link...";
    }

    // Build optimized compact payload (excluding redundant known cover URLs and empty notes)
    const payload = {
        u: username,
        a: avatarUrl.startsWith("http") ? avatarUrl : "",
        g: games.map(item => {
            const knownCover = getKnownGameCover(item.title);
            const customImg = (item.image && item.image.startsWith("http") && item.image !== knownCover) ? item.image : "";
            const gObj = {
                t: item.title,
                r: item.rating,
                s: item.status || "completed",
                h: item.hours || 0,
                m: item.month,
                y: item.year,
                f: item.favorite ? 1 : 0
            };
            if (customImg) gObj.img = customImg;
            if (item.cleanNotes && item.cleanNotes.trim()) gObj.n = item.cleanNotes.trim();
            return gObj;
        })
    };

    const encoded = await compressToShareUrl(payload);
    const fullShareUrl = `${window.location.origin}${window.location.pathname}?share=${encoded}`;

    // Populate initially with full URL as baseline
    updateShareLinks(fullShareUrl, username);

    // Asynchronously resolve short URL (~300ms)
    try {
        const shortUrl = await getShortShareUrl(fullShareUrl);
        if (shortUrl) {
            updateShareLinks(shortUrl, username);
        }
    } catch (err) {
        console.warn("Could not shorten link, using direct URL:", err);
        updateShareLinks(fullShareUrl, username);
    }
}

if (headerShareBtn) headerShareBtn.addEventListener("click", openShareModal);
if (drawerShareBtn) drawerShareBtn.addEventListener("click", () => {
    const profileDrawer = document.getElementById("profile-drawer");
    if (profileDrawer) profileDrawer.classList.remove("open");
    openShareModal();
});

if (closeShareModalBtn) {
    closeShareModalBtn.addEventListener("click", () => {
        shareModal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === shareModal) {
        shareModal.style.display = "none";
    }
});

// Copy Share Link Button Handler
if (copyShareLinkBtn) {
    copyShareLinkBtn.addEventListener("click", () => {
        if (!shareLinkInput) return;
        shareLinkInput.select();
        shareLinkInput.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(shareLinkInput.value).then(() => {
            const btnText = document.getElementById("copy-btn-text");
            if (btnText) btnText.innerText = "Copied! ✓";
            showToast("Share link copied to clipboard! Ready to send to friends.");
            setTimeout(() => {
                if (btnText) btnText.innerText = "Copy";
            }, 2500);
        }).catch(() => {
            document.execCommand("copy");
            showToast("Share link copied!");
        });
    });
}

// ==========================================================================
// PUBLIC VIEW-ONLY SHOWCASE RENDERER
// ==========================================================================
let publicSharedData = null;
let publicViewMode = "grid";

async function checkAndHydrateShareView() {
    const params = new URLSearchParams(window.location.search);
    const shareParam = params.get("share") || window.location.hash.replace("#share=", "");

    if (!shareParam) return false;

    try {
        publicSharedData = await decompressFromShareUrl(shareParam);
        if (!publicSharedData || !publicSharedData.g) {
            throw new Error("Invalid payload format");
        }
    } catch (e) {
        console.error("Failed to decode shared ledger:", e);
        showToast("Could not load shared ledger. Link may be invalid.", false);
        return false;
    }

    // Switch to public share view
    document.documentElement.classList.add("view-shared-mode");
    document.documentElement.classList.remove("auth-logged-in", "auth-logged-out");

    const appContainer = document.getElementById("app-container");
    const authContainer = document.getElementById("auth-container");
    const publicContainer = document.getElementById("public-view-container");

    if (appContainer) appContainer.style.display = "none";
    if (authContainer) authContainer.style.display = "none";
    if (publicContainer) publicContainer.style.display = "block";

    // Populate user profile info
    const username = publicSharedData.u || "Gamer";
    document.title = `${username}'s GameLedger`;
    const pubUserEl = document.getElementById("pub-username");
    if (pubUserEl) pubUserEl.innerText = `@${username}`;

    const avatarWrap = document.querySelector(".public-avatar-wrap");
    const pubAvatar = document.getElementById("pub-avatar");
    const pubFallback = document.getElementById("pub-avatar-fallback");
    if (publicSharedData.a) {
        pubAvatar.src = publicSharedData.a;
        pubAvatar.style.display = "block";
        pubFallback.style.display = "none";
    } else {
        pubAvatar.style.display = "none";
        pubFallback.style.display = "flex";
        pubFallback.innerText = username.substring(0, 2).toUpperCase();
    }

    // Wire up Exit Share View Button
    const exitBtn = document.getElementById("exit-share-btn");
    if (exitBtn) {
        exitBtn.onclick = () => {
            // Remove share query param from URL
            const cleanUrl = window.location.origin + window.location.pathname;
            window.history.pushState(null, "", cleanUrl);
            document.documentElement.classList.remove("view-shared-mode");
            publicContainer.style.display = "none";
            // Normal hydration
            initLocalCache();
        };
    }

    // Wire up Public Controls
    const searchInput = document.getElementById("pub-search-input");
    const statusFilter = document.getElementById("pub-status-filter");
    const gridBtn = document.getElementById("pub-view-grid-btn");
    const listBtn = document.getElementById("pub-view-list-btn");

    if (searchInput) searchInput.oninput = renderPublicView;
    if (statusFilter) statusFilter.onchange = renderPublicView;

    if (gridBtn && listBtn) {
        gridBtn.onclick = () => {
            publicViewMode = "grid";
            gridBtn.classList.add("active");
            listBtn.classList.remove("active");
            renderPublicView();
        };
        listBtn.onclick = () => {
            publicViewMode = "list";
            listBtn.classList.add("active");
            gridBtn.classList.remove("active");
            renderPublicView();
        };
    }

    renderPublicView();
    return true;
}

function renderPublicView() {
    if (!publicSharedData || !publicSharedData.g) return;

    const games = publicSharedData.g.map(g => ({
        id: "pub_" + Math.random().toString(36).substr(2, 9),
        title: g.t,
        rating: g.r,
        status: g.s || "completed",
        hours: g.h || 0,
        month: g.m || "January",
        year: g.y || 2024,
        favorite: !!g.f,
        image: (g.img && g.img.startsWith("http")) ? g.img : (getKnownGameCover(g.t) || ""),
        cleanNotes: g.n || "",
        notes: g.n || ""
    }));

    // Stats calculation
    const totalGames = games.length;
    const totalHours = games.reduce((acc, curr) => acc + (curr.hours || 0), 0);
    const avgRating = totalGames > 0
        ? (games.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalGames).toFixed(1)
        : "0.0";
    const completedCount = games.filter(g => g.status === "completed").length;
    const compRate = totalGames > 0 ? Math.round((completedCount / totalGames) * 100) : 0;

    const elGames = document.getElementById("pub-total-games");
    const elHours = document.getElementById("pub-total-hours");
    const elRating = document.getElementById("pub-avg-rating");
    const elComp = document.getElementById("pub-comp-rate");

    if (elGames) elGames.innerText = totalGames;
    if (elHours) elHours.innerText = totalHours > 0 ? `${totalHours}h` : "0h";
    if (elRating) elRating.innerText = `${avgRating} ★`;
    if (elComp) elComp.innerText = `${compRate}%`;

    // Filter
    const searchVal = (document.getElementById("pub-search-input")?.value || "").trim().toLowerCase();
    const statusVal = document.getElementById("pub-status-filter")?.value || "all";

    const filtered = games.filter(g => {
        const matchesSearch = searchVal ? g.title.toLowerCase().includes(searchVal) : true;
        let matchesStatus = true;
        if (statusVal === "favorites") {
            matchesStatus = g.favorite === true;
        } else if (statusVal !== "all") {
            matchesStatus = g.status === statusVal;
        }
        return matchesSearch && matchesStatus;
    });

    const grid = document.getElementById("pub-grid-section");
    if (!grid) return;
    grid.innerHTML = "";

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-vault-state">
                <div class="empty-state-icon">🎮</div>
                <h3>No games match filter</h3>
                <p>Try resetting the search query or status filter.</p>
            </div>
        `;
        return;
    }

    if (publicViewMode === "list") {
        const tableContainer = document.createElement("div");
        tableContainer.className = "ledger-table-container";
        let rowsHtml = "";

        filtered.forEach(item => {
            const statusInfo = getStatusMeta(item.status);
            const stars = renderStars(item.rating);
            let thumbHtml = "";
            if (item.image) {
                thumbHtml = `<img src="${item.image}" class="ledger-thumb-img" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
            }

            rowsHtml += `
                <tr class="ledger-row ${item.favorite ? 'is-favorite' : ''}" data-pub-id="${item.id}">
                    <td style="width: 54px; padding-right: 0;">
                        <div class="ledger-thumb-wrap">
                            ${thumbHtml}
                            <div class="ledger-thumb-fallback" style="display: ${item.image ? 'none' : 'flex'}">
                                ${item.title.substring(0, 2).toUpperCase()}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="ledger-title-text">
                            ${item.favorite ? '<span style="color: #fbbf24; font-size: 14px;">★</span>' : ''}
                            <span>${item.title}</span>
                        </div>
                        ${item.hours ? `<div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${item.hours} hrs played</div>` : ''}
                    </td>
                    <td>
                        <span class="status-badge ${statusInfo.cls}">${statusInfo.label}</span>
                    </td>
                    <td>
                        <div class="card-rating" style="margin-bottom: 0;">${stars}</div>
                    </td>
                    <td style="color: var(--text-secondary); font-family: 'Space Grotesk', sans-serif;">
                        ${item.hours ? item.hours + 'h' : '--'}
                    </td>
                    <td style="color: var(--text-secondary); font-size: 12.5px;">
                        ${item.month} ${item.year}
                    </td>
                </tr>
            `;
        });

        tableContainer.innerHTML = `
            <table class="ledger-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Game Title</th>
                        <th>Status</th>
                        <th>Rating</th>
                        <th>Hours</th>
                        <th>Logged Date</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        `;
        grid.appendChild(tableContainer);
    } else {
        filtered.forEach(item => {
            const card = document.createElement("div");
            card.className = `card ${item.favorite ? 'is-favorite' : ''}`;
            card.setAttribute("data-pub-id", item.id);
            
            const stars = renderStars(item.rating);
            const statusInfo = getStatusMeta(item.status);
            
            let imageHtml = "";
            if (item.image) {
                imageHtml = `<img src="${item.image}" class="card-img" alt="${item.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`;
            }
            
            const style = getGlowStyle(item.title);
            const favPill = item.favorite ? `<div class="card-fav-badge" title="All-Time Favorite">★</div>` : "";
            
            card.innerHTML = `
                <div class="card-img-container" style="${style}">
                    ${imageHtml}
                    <div class="card-fallback" style="display: ${item.image ? 'none' : 'flex'}">
                        ${item.title.substring(0, 2).toUpperCase()}
                    </div>
                    
                    <div class="card-status-badge status-badge ${statusInfo.cls}">
                        ${statusInfo.label}
                    </div>

                    ${favPill}

                    <div class="card-date-badge" style="top: auto; bottom: 10px; left: 10px;">
                        ${item.month} ${item.year}
                    </div>

                    ${item.hours ? `<div class="card-platform-pill"><span>${item.hours}h</span></div>` : ''}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-rating">${stars}</div>
                    <p class="card-notes">${item.cleanNotes || 'No review notes written.'}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Attach click listener for public Detail Modal preview
    grid.querySelectorAll(".card, .ledger-row").forEach(el => {
        el.addEventListener("click", () => {
            const id = el.getAttribute("data-pub-id");
            const item = games.find(g => g.id === id);
            if (item) {
                openDetailModal(item);
                // Hide edit button in public view
                const editBtn = document.getElementById("detail-edit-btn");
                const favBtn = document.getElementById("detail-fav-btn");
                if (editBtn) editBtn.style.display = "none";
                if (favBtn) favBtn.style.display = "none";
            }
        });
    });
}
