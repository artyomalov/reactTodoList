import React from 'react';
import CompleteAllTodosButton from './CompleteAllTodosButton';
import Input from './Input';
import styled from 'styled-components';

const TodoHeaderTodoHeader = styled.div`
  max-width: ${props => props.theme.containerWidth};
  width: 100%;
  height: 150px;
  background-color: ${props => props.theme.containerColor};
  margin-top: 30px;
  @media (max-width: ${props => props.theme.mediaMaxWidth}) {
    .todoHeader {
      margin-top: 0;
    }
  }
`;

const TodoHeaderHeader = styled.h1`
  padding-top: 30px;
  text-align: center;
`;

const TodoHeaderBody = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
`;

const TodoHeader: React.FC = () => {
  return (
    <TodoHeaderTodoHeader>
      <TodoHeaderHeader>Todos</TodoHeaderHeader>
      <TodoHeaderBody>
        <CompleteAllTodosButton />
        <Input />
      </TodoHeaderBody>
    </TodoHeaderTodoHeader>
  );
};

export default TodoHeader;
