import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

// const rootReducer = combineReducers({
//   todos: todoReducer,
// });

const store = configureStore({
  reducer: { todos: todoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
