import axios from "axios";
import { API_URLS } from "./API-URLS";

const AnnualReportService = {

    

    AnnualReport: function () {

        let api = new API_URLS()
        let url = api.getAnnualReportURL()
        return axios.get(url).then((data) => {
            return data
        })
    },

    Annual2Report: function () {

        let api = new API_URLS()
        let url = api.getAnnualReport2URL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default AnnualReportService;