import React from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

const Navigation = props => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">To Do</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {props.role ? (
        <Nav pullRight>
          <NavItem eventKey={2} href="#">
            Signout
          </NavItem>
        </Nav>
      ) : (
        <Nav />
      )}
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = state => ({
  role: state.role,
});

export default connect(mapStateToProps)(Navigation);
