import Todo from './Todo';
import styles from './TodoList.module.scss';
import { useSelector } from 'react-redux';
import selectTodos from '../../store/selectors';

const Todos = () => {
  const filteredTodosData = useSelector(selectTodos);

  return (
    <div className={styles.todoList}>
      {filteredTodosData.filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
