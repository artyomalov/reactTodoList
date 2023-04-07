import React from 'react';
import StyledTodoCounter from './TodoCounter.style';

type TodoCounterProps = {
  activeTodosCounter: number;
};


const TodoCounter: React.FC<TodoCounterProps> = (props) => {

  const itemEnding: string = props.activeTodosCounter === 1 ? 'item' : 'items';

  return (
    <StyledTodoCounter>
      {props.activeTodosCounter} {itemEnding} left
    </StyledTodoCounter>
  );
};

export default TodoCounter;
