import axios from "axios";
import { API_URLS } from "./API-URLS";

const stockBrokerCityService = {

    

    stockContent: function (type) {

        let api = new API_URLS()
        let url = api.getSubBrokerURL(type)
        return axios.get(url).then((data) => {
            return data
        })
    },

    stockCityContent: function () {

        let api = new API_URLS()
        let url = api.getSubBrokerCityURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default stockBrokerCityService;