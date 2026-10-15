# MacHub DMG download Worker

The **marketing site** (`/download/`) is the download page. This Worker is **file-or-captcha only**: it streams the private R2 DMG, or returns Turnstile HTML when that IP has used its free allowance. Do not add a marketing landing on workers.dev.

**3** file downloads per client IP per hour, then a **visible** Turnstile checkbox. After a successful `siteverify`, the Worker grants **2** more slots in the same window (`FREE_LIMIT`, `WINDOW_SECONDS`, `PASS_DOWNLOADS`) and returns **200 HTML** with a **Download .dmg** button. The file is not 302'd and is not auto-downloaded. One Durable Object per IP (`CF-Connecting-IP`; IPv6 keyed as `/64`). No landing page, no `?download=1`, no cookies.

| | |
|---|---|
| Under quota | `200` `application/octet-stream`, `Content-Disposition: attachment` |
| Over quota | `403` Turnstile HTML (visible Managed widget) |
| After captcha | `200` HTML “Verified” + Download .dmg (same file URL). Next GET streams the file. |
| Invalid token POST | `403` challenge HTML again |
| HEAD | object headers only; does not count |

Paths: `/releases/macos/MacHub.dmg`, `/MacHub.dmg`.

## Turnstile widget (dashboard)

Create a Turnstile widget for `machub.space` and the Worker hostname, then put its public site key in `TURNSTILE_SITE_KEY` in `wrangler.toml`.

The Cloudflare Turnstile **widget type must be Managed**, not Invisible.

- Invisible widgets have no checkbox, even with `appearance: always`. They auto-pass in the background — that used to auto-submit the form and 302 the DMG.
- Managed + this Worker’s `appearance: "always"`, `size: "normal"`, `execution: "render"` shows a visible checkbox. The page never auto-submits or auto-downloads.

In the dashboard: Turnstile → this widget → Widget Type → **Managed**.

## Deploy

Log wrangler into the MacHub Cloudflare account once (the profile is bound to `MAC-HUB-PROJECT`, so other projects keep their own login):

```bash
npx wrangler auth create machub
npx wrangler auth activate machub    # run from MAC-HUB-PROJECT
```

Register the account's `workers.dev` subdomain (`machub`) in the dashboard under Workers & Pages, then:

```bash
cd cloudflare/download-worker
npm install
# bucket `machub-dmg` already exists in the MacHub account (keep it private)
npx wrangler deploy
npx wrangler secret put TURNSTILE_SECRET_KEY        # first time only; paste the secret at the prompt
```

The DMG is uploaded by `scripts/release.sh` in the `mac_apps_kit` repo (no R2 keys involved). Paste the Worker file URL, `https://machub-macos-dmg.machub.workers.dev/releases/macos/MacHub.dmg`, into [`assets/downloads/macos-dmg.url`](../../assets/downloads/macos-dmg.url) once the first DMG is uploaded. Keep the R2 bucket private: never enable the public `r2.dev` URL or a custom domain on it, because that bypasses the rate limit.

## Test

```bash
URL="https://machub-macos-dmg.machub.workers.dev/releases/macos/MacHub.dmg"

curl -sS -D - -o /tmp/machub.bin -H 'Accept: text/html' "$URL" | head
# Expect: 200 application/octet-stream (or 403 captcha HTML if quota is spent)
# Not a marketing page with a Download button.

for i in 1 2 3 4; do
  curl -sS -o /dev/null -w "req $i: %{http_code} %{content_type}\n" "$URL"
done
# Expect: 200, 200, 200, 403 (Turnstile HTML)

# Over-quota GET must be 403 HTML containing the Turnstile script/container:
curl -sS -D - -o /tmp/machub-challenge.html "$URL"
# Look for: HTTP/2 403, text/html, turnstile, id="cf-turnstile"

# Invalid token stays on the challenge (no 302, no DMG):
curl -sS -D - -o /tmp/machub-post.html -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  --data 'cf-turnstile-response=not-a-real-token' \
  "$URL"
# Expect: 403 text/html, still the challenge page
```
