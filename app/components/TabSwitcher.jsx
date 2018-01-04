import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { filter } from '../redux/actionCreators';

const TabSwitcher = props => (
  <Nav bsStyle="tabs" justified activeKey={props.active}>
    <NavItem onClick={() => props.pickTab(1)} eventKey={1}>
      Incomplete
    </NavItem>
    <NavItem onClick={() => props.pickTab(2)} eventKey={2}>
      Completed
    </NavItem>
    <NavItem onClick={() => props.pickTab(3)} eventKey={3}>
      All
    </NavItem>
  </Nav>
);

const mapDispatchToProps = dispatch => ({
  pickTab(num) {
    dispatch(filter(num));
  },
});

const mapStateToProps = state => ({ active: state.active });

export default connect(mapStateToProps, mapDispatchToProps)(TabSwitcher);
