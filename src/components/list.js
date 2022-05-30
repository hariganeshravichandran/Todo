import React from 'react';
import { Todolist } from './TodoList';
// import { Todolist } from './Todolist';

export const List = ({ data, index, deleteTodos, editTodos }) => {
  return (
    <div id="Todo_List">
      <Todolist name={data} />
    </div>
  );
};
