import Axios from 'axios';
import { API_URL, API_URL2 } from '@/config';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'App-Id': 'xH1pQ3lVXNT0wsUqGJ/s/vGCAKuy9uNR',
  },
});

export const axios2 = Axios.create({
  baseURL: API_URL2,
  headers: {
    'App-Id': 'xH1pQ3lVXNT0wsUqGJ/s/vGCAKuy9uNR',
  },
});
