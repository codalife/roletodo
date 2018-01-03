import axios from 'axios';
import { FETCH_USER } from './actions';

const domain = 'localhost:3000';

const fetchUser = name => {
  const user = axios({
    url: `${domain}/user/${name}`,
    method: 'GET',
    esponseType: 'json',
  }).then(response => response);

  return {
    type: FETCH_USER,
    payload: user,
  };
};
