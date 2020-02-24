import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todosReducer from './features/todos/todos.slice';
import filterReducer from './features/filters/filters.slice';

import App from './components/App';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
