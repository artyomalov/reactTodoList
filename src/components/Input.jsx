import { useState } from 'react';

function Input({ setTodos, todos }) {
  const [text, setText] = useState('');
  const addTodo = (e) => {
    if (e.keyCode === 13) {
      if (text.trim()) {
        e.preventDefault();
        const newTodo = {
          id: 'id' + (Date.now() + Math.random()).toString(),
          text,
          completed: false,
        };
        setTodos([...todos, newTodo]);
        setText('');
      }
    }
  };

  return (
    <input
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        addTodo(e);
      }}
      type="text"
      value={text}
      placeholder="What needs to be done"
    />
  );
}

export default Input;
