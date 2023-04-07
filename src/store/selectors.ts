import { createSelector } from '@reduxjs/toolkit';
import { TodosData } from '../types/todoDataType';
import { TodoType } from '../types/todoType';
import { RootState } from '.';

type SelectAllTodosType = (state: RootState) => TodoType[];
type SelectFilterType = (state: RootState) => string;

const selectAllTodos = (state: RootState) => state.todos.todos;
const selectFilter = (state: RootState) => state.todos.filter;

const selectTodos = createSelector<
  [SelectAllTodosType, SelectFilterType],
  TodosData
>([selectAllTodos, selectFilter], (todos, filter) => {
  const todosCounter: number = todos.length;
  const activeTodos: Array<TodoType> = todos.filter((todo) => !todo.completed);
  const activeTodosCounter: number = activeTodos.length;
  const allTodosCompleted: boolean = activeTodosCounter === 0;
  const someTodosCompleted: boolean = todosCounter - activeTodosCounter > 0;
  const calculatedValues: TodosData = {
    filteredTodos: todos,
    activeTodosCounter,
    todosCounter,
    allTodosCompleted,
    someTodosCompleted,
    filter,
  };

  if (filter === 'active') {
    calculatedValues.filteredTodos = activeTodos;
  }
  if (filter === 'completed') {
    const completedTodos = todos.filter((todo) => todo.completed);
    calculatedValues.filteredTodos = completedTodos;
  }
  return calculatedValues;
});

export default selectTodos;
