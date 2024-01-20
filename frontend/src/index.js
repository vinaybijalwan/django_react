import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Todo } from './Todo';
import { ToDOApp } from './ToDOApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Todo />
    <ToDOApp />
  </React.StrictMode>
);


