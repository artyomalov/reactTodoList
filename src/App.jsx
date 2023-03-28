import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';
import styles from './app.module.scss';
import TodoFooter from './components/TodoFooter';

// { id: 1, text: 'text', completed: false }

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const activeTodosCounter = todos.filter((todo) => !todo.completed).length;
  const todosCounter = todos.length;
  const allTodosCompleted = todosCounter - activeTodosCounter === todosCounter;

  const filterValues = ['active', 'completed', 'all'];

  const filterTodos = () => {
    if (filter === filterValues[0]) {
      return todos.filter((todo) => !todo.completed);
    }
    if (filter === filterValues[1]) {
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

  const completeAllTodosToggler = () => {
    if (allTodosCompleted) {
      setTodos(todos.map((todo) => ({ ...todo, completed: false })));
      return;
    }
    const completeAllTodos = todos.map((todo) => {
      if (todo.completed) {
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed,
      };
    });
    setTodos(completeAllTodos);
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
    <div className={styles.App}>
      <TodoHeader
        completeAllTodosToggler={completeAllTodosToggler}
        addTodo={addTodo}
        todosCounter={todosCounter}
        allTodosCompleted={allTodosCompleted}
      />

      <TodoList
        filteredTodos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        updateTodo={updateTodo}
      />
      {Boolean(todos.length) && (
        <TodoFooter
          setFilter={setFilter}
          removeAllCompleted={removeAllCompleted}
          activeTodosCounter={activeTodosCounter}
          filterValues={filterValues}
        />
      )}
    </div>
  );
}

export default App;
