import TodoCounter from './TodoCounter';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import selectTodos from '../../store/selectors';
import { removeAllCompleted } from '../../store/todoSlice';
import styles from './TodoFooter.module.scss';

const TodoFooter = () => {
  const filteredTodosData = useSelector(selectTodos);
  const dispatch = useDispatch();
  return (
    Boolean(filteredTodosData.alltodosCount) && (
      <div className={styles.todoFooter}>
        <TodoCounter
          activeTodosCounter={filteredTodosData.activeTodosCounter}
        />
        <Filter />
        <div
          className={
            filteredTodosData.someTodosCompleted
              ? styles.completedRemover
              : styles.completedRemover_hidden
          }
          onClick={() => dispatch(removeAllCompleted())}
        >
          Clear completted
        </div>
      </div>
    )
  );
};

export default TodoFooter;
