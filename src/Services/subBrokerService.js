import axios from "axios";
import { API_URLS } from "./API-URLS";
const apiURL = new API_URLS()
const headers = {
  'Accept': 'application.json',
  'Content-Type': 'application/json'
};

const subBrokerService = {

  getCities: function () {
    let url = apiURL.getCitiesURL();
    return axios.get(url, headers);
  },

  checkExistence: function (request) {
    let url = apiURL.getCheckExistenceURL();
    return axios.post(url, request, headers);
  }

};
export default subBrokerService;
