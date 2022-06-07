class HashTable {
  constructor() {
    this.store = Object.create(null);
  }

  hash(str) {
    let len = str.length;
    let hash = len;
    for (let i = 0; i < len; i++) {
      hash = ((hash << 5) ^ (hash >> 27)) ^ str.charCodeAt(i);
    }

    return hash % 0x7FFFFFFF;
  }

  isCresh(item) {
    return Object.prototype.toString.call(item) === '[object Map]';
  }

  put(item) {
    if (typeof item.key !== 'string') {
      throw 'item must have key';
    }

    let hash = this.hash(item.key);

    let cresh = this.store[hash];

    if (cresh) {
      if (cresh.key === item.key) {
        this.store[hash] = item;
        return null;
      }

      if (!this.isCresh(cresh)) {
        this.store[hash] = new Map();
      }

      this.store[hash].set(item.key, item);
    } else {
      this.store[hash] = item;
    }
  }

  get(key) {
    let hash = this.hash(key);
    let value = this.store[hash] || null;
    if (this.isCresh(value)) {
      return value.get(key);
    } else {
      return value;
    }
  }

  remove(key) {
    let hash = this.hash(key);
    let value = this.store[hash];
    if (!value) {
      return null;
    }
    if (this.isCresh(value)) {
      value.delete(key);
    } else {
      delete this.store[hash];
    }
  }

  clear() {
    this.store = {};
  }
}
