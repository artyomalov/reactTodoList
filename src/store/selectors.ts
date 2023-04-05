import { createSelector } from '@reduxjs/toolkit';
import { todosData } from '../types/todoDataType';
import { todoType } from '../types/todoType';
import { RootState } from '.';

type selectAllTodosType = (state: RootState) => todoType[];
type selectFilterType = (state: RootState) => string;

const selectAllTodos = (state: RootState) => state.todos.todos;
const selectFilter = (state: RootState) => state.todos.filter;

const selectTodos = createSelector<
  [selectAllTodosType, selectFilterType],
  todosData
>(selectAllTodos, selectFilter, (todos, filter) => {
  const todosCounter = todos.length;
  const activeTodos = todos.filter((todo) => !todo.completed);
  const activeTodosCounter = activeTodos.length;
  const allTodosCompleted = activeTodosCounter === 0;
  const someTodosCompleted = todosCounter - activeTodosCounter > 0;
  const calculatedValues = {
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
