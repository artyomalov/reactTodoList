import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import TodoFooter from './components/footer/TodoFooter';
import styles from './app.module.scss';
const todos = [1, 3];
function App() {
  return (
    <div className={styles.App}>
      <TodoHeader />
      <TodoList />
      {Boolean(todos.length) && <TodoFooter />}
    </div>
  );
}

export default App;
