import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: 'all' },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const { actions, reducer } = filterSlice;

export const { setFilter } = actions;
export default reducer;
