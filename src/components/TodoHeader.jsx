import CompleteAllTodosButton from './CompleteAllTodosButton';
import Input from './Input';

const TodoHeader = ({ completeAllTodos, addTodo, todosCounter }) => {
  return (
    <div className="todoHeader">
      <h1 className="todoHeader__header">Todos</h1>
      <div className="todoHeader__body">
        {todosCounter === 0 || (
          <CompleteAllTodosButton completeAllTodos={completeAllTodos} />
        )}
        <Input addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoHeader;
