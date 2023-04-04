import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { todoType } from '../types/todoType';

type todosState = {
  todos: Array<todoType>;
  filter: string;
};

const initialState: todosState = {
  todos: [],
  filter: 'all',
};

type updateTodoPayloadType = {
  id: string;
  text: string;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoType>) => {
      state.todos.push(action.payload);
    },

    updateTodo: (state, action: PayloadAction<updateTodoPayloadType>) => {
      const updatedTodo: todoType | undefined = state.todos.find(
        (todo: todoType) => todo.id === action.payload.id
      );
      if (updatedTodo) {
        updatedTodo.text = action.payload.text;
      }
    },

    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      const updatedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (updatedTodo) {
        updatedTodo.completed = !updatedTodo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const isDeletedElementIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload
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

export type { todosState };
