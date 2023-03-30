import React from 'react';
import styles from './Input.module.scss';

function Input(props) {
  const [text, setText] = React.useState('');

  const addTodoHandler = (ev) => {
    ev.preventDefault();
    if (!text.trim()) {
      return;
    }
    props.addTodo(text);
    setText('');
  };

  const onBlurHandler = () => {
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandler}>
      <input
        className={styles.input}
        onChange={(ev) => {
          setText(ev.target.value);
        }}
        onBlur={onBlurHandler}
        value={text}
        placeholder="What needs to be done"
      />
    </form>
  );
}

export default Input;
