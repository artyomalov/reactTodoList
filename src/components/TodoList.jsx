import Todo from './Todo';
import styles from './TodoList.module.scss';

const Todos = (props) => {
  return (
    <div className={styles.todoList}>
      {props.filteredTodos.length === 0 ? (
        <p>no todos</p>
      ) : (
        props.filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todoId={todo.id}
            todoText={todo.text}
            todoCompleted={todo.completed}
            deleteTodo={props.deleteTodo}
            toggleTodoCompleted={props.toggleTodoCompleted}
            updateTodo={props.updateTodo}
          />
        ))
      )}
    </div>
  );
};

export default Todos;
