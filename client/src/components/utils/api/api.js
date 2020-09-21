import axios from "axios";
const apiRoot = "/ofertas";

export default {
  // GET all the offers
  getList: (search) => {
    return axios.get(`${apiRoot}/${search}`).catch(function (error) {
      console.log(error);
    });
  },
};
