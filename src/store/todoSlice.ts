import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../types/todoType';

type TodosState = {
  todos: Array<TodoType>;
  filter: string;
};

const initialState: TodosState = {
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

    getAllTodos: (state, action: PayloadAction<Array<TodoType>>) => {
      state.todos.push(...action.payload)
    },


    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.todos.push(action.payload);
    },

    updateTodo: (state, action: PayloadAction<updateTodoPayloadType>) => {
      const updatedTodo: TodoType | undefined = state.todos.find(
        (todo: TodoType) => todo._id === action.payload.id
      );
      if (updatedTodo) {
        updatedTodo.text = action.payload.text;
      }
    },

    toggleTodoCompleted: (state, action: PayloadAction<string>) => {
      const updatedTodo: TodoType | undefined = state.todos.find(
        (todo) => todo._id === action.payload
      );
      if (updatedTodo) {
        updatedTodo.completed = !updatedTodo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const isDeletedElementIndex = state.todos.findIndex(
        (todo) => todo._id === action.payload
      );
      state.todos.splice(isDeletedElementIndex, 1);
    },
    removeAllCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setAllTodosUncompleted: (state) => {
      state.todos.map((todo) => {return todo.completed = false});
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

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

const { actions, reducer } = todoSlice;
export const {
  getAllTodos,
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

export type { TodosState };
