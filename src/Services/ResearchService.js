import axios from "axios";
import { API_URLS } from "./API-URLS";

const Research = { 

    headerConfig: {
        headers: { 'x-api-key':'B62664943BAA286B21C66BA9A614D' }
    },
    headerConfig1: {
        headers: { 'Authorization':'Session 9CD8B0421F' }
    },

    researchcategory: function (id) {
        let api = new API_URLS()
        let url = api.getresearchURL(id)
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    }, 

    researchipo: function () {
        let api = new API_URLS()
        let url = api.getresearchipoURL()
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    },

    

    successratio: function (postdata) {
        let api = new API_URLS()
        let url = api.getsuccessURL()
        return axios.post(url,postdata).then(({ data }) => {
            return data
        })
        
    },

    getSingleResearchDetail: function(id,report_category){
        let api = new API_URLS()
        let url = api.getresearchDetailURL(id,report_category)
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    }
}
export default Research;
