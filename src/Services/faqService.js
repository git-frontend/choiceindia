import axios from "axios";
import { API_URLS } from "./API-URLS";

const faqService = {

    headerConfig: {
        headers: { "authorization": "Basic WXp4cUZXZGJVdzlYOGVhMVBHejpY" }

    },
    faqHeaderConfig: {
        headers: {  "source":"choiceindia",
                    'Content-Type' : 'application/json' }

    },
   

    FaqCategory: function () {

        let api = new API_URLS()
        let url = api.getFaqCategoryURL()
        return axios.get(url, this.headerConfig).then(({ data }) => {
            return data.data
        })
    },

    // FaqFolder: function (id) {

    //     let api = new API_URLS()
    //     let url = api.getFaqURL(id)
    //     return axios.get(url, this.headerConfig).then(({ data }) => {
    //         return data
    //     })
    // },

    FaqArticle: function (id) {

        let api = new API_URLS()
        let url = api.getFaqArticleURL(id)
        return axios.get(url, this.headerConfig).then(({ data }) => {
            return data
        })

    },
    FaqSearch: function (payload,token) {
        let headers = this.faqHeaderConfig.headers;
        headers['Authorization'] = token
        let api = new API_URLS()
        let url = api.getFaqURL()
        return axios.post(url,payload, {headers: headers}).then(({ data }) => {
            return data
        })

    }


}
export default faqService;
