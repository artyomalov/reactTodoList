import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:4800/todos',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true'
  },
});
