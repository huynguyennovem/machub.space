# Screenshots

The "Screenshots" section on the home page stays hidden until this folder lists images.

1. Capture the app window (Cmd+Shift+4, then Space, then click the window) in light mode, ideally 2x.
2. Save the PNGs here, for example:
   - `device-logs.png`
   - `package-analyzer.png`
   - `aab-to-apk.png`
   - `payload-decoder.png`
   - `screenshot-ocr.png`
   - `git-clone.png`
3. List them in `index.json`, in display order:

```json
[
  { "file": "device-logs.png", "alt": "Device Logs streaming adb logcat" },
  { "file": "aab-to-apk.png", "alt": "AAB to APK with Convert & Install" }
]
```
