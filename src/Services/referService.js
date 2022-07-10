import axios from "axios";
import { API_URLS } from "./API-URLS";

const referService = {

    headerConfig: {
        headers: { "PARTNER_KEY": "nGboM433PcIUGdiT5WShmO2Cnx355Sm4K0UrKD33" }
    },

    referearn: function (postdata) {

        let api = new API_URLS()
        let url = api.getreferearnURL()
        return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
            return data
        })
    },

    referallink: function (id) {

        let api = new API_URLS()
        let url = api.getreferallink(id)
        return axios.get(url, this.headerConfig).then(({ data }) => {
            return data
        })
    }
}
export default referService;