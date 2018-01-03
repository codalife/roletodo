import React from 'react';

import Login from './Login';
import ToDoList from './ToDoList';

const user = false;

const Home = () => (user ? <ToDoList /> : <Login />);

export default Home;
