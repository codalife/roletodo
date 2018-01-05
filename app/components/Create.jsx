import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Checkbox,
  Radio,
  ControlLabel,
  FormControl,
  FormGroup,
  Button,
} from 'react-bootstrap';
import { fieldUpdater, createTodo } from '../redux/actionCreators';

const Create = props =>
  props.role ? (
    <div>
      <Link to="/">back to ToDos</Link>
      <h2>Create</h2>
      <form onSubmit={e => props.handleSubmit(e, props)}>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Title</ControlLabel>
          <FormControl
            onChange={e => props.updateField(e.target.value, 'title')}
            type="text"
            placeholder="Name me"
          />
        </FormGroup>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            onChange={e => props.updateField(e.target.value, 'description')}
            type="text"
            placeholder="What needs to be done "
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
      {this.props.message.includes('Created') ? this.props.message : ''}
    </div>
  ) : (
    <Redirect to="/" />
  );

const mapStateToProps = state => ({
  role: state.role,
  message: state.message,
  titleNew: state.titleNew,
  descriptionNew: state.descriptionNew,
});

const mapDispatchToProps = dispatch => ({
  updateField(value, field) {
    dispatch(fieldUpdater(value, field));
  },
  handleSubmit(e, props) {
    e.preventDefault();
    createTodo(props.titleNew, props.descriptionNew, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
