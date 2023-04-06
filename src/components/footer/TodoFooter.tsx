import React from 'react';
import TodoCounter from './TodoCounter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Filter from './Filter';
import selectTodos from '../../store/selectors';
import { removeAllCompleted } from '../../store/todoSlice';
import { todosData } from '../../types/todoDataType';
import styled from 'styled-components';

type todoFooterContainerType = {
  haveTodos: boolean;
};

const TodoFooterContainer = styled.div<todoFooterContainerType>`
  display: ${(props) => (props.haveTodos ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${props => props.theme.containerWidth};
  height: 50px;
  background-color: ${props => props.theme.containerColor};
  border-top: 2px solid ${props => props.theme.backgroundColor};
  padding: 3%;
  @media (max-width: ${props => props.theme.mediaMaxWidth}) {
    display: ${(props) => (props.haveTodos ? 'flex' : 'none')};
    flex-direction: column;
    height: fit-content;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0;
    position: relative;
  }
`;

type todoFooterCompletedRemoverType = {
  haveCompletedTodos: boolean;
};

const TodoFooterCompletedRemover = styled.div<todoFooterCompletedRemoverType>`
  display: inline-block;
  height: 18px;
  background: none;
  border: none;
  transition: ${props => props.theme.transitionStyle};
  cursor: pointer;
  opacity: ${(props) => (props.haveCompletedTodos ? '1' : '0')};
  &:hover {
    color: rgb(175, 0, 0);
  }
  @media (max-width: ${props => props.theme.mediaMaxWidth}) {
    width: 100%;
    height: 42px;
    border-top: 2px solid ${props => props.theme.backgroundColor};
    margin-bottom: 10px;
    padding-top: 10px;
    padding-left: 3%;
    position: absolute;
    z-index: -1;
    background-color: ${props => props.theme.containerColor};

    bottom: ${(props) => (props.haveCompletedTodos ? '-52px' : '0')};
  }
`;

const TodoFooter: React.FC = () => {
  const filteredTodosData: todosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  const clearAllCompletedHandler = () => {
    dispatch(removeAllCompleted());
  };

  return (
    <TodoFooterContainer haveTodos={Boolean(filteredTodosData.todosCounter)}>
      <TodoCounter activeTodosCounter={filteredTodosData.activeTodosCounter} />
      <Filter />
      <TodoFooterCompletedRemover
        haveCompletedTodos={filteredTodosData.someTodosCompleted}
        onClick={clearAllCompletedHandler}
      >
        Clear completted
      </TodoFooterCompletedRemover>
    </TodoFooterContainer>
  );
};

export default TodoFooter;
