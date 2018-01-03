import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
  <div>
    <h2>Login</h2>
    <input type="text" />
    <Link to="/protected/todo">login</Link>
  </div>
);

export default Login;
