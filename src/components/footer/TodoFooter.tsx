import React from 'react';
import TodoCounter from './TodoCounter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Filter from './Filter';
import selectTodos from '../../store/selectors';
import { removeAllCompleted } from '../../store/todoSlice';
import { TodosData } from '../../types/todoDataType';
import StyledTodoFooterContainer from './TodoFooter.style';

const TodoFooter: React.FC = () => {
  const filteredTodosData: TodosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const clearAllCompletedHandler = () => {
    dispatch(removeAllCompleted());
  };

  if (!filteredTodosData.todosCounter) {
    return null;
  }

  return (
    <StyledTodoFooterContainer
      haveTodos={Boolean(filteredTodosData.todosCounter)}
      haveCompletedTodos={filteredTodosData.someTodosCompleted}
    >
      <TodoCounter activeTodosCounter={filteredTodosData.activeTodosCounter} />
      <Filter />
      <button className="completed-remover" onClick={clearAllCompletedHandler}>
        Clear completted
      </button>
    </StyledTodoFooterContainer>
  );
};

export default TodoFooter;
