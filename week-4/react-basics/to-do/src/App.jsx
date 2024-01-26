/* import React from 'react';

function TodoApp() {
  const addTodo = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const todoDiv = document.getElementById('todos');
    const todoItem = document.createElement('div');
    todoItem.innerHTML = `<strong>${title}</strong>: ${description}`;
    todoDiv.appendChild(todoItem);  

    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
  };

  return (
    <div>
      <h2>TODO App</h2>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" />
      <br />
      <label htmlFor="description">Description: </label>
      <input type="text" id="description" />
      <br />
      <button onClick={addTodo}>Add TODO</button>
      <div id="todos"></div>
    </div>
  );
}

export default TodoApp;
*/ 

import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    const newTodo = {
      title: title,
      description: description,
    };

    setTodos([...todos, newTodo]);

    // Clear input fields
    setTitle('');
    setDescription('');
  };

  return (
    <>
    <div class="flex flex-wrap">
  <div class="w-1/3 bg-gray-100 p-4"></div>
  <div class="w-1/3 bg-gray-200 p-4">

      <h2 className='text-center text-2xl text-blue-600'>TODO App</h2>
      <div className='flex justify-center border-8'>
        <div>
        <label htmlFor="title">Title: </label>
        </div>

        <div>
        <input className='border-2 border-indigo-500/100'
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
        </div>
      </div>
      
      
<div className='flex justify-center'>
    <div>
    <label htmlFor="description">Description: </label>
    </div>

    <div>
        
    <input className='border-2 border-indigo-500/100'
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={addTodo} className='text-blue-600'>Add TODO</button>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <strong>{todo.title}</strong>: {todo.description}
          </div>
        ))}
      </div>  

    </div>


  </div>      
    
  </div>
  <div class="w-1/3 bg-gray-300 p-4"></div>
  </div>  
    </>
  );
}

export default TodoApp;
