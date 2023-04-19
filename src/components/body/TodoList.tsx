import React from 'react';
import Todo from './Todo';
import StyledTodoList from './TodoList.style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetFilteredTodos } from '../api/useGetFilteredTodosHandler';

const Todos: React.FC = () => {
  const getFilteredTodos = useGetFilteredTodos();
  const {
    todos: filteredTodos,
    filter: filterValue,
    currentPage,
  } = useAppSelector((state) => state.todos);

  React.useEffect(() => {
    getFilteredTodos(filterValue, currentPage);
  }, [currentPage]);

  return  <StyledTodoList>
  {filteredTodos.map((todo, index) => {
    if (index > 4) return null;
    return <Todo key={todo._id} todo={todo} />;
  })}
</StyledTodoList>
};

export default Todos;
