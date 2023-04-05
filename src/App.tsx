import React from 'react';
import TodoList from './components/body/TodoList';
import TodoHeader from './components/header/TodoHeader';
import TodoFooter from './components/footer/TodoFooter';
import styles from './app.module.scss';
const App: React.FC = () => {
  return (
    <div className={styles.appContainer}>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default App;