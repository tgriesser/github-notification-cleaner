## Github Notification Cleaner

One click removes GitHub notifications for PR's that have been merged, issues that have been closed, or both!

Doesn't require any special permissions, uses the [activeTab](https://developer.chrome.com/extensions/activeTab) to only enable on click.

Uses [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) to enable install in Firefox, Edge, and Chrome

Build / Install Locally:

```
cd extension
yarn
```

Chrome:
[chrome://extensions](chrome://extensions)
Enable "Developer Mode"
Click "Load Unpacked Extension"

Firefox:
[about:debugging](about:debugging)
"Load Temporary Add-on"
