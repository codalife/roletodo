import React from 'react';
import { Link, Route } from 'react-router-dom';

import Edit from './Edit';

const ToDoList = props => (
  <div>
    <div>To Do</div>
    {console.log(props)}
    {props.user === 'manager' ? (
      <div>
        <Link to="/protected/edit">Edit</Link>
      </div>
    ) : (
      <div>Tick Box </div>
    )}
  </div>
);

export default ToDoList;
