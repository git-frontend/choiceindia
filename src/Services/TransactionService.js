import axios from "axios";
import { API_URLS } from "./API-URLS";

const transactionService = {

    

    Transaction: function () {

        let api = new API_URLS()
        let url = api.getTransactionURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default transactionService;