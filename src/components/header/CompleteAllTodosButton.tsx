import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { completeAllTodosToggler } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
import { TodosData } from '../../types/todoDataType';
import {StyledСompleteAllTodosButtonWrapper, StyledEmpty} from './CompleteAllTodosButton.style';

const CompleteAllTodosButton: React.FC = () => {
  const filteredTodosData: TodosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const togglecompleteAllTodos = () => {
    dispatch(completeAllTodosToggler());
  };
  return !!filteredTodosData.todosCounter ? (
    <StyledСompleteAllTodosButtonWrapper
      buttonEnabled={filteredTodosData.someTodosCompleted}
      onClick={togglecompleteAllTodos}
    >
      <input
        id="complete-checkbox"
        type="checkbox"
        className="complete-checkbox"
        onClick={togglecompleteAllTodos}
      />
      <label htmlFor="complete-checkbox" className="complete-label"></label>
    </StyledСompleteAllTodosButtonWrapper>
  ) : (
    <StyledEmpty></StyledEmpty>
  );
};

export default CompleteAllTodosButton;
