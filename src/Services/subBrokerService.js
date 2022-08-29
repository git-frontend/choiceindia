import axios from "axios";
import { API_URLS } from "./API-URLS";
const apiURL = new API_URLS()
const LMSHeaders = {
  "x-api-key": "IU7YtVUazZxVmxrcjZqajdNZFJTZE5IQlZnMVZYa1I6Y2VESVluYWJqbE4xa0JOMFBkb3hoWHUzb09rUTJKSFc="
};
const OnbHeaders = {
  'content-type': 'application/json',
  'Accept': 'application/json',
  'userId': 'Choiceindia',
  'ticket': 'aW52ZXN0aWNh'
};

const OnbHeaders2 = {
  'content-type': 'application/json',
  'Accept': 'application/json',
  'userId': 'Choiceindia',
  'ticket': 'amlmZnlBcHA=',
  'businessUnit': 'JF',
  'investorId': 1
};

const subBrokerService = {

  getCities: function () {
    let url = apiURL.getCitiesURL();
    return axios.get(url, { headers: LMSHeaders });
  },

  getStates: function () {
    let url = apiURL.getStatesURL();
    return axios.get(url, { headers: LMSHeaders });
  },

  checkExistence: function (request) {
    let url = apiURL.getCheckExistenceURL();
    return axios.post(url, request, { headers: OnbHeaders });
  },

  sendOTP: function (request) {
    let url = apiURL.getSubBrokerSendOtpUrl();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },

  verifyOTPN: function (request) {
    let url = apiURL.getSubBrokerVerifyOtpUrl();
    return axios.post(url, request, { headers: OnbHeaders2 });
  },

  addNewLead: function (request) {
    let url = apiURL.getAddNewLeadURL();
    return axios.post(url, request, { headers: OnbHeaders });
  },

};
export default subBrokerService;
