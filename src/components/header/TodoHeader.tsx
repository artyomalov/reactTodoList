import React from 'react';
import CompleteAllTodosButton from './CompleteAllTodosButton';
import TodoHeaderInput from './TodoHeaderInput';
import StyledTodoHeaderWrapper from './TodoHeader.style';



const TodoHeader: React.FC = () => {
  return (
    <StyledTodoHeaderWrapper>
      <h1 className="todo-header">Todos</h1>
      <div className="todo-body">
        <CompleteAllTodosButton />
        <TodoHeaderInput />
      </div>
    </StyledTodoHeaderWrapper>
  );
};

export default TodoHeader;
