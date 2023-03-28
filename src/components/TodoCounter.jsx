import styles from './TodoCounter.module.scss';

const TodoCounter = (props) => {
  const itemEnding = props.activeTodosCounter === 1 ? 'item' : 'items';

  return (
    <div className={styles.todoCounter}>
      {props.activeTodosCounter} {itemEnding} left
    </div>
  );
};

export default TodoCounter;
