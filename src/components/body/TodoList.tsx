import React from 'react';
import Todo from './Todo';
import { useAppSelector } from '../../store/hooks';
import selectTodos from '../../store/selectors';
import { TodoType } from '../../types/todoType';
import { TodosData } from '../../types/todoDataType';
import StyledTodoList from './TodoList.style';
import todoRequests from '../api/requests';
import { useAppDispatch } from '../../store/hooks';
import { getAllTodos } from '../../store/todoSlice';
import {useGetFilteredTodos} from '../api/useGetFilteredTodosHandler';

const Todos: React.FC = () => {
  const filteredTodosData: TodosData = useAppSelector(selectTodos);

  const dispatch = useAppDispatch();
  const getFilteredTodos = useGetFilteredTodos()
 

  React.useEffect(() => {
    getFilteredTodos('all');
  }, [dispatch]);

  return (
    <StyledTodoList>
      {filteredTodosData.filteredTodos.map((todo: TodoType) => {
        return <Todo key={todo._id} todo={todo} />;
      })}
    </StyledTodoList>
  );
};

export default Todos;
