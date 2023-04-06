import React from 'react';
import Todo from './Todo';
import { useAppSelector } from '../../store/hooks';
import selectTodos from '../../store/selectors';
import { todoType } from '../../types/todoType';
import { todosData } from '../../types/todoDataType';
import styled from 'styled-components';
import commonStyles from '../commonStyles';

const TodosTodoList = styled.div`
  max-width: ${commonStyles.containerWidth};
  width: 100%;
  background-color: ${commonStyles.containerColor};
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Todos: React.FC = () => {
  const filteredTodosData: todosData = useAppSelector(selectTodos);

  return (
    <TodosTodoList>
      {filteredTodosData.filteredTodos.map((todo: todoType) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodosTodoList>
  );
};

export default Todos;
