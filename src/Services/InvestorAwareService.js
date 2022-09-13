import axios from "axios";
import { API_URLS } from "./API-URLS";

const InvestorAwareService = {

    

    InvestorAware: function () {

        let api = new API_URLS()
        let url = api.getInvestorAwareURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default InvestorAwareService;