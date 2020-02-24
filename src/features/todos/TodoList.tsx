import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Todo } from './todo.model';
import { TodosState, toggleTodo } from './todos.slice';
import { VisibilityFilter } from '../filters/filter.model';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const selectTodos = (state: { todos: TodosState }) => state.todos;
const selectFilter = (state: { filter: number }) => state.filter;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilter.ALL:
        return todos;
      case VisibilityFilter.COMPLETED:
        return todos.filter(t => t.completed);
      case VisibilityFilter.ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        throw new Error(`unkown filter: ${filter}`);
    }
  }
);

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <input
            type="checkbox"
            id={`complete${todo.id}`}
            checked={todo.completed}
            readOnly
          />
        </li>
      ))}
    </ul>
  );
}

interface RootState {
  todos: TodosState;
  filter: number;
}

export default connect(
  (state: RootState) => ({ todos: selectVisibleTodos(state) }),
  { toggleTodo },
)(TodoList);
