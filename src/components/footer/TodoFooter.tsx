import React from 'react';
import TodoCounter from './TodoCounter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Filter from './Filter';
import {
  removeAllCompleted,
  setActiveTodosCount,
  setTodosToalCount,
} from '../../store/todoSlice';
import StyledTodoFooterContainer from './TodoFooter.style';
import todoRequests from '../api/requests';
import PagesList from './PagesList';
import PageLinkBackForward from './PageLinkBackForward';

const TodoFooter: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.todos.currentPage);
  const todosTotalCount = useAppSelector(
    (state) => state.todos.todosTotalCount
  );
  const todosActiveCount = useAppSelector(
    (state) => state.todos.activeTodosCount
  );

  const someTodosCompleted = todosTotalCount - todosActiveCount > 0;

  const clearAllCompletedHandler = async () => {
    try {
      const response = await todoRequests.deleteAllCompletedTodos();
      if (response.status !== 200) {
        throw new Error("Server error! Can't delete todo");
      }
      dispatch(setTodosToalCount(response.data.todosTotalCount));
      dispatch(setActiveTodosCount(response.data.activeTodosCount));
      dispatch(removeAllCompleted());
    } catch (err) {
      console.log(err);
    }
  };

  if (!todosTotalCount) {
    return null;
  }

  return (
    <StyledTodoFooterContainer
      haveTodos={Boolean(todosTotalCount)}
      haveCompletedTodos={someTodosCompleted}
    >
      <div className="pages-container">
        <PageLinkBackForward rotation="left" currentPage={currentPage} />
        <PagesList />
        <PageLinkBackForward rotation="right" currentPage={currentPage} />
      </div>
      <div className="filter-container">
        <TodoCounter />
        <Filter />
        {someTodosCompleted ? (
          <button
            className="completed-remover"
            onClick={clearAllCompletedHandler}
          >
            Clear completted
          </button>
        ) : (
          <button className="completed-remover"></button>
        )}
      </div>
    </StyledTodoFooterContainer>
  );
};

export default TodoFooter;
