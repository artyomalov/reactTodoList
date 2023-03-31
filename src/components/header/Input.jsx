import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import styles from './Input.module.scss';

function Input() {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (ev) => {
    ev.preventDefault();
    if (!text.trim()) {
      return;
    }

    const newTodo = {
      id: (Date.now() + Math.random()).toString(),
      text,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setText('');
  };

  const onChangeHandler = (ev) => {
    setText(ev.target.value);
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandler}>
      <input
        className={styles.input}
        onChange={onChangeHandler}
        onBlur={addTodoHandler}
        value={text}
        placeholder="What needs to be done"
      />
    </form>
  );
}

export default Input;
