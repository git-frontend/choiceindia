import axios from "axios";
import { API_URLS } from "./API-URLS";

const faqService = {

    headerConfig: {
        headers: { "authorization": "Basic d09tdkVOeXJSZElaMW9oOXNpVE86eA==" }
    },

    FaqCategory: function () {

        let api = new API_URLS()
        let url = api.getFaqCategoryURL()
        return axios.get(url, this.headerConfig).then(({ data }) => {
            return data.data
        })
    },

    FaqFolder: function (id) {

        let api = new API_URLS()
        let url = api.getFaqfolderURL(id)
        return axios.get(url, this.headerConfig).then(({ data }) => {
            return data
        })
    },

    FaqArticle: function (id) {

        let api = new API_URLS()
        let url = api.getFaqArticleURL(id)
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })

    }
}
export default faqService;
