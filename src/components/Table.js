import React from 'react';
import { List } from './list';
// import { List } from './List';

export const Table = ({ currentPass, editTodos, deleteTodos }) => {
  return (
    <div id="todo_table_maindiv">
      <table id="todo_table">
        <tbody>
          <tr>
            <th> Id </th>
            <th>Task</th>
            <th> Action </th>
          </tr>
        </tbody>
        {currentPass.map((data, index) => (
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>
                <List data={data} />
              </td>
              <td>
                <div id="todo_table_btn">
                  <button
                    id="edit_btn"
                    key={index}
                    onClick={() => editTodos(index)}
                  >
                    Edit
                  </button>
                  &nbsp;
                  <button id="delete_btn" onClick={() => deleteTodos(index)}>
                    Remove
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

    </div>
  );
};
