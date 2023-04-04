import React from 'react';
import styles from './TodoCounter.module.scss';

type todoCounterProps = {
  activeTodosCounter: number;
};

const TodoCounter: React.FC<todoCounterProps> = (props: todoCounterProps) => {
  const itemEnding: string = props.activeTodosCounter === 1 ? 'item' : 'items';

  return (
    <div className={styles.todoCounter}>
      {props.activeTodosCounter} {itemEnding} left
    </div>
  );
};

export default TodoCounter;
