import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import ToDoList from './ToDoList';

const user = 'manager';

const Protected = () => (user ? <ToDoList user={user} /> : <Redirect to="/" />);

export default Protected;
