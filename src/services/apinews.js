import axios from "axios";

const apinews = axios.create({
  baseURL: "https://newsapi.org/v2/",
});

apinews.defaults.headers.common.Authorization =
  "5f6b03dd8baf43e888ec7c23ae98d1bf";

export default apinews;
