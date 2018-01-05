import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Panel, Media, Checkbox, Button, ButtonGroup } from 'react-bootstrap';
import { changeStatus } from '../redux/actionCreators';

import TabSwitcher from './TabSwitcher';

const ToDoList = props => (
  <div>
    {props.role === 'employee' ? (
      <TabSwitcher />
    ) : (
      <Panel>
        <Link to="/create">
          <Button> Create to do </Button>
        </Link>
      </Panel>
    )}
    <div>
      {props.todosToShow.map((task, index) => (
        <Panel header={task.title} key={task.id}>
          <Media key={index}>
            <Media.Left>
              <Checkbox
                onChange={() =>
                  props.changeTaskStatus(task.id, !task.completed)
                }
                disabled={props.role === 'manager'}
                checked={task.completed}
              />
            </Media.Left>
            <Media.Body>
              <p>{task.description}</p>
            </Media.Body>
            {props.role === 'manager' ? (
              <ButtonGroup>
                <Button>
                  <Link to={`/edit/${index}`}>Edit</Link>
                </Button>

                <Button>Delete</Button>
              </ButtonGroup>
            ) : (
              <Media.Right />
            )}
          </Media>
        </Panel>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  role: state.role,
  todosToShow: state.todosToShow,
});

const mapDispatchToProps = dispatch => ({
  changeTaskStatus(taskId, status) {
    changeStatus(taskId, status, dispatch);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
