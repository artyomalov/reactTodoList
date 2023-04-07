import React from 'react';
import Todo from './Todo';
import { useAppSelector } from '../../store/hooks';
import selectTodos from '../../store/selectors';
import { TodoType } from '../../types/todoType';
import { TodosData } from '../../types/todoDataType';
import StyledTodoList from './TodoList.style';

const Todos: React.FC = () => {
  const filteredTodosData: TodosData = useAppSelector(selectTodos);

  return (
    <StyledTodoList>
      {filteredTodosData.filteredTodos.map((todo: TodoType) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </StyledTodoList>
  );
};

export default Todos;
