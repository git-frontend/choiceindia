import axios from "axios";
import { API_URLS } from "./API-URLS";

const shareHoldingService = {

    

    ShareHolding: function () {

        let api = new API_URLS()
        let url = api.getShareholdingURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default shareHoldingService;