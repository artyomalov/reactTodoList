import React from 'react';
import TodoCounter from './TodoCounter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import Filter from './Filter';
import selectTodos from '../../store/selectors';
import { removeAllCompleted } from '../../store/todoSlice';
import styles from './TodoFooter.module.scss';
import { todosData } from '../../types/todoDataType';

const TodoFooter: React.FC = () => {
  const filteredTodosData: todosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const clearAllCompletedHandler = () => {
    dispatch(removeAllCompleted());
  };
  return (
    <div
      className={
        Boolean(filteredTodosData.todosCounter)
          ? styles.todoFooter
          : styles.todoFooter_hidden
      }
    >
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
