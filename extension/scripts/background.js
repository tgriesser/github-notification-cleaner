//for listening any message which comes from runtime
browser.runtime.onMessage.addListener(msg => {
  browser.tabs.executeScript(null, { file: "scripts/clearItems.js" }).then(() =>
    browser.tabs.executeScript({
      code: `clearItems("${msg.clear}")`
    })
  );
});
