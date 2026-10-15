# MacHub Privacy Policy

> No account, no analytics, no ads. Last updated October 7, 2026.

**Last updated:** October 7, 2026

This policy explains what the MacHub app and the machub.space website do with information. In short: the app has no account, no analytics, no advertising and no tracking.

## 1. Overview

MacHub is a desktop toolbox for macOS. It works with files, folders, text and command-line tools that you choose. The developer does not receive that content.

## 2. Data stored on your Mac

MacHub saves the following in your Mac’s local preferences (`~/Library/Preferences/com.app.machub.plist`):

- Bookmarked files and folders, tags, and the custom editor or command you attach to them
- Saved Custom Commands
- Last-used folders, tool paths, theme and sidebar settings
- History for Path Checker, Payload Decoder, Data Format and Text Diff (up to 50 entries each)

History entries can contain the full text you pasted, including tokens or other secrets. Delete the preferences to remove everything (see [How do I reset MacHub?](https://machub.space/support/#reset)).

MacHub also writes temporary files, for example the Screenshot OCR capture and images you copy from Base64 Image, to your Mac’s temporary folder. Files you export or save go where you choose.

## 3. Network requests

MacHub does not check for updates and does not contact the developer. The app makes a network request only when you use one of these features:

- **Screenshot OCR › Translate:** sends the recognized text and the target language to Google Translate. Text recognition itself runs on your Mac.
- **Git Clone › upstream remote:** for github.com repositories, asks the GitHub API (unauthenticated) for the fork’s parent repository.
- **Settings › Changelog:** loads the changelog page in an in-app web view.

Those services handle data under their own privacy policies.

## 4. Tools you run

Git Clone, Device Logs, AAB to APK, Custom Commands and similar tools run programs such as `git`, `adb` and `bundletool` with your user permissions. Any network access by those programs, or by commands you write, is governed by the programs and services involved. MacHub reads host aliases from `~/.ssh/config` (not your keys) and checks for `~/.android/debug.keystore`.

## 5. Permissions

- **Screen Recording:** to capture the region you select for OCR, only when you start a capture
- **Automation (Apple Events):** to open Terminal for commands and as a Finder fallback
- **Full Disk Access:** optional, only for files macOS protects

## 6. Clipboard

MacHub reads the clipboard only when you press a Paste button. It writes to the clipboard when you press a Copy action. It never monitors the clipboard.

## 7. Keystore passwords

Passwords you enter for a custom keystore are not saved. They are passed to bundletool as command-line arguments while a conversion runs, so other processes on your Mac could briefly see them. They are masked in MacHub’s on-screen log.

## 8. Analytics, ads and accounts

The app contains no analytics, crash-reporting or advertising SDKs, and requires no account.

## 9. This website

machub.space is a static site hosted on GitHub Pages, which may log visitor IP addresses under GitHub’s privacy statement. The site sets no cookies and runs no analytics. Your light or dark theme choice is stored in your browser’s local storage.

The DMG is served through a Cloudflare Worker. To limit abuse it uses your IP address to count downloads (a small number per hour), and may ask you to complete a Cloudflare Turnstile check. Cloudflare processes that data under its own policies.

## 10. Children

MacHub is a developer tool and is not directed at children under 13.

## 11. Changes

We may update this policy. The date at the top shows the latest revision.

## 12. Contact

Questions: [machub1193@gmail.com](mailto:machub1193@gmail.com)

---

*Markdown version of [https://machub.space/privacy/](https://machub.space/privacy/) for AI/LLM consumption.*
