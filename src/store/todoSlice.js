import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const updatedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      updatedTodo.text = action.payload.text;
    },
    toggleTodoCompleted: (state, action) => {
      const updatedTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      updatedTodo.completed = !updatedTodo.completed;
    },
    deleteTodo: (state, action) => {
      const isDeletedElementIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(isDeletedElementIndex, 1);
    },
    removeAllCompleted: (state) =>
      state.todos.filter((todo) => !todo.completed),
    setAllTodosUncompleted: (state) => {
      state.todos.map((todo) => (todo.completed = false));
    },
    completeAllTodos: (state) => {
      state.todos.map((todo) => {
        if (todo.completed) {
          return;
        }
        todo.completed = !todo.completed;
      });
    },
  },
});

export const {
  addTodo,
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
  removeAllCompleted,
  setAllTodosUncompleted,
  completeAllTodos,
} = todoSlice.actions;
export default todoSlice.reducer;

// const findTodo = (arr, id) => {
//   const halfOfArray = arr.slice(0, Math.round(arr.length / 2));
//   let findedEl = halfOfArray.find((el)=>el.id===id)
//   if(findedEl===undefined) {
//     secondHalfOfArray = arr.slice(Math.round(arr.length/2, arrLength))
//     return findedEl = findTodo(secondHalfOfArray, id)
//   }
//   return findedEl
// };
