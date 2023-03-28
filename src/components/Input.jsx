import { useState } from 'react';
import styles from './input.module.scss';

function Input({ addTodo }) {
  const [text, setText] = useState('');

  const addTodoHandler = (e) => {
    if (e.keyCode === 13) {
      if (text.trim()) {
        e.preventDefault();
        addTodo(text);
        setText('');
      }
    }
  };

  return (
    <input
      className={styles.input}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        addTodoHandler(e);
      }}
      type="text"
      value={text}
      placeholder="What needs to be done"
    />
  );
}

export default Input;
