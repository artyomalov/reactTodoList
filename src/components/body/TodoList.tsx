import React from 'react';
import Todo from './Todo';
import StyledTodoList from './TodoList.style';
import { useAppSelector } from '../../store/hooks';
import { TodoType } from '../../types/todoType';
import { useGetFilteredTodos } from '../api/useGetFilteredTodosHandler';

const Todos: React.FC = () => {
  const getFilteredTodos = useGetFilteredTodos();
  const filterValue = useAppSelector((state) => state.todos.filter);
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const todosTotalCount = useAppSelector(
    (state) => state.todos.todosTotalCount
  );
  const activeTodosCount = useAppSelector(
    (state) => state.todos.activeTodosCount
  );
  React.useEffect(() => {
    getFilteredTodos(filterValue, currentPage);
  }, [filterValue, currentPage, todosTotalCount, activeTodosCount]);

  const filteredTodos: Array<TodoType> = useAppSelector(
    (state) => state.todos.todos
  );
  return (
    <StyledTodoList>
      {filteredTodos.map((todo: TodoType) => {
        return <Todo key={todo._id} todo={todo} />;
      })}
    </StyledTodoList>
  );
};

export default Todos;
