const Stack = require('./stack');

class SimpleBrowser {
  constructor() {
    this.normalStack = new Stack();
    this.backStack = new Stack();
  }

  pushNormal(name) {
    this.normalStack.push(name);
    this.backStack.clear();
  }

  back() {
    const value = this.normalStack.pop();
    if (value === -1) {
      console.log('无法后腿')
    } else {
      this.backStack.push(name);
    }
  }

  front() {
    const value = this.backStack.pop();
    if (value === -1) {
      console.log('无法前进');
    } else {
      this.normalStack.push(value);
    }
  }
}
