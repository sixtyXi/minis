const resultEl = document.querySelector('.result');
const incrementBtn = document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

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

const store = Redux.createStore(counter);

incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

decrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});

const render = () => {
  resultEl.innerHTML = store.getState().toString();
};

render();
store.subscribe(render);
