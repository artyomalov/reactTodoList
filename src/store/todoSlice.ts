import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoType } from '../types/todoType';
import GetRequestDataType from '../types/getRequestDataType';
import CompleteAllTodosTogglerType from '../types/CompleteAllTodosTogglerType';

type TodosState = {
  todos: TodoType[];
  todosTotalCount: number;
  activeTodosCount: number;
  pagesCount: number;
  someTodosCompleted: boolean;
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
  activeTodosCount: number;
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

type UpdateTodoPayloadType = {
  id: string;
  text: string;
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getAllTodos: (state, action: PayloadAction<GetRequestDataType>) => {
      state.todos = action.payload.todos;
      state.todosTotalCount = action.payload.paginationData.todosTotalCount;
      state.activeTodosCount = action.payload.paginationData.activeTodosCount;
      state.pagesCount = action.payload.paginationData.pagesCount;
      state.someTodosCompleted =
        action.payload.paginationData.someTodosCompleted;
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

    updateTodo: (state, action: PayloadAction<UpdateTodoPayloadType>) => {
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
      state.activeTodosCount = action.payload.activeTodosCount;
    },

    deleteTodo: (
      state,
      action: PayloadAction<{
        _id: string;
        pagesCount: number;
        activeTodosCount: number;
        todosTotalCount: number;
      }>
    ) => {
      const isDeletedElementIndex = state.todos.findIndex(
        (todo) => todo._id === action.payload._id
      );
      state.todos.splice(isDeletedElementIndex, 1);
      state.activeTodosCount = action.payload.activeTodosCount;
      state.pagesCount = action.payload.pagesCount;
      state.todosTotalCount = action.payload.todosTotalCount;
    },
    removeAllCompleted: (state, action: PayloadAction<GetRequestDataType>) => {
      state.todos = action.payload.todos;
      state.todosTotalCount = action.payload.paginationData.todosTotalCount;
      state.activeTodosCount = action.payload.paginationData.activeTodosCount;
      state.pagesCount = action.payload.paginationData.pagesCount;
      state.someTodosCompleted =
        action.payload.paginationData.someTodosCompleted;
    },

    completeAllTodosToggler: (
      state,
      action: PayloadAction<CompleteAllTodosTogglerType>
    ) => {
      state.todos = action.payload.todos;
      state.todosTotalCount = action.payload.paginationData.todosTotalCount;
      state.activeTodosCount = action.payload.paginationData.activeTodosCount;
      state.pagesCount = action.payload.paginationData.pagesCount;
      state.someTodosCompleted = action.payload.paginationData.someTodosCompleted;
    },

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
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
} = actions;
export default reducer;

export type { TodosState };
