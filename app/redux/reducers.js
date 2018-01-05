import axios from 'axios';
import {
  FETCH_USER,
  SET_QUERY,
  FILTER,
  SIGNOUT,
  CHANGE_STATUS,
  FIELD,
  CREATE,
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
      const role = action.payload.user.role;
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
      newTasks[action.payload].completed = !newTasks[action.payload].completed;
      todosToShow = state.tasks.filter(task => task.completed === true);
      return { ...state };
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
    default:
      return state;
  }
};

export default reducer;
