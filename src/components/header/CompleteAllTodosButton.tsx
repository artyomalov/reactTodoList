import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { completeAllTodosToggler } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
import { todosData } from '../../types/todoDataType';
import styled from 'styled-components';
type completeAllTodosButtonDivType = {
  buttonEnabled: boolean;
};

const СompleteAllTodosButtonDiv = styled.div<completeAllTodosButtonDivType>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border: none;
  text-align: center;
  opacity: ${(props) => (props.buttonEnabled ? '1' : '0')};
  cursor: ${(props) => (props.buttonEnabled ? 'pointer' : 'auto')};
`;

type completeAllTodosButtonSpanType = {
  allTodosCompleted: boolean;
};

const CompleteAllTodosButtonSpan = styled.span<completeAllTodosButtonSpanType>`
  display: inline-block;
  width: 9px;
  height: 9px;
  border: solid ${props => props.theme.checkColor};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  margin-bottom: 2px;
  opacity: ${(props) => (props.allTodosCompleted ? '1' : '0.4')};
  transition: ${props => props.theme.transitionStyle};
  ${СompleteAllTodosButtonDiv}:hover & {
    opacity: 1;
  }
`;

const CompleteAllTodosButton: React.FC = () => {
  const filteredTodosData: todosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const togglecompleteAllTodos = () => {
    dispatch(completeAllTodosToggler());
  };
  return (
    <СompleteAllTodosButtonDiv
      buttonEnabled={Boolean(filteredTodosData.todosCounter)}
      onClick={togglecompleteAllTodos}
    >
      <CompleteAllTodosButtonSpan
        allTodosCompleted={filteredTodosData.allTodosCompleted}
      ></CompleteAllTodosButtonSpan>
    </СompleteAllTodosButtonDiv>
  );
};

export default CompleteAllTodosButton;
