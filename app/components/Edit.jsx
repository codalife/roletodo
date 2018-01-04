import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Edit = props =>
  props.role ? (
    <div>
      <Link to="/">back to ToDos</Link>
      <h2>Edit</h2>
    </div>
  ) : (
    <Redirect to="/" />
  );

const mapStateToProps = state => ({ role: state.role });

export default connect(mapStateToProps)(Edit);
