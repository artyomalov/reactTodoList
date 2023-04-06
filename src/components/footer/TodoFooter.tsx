import React from 'react';
import TodoCounter from './TodoCounter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Filter from './Filter';
import selectTodos from '../../store/selectors';
import { removeAllCompleted } from '../../store/todoSlice';
import { todosData } from '../../types/todoDataType';
import styled from 'styled-components';
import commonStyles from '../commonStyles';

type todoFooterContainerType = {
  haveTodos: boolean;
};

const TodoFooterContainer = styled.div<todoFooterContainerType>`
  display: ${(props) => (props.haveTodos ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${commonStyles.containerWidth};
  height: 50px;
  background-color: ${commonStyles.containerColor};
  border-top: 2px solid ${commonStyles.backgroundColor};
  padding: 3%;
  @media (max-width: ${commonStyles.mediaMaxWidth}) {
    display: flex;
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
  transition: ${commonStyles.transitionStyle};
  cursor: pointer;
  opacity: ${(props) => (props.haveCompletedTodos ? '1' : '0')};
  &:hover {
    color: rgb(175, 0, 0);
  }
  @media (max-width: ${commonStyles.mediaMaxWidth}) {
    width: 100%;
    height: 42px;
    border-top: 2px solid ${commonStyles.backgroundColor};
    margin-bottom: 10px;
    padding-top: 10px;
    padding-left: 3%;
    position: absolute;
    z-index: -1;
    background-color: ${commonStyles.containerColor};

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
