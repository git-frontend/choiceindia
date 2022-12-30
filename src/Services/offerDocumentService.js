import axios from "axios";
import { API_URLS } from "./API-URLS";

const offerDocumentService = {
    headerConfig: {
        headers: { 'content-type': 'application/json' }
    },

    

    documentList: function () {

        let api = new API_URLS()
        let url = api.getOfferDocumnetURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default offerDocumentService;