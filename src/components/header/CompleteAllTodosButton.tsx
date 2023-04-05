import React from 'react';
import styles from './CompleteAllTodosButton.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { completeAllTodosToggler } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';
import { todosData } from '../../types/todoDataType';

const CompleteAllTodosButton: React.FC = () => {
  const filteredTodosData: todosData = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const togglecompleteAllTodos = () => {
    dispatch(completeAllTodosToggler());
  };

  return (
    <div
      className={
        Boolean(filteredTodosData.todosCounter)
          ? styles.button
          : styles.button_disabled
      }
      onClick={togglecompleteAllTodos}
    >
      <span
        className={
          filteredTodosData.allTodosCompleted
            ? styles.buttonCheckMark
            : styles.buttonCheckMark_disabled
        }
      ></span>
    </div>
  );
};

export default CompleteAllTodosButton;
