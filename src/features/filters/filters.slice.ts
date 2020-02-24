import { createSlice } from '@reduxjs/toolkit';
import { VisibilityFilter } from './filter.model';

const slice = createSlice({
  name: 'filter',
  initialState: VisibilityFilter.ALL,
  reducers: {
    setVisibilityFilter(_, action: { payload: number }) {
      return action.payload;
    }
  }
});

export const { setVisibilityFilter } = slice.actions;
export default slice.reducer;
