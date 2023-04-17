import React from 'react';
import StyledTodoCounter from './TodoCounter.style';
import { useAppSelector } from '../../store/hooks';



const TodoCounter: React.FC = () => {

  const activeTodosCounter = useAppSelector(state=>state.todos.activeTodosCount)
  const itemEnding: string = activeTodosCounter === 1 ? 'item' : 'items';

  return (
    <StyledTodoCounter>
      {activeTodosCounter} {itemEnding} left
    </StyledTodoCounter>
  );
};

export default TodoCounter;
