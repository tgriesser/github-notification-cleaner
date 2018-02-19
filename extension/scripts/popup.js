browser.tabs.query({ active: true, currentWindow: true }).then(function(tabs) {
  if (tabs.length > 0 && tabs[0].url.startsWith("https://github.com")) {
    const url = tabs[0].url.split("?")[0];
    if (url.endsWith("/notifications")) {
      document.querySelector("#githubActions").style.display = "";
      return;
    }
  }
  document.querySelector("#disabledAlert").style.display = "";
});

document.querySelector("#clear-merged").addEventListener(
  "click",
  () => {
    browser.runtime.sendMessage({ clear: "merged" });
  },
  false
);

document.querySelector("#clear-closed").addEventListener(
  "click",
  () => {
    browser.runtime.sendMessage({ clear: "closed" });
  },
  false
);

document.querySelector("#clear-all").addEventListener(
  "click",
  () => {
    browser.runtime.sendMessage({ clear: "all" });
  },
  false
);
