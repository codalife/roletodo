import { FETCH_USER, SET_QUERY } from '../redux/actions';
const INIT_STATE = { role: null, userQuery: null };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      const role = action.payload.role;
      const tasks = action.payload.tasks || [];
      return { ...state, role, tasks };
    case SET_QUERY:
      return { ...state, userQuery: action.payload };
    default:
      return state;
  }
};

export default reducer;
