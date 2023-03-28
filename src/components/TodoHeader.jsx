import CompleteAllTodosButton from './CompleteAllTodosButton';
import Input from './Input';
import styles from './TodoHeader.module.scss';
const TodoHeader = (props) => {
  return (
    <div className={styles.todoHeader}>
      <h1 className={styles.todoHeader__header}>Todos</h1>
      <div className={styles.todoHeader__body}>
        {props.todosCounter === 0 || (
          <CompleteAllTodosButton
            completeAllTodosToggler={props.completeAllTodosToggler}
            allTodosCompleted={props.allTodosCompleted}
          />
        )}
        <Input addTodo={props.addTodo} />
      </div>
    </div>
  );
};

export default TodoHeader;
