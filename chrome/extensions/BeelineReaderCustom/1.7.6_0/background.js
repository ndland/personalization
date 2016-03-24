function init(tab) {
  chrome.tabs.executeScript(tab.id, { file: "vendor/jquery-2.1.3.min.js" });

  [
    "vendor/spectrum.js",
    "vendor/magnific-popup/jquery.magnific-popup.min.js",
    "vendor/readability.js",
    "chrome.js"
  ].forEach(function(path) {
    chrome.tabs.executeScript(tab.id, { file: path });
  });

  chrome.tabs.executeScript(tab.id, { code: "setTimeout(function() { BeeLineReaderChrome.start(); }, 50);" });
}

chrome.browserAction.onClicked.addListener(init);
