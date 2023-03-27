const CompleteAllTodosButton = ({ todos, setTodos }) => {
  const completeAllTodos = () => {
    const alltodosCompleted = todos.map((todo) => ({
      ...todo,
      completed: true,
    }));
    setTodos(alltodosCompleted);
  };

  return <button onClick={completeAllTodos}>Complete all todos</button>;
};

export default CompleteAllTodosButton;
