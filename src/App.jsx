import { useState, useEffect, useCallback } from 'react';
import Todos from './components/Todos';
import Input from './components/Input';
import CompleteAllTodosButton from './components/CompleteAllTodosButton';
import './App.css';
import TodoFooter from './components/TodoFooter';

// { id: 1, text: 'ljljlkj', completed: false },
function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([...todos]);
  const filterTodos = useCallback(() => {
    if (filter === 'active') {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
      return;
    }
    if (filter === 'completed') {
      setFilteredTodos(todos.filter((todo) => todo.completed));
      return;
    }
    setFilteredTodos(todos);
  }, [todos, filter]);

  useEffect(() => filterTodos(), [todos, filter, filterTodos]);

  const todosState = {
    todos,
    setTodos,
    filteredTodos,
    setFilteredTodos,
  };

  const filterState = {
    filter,
    setFilter,
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <div>
        {filteredTodos.length === 0 || (
          <CompleteAllTodosButton {...todosState} />
        )}
        <Input {...todosState} />
      </div>
      {filteredTodos.length === 0 || (
        <>
          <Todos {...todosState} />
          <TodoFooter {...todosState} {...filterState} />
        </>
      )}
    </div>
  );
}

export default App;
