import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API}/api`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('sessionToken') || ''}`,
    'Content-Type': 'application/json',
  },
});

export { api };
