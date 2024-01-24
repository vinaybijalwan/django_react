import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Todo } from './Todo';
import { ToDoApp2 } from './ToDoApp2';
import { ToDoAdd } from './ToDoAdd';
import { AddForm } from './AddForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* // <Todo />
    <ToDoAdd /> */}
    {/* <ToDoApp2 /> */}
    <ToDoAdd />
    <ToDoApp2 />

    {/* //<AddForm /> */}
  </React.StrictMode>
);


