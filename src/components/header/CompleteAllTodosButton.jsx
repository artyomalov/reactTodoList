import styles from './CompleteAllTodosButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { completeAllTodosToggler } from '../../store/todoSlice';
import selectTodos from '../../store/selectors';

const CompleteAllTodosButton = () => {
  const filteredTodosData = useSelector(selectTodos);
  const dispatch = useDispatch();

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
