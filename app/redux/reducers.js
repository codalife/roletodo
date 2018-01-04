import {
  FETCH_USER,
  SET_QUERY,
  FILTER,
  SIGNOUT,
  CHANGE_STATUS,
} from '../redux/actions';

const INIT_STATE = {
  role: null,
  userQuery: null,
  active: 1,
  todosToShow: [],
  tasks: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      const role = action.payload.role;
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
    default:
      return state;
  }
};

export default reducer;
