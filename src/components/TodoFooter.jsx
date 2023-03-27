import TodoCounter from './TodoCounter';
import CompletedRemover from './CompletedRemover';
import Filter from './Filter';
const TodoFooter = ({ todos, setTodos, filter, setFilter }) => {
  const activeTodosCounter = todos.filter((todo) => !todo.completed).length;
  const removeAllCompleted = () => {
    setTodos([...todos.filter((todo) => !todo.completed)]);
  };

  return (
    <div>
      <TodoCounter activeTodosCounter={activeTodosCounter} />
      <Filter setFilter={setFilter} />
      <CompletedRemover removeAllCompleted={removeAllCompleted} />
    </div>
  );
};

export default TodoFooter;
