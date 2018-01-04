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

const Create = props =>
  props.role ? (
    <div>
      <Link to="/">back to ToDos</Link>
      <h2>Create</h2>
      <form>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          <FormControl type="text" placeholder="Todo" />
        </FormGroup>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Description</ControlLabel>
          <FormControl type="text" placeholder="Always code " />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  ) : (
    <Redirect to="/" />
  );

const mapStateToProps = state => ({ role: state.role });

export default connect(mapStateToProps)(Create);
