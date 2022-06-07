class HashTable {
  constructor() {
    this.table = [];
  }


  loseHashCode(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash%37;
  }

  put(key, value) {
    var position = this.loseHashCode(key);
    this.table[position] = value;
  }

  remove(key) {
    this.table[this.loseHashCode(key)] = undefined;
  }

  get(key) {
    return this.table[this.loseHashCode(key)];
  }
}
