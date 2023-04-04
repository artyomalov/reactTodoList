import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import styles from './Todo.module.scss';
import { todoType } from '../../types/todoType';
import {
  updateTodo,
  toggleTodoCompleted,
  deleteTodo,
} from '../../store/todoSlice';

type todoProps = {
  todo: todoType;
};

const Todo: React.FC<todoProps> = (props: todoProps) => {
  const todo: todoType = props.todo; //нужно ли типизировать здесь, если типизация была на уровне пропсов в Todo лист в map?

  const [edit, setEdit] = React.useState<boolean>(false);
  const [editInputData, setEditInputData] = React.useState<string>(todo.text);
  const dispatch = useAppDispatch();

  const toggleTodoCompletedHandler = () =>
    dispatch(toggleTodoCompleted(todo.id));

  const onBlurInputHandler = () => {
    if (!editInputData.trim()) {
      setEditInputData(todo.text);
      setEdit(false);
      return;
    }
    dispatch(updateTodo({ id: todo.id, text: editInputData }));
    setEdit(false);
  };

  const onKeyDowmHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
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

  const setInputDataHandler = (ev: React.ChangeEvent<HTMLInputElement>) =>
    setEditInputData(ev.target.value);
  const setEditHandler = () => setEdit(true);

  const deleteTodoHandler = () => dispatch(deleteTodo(todo.id));

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
