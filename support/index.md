# MacHub Support

> Help, FAQ and contact for MacHub.

Find a quick answer below, or email us and include your macOS version and the tool you were using.

### Contact

Questions, bug reports and feature requests are welcome.

[Email support](mailto:machub1193@gmail.com)

### Download

Get the latest MacHub for macOS 12 or later.

[Download .dmg](https://machub.space/download/)

### macOS says MacHub can’t be opened or is from an unidentified developer

MacHub is notarized by Apple, so macOS only asks you to confirm the first launch. If it still blocks the app, right-click MacHub in Applications and choose **Open**, or use **Open Anyway** in System Settings › Privacy & Security. See [the download page](https://machub.space/download/#gatekeeper).

### A tool says adb, flutter, bundletool, git or java was not found

MacHub checks common install locations (Homebrew, the Android SDK, your login shell) and remembers what it finds. If a tool is installed somewhere unusual, click **Set path…** in the banner and enter its full path. Homebrew users can run `brew install bundletool` or `brew install openjdk`.

### Screenshot OCR captures nothing or a blank image

Allow MacHub under **System Settings › Privacy & Security › Screen Recording**, then quit and reopen MacHub. Automatic language detection for Chinese, Japanese and Korean needs macOS 13 or later; macOS 12 reads Latin script only.

### MacHub can’t open one of my bookmarked files

macOS protects some locations. Grant MacHub **Full Disk Access** in System Settings › Privacy & Security, then try again.

### Convert & Install fails with INSTALL_FAILED_UPDATE_INCOMPATIBLE

The app on your device was signed with a different key than the one MacHub used. Uninstall the existing app from the device, or enable **Use custom keystore** and sign with the original key.

### The device list is empty in Device Logs or Convert & Install

Connect the device, enable USB debugging, accept the prompt on the device, then click the refresh button next to the device picker. Devices marked unauthorized or offline cannot be used until they are authorized.

### Which Macs are supported?

macOS 12 Monterey or later, on Apple Silicon and Intel.

### How do I reset MacHub?

Quit MacHub, then run `defaults delete com.app.machub` in Terminal. This removes bookmarks, saved commands, history, tool paths and preferences. To uninstall, also drag MacHub to the Trash.

---

*Markdown version of [https://machub.space/support/](https://machub.space/support/) for AI/LLM consumption.*
