import TodoCounter from './TodoCounter';
import CompletedRemover from './CompletedRemover';
import Filter from './Filter';
const TodoFooter = ({ removeAllCompleted, activeTodosCounter, setFilter }) => {
  return (
    <div>
      <TodoCounter activeTodosCounter={activeTodosCounter} />
      <Filter setFilter={setFilter} />
      <CompletedRemover removeAllCompleted={removeAllCompleted} />
    </div>
  );
};

export default TodoFooter;
