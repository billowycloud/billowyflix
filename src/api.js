import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "3794918f3b586ea959736ff8ded7e5d8",
    language: "en-US"
  }
});

/*꼭 상대경로를 써야함 */
api.get("tv/popular");

export default api;
