import axios from "axios";
import { API_URLS } from "./API-URLS";

const fileDownloadService = {
    headerConfig: {
        headers: { 'content-type': 'application/json' }
    },

    

    MarginDay: function () {

        let api = new API_URLS()
        let url = api.getMarginURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default fileDownloadService;