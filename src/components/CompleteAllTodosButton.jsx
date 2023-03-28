import styles from './completeAllTodosButton.module.scss';

const CompleteAllTodosButton = ({ completeAllTodos }) => {
  return (
    <div className={styles.button} onClick={completeAllTodos}>
      &#10003;
    </div>
  );
};

export default CompleteAllTodosButton;
