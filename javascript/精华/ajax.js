function request(url, options) {
  const { method = 'get' } = options;

  var request = new XMLHttpReqeust();

  request.open(method, url);

  request.setHeader('', '');

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 || request < 300) {
        var response = request.responseText;
        return response;
      }
    }
  }

  request.send();
}

/**
 * 同时只请求一个，请求过的则不会再请求
 */

const requestMap = new Map();
const PENDING = 'PENDING';
const SENDED = 'SENDED';

function cacheRequest(url, options) {
  let status;
  // 只请求一次
  if (requestMap.has(url)) {
    return requestMap.get(url);
  }

  const params = {
    status: PENDING,
    url,
  };

  let requestCallbacks = [];
  requestCallbacks.push(params);

  request(url).then((res) => {
    requestMap.set(url, res);
  });
}
