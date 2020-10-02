import axios from "axios";
const apiRoot = "/users";

export default {
  // POST request for new user
  postUser: (email, password) => {
    return axios
      .post(`${apiRoot}`, { email, password })
      .catch(function (error) {
        console.log(error);
      });
  },
};
