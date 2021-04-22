import axios from "./../config/Axios";

export default class PostsService {
  static getPosts() {
    return axios.get(`/acf/v3/posts`);
  }
}
