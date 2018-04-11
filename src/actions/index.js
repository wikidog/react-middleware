import axios from 'axios';

import {
  FETCH_USERS
} from '../actions/types';

export function fetchUsers() {

  // returns a promise
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  return {
    type: FETCH_USERS,
    // payload: [
    //   { name: 'Jane' },
    //   { name: 'Alex' },
    //   { name: 'Jim' },
    // ],
    payload: request,
  };
};


