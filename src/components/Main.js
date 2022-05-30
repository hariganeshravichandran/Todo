import React from 'react';
import { useState } from 'react';
import { Input } from './Input';
// import { List } from './List';
// import { Table } from './Table';
import { debounce } from 'lodash';
import './style.css';
import { Table } from './Table';

export const Main = () => {
  const [todo, setTodo] = useState([]);
  const [todoCopy, setTodoCopy] = useState([]);
  const [updateTodo, setUpdateTodo] = useState({});
  const [searchTodo, setSearchTodo] = useState('');

  const [currentPage, setcurrentPage] = useState(1);
  const [postsperPage, setpostsperPage] = useState(1);

  const dropDown = [
    {
      value: '1',
    },
    {
      value: '2',
    },
    {
      value: '4',
    },
    {
      value: '6',
    },
  ];

  const lastpost = currentPage * postsperPage;
  const firstLine = lastpost - postsperPage;
  let currentPass = todo.slice(firstLine, lastpost);
  // console.log(currentPage);
  const totalPosts = todo.length;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsperPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) => {
    setcurrentPage(number);
  };

  const AscorderChange = () => {
    const ascendingList = todo.sort((a, b) => (a.name > b.name ? +1 : -1));
     setTodo([...ascendingList]);
   
  };

  const DescorderChange = () => {
    const ascendingList = todo.sort((a, b) => (a.name < b.name ? +1 : -1));
    setTodo([...ascendingList]);
  };

  const TodoItems = (name) => {
    const newTodo = [...todo, { name, id: todo.length + 1 }];
    // console.log(newTodo);
    setTodo(newTodo);
  };
  const updateTodoList = (value) => {
    let updatedTodo = [...todo];
    updatedTodo.splice(value.id - 1, 1);
    updatedTodo.push(value);
    updatedTodo.sort((a, b) => a.id - b.id);
    // console.log(updatedTodo.sort);
    setTodo(updatedTodo);
    setUpdateTodo({});
  };
  const deleteTodos = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  const editTodos = (index) => {
    setUpdateTodo(todo[index]);
  };

  const searchTodos = debounce((e) => {
    setSearchTodo(e.target.value !== '');
    setTodoCopy(todo);
    if (e.target.value) {
      let filteredArr = todo.filter((todos) =>
        todos.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log('filterArr', filteredArr);
      setTodo(filteredArr);
    } else if (e.target.value === '') {
      setTodo(todoCopy);
    }
  }, 500);


        const reset = () => {
            setTodo([]);

        };
        let dropDownList =  dropDown.map((data, i) => {
        return (

            <option style = {{}} key={i} value={data.id}>{data.value}</option>
        

        )
        })
  return (
    <div id="heading">
      <h1>Todo List</h1>



      <Input
        TodoItems={TodoItems}
        updateTodoList={updateTodoList}
        updateTodo={updateTodo}
      />
      {
        <input
          id="todo_search_input"
          type="search"
          placeholder="Search....."
          onChange={searchTodos}
        />
      }
     
<select
        id="todo_table_select"
        onChange={(e) => setpostsperPage(e.target.value)}>
       {dropDownList}
        </select>
      
      <button className="todo_order-btn" onClick={AscorderChange}>
      ascending
      </button>
   
      <button className="todo_order-btn" onClick={DescorderChange}>
     descending
      </button>
      
      <button className="todo_order-btn" onClick={reset} >
        Clear 
      </button>
      <Table
        editTodos={editTodos}
        deleteTodos={deleteTodos}
        currentPass={currentPass}
      />
      <div id="pages">
        {pageNumbers.map((numbers) => (
          <div id="paginate_btn">
            <button onClick={() => paginate(numbers)}>{numbers}</button>
          </div>
        ))}
      </div>

    </div>
  );
};
