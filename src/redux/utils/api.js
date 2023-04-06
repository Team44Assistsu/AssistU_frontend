import axios from "./axios";
import local from "./localStorage";

class ApiJunction {
  makeRequest(params) {
    let token = params.token || local.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.headers.common["Content-Type"] = `application/json`;
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    if (params?.headers) {
      const headers = Object.entries(params?.headers);
      headers.map(([key, val]) => {
        axios.defaults.headers.common[key] = val;
        return null;
      });
    }
    if (params.method === "get") {
      return axios.get(params.url, { params: params.params });
    } else if (params.method === "post") {
      return axios
        .post(params.url, params.body)
        .then((res) => {
          if (res.code === 200) {
            return res.data;
          }
          return res;
        })
        .then((err) => {
          return err;
        });
    } else if (params.method === "put") {
      return axios.put(params.url, params.body);
    } else if (params.method === "delete") {
      return axios.delete(params.url, params.body);
    } else {
      return { success: false, msg: "No method provided, get, post?" };
    }
  }

  login(params) {
    return axios.post(params.url, params.body);
  }
}

export default new ApiJunction();
