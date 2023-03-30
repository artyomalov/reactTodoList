import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Input.module.scss';

function Input() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const newTodo = {
    id: (Date.now() + Math.random()).toString(),
    text,
    completed: false,
  };

  const addTodoHandler = (ev) => {
    ev.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(newTodo));
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandler}>
      <input
        className={styles.input}
        onChange={(ev) => {
          setText(ev.target.value);
        }}
        onBlur={addTodoHandler}
        value={text}
        placeholder="What needs to be done"
      />
    </form>
  );
}

export default Input;
