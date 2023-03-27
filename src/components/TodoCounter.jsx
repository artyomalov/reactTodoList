const TodoCounter = ({ activeTodosCounter }) => {
  const itemEnding = activeTodosCounter === 1 ? 'item' : 'items';

  return (
    <div>
      {activeTodosCounter} {itemEnding} left
    </div>
  );
};

export default TodoCounter;
