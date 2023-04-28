import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import todoRequests from '../api/requests';
import { completeAllTodosToggler } from '../../store/todoSlice';
import {
  StyledСompleteAllTodosButtonWrapper,
  StyledEmpty,
} from './CompleteAllTodosButton.style';

const CompleteAllTodosButton: React.FC = () => {

  const {
    todosTotalCount,
    someTodosCompleted,
    filter: filterValue,
  } = useAppSelector((state) => state.todos);

  const dispatch = useAppDispatch();

  const togglecompleteAllTodos = async () => {
    try {
      const response = await todoRequests.completeAllTodos(filterValue);
      if (response.status !== 200) throw new Error('Server error');
      console.log(response.data)
      dispatch(
        completeAllTodosToggler({
          todos: response.data.todos,
          paginationData: response.data.paginationData,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return !!todosTotalCount ? (
    <StyledСompleteAllTodosButtonWrapper
      buttonEnabled={someTodosCompleted}
      onClick={togglecompleteAllTodos}
    >
      <span className="complete-label"></span>
    </StyledСompleteAllTodosButtonWrapper>
  ) : (
    <StyledEmpty></StyledEmpty>
  );
};

export default CompleteAllTodosButton;
