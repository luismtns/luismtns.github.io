import axios from "../config/Axios";

export default class TumblrService {
  static getBlogName = () => {
    return "luisbovo";
  };

  static getPosts(params) {
    return axios.get(`blog/${this.getBlogName()}/posts`, { params: params });
  }
}
