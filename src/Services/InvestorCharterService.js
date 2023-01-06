import axios from "axios";
import { API_URLS } from "./API-URLS";

const InvestorCharterService = {

    

    InvestorCharter: function () {

        let api = new API_URLS()
        let url = api.getInvestorStockURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default InvestorCharterService;