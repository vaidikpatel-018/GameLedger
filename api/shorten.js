module.exports = async (req, res) => {
    // Enable CORS for browsers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const longUrl = req.query.url || (req.body && req.body.url);
    if (!longUrl) {
        return res.status(400).json({ error: 'Missing url parameter' });
    }

    // 1. Try TinyURL
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3500);
        const r = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (r.ok) {
            const shortUrl = await r.text();
            if (shortUrl && shortUrl.startsWith('http')) {
                return res.status(200).json({ shortUrl: shortUrl.trim() });
            }
        }
    } catch (e) {}

    // 2. Fallback to clck.ru
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        const r = await fetch(`https://clck.ru/--?url=${encodeURIComponent(longUrl)}`, {
            signal: controller.signal
        });
        clearTimeout(timeout);
        if (r.ok) {
            const shortUrl = await r.text();
            if (shortUrl && shortUrl.startsWith('http')) {
                return res.status(200).json({ shortUrl: shortUrl.trim() });
            }
        }
    } catch (e) {}

    return res.status(200).json({ shortUrl: longUrl });
};
