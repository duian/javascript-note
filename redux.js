## Introduce
```
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


let store = createStore(counter);

store.describe(() => {
  console.log(store.getState());
})
store.dispatch({ type: 'INCREMENT' });

```

const createStre = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter( l => l !== listener);
    }
  }

  dispatch({});

  return { getState, dispatch, subscribe };
}

const combineReducers = (reducers) => {
  return {state = {}, action} => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};


const counter = (state = 0, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

expect(counter(0, { type: 'INCREMENT' })).toEqual(1);

expect(counter(1, { type: 'INCREMENT' })).toEqual(2);

expect(counter(2, { type: 'DECREMENT'})).toEqual(1);

expect(counter(1, { type: 'DECREMENT' })).toEqual(0);

expect(counter(1, { type: 'SOMETHING' })).toEqual(1);

expect(counter(undefined, {})).toEqual(0);

console.log('tests pass!');