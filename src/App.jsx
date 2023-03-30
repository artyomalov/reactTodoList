import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import TodoFooter from './components/footer/TodoFooter';
import styles from './app.module.scss';

const filterValues = ['all', 'active', 'completed'];

function App() {
  const [todos, setTodos] = React.useState([]);
  const [filter, setFilter] = React.useState(filterValues[0]);

  const todosHandling = (todos, filter) => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    const activeTodosCounter = activeTodos.length;
    const todosCounter = todos.length;
    const allTodosCompleted =
      todosCounter - activeTodosCounter === todosCounter;
    const someTodosCompleted = todosCounter - activeTodosCounter > 0;
    const calculatedValues = {
      filteredTodos: todos,
      activeTodosCounter,
      todosCounter,
      allTodosCompleted,
      someTodosCompleted,
    };

    if (filter === filterValues[1]) {
      calculatedValues.filteredTodos = activeTodos;
    }
    if (filter === filterValues[2]) {
      const completedTodos = todos.filter((todo) => todo.completed);
      calculatedValues.filteredTodos = completedTodos;
    }
    return calculatedValues;
  };

  // const filterTodos = (todos, filter) => {
  //   if (filter === filterValues[1]) {
  //     return todos.filter((todo) => !todo.completed);
  //   }
  //   if (filter === filterValues[2]) {
  //     return todos.filter((todo) => todo.completed);
  //   }
  //   return todos;
  // };

  const filteredTodos = React.useMemo(
    () => todosHandling(todos, filter),
    [filter, todos]
  );

  const addTodo = (inputData) => {
    const newTodo = {
      id: (Date.now() + Math.random()).toString(),
      text: inputData,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const completeAllTodosToggler = () => {
    if (filteredTodos.allTodosCompleted) {
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
      if (todo.id !== id) {
        return todo;
      }

      return { ...todo, text: editInputData };
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
        todosCounter={filteredTodos.todosCounter}
        allTodosCompleted={filteredTodos.allTodosCompleted}
      />

      <TodoList
        filteredTodos={filteredTodos.filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodoCompleted={toggleTodoCompleted}
        updateTodo={updateTodo}
      />
      {Boolean(todos.length) && (
        <TodoFooter
          filter={filter}
          setFilter={setFilter}
          removeAllCompleted={removeAllCompleted}
          activeTodosCounter={filteredTodos.activeTodosCounter}
          filterValues={filterValues}
          someTodosCompleted={filteredTodos.someTodosCompleted}
        />
      )}
    </div>
  );
}

export default App;
