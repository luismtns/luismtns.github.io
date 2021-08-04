import axios from "../config/Axios";

export default class TumblrService {
  static getPosts(params) {
    return axios.get(`blog/luisbovo/posts`, { params: params });
  }
}
