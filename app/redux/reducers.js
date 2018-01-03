import { FETCH_USER } from '../redux/actions';

const INIT_STATE = { user: null };

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default reducer;
