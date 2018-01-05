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
import { fieldUpdater, editTodo } from '../redux/actionCreators';

class Edit extends React.Component {
  componentWillMount() {
    this.props.updateField(
      this.props.todosToShow[this.props.match.params.id].title,
      'title',
    );
    this.props.updateField(
      this.props.todosToShow[this.props.match.params.id].description,
      'description',
    );
  }
  render() {
    return this.props.role ? (
      <div>
        <Link to="/">back to ToDos</Link>
        <h2>Edit</h2>
        <form
          onSubmit={e =>
            this.props.handleSubmit(
              e,
              this.props.todosToShow[this.props.match.params.id].id,
              this.props,
            )
          }
        >
          <FormGroup controlId="formInlineName">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              onChange={e => this.props.updateField(e.target.value, 'title')}
              type="text"
              value={this.props.titleNew}
            />
          </FormGroup>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              onChange={e =>
                this.props.updateField(e.target.value, 'description')
              }
              type="text"
              value={this.props.descriptionNew}
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>
        {this.props.message.includes('Updated') ? this.props.message : ''}
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  role: state.role,
  message: state.message,
  titleNew: state.titleNew,
  descriptionNew: state.descriptionNew,
  todosToShow: state.todosToShow,
});

const mapDispatchToProps = dispatch => ({
  updateField(value, field) {
    dispatch(fieldUpdater(value, field));
  },
  handleSubmit(e, taskId, props) {
    e.preventDefault();
    editTodo(taskId, props.titleNew, props.descriptionNew, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
