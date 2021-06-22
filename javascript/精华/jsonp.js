/**
 * 通过 script 标签的形式访问跨域的接口
 * 1.本地生成对应的函数名，通过 query 的形式访问对应接口
 * 2.创建 script 标签， 加载到 html 中
 * 3.加入 Promise
 */
function getJsonpCallbackName() {
  return `jsonp_${new Date.getNow()}_${Math.ramdon() * 1000000}`;
}

function jsonp(url, options) {
  return new Promise((resolve, reject) => {
    const jsonpCallback = getJsonpCallbackName();

    window[jsonpCallback] = (data) => {
      delete jsonpCallback;
      document.removeChild($script);
      return resolve(data);
    }

    $script.onerror = (e) => {
      reject(e);
    }
    var $script = document.createElement('script');
    $script.setAttribute('type', 'text/javascript');
    $script.setAttribute('src', `${url}?callback=${jsonpCallback}`);
    document.body.appendChild($script);
  })

}
