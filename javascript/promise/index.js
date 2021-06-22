class Promise {
  callbacks = [];
  state = 'pending';
  value = null;

  constructor(fn) {
    fn(this._resolve.bind(this));
  }

  then(onFulfilled) {
    if (this.state === 'pending') {
      this.callbacks.push(onFulfilled);
    } else {
      onFulfilled(this.value);
    }
    return this;
  }

  _resolve(value) {
    this.state = 'fulfilled';
    this.value = value;
    setTimeout(() => {
      this.callbacks.forEach(fn => fn(value));
    });
  }
}
