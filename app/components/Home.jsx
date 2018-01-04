import React from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import ToDoList from './ToDoList';

const Home = props => (props.role ? <ToDoList /> : <Login />);

const mapStateToProps = state => ({
  role: state.role,
});

export default connect(mapStateToProps)(Home);
