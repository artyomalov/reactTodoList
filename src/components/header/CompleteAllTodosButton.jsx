import styles from './CompleteAllTodosButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import selectTodos from '../../store/selectors';

const CompleteAllTodosButton = () => {
  const filteredTodosData = useSelector(selectTodos);
  const dispatch = useDispatch();

  const completeAllTodosToggler = () => {
    if (filteredTodosData.allTodosCompleted) {
      setTodos(todos.map((todo) => ({ ...todo, completed: false })));
      return;
    }
    const completeAllTodos = todos.map((todo) => {
      if (todo.completed) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    });
    setTodos(completeAllTodos);
  };

  return (
    <div
      className={
        Boolean(filteredTodosData.todosCounter)
          ? styles.button
          : styles.button_disabled
      }
      onClick={dispatch(completeAllTodosToggler)}
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
