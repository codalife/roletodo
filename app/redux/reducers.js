import axios from 'axios';
import {
  FETCH_USER,
  SET_QUERY,
  FILTER,
  SIGNOUT,
  CHANGE_STATUS,
  FIELD,
  CREATE,
  DELETE,
} from '../redux/actions';

const INIT_STATE = {
  role: null,
  userQuery: null,
  active: 1,
  todosToShow: [],
  tasks: [],
  titleNew: '',
  descriptionNew: '',
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      const role = action.payload.user && action.payload.user.role;
      const tasks = action.payload.tasks || [];
      let todosToShow = tasks.filter(task => task.completed === false);
      let message = null;
      if (!role) {
        message = `user ${state.userQuery} not found`;
      }
      return { ...state, role, tasks, todosToShow, message };
    case SET_QUERY:
      return { ...state, userQuery: action.payload };
    case FILTER:
      switch (action.payload) {
        case 1:
          todosToShow = state.tasks.filter(task => task.completed === false);
          break;
        case 2:
          todosToShow = state.tasks.filter(task => task.completed === true);
          break;
        default:
          todosToShow = state.tasks.slice();
          break;
      }
      return { ...state, active: action.payload, todosToShow };
    case SIGNOUT:
      return { ...INIT_STATE };
    case CHANGE_STATUS:
      let newTasks = state.tasks.slice();
      newTasks.forEach(task => {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      });
      if (state.active === 3) {
        return { ...state, tasks: newTasks, todosToShow: newTasks };
      } else {
        todosToShow = newTasks.filter(
          task => task.completed === (state.active === 2),
        );
        return { ...state, tasks: newTasks, todosToShow };
      }
    case FIELD:
      if (action.payload.field === 'title') {
        return { ...state, titleNew: action.payload.value };
      } else {
        return { ...state, descriptionNew: action.payload.value };
      }
    case CREATE:
      newTasks = state.tasks.slice();
      newTasks.push(action.payload);
      return {
        ...state,
        tasks: newTasks,
        todosToShow: newTasks,
        message: `Created new todo ${action.payload.title}`,
      };
    case DELETE:
      let tasksForDelete = state.tasks.slice();
      for (let i = 0; i < tasksForDelete.length; i += 1) {
        if (tasksForDelete[i].id === action.payload) {
          tasksForDelete.splice(i, 1);
          break;
        }
      }

      return { ...state, tasks: tasksForDelete, todosToShow: tasksForDelete };
    default:
      return state;
  }
};

export default reducer;
