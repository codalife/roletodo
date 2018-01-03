import React from 'react';
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchUser, setUserQuery } from '../redux/actionCreators';

class Login extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.getUserRole(this.props.userQuery);
  };
  handleChange = event => {
    this.props.setUserQuery(event.target.value);
  };
  render() {
    return (
      <div className="col-md-3">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>{' '}
            <FormControl
              onChange={this.handleChange.bind(this)}
              type="text"
              placeholder="Jane Doe"
            />
          </FormGroup>{' '}
          <Button type="submit">login</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserRole(name) {
    fetchUser(dispatch, name);
  },
  setUserQuery(name) {
    dispatch(setUserQuery(name));
  },
});

const mapStateToProps = state => ({ userQuery: state.userQuery });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
