import axios from 'axios';

import config from '@globalConfig/App';
import Session from '@utils/Session';

const instance = axios.create({
  baseURL: config.endpoint,
});

instance.interceptors.request.use(config => {
  const authSession = Session.get('auth');

  if(authSession.accessToken){
    config.headers.Authorization = `Bearer ${authSession.accessToken}`;
  }

  return config;
});

export default instance
