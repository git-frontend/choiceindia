import axios from "axios";
import { API_URLS } from "./API-URLS";

const InvestorCharterService = {

    

    InvestorCharter: function (id) {

        let api = new API_URLS()
        let url = api.getInvestorStockURL(id)
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default InvestorCharterService;