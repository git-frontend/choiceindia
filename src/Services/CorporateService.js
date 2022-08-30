import axios from "axios";
import { API_URLS } from "./API-URLS";

const corporateService = {

    

    Corporate: function () {

        let api = new API_URLS()
        let url = api.getcorporateURL()
        return axios.get(url).then((data) => {
            return data
        })
    },

    CorporateCommitee: function () {

        let api = new API_URLS()
        let url = api.getcorporatecommiteeURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default corporateService;