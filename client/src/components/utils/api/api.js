import axios from "axios";
const apiRoot = "/";

export default {
  // GET all the apartments
  getList: () => {
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },
};
