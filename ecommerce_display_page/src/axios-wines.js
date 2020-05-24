import axios from "axios";

const instance = axios.create({
  baseURL: "https://95v8xbxy25.execute-api.ap-southeast-2.amazonaws.com/latest/Masterwine",
});

export default instance;
