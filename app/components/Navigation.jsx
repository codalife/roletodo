import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { signout } from '../redux/actionCreators';

const Navigation = props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a>To Do</a>
        <span>
          {props.role !== null ? `   ${props.role} ${props.name}` : ''}
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {props.role ? (
        <Nav pullRight>
          <NavItem onClick={props.signout}>signout</NavItem>
        </Nav>
      ) : (
        <Nav />
      )}
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = state => ({
  role: state.role,
  name: state.userQuery,
});

const mapDispatchToProps = dispatch => ({
  signout() {
    dispatch(signout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
