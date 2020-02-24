import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './todos.slice';

interface NewTodoProps {
  addTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = textInputRef.current!.value;
    addTodo(value);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default connect(
  null,
  { addTodo },
)(NewTodo);
