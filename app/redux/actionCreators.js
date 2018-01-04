import axios from 'axios';
import {
  FETCH_USER,
  SET_QUERY,
  FILTER,
  SIGNOUT,
  CHANGE_STATUS,
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

export const changeStatusAction = taskId => ({
  type: CHANGE_STATUS,
  payload: taskId,
});
