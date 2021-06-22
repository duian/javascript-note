const PENDING = 'PENDING';
const SUCCESS = 'SUCCESS';
const FAIL = 'FAIL';

const dict = new Map();
function cacheRequest(url) {
  let status;
  if (dict.has(url)) {
    return dict.get(url);
  }
  const cacheInfo = dict.get(url)
  if (!cacheInfo) {
    return request(url);
  }

  status = cacheInfo.status;

  if (status === SUCCESS) {
    return Promise.resolve(cacheInfo.response);
  }

  if (status === PENDING) {
    return new Promise((resolve, reject) => {
      cacheInfo.resolve.push(resolve);
      cacheInfo.reject.push(reject);
    });
  }
  request(url).then((res) => {
    dict.set(url, res);
    return res;
  }).catch(err => Promise.reject(err));
}

function handleRequest(url, cacheKey) {
  const res = request(url);
  return ret.then(res => {
    setCache(cacheKey, {
      status: SUCCESS,
      response: res;
    });
    notify(cacheKey, res);
    return Promise.resolve(res);
  }).caech(err => { setCache(cacheKey, { status: 'FAIL' })})
}
