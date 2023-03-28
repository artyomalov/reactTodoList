import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';
import './App.scss';
import TodoFooter from './components/TodoFooter';

// { id: 1, text: 'text', completed: false }

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const activeTodosCounter = todos.filter((todo) => !todo.completed).length;
  const todosCounter = todos.length;

  const filterTodos = () => {
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };
  const filteredTodos = filterTodos();
  const addTodo = (inputData) => {
    const newTodo = {
      id: 'id' + (Date.now() + Math.random()).toString(),
      text: inputData,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeAllTodos = () => {
    const alltodosCompleted = todos.map((todo) => ({
      ...todo,
      completed: true,
    }));
    setTodos(alltodosCompleted);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoCompleted = (id) => {
    const updatedTodosArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodosArray);
  };

  const updateTodo = (id, editInputData) => {
    const updatedTodosArray = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: editInputData };
      }
      return todo;
    });
    setTodos(updatedTodosArray);
  };

  const removeAllCompleted = () => {
    setTodos([...todos.filter((todo) => !todo.completed)]);
  };

  return (
    <div className="App">
      <TodoHeader
        completeAllTodos={completeAllTodos}
        addTodo={addTodo}
        todosCounter={todosCounter}
      />

      {todos.length === 0 || (
        <div className="todoBody">
          <TodoList
            filteredTodos={filteredTodos}
            deleteTodo={deleteTodo}
            toggleTodoCompleted={toggleTodoCompleted}
            updateTodo={updateTodo}
          />
          <TodoFooter
            setFilter={setFilter}
            removeAllCompleted={removeAllCompleted}
            activeTodosCounter={activeTodosCounter}
          />
        </div>
      )}
    </div>
  );
}

export default App;

// всю логику в арр
// header component
//filter const
//delete useless callbacks
//rewrite props
// rewrite mutations in update todos functions
