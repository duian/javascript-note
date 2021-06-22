// 判断 c 是不是 contructor 的实例， c.__proto__ = contructor.prototype
function _instanceOf(target, origin) {
  if (target === null || typeof target !== 'object') return false;

  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
