
import axios from "../config/Axios"

import config from '@globalConfig/App';

export default class TumblrService {

  static getBlogName = () =>'luisbovo'
  
  static getPosts(params) {
    return axios.get(`blog/${this.getBlogName()}/posts`, {params:params});
  }
}
