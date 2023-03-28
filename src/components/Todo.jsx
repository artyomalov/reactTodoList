import { useState } from 'react';
import styles from './Todo.module.scss';
const Todo = (props) => {
  const [edit, setEdit] = useState(false);
  const [editInputData, setEditInputData] = useState(props.todoText);
  const onBlurInputHandler = () => {
    props.updateTodo(props.todoId, editInputData);
    setEdit(false);
  };

  return (
    <div className={styles.todoContainer}>
      <div
        className={styles.completeButton}
        onClick={() => props.toggleTodoCompleted(props.todoId)}
      >
        <span
          className={
            props.todoCompleted
              ? styles.buttonCheckMark
              : styles.buttonCheckMark__hidden
          }
        ></span>
      </div>
      {edit ? (
        <input
          className={styles.editTodoInput}
          onChange={(e) => setEditInputData(e.target.value)}
          onBlur={onBlurInputHandler}
          type="text"
          value={editInputData}
          autoFocus
        />
      ) : (
        <p
          className={
            props.todoCompleted ? styles.todoText_completed : styles.todoText
          }
          onDoubleClick={() => setEdit(true)}
        >
          {props.todoText}
        </p>
      )}
      <div
        className={styles.deleteTodoButton}
        onClick={() => props.deleteTodo(props.todoId)}
      ></div>
    </div>
  );
};

export default Todo;
