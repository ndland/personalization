var BeeLineChromeUtils = {
  pathCache: {},

  load: function(path, callback) {
    var xhr;
    if (this.pathCache[path]) {
      return typeof callback === "function" ? callback() : void 0;
    } else {
      this.pathCache[path] = true;
      xhr = new XMLHttpRequest();
      xhr.open("GET", chrome.extension.getURL(path), true);
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          eval(xhr.responseText);
          return typeof callback === "function" ? callback() : void 0;
        }
      };
      return xhr.send(null);
    }
  },

  sendGaTrack: function(g, h, i) {
    var a, b, c, d, f, k, l, m, n;
    c = function(e, j) {
      return e + Math.floor(Math.random() * (j - e));
    };
    f = 1000000000;
    k = c(f, 9999999999);
    a = c(10000000, 99999999);
    l = c(f, 2147483647);
    b = (new Date()).getTime();
    d = window.location;
    m = new Image();
    n = '//www.google-analytics.com/__utm.gif?utmwv=1.3&utmn=' + k + '&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=-&utmhn=' + h + '&utmr=' + d + '&utmp=' + i + '&utmac=' + g + '&utmcc=__utma%3D' + a + '.' + l + '.' + b + '.' + b + '.' + b + '.2%3B%2B__utmb%3D' + a + '%3B%2B__utmc%3D' + a + '%3B%2B__utmz%3D' + a + '.' + b + '.2.2.utmccn%3D(referral)%7Cutmcsr%3D' + d.host + '%7Cutmcct%3D' + d.pathname + '%7Cutmcmd%3Dreferral%3B%2B__utmv%3D' + a + '.-%3B';
    return m.src = n;
  }
};