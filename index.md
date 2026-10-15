# MacHub

> MacHub is a free Mac app with 14 developer tools: device logs, APK/AAB/IPA analyzer, AAB to APK converter, payload decoder, diff, OCR, git clone and more. Local-first, no account, no tracking.

MacHub is a free macOS app (v1.0.0, macOS 12+, Apple Silicon and Intel). Distributed as a DMG from https://machub.space/download/.

## Tools

### Files & Paths

- **Path Checker**: Paste or drop a path and instantly see whether it is a file, a folder or missing. Reveal it in Finder, copy it, and revisit your last 50 checks.
- **File Utilities**: Bookmark the files you edit often, like ~/.zshrc or /etc/hosts, and open them in any app or run a saved shell command on them.
- **Dir Utilities**: Tag and filter your workspace folders, then open them in Finder, VS Code, Cursor, Android Studio, Xcode, IntelliJ, iTerm and more.

### Text & Data

- **Payload Decoder**: Auto-detects and unwraps layered payloads (JWT, JSON, URL encoding, hex, Gzip, Base64) up to eight layers deep, shown as a JSON tree.
- **Data Format**: Pretty-print or minify JSON, XML, HTML, YAML, CSV, query strings, SQL and CSS, with find and a tree view.
- **Text Diff**: Side-by-side diff with line and character-level highlights, next/previous navigation and search.
- **Base64 Image**: Decode one or many base64 strings or data URIs into images you can preview, repair, copy or save in bulk.

### Devices & Packages

- **Device Logs**: Live adb logcat, flutter logs and iOS syslog (devices and simulators) with level, package and text filters.
- **Package Analyzer**: Inspect any APK, AAB or IPA: versions, SDKs, permissions, signing, native libraries, provisioning and a size breakdown.
- **Project Analyzer**: Scan a folder for languages, lines of code, largest files and detected stacks, with a git change summary.
- **AAB to APK**: Convert an Android App Bundle into an installable universal APK with bundletool, then install it on a connected device.

### Utilities

- **Screenshot OCR**: Capture any region and read its text with Apple Vision, on your Mac. Optionally translate it into 15 languages.
- **Custom Commands**: Save the shell commands you keep retyping and run them in the background or in Terminal.
- **Git Clone**: Clone through the right SSH account alias and add web and upstream remotes in one go.

## Privacy

No account, no analytics, no ads. Data stays in local preferences. Network requests happen only when you ask: Google Translate (OCR translation), the GitHub API (fork parent lookup) and the Changelog page. See https://machub.space/privacy/.

## FAQ

### Is MacHub free?

Yes. MacHub is free to download and use.

### Does MacHub collect my data?

No. There is no account, no analytics, no crash reporting and no ads. Your bookmarks, commands and history stay in your Mac’s local preferences. The few network requests the app can make only happen when you ask for them; see [the Privacy Policy](https://machub.space/privacy/).

### Which Macs does it run on?

macOS 12 Monterey or later, on Apple Silicon and Intel. Automatic language detection in Screenshot OCR for Chinese, Japanese and Korean needs macOS 13 or later.

### Why isn’t it on the Mac App Store?

MacHub launches tools such as adb, git and bundletool and reads files you choose, so it runs outside the App Sandbox. That is why it is distributed as a DMG from this site.

### Do I need the Android SDK, Flutter or git installed?

Only for the tools that use them. MacHub looks in the usual locations, shows an install hint when something is missing, and lets you point it at the right file with **Set path…**.

## On this site

- [Download](https://machub.space/download/)
- [Support](https://machub.space/support/)
- [Changelog](https://machub.space/changelog/)
- [Privacy Policy](https://machub.space/privacy/)
- [Terms of Use](https://machub.space/terms/)

## Contact

machub1193@gmail.com
