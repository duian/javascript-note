class Event {
  constructor() {
    this.events = {};
  }

  on(name, fn) {
    if (this.events[name]) {
      this.events[name].push(fn);
    } else {
      this.events[name] = [fn];
    }
  }

  one(name, fn) {
    const only = () => {
      fn();
      this.off(name, only);
    }

    this.on(name, only);
  }

  emit(name, ...args) {
    if (this.events[name]) {
      this.events[name].forEach(fn => fn.call(this, ...args));
    }
  }

  off(name, listener) {
    if (this.events[name]) {
      this.events[name] = this.events[name].filter(fn => fn !== listener);
    }
  }
}
