import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Panel, Media, Checkbox, Button } from 'react-bootstrap';
import { changeStatusAction } from '../redux/actionCreators';

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
        <Panel header={task.title} key={index}>
          <Media key={index}>
            <Media.Left>
              <Checkbox
                onClick={() => props.changeStatus(task.id)}
                disabled={props.role === 'manager'}
                checked={task.completed}
              />
            </Media.Left>
            <Media.Body>
              <p>{task.description}</p>
            </Media.Body>
            {props.role === 'manager' ? (
              <Media.Right>
                <Link to={`/edit/${index}`}>
                  <Button>Edit</Button>
                </Link>
              </Media.Right>
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
  changeStatus(taskId) {
    dispatch();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
