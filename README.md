# machub.space

Static landing site for **MacHub**, a macOS app with 14 developer tools. Plain HTML, CSS and JS: no build step, no framework, no analytics. Hosted on GitHub Pages at `machub.space` (see `CNAME`). The DMG is served by a Cloudflare Worker from R2, not from this repo.

## Preview locally

```bash
python3 -m http.server 5500
# open http://127.0.0.1:5500
```

## Before the first deploy

1. **DMG download.** Follow [`cloudflare/download-worker/README.md`](cloudflare/download-worker/README.md): create the private R2 bucket, set the Turnstile site key in `wrangler.toml`, `wrangler secret put TURNSTILE_SECRET_KEY`, `wrangler deploy`. Upload the DMG with `scripts/release.sh` in the `mac_apps_kit` repo. Then put the Worker URL (one `https://` line) in [`assets/downloads/macos-dmg.url`](assets/downloads/macos-dmg.url). Until that file has a URL, every download button reads "Download coming soon". Never commit the DMG (`*.dmg` is git-ignored).
2. **Screenshots.** Add PNGs to `assets/images/screenshots/` and list them in `index.json` (see the README there). The home page section stays hidden until the list is non-empty. The window on the home page is a stylized mock, not a real screenshot.
3. **GitHub Pages.** Repo Settings, Pages, deploy from branch `main` (root), custom domain `machub.space`, enforce HTTPS. Point the domain's DNS at GitHub Pages.
4. **app-ads.txt.** It reuses the AdMob publisher lines from the other sites. MacHub shows no ads, so delete the file if you do not want it.

## When you release a new version

- Bump `version` in the app's `pubspec.yaml` and run `scripts/release.sh` in `mac_apps_kit`. It uploads the signed, notarized DMG to R2 under the same key (`releases/macos/MacHub.dmg`), so the download link does not change.
- Update the version text in `index.html`, `download/index.html`, `changelog/`, the JSON-LD `softwareVersion` in `index.html`, `llms.txt` and the `index.md` mirrors, and `<lastmod>` in `sitemap.xml`.

## Layout

| Path | Purpose |
|---|---|
| `index.html`, `download/`, `support/`, `privacy/`, `terms/`, `changelog/`, `404.html` | Pages. Each has an `index.md` mirror for AI crawlers. |
| `llms.txt`, `llms-full.txt`, `robots.txt`, `sitemap.xml`, `site.webmanifest` | AI and SEO files. |
| `CNAME`, `.nojekyll`, `app-ads.txt` | Domain, Pages config (`.nojekyll` makes the `.md` files servable), ads verification. |
| `assets/` | `css/style.css`, `js/main.js`, self-hosted Inter fonts, images, `downloads/macos-dmg.url`. |
| `cloudflare/download-worker/` | Worker + R2 + Turnstile download gate. |

Light and dark themes follow the system and can be toggled; the choice is kept in `localStorage`.
