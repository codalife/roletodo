import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';

const Login = () => (
  <div className="col-md-3">
    <h2>Login</h2>
    <Form>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name</ControlLabel>{' '}
        <FormControl type="text" placeholder="Jane Doe" />
      </FormGroup>{' '}
      <Button type="submit">
        <Link to="/protected/todo">login</Link>
      </Button>
    </Form>
  </div>
);

export default Login;
