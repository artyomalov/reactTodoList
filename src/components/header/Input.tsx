import React from 'react';
import { useAppDispatch } from '../../store/hooks';
import { addTodo } from '../../store/todoSlice';
import { todoType } from '../../types/todoType';
import styles from './Input.module.scss';

function Input() {
  const [text, setText] = React.useState('');
  const dispatch = useAppDispatch();
  const addTodoHandler = () => {
    if (!text.trim()) {
      return;
    }

    const newTodo: todoType = {
      id: (Date.now() + Math.random()).toString(),
      text,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setText('');
  };

  const addTodoHandlerForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    addTodoHandler();
  };

  const addTodoHandlerInput = () => {
    addTodoHandler();
  };

  const onChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setText(ev.target.value);
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandlerForm}>
      <input
        className={styles.input}
        onChange={onChangeHandler}
        onBlur={addTodoHandlerInput}
        value={text}
        placeholder="What needs to be done"
      />
    </form>
  );
}

export default Input;
