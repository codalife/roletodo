import { FETCH_USER, SET_QUERY } from '../redux/actions';

const INIT_STATE = { user: null, userQuery: null };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      console.log(action.payload);
      return { ...state, user: action.payload };
    case SET_QUERY:
      return { ...state, userQuery: action.payload };
    default:
      return state;
  }
};

export default reducer;
