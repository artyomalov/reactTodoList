import React from 'react';
import CompleteAllTodosButton from './CompleteAllTodosButton';
import Input from './Input';
import styles from './TodoHeader.module.scss';

const TodoHeader: React.FC = () => {
  return (
    <div className={styles.todoHeader}>
      <h1 className={styles.todoHeader__header}>Todos</h1>
      <div className={styles.todoHeader__body}>
        <CompleteAllTodosButton />
        <Input />
      </div>
    </div>
  );
};

export default TodoHeader;
