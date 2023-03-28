import Todo from './Todo';
import styles from './todoList.module.scss';

const Todos = ({
  filteredTodos,
  deleteTodo,
  toggleTodoCompleted,
  updateTodo,
}) => {
  return filteredTodos.length === 0 ? (
    <p>no todos</p>
  ) : (
    <div>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todoId={todo.id}
          todoText={todo.text}
          todoCompleted={todo.completed}
          deleteTodo={deleteTodo}
          toggleTodoCompleted={toggleTodoCompleted}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default Todos;
