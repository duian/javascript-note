```javascript
const store = new Vuex.Store({
  
  /* store */
  store: {
    count: 1,
  },

  getters: {
    newCount: state => {
      return state.count + 10;
    }
  },

  /* 仅支持同步 */
  mutation: {
    increase(state, payload) {
      // state.count++;
      state.count += pay.load.n;
    }
  },

  /* reducer */
  actions: {
    increase({ commit }, payload) {
      commit('increse');
    }
  },

});

/* mutations 调用方法 */

store.commit('increase', {
  n: 10,
});

store.commit({
  type: 'increase',
  n: 10,
});


/* actions 调用方法 */
store.dispatch('increase');
store.dispatch({
  type: 'increase',
  n: 10,
})
```


```javascrpt

```