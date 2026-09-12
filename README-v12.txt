Fitness Stretching Leipzig — Website v12

Changes:
- Unified static translations in content/i18n.json.
- New supplied content/blog.json with six multilingual articles.
- New content/galleries.json controls studio and massage galleries.
- New Google reviews section with API-ready loading and local fallback.
- All JSON files include schemaVersion.
- Site image references are editable in config/site.json and content/galleries.json.

Google reviews:
Set config/site.json -> reviews.apiUrl to the public HTTPS endpoint exposed by the bot/server. The endpoint should return the same shape as content/reviews.json. If it is unavailable, the site uses the fallback file and keeps the Google link visible.
