import React from 'react';

export const Todolist = ({ name }) => {
  return (
    <div id="Todo_List">
      <p> {name.name} </p>
    </div>
  );
};
