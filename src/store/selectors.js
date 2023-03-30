import { createSelector } from '@reduxjs/toolkit';

const selectAllTodos = (state) => state.todos.todos;
const selectFilter = (state) => state.filter.filter;

const selectTodos = createSelector(
  selectAllTodos,
  selectFilter,
  (todos, filter) => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    const activeTodosCounter = activeTodos.length;
    const todosCounter = todos.length;
    const allTodosCompleted =
      todosCounter - activeTodosCounter === todosCounter;
    const someTodosCompleted = todosCounter - activeTodosCounter > 0;
    const calculatedValues = {
      filteredTodos: todos,
      activeTodosCounter,
      todosCounter,
      allTodosCompleted,
      someTodosCompleted,
    };

    if (filter === 'active') {
      calculatedValues.filteredTodos = activeTodos;
    }
    if (filter === 'completed') {
      const completedTodos = todos.filter((todo) => todo.completed);
      calculatedValues.filteredTodos = completedTodos;
    }
    return calculatedValues;
  }
);

export default selectTodos;
