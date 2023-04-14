import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { completeAllTodosToggler } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
import { TodosData } from '../../types/todoDataType';
import todoRequests from '../api/requests';
import {StyledСompleteAllTodosButtonWrapper, StyledEmpty} from './CompleteAllTodosButton.style';

const CompleteAllTodosButton: React.FC = () => {
  const filteredTodosData: TodosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const togglecompleteAllTodos = async () => {
    try {
      const response = await todoRequests.completeAllTodos()
      if(response.status!==200) throw new Error('Server error')
      dispatch(completeAllTodosToggler(response.data));
    } catch(err) {
      console.log(err);
    }
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
        // onClick={togglecompleteAllTodos}
      />
      <label htmlFor="complete-checkbox" className="complete-label"></label>
    </StyledСompleteAllTodosButtonWrapper>
  ) : (
    <StyledEmpty></StyledEmpty>
  );
};

export default CompleteAllTodosButton;
