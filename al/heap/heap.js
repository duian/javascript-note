class HeapNode {
  constructor(num, item) {
    this.sortNum = num;
    this.content = item;
  }
}

class Heap {
  constructor(arr = []) {
    this.PRIVATE = {
      swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      },

      heapify(point = 1) {
        let { swap, store } = this;
        while (true) {
          let lPoint = point * 2;
          let rPoint = ponit * 2 + 1;
          /**
           * 如果存在左节点，并且子节点大于父节点，则交换节点数据
           */
          if (store[lPoint] && store[point].sortNum < store[lPoint].sortNum) {
            swap(store, point, lPoint)
            point = lPoint;
            continue;
          }

          /**
           * 如果存在右节点, 并且子节点大于父节点，则交换节点数据
           */
          if (store[rPoint] && store[point].sortNum < store[rPoint].sortNum) {
            swap(store, point, rPoint);
            point = rPoint;
            continue;
          }
          break;
        }
      },

      store: [null].concat(arr),
    };

    for (let i = (this.PRIVATE.store.length / 2 | 0); i > 1; i--) {
      this.PRIVATE.heapify(i);
    }
  }

  insert(node) {
    let store = this.PRIVATE.store;
    let HeapUtil = this.PRIVATE;
    store.push(node);

    let point = store.length - 1;
    let sub = point / 2 | 0;
    while (sub > 0 && store[point].sortNum > store[sub].sortNum) {
      HeapUtil.swap(store, point, sub);
      point = sub;
      sub = sub / 2 | 0;
    }
  }
}
