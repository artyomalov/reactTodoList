import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Todo.module.scss';
import {
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
} from '../../store/todoSlice';

const Todo = (props) => {
  const { todo } = props;
  const [edit, setEdit] = React.useState(false);
  const [editInputData, setEditInputData] = React.useState(todo.text);
  const dispatch = useDispatch();

  const toggleTodoCompletedHandler = () =>
    dispatch(toggleTodoCompleted({ id: todo.id }));

  const onBlurInputHandler = () => {
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    dispatch(updateTodo({ id: todo.id, text: editInputData }));
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
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    dispatch(updateTodo({ id: todo.id, text: editInputData }));
    setEdit(false);
  };

  const setInputDataHandler = (ev) => setEditInputData(ev.target.value);
  const setEditHandler = () => setEdit(true);

  const deleteTodoHandler = () => dispatch(deleteTodo({ id: todo.id }));

  return (
    <div className={styles.todoContainer}>
      <div
        className={styles.completeButton}
        onClick={toggleTodoCompletedHandler}
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
          onChange={setInputDataHandler}
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
          onDoubleClick={setEditHandler}
        >
          {todo.text}
        </p>
      )}
      <div
        className={styles.deleteTodoButton}
        onClick={deleteTodoHandler}
      ></div>
    </div>
  );
};

export default Todo;
