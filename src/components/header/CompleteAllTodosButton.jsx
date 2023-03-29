import styles from './CompleteAllTodosButton.module.scss';

const CompleteAllTodosButton = (props) => {
  return (
    <div
      className={
        Boolean(props.todosCounter) ? styles.button : styles.button_disabled
      }
      onClick={props.completeAllTodosToggler}
    >
      <span
        className={
          props.allTodosCompleted
            ? styles.buttonCheckMark
            : styles.buttonCheckMark_disabled
        }
      ></span>
    </div>
  );
};

export default CompleteAllTodosButton;
