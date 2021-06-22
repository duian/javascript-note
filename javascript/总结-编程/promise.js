const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return new TypeError('detect chain call promise <#Promise>');
  }

  let called;

  if ((x !== null && typeof x === 'object') || typeof x === 'function') {
    try {
      let then = x.then;

      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if (called) return;
          called = false;
          reject(r)
        })
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x);
  }
};

class Promise {
  static resolve(data) {
    return new Promise((resolve) => {
      resolve(data);
    })
  }

  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    })
  }

  static all(values) {
    if (!Array.isArray(values)) {
      return new TypeError(`TypeError: ${value} is not array`);
    }

    return new Promise((resolve, reject) => {
      let resultArr = [];
      let orderIndex = 0;

      const processResultBykey = (value, index) {
        resultArr[index] = value;
        if (++orderIndex === values.length) {
          resolve(resultArr);
        }
      }

      for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value && typeof value.then === 'function') {
          value.then((value) => {
            processResultBykey(value, i);
          })
        } else {
          processResultByKey(value, i);
        }
      }
    })
  }

  static race(values) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < values.length; i++) {
        let val = values[i];
        if (val && typeof val.then === 'function') {
          val.then(resolve, reject);
        } else {
          resolve(val);
        }
      }
    })
  }

  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;

    this.onResolveCallback = [];
    this.onRejectedCallback = [];

    let resolve = (value) => {
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;

        this.onResolveCallback.forEach(fn => fn());
      }
    };

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;

        this.onRejectedCallback.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfill, onReject) {
    const onFulfilled = (typeof onFulfill === 'function') ? onFulfill : v => v;
    const onRejected = (typeof onReject === 'function') ? onReject : err => { throw err };

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      if (this.status === PENDING) {
        this.onResolveCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });

        this.onRejectedCallback.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }

  catch(errCallback) {
    return this.then(null, errCallback);
  }

  finally(callback) {
    return this.then(((value) => {
      return Promise.resolve(callback()).then(() => value);
    }, (reason) => {
      return Promise.resolve(callback()).then(() => {throw reason});
    })
  }
}
