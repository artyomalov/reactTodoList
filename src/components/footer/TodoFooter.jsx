import TodoCounter from './TodoCounter';
// import CompletedRemover from './CompletedRemover';
import Filter from './Filter';
import styles from './TodoFooter.module.scss';

const TodoFooter = (props) => {
  return (
    <div className={styles.todoFooter}>
      <TodoCounter activeTodosCounter={props.activeTodosCounter} />
      <Filter
        setFilter={props.setFilter}
        filterValues={props.filterValues}
        filter={props.filter}
      />
      <div
        className={
          props.someTodosCompleted
            ? styles.completedRemover
            : styles.completedRemover_hidden
        }
        onClick={props.removeAllCompleted}
      >
        Clear completted
      </div>
    </div>
  );
};

export default TodoFooter;
