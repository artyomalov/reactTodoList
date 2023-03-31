import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filter: 'all',
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
    removeAllCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setAllTodosUncompleted: (state) => {
      state.todos.map((todo) => (todo.completed = false));
    },
    completeAllTodos: (state) => {
      state.todos.forEach((todo) => {
        if (todo.completed) {
          return;
        }
        todo.completed = !todo.completed;
      });
    },

    completeAllTodosToggler: (state) => {
      const activeTodosCount = state.todos.filter(
        (todo) => !todo.completed
      ).length;
      console.log(activeTodosCount);
      const allTodosCompleted = activeTodosCount === 0;
      if (allTodosCompleted) {
        state.todos.forEach((todo) => {
          todo.completed = false;
        });
        return;
      }

      state.todos.forEach((todo) => {
        if (todo.completed) {
          return;
        }
        todo.completed = !todo.completed;
      });
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const { actions, reducer } = todoSlice;
export const {
  addTodo,
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
  removeAllCompleted,
  setAllTodosUncompleted,
  completeAllTodos,
  setFilter,
  completeAllTodosToggler,
} = actions;
export default reducer;
