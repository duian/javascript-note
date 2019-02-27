var simpleRequest = function (opts) {
  var method = opts.method || 'GET';
  var url = opts.url || '';

  var request = new XMLHttpRequest();

  request.open(method, url);

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status >= 200 || this.status < 300) {
        console.log('ajax success');
      } else {
        console.lor('ajax error');
      }
    }
  }

  request.send();
}
