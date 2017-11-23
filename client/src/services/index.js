import axios from "axios";

var request = axios.create({
  baseURL: "http://api.giphy.com",
  params: {
    api_key: "m0nP5tUmeF8JiUSza4zazZrfbHq8jkL6"
  }
});

export default request;
