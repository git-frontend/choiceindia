import axios from "axios";
import { API_URLS } from "./API-URLS";

const Research = {

    headerConfig: {
        headers: { 'x-api-key':'B62664943BAA286B21C66BA9A614D' }
    },

    commodityRes: function (id) {
        let api = new API_URLS()
        let url = api.getresearchURL(id)
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    }
}
export default Research;