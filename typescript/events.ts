interface EventInterface {
    on(type: string, fn: Function): void
    one(type: string, fn: Function): void
    off(type: string, fn: Function): void
    emit(type: string):void
}


export default class Event implements EventInterface {
  events: {}
  constructor() {
    this.events  = {}
  }

  on(type: string, fn: Function) {
      if (this.events[type]) {
          return this.events[type].push(fn);
      }
      this.events[type] = [];
      this.events[type].push(fn);
  }
  one(type: string, fn: Function) {
      this.on(type, function on(...args) {
          this.off(type, on);
          fn.apply(this, args);
      });
  }
  off(type: string, fn: Function) {
      const events = this.events[type];
      if (events) {
          if (fn) {
              const len = events.length;
              for (let i = 0; i < len; i++) {
                  if (events[i] === fn) {
                      events.splice(i, 1);
                  }
              }
          } else {
              this.events[type] = [];
          }
      }
  }
  emit(type, ...args) {
      const events = this.events[type];
      const len = events.length;
      for (let i = 0; i < len; i++) {
          events[i].apply(this, args);
      }
  }
}
