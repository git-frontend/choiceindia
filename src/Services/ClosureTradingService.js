import axios from "axios";
import { API_URLS } from "./API-URLS";

const closureTradingService = {

    

    ClosureTrading: function () {

        let api = new API_URLS()
        let url = api.getClosureTradingURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default closureTradingService;