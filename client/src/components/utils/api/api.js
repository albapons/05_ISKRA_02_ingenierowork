import axios from "axios";
const apiRoot = "/ofertas";

export default {
  // GET all the offers
  getList: (orden) => {
    console.log(orden);
    return axios.get(`${apiRoot}`).catch(function (error) {
      console.log(error);
    });
  },
};
