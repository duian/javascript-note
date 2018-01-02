[参考][https://vuex.vuejs.org/en/testing.html]
## mutations
mutations 本身是一个接受传参，修改属性的简单函数，只需要测试state经过一个具体的mutation后，值是否是预期的就可以了
```javascript
const state = {};

export const mutations = {
  increment: state => state.count++
};

export default new Vuex.Store({
  state,
  mutations,
});
```

```javascript
import { expect } from 'chai';
import { mutations } from './store';

const { increment } = mutations;

describe('mutations', () => {
  it('increment', () => {
    const state = { count: 0 };
    increment(state);
    expect(state.count).to.equal(1);
  })
})
```

## actions
1. 需要通过inject-loader去拦截api请求，改成setTimeout的回调，同时mock api的response数据
2. 需要mock commit方法， 去检测commit是否正确执行
```javascript
import shop from '../api/shop';
export const getAllProducts = ({ commit }, () => {
  commit('REQUEST_PRODUCTS');
  shop.getProducts(products => {
    commit('RECEIVE_PRODUCTS', products);
  });
})
```





```javascript
import { expect } from 'chai';
import actionsInjector from 'inject!./actions';
// 覆盖../api/shop文件的getProducts方法
const actions = actionInjector({
  '../api/shop': {
    getProducts(cb) {
      setTimeout(() => cb(), 100);
    }
  }
})

const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];
    try {
      expect(mutation.type).to.equal(type);
      if (payload) {
        expect(mutation.payload).to.deep.equal(payload);
      }
    } catch (error) {
      done(error);
    }

    count++;
    if (count >= expectMutations.length) {
      done();
    }
  }

  // call the action with mocked store and arguments
  action({ commit, state }, payload);

  if (expectedMutations.length === 0) {
    expect(count).to.equal(0);
    done();
  }
}

actions.getAllProducts({ commit }, data);
describe('actions', () => {
  it('getAllProducts', done => {
    testAction(actions.getAllProducts, null, {}, [
      { type: 'REQUEST_PRODUCTS' },
      { type: 'RECEIVE_PRODUCTS', payload: /* mocked response */}
    ], done)
  })
})
```


## getters
getters和mutations一毛一样， 主要根据传参，判断返回值是否一致
```javascript
export const getters = {
  filterdProducts(state, { filterCategory }) {
    return state.products.filter(product => {
      return product.category === filterCategory;
    });
  }
}
```

```javascript
import { expect } from 'chai';
import { getters } from './getters';

describe('getters', () => {
  it('filteredProducts', () => {
    const state = {
      products: [
        { id: 1, title: 'Apple', category: 'fruit' },
        { id: 2, title: 'Orange', category: 'fruit' },
        { id: 3, title: 'Carrot', category: 'vegetable' }
      ],
    };

   // mock getter
    const filterCategory = 'fruit'

    const result = getters.filterProducts(state, { filterCategory });
    expect(result).to.deep.equal([
      { id: 1, title: 'Apple', category: 'fruit' },
      { id: 2, title: 'Orange', category: 'fruit' }
    ])
  })
})
```