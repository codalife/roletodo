import axios from 'axios';
import {
  FETCH_USER,
  SET_QUERY,
  FILTER,
  SIGNOUT,
  CHANGE_STATUS,
  FIELD,
  CREATE,
} from './actions';

export const fetchUser = (dispatch, name) => {
  return axios({
    url: `/user/${name}`,
    method: 'GET',
    esponseType: 'json',
  }).then(response => {
    dispatch({ type: FETCH_USER, payload: response.data });
  });
};

export const setUserQuery = name => ({
  type: SET_QUERY,
  payload: name,
});

export const filter = num => ({ type: FILTER, payload: num });

export const signout = () => ({ type: SIGNOUT });

export const changeStatus = (taskId, status, dispatch) => {
  axios
    .patch('/changestatus', { id: taskId, status })
    .then(response => dispatch({ type: CHANGE_STATUS, payload: taskId }));
};

// ({
//   type: CHANGE_STATUS,
//   payload: taskId,
// });

export const fieldUpdater = (value, field) => ({
  type: FIELD,
  payload: { value, field },
});

export const createTodo = (title, description, dispatch) => {
  axios
    .post('/createtodo', {
      title,
      description,
    })
    .then(response => {
      dispatch({ type: CREATE, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    });
};
