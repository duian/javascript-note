var log = {
  send: function() {},
};
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
        // 上报
        log.send('ajax 异常')
      }
    }
  }

  request.send();
}

window.onload = function() {
  console.log('dom is loaded');
  simpleRequest({
    url: '/ajax',
    method: 'GET',
  });
}

// 同一个脚本内的错误
window.onerror = function(msg, path, line, col, error) {
  console.log('error', arguments);
  return true;
}

// 网络请求
window.addEventListener('error', function() {
  console.log('http error', arguments);
  return true;
}, true);

window.addEventListener('unhandledrejection', function (e) {
  e.stopPropagation();
  console.log('promise error', e.reason);
  return true;
})

Promise.reject('promise error');

var $script = document.createElement('script');
$script.setAttribute('crossorigin', 'anonymous');
document.head.appendChild($script);
