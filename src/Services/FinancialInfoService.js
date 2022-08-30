import axios from "axios";
import { API_URLS } from "./API-URLS";

const FinanceInfoService = {

    

    FinanceInfo: function () {

        let api = new API_URLS()
        let url = api.getFinancialURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default FinanceInfoService;