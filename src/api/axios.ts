import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    Authorization: 'Bearer lkjaslkjsdf',
  },
});

instance.interceptors.request.use(
  (config) => {
    console.log(`%c⚠ [${config.url}]`, 'color: orange; font-size: 18px');
    if (config?.headers) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    console.log(`%c⚠ [${response.status}]`, 'color: green; font-size: 18px');
    console.info(JSON.stringify(response.data, null, 2));
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // localStorage.removeItem('token');
      // router.push('/login');
    }
    return Promise.reject(error);
  },
);

export default instance;
