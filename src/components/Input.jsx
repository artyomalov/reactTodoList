import { useState } from 'react';
import styles from './Input.module.scss';

function Input(props) {
  const [text, setText] = useState('');

  const addTodoHandler = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    if (!text.trim()) {
      return;
    }
    props.addTodo(text);
    setText('');
  };

  return (
    <input
      className={styles.input}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={addTodoHandler}
      value={text}
      placeholder="What needs to be done"
    />
  );
}

export default Input;
