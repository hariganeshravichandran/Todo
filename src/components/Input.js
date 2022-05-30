import React from 'react';
import { useState, useEffect } from 'react';
export const Input = ({ TodoItems, updateTodo, updateTodoList }) => {
  const [input, setInput] = useState('');
  useEffect(() => {
    if (updateTodo.name) {
      setInput(updateTodo.name);
    }
  }, [updateTodo]);
  const saveTodo = (e) => {
    e.preventDefault();
    if (e.target.value === 'AddTodo') {
      setInput('');
      if (input) {
        TodoItems(input);
      } else if (input === '') {
        alert('Enter Your Task ');
        return;
      }
    } else {
      let updatedTodo = {
        name: input,
        id: updateTodo.id,
      };
      updateTodoList(updatedTodo);
      setInput('');
    }
  };
  const todoInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div id="Todo_Input">
      <form>
        <input
          type="text"
          value={input}
          placeholder="Type Your Task....."
          // onChange={(e) => setInput(e.target.value) }
          onChange={todoInput}
        />
        <input
          id="add_todo_btn"
          type="submit"
          onClick={(e) => saveTodo(e)}
          value={updateTodo.name ? 'updateTodo' : 'AddTodo'}
        />
      </form>
    </div>
  );
};
