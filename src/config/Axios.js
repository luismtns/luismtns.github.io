import axios from 'axios';

import config from '@globalConfig/App';
import Session from '@utils/Session';

const TumblrAPI = {
  consumerKey: process.env.REACT_APP_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
  oauthToken: process.env.REACT_APP_OAUTH_TOKEN,
  oauthTokenSecret: process.env.REACT_APP_OAUTH_TOKEN_SECRET
 }

const instance = axios.create({
  baseURL: config.endpoint,
  auth:{
    username:TumblrAPI.oauthToken,
    password:TumblrAPI.oauthTokenSecret
  },
  params: {
    api_key: TumblrAPI.consumerKey
  }
});

instance.interceptors.request.use(config => {
  const authSession = Session.get('auth');

  if(authSession.accessToken){
    config.headers.Authorization = `Bearer ${authSession.accessToken}`;
  }

  return config;
});

export default instance
