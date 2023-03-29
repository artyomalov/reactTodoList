import Todo from './Todo';
import styles from './TodoList.module.scss';

const Todos = (props) => {
  return (
    <div className={styles.todoList}>
      {Boolean(props.filteredTodos.length) &&
        props.filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            toggleTodoCompleted={props.toggleTodoCompleted}
            updateTodo={props.updateTodo}
          />
        ))}
    </div>
  );
};

export default Todos;
