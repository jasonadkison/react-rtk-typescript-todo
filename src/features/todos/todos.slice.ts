import { createSlice } from '@reduxjs/toolkit';
import { Todo } from './todo.model';

export type TodosState = Todo[];

let nextId = 0;

const slice = createSlice({
  name: 'todos',
  initialState: [] as TodosState,
  reducers: {
    addTodo: {
      reducer(state: TodosState, action: { payload: { id: number; text: string; } }) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare(text: string) {
        return { payload: { text, id: nextId++ }, meta: null, error: null };
      },
    },
    toggleTodo(state: TodosState, action: { payload: number }) {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = slice.actions;
export default slice.reducer;
