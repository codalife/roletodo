import axios from 'axios';
import { FETCH_USER, SET_QUERY } from './actions';

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
