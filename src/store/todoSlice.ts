import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../types/todoType';
import GetRequestDataType from '../types/getRequestDataType';

type TodosState = GetRequestDataType & {
  filter: string;
  currentPage: number;
};

type AddTodoType = TodoType & {
  activeTodosCount: number;
  pagesCount: number;
  todosTotalCount: number;
};

type ToggleTodoCompletedType = {
  _id: string;
  completed: boolean;
};

const initialState: TodosState = {
  todos: [],
  todosTotalCount: 0,
  activeTodosCount: 0,
  pagesCount: 0,
  filter: 'all',
  currentPage: 1,
  someTodosCompleted: false,
};

type updateTodoPayloadType = {
  id: string;
  text: string;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getAllTodos: (state, action: PayloadAction<GetRequestDataType>) => {
      state.todos = action.payload.todos;
      state.todosTotalCount = action.payload.todosTotalCount;
      state.activeTodosCount = action.payload.activeTodosCount;
      state.pagesCount = action.payload.pagesCount;
      state.someTodosCompleted = action.payload.someTodosCompleted;
    
    },

    addTodo: (state, action: PayloadAction<AddTodoType>) => {
      state.activeTodosCount = action.payload.activeTodosCount;
      state.pagesCount = action.payload.pagesCount;
      state.todosTotalCount = action.payload.todosTotalCount;
      const newTodo = {
        _id: action.payload._id,
        text: action.payload.text,
        completed: action.payload.completed,
      };
      state.todos.unshift(newTodo);

      if (state.todos.length > 5) state.todos.pop();
    },

    updateTodo: (state, action: PayloadAction<updateTodoPayloadType>) => {
      const updatedTodo = state.todos.find(
        (todo) => todo._id === action.payload.id
      );
      if (updatedTodo) {
        updatedTodo.text = action.payload.text;
      }
    },

    toggleTodoCompleted: (
      state,
      action: PayloadAction<ToggleTodoCompletedType>
    ) => {
      const updatedTodo = state.todos.find(
        (todo) => todo._id === action.payload._id
      );
      if (updatedTodo) {
        updatedTodo.completed = action.payload.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<{_id: string, pagesCount:number, activeTodosCount:number, todosTotalCount:number}>) => {
      const isDeletedElementIndex = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      state.todos.splice(isDeletedElementIndex, 1);
      state.activeTodosCount = action.payload.activeTodosCount;
      state.pagesCount = action.payload.pagesCount;
      state.todosTotalCount = action.payload.todosTotalCount;
    },
    removeAllCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },

    completeAllTodosToggler: (state, action: PayloadAction<boolean>) => {
      state.todos.forEach((todo) => {
        todo.completed = action.payload;
      });
    },

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      console.log("update");
      state.currentPage = action.payload;
    },

    setTodosToalCount: (state, action: PayloadAction<number>) => {
      state.todosTotalCount = action.payload;
    },
    setActiveTodosCount: (state, action: PayloadAction<number>) => {
      state.activeTodosCount = action.payload;
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
  setFilter,
  completeAllTodosToggler,
  setCurrentPage,
  setTodosToalCount,
  setActiveTodosCount,
} = actions;
export default reducer;

export type { TodosState };
