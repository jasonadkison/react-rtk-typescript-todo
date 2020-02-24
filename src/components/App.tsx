import React from 'react';
import FilterList from '../features/filters/FilterList';
import NewTodo from '../features/todos/NewTodo';
import TodoList from '../features/todos/TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
      <FilterList />
    </div>
  );
}

export default App;
