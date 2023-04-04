import React from 'react';
import TodoCounter from './TodoCounter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Filter from './Filter';
import selectTodos from '../../store/selectors';
import { removeAllCompleted } from '../../store/todoSlice';
import styles from './TodoFooter.module.scss';

const TodoFooter: React.FC = () => {
  const filteredTodosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const clearAllCompletedHandler = () => {
    dispatch(removeAllCompleted());
  };

  return Boolean(filteredTodosData.todosCounter) ? (
    <span></span>
  ) : (
    <div className={styles.todoFooter}>
      <TodoCounter activeTodosCounter={filteredTodosData.activeTodosCounter} />
      <Filter />
      <div
        className={
          filteredTodosData.someTodosCompleted
            ? styles.completedRemover
            : styles.completedRemover_hidden
        }
        onClick={clearAllCompletedHandler}
      >
        Clear completted
      </div>
    </div>
  );
};

export default TodoFooter;
