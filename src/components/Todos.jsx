import Todo from './Todo';

const Todos = ({ todos, setTodos, filteredTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompleted = (id) => {
    const updatedTodosArray = [...todos];
    const togglingStatusTodo = updatedTodosArray.find((todo) => todo.id === id);
    togglingStatusTodo.completed = !togglingStatusTodo.completed;
    setTodos(updatedTodosArray);
  };

  const updateTodo = (id, editInputData) => {
    const updatedTodosArray = [...todos];
    const updatingTodo = updatedTodosArray.find((todo) => todo.id === id);
    updatingTodo.text = editInputData;
    setTodos(updatedTodosArray);
  };
  return filteredTodos.length === 0 ? (
    <p>no todos</p>
  ) : (
    <>
      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todoData={{ ...todo, deleteTodo, toggleTodoCompleted, updateTodo }}
        />
      ))}
    </>
  );
};

export default Todos;
