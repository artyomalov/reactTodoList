import { createSelector } from '@reduxjs/toolkit';

const selectAllTodos = (state) => state.todos.todos;
const selectFilter = (state) => state.todos.filter;

const selectTodos = createSelector(
  selectAllTodos,
  selectFilter,
  (todos, filter) => {
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
  }
);

export default selectTodos;

// const allTodosCompleted =
// todosCounter - activeTodosCounter === todosCounter;
