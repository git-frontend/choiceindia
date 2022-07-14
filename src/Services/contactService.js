import axios from "axios";
import { API_URLS } from "./API-URLS";

const contact = {

    headerConfig: {
        headers: { 'content-type': 'multipart/form-data' }
    },

    contactForm: function (postdata) {

        let api = new API_URLS()
        let url = api.getContactFormURL()
        return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
            return data
        })
    }
}
export default contact;