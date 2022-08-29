import axios from "axios";
import { API_URLS } from "./API-URLS";

const noticesService = {

    

    Notices: function (postdata) {

        let api = new API_URLS()
        let url = api.getNoticesUrl()
        return axios.get(url).then((data) => {
            return data
        })
    },

    NoticesRight: function (postdata) {

        let api = new API_URLS()
        let url = api.getNoticesUrlR()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default noticesService;