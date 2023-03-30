import React from 'react';
import styles from './Todo.module.scss';
const Todo = (props) => {
  const { todo } = props;
  const [edit, setEdit] = React.useState(false);
  const [editInputData, setEditInputData] = React.useState(todo.text);
  const onBlurInputHandler = () => {
    props.updateTodo(todo.id, editInputData);
    setEdit(false);
  };

  const onKeyDowmHandler = (ev) => {
    if (ev.code === 'Escape') {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    if (ev.code !== 'Enter' && ev.code !== 'NumpadEnter') {
      return;
    }

    props.updateTodo(todo.id, editInputData);
    setEdit(false);
  };

  return (
    <div className={styles.todoContainer}>
      <div
        className={styles.completeButton}
        onClick={() => props.toggleTodoCompleted(todo.id)}
      >
        <span
          className={
            todo.completed
              ? styles.buttonCheckMark
              : styles.buttonCheckMark__hidden
          }
        ></span>
      </div>
      {edit ? (
        <input
          className={styles.editTodoInput}
          onChange={(ev) => setEditInputData(ev.target.value)}
          onBlur={onBlurInputHandler}
          onKeyDown={onKeyDowmHandler}
          type="text"
          value={editInputData}
          autoFocus
        />
      ) : (
        <p
          className={
            todo.completed ? styles.todoText_completed : styles.todoText
          }
          onDoubleClick={() => setEdit(true)}
        >
          {todo.text}
        </p>
      )}
      <div
        className={styles.deleteTodoButton}
        onClick={() => props.deleteTodo(todo.id)}
      ></div>
    </div>
  );
};

export default Todo;
