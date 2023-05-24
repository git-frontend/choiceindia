import axios from "axios";
import { API_URLS } from "./API-URLS";

const cmsService = {

    

    VotingResult: function () {

        let api = new API_URLS()
        let url = api.getVotingResultURL()
        return axios.get(url).then((data) => {
            return data
        })
    },

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
    },

    BoardOfdirector: function () {
        let api = new API_URLS()
        let url = api.getBoardOfDirector()
        return axios.get(url).then((data) => {
            return data

    })
}


}
export default cmsService;