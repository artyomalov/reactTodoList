import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import todoRequests from '../api/requests';
import reducer, { completeAllTodosToggler, setActiveTodosCount } from '../../store/todoSlice';
import { StyledСompleteAllTodosButtonWrapper, StyledEmpty } from './CompleteAllTodosButton.style';

const CompleteAllTodosButton: React.FC = () => {
  const totalTodosCounter = useAppSelector(
    (state) => state.todos.todosTotalCount
  );
  const someTodosCompleted = useAppSelector(
    (state) => state.todos.someTodosCompleted
  );
  const dispatch = useAppDispatch();
  const togglecompleteAllTodos = async () => {
    try {
      const response = await todoRequests.completeAllTodos();
      if (response.status !== 200) throw new Error('Server error');
      dispatch(completeAllTodosToggler(response.data.completed));
      dispatch(setActiveTodosCount(response.data.activeTodosCount));
    } catch (err) {
      console.log(err);
    }
  };
  return !!totalTodosCounter ? (
    <StyledСompleteAllTodosButtonWrapper
      buttonEnabled={someTodosCompleted}
      onClick={togglecompleteAllTodos}
    >
      <input
        id="complete-checkbox"
        type="checkbox"
        className="complete-checkbox"
      />
      <label htmlFor="complete-checkbox" className="complete-label"></label>
    </StyledСompleteAllTodosButtonWrapper>
  ) : (
    <StyledEmpty></StyledEmpty>
  );
};

export default CompleteAllTodosButton;
