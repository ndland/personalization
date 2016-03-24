(function() {
  chrome.storage.sync.get(["disableCustomSites"], function(answers) {
    if (chrome.runtime.lastError) {
      BeeLineChromeUtils.sendGaTrack('UA-24181354-8', 'www.beelinereader.com', "/chrome/content-script/" + encodeURIComponent(chrome.runtime.lastError.message));
    }

    var onBeeLineWebsite = document.location.href.match(/^https?:\/\/(www\.)?beelinereader\.com/i);
    if(onBeeLineWebsite || !answers.disableCustomSites) {

      var loader = function(deps, callback) {
        var count = deps.length;
        var checkCount = function() {
          count--;
          if (count == 0) {
            callback();
          }
        };

        deps.forEach(function(path) {
          BeeLineChromeUtils.load(path, checkCount);
        });
      };

      loader(["vendor/jquery-2.1.3.min.js"], function() {
        loader(["chrome.js"], function() {
          BeeLineReaderChrome.shouldAutoStart(function(shouldLaunch) {
            if (shouldLaunch) {
              loader(["vendor/spectrum.js", "vendor/magnific-popup/jquery.magnific-popup.min.js"], function() {
                BeeLineReaderChrome.autoStart();
              });
            }
          });
        });
      });

    }
  });
})();
