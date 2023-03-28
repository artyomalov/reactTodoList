import styles from './CompleteAllTodosButton.module.scss';

const CompleteAllTodosButton = (props) => {
  return (
    <div
      className={
        props.allTodosCompleted ? styles.button : styles.button_disabled
      }
      onClick={props.completeAllTodosToggler}
    >
      <span className={styles.buttonCheckMark}></span>
    </div>
  );
};

export default CompleteAllTodosButton;
