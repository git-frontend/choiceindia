import axios from "axios";
import { API_URLS } from "./API-URLS";

const InvestorPresentationService = {

    

    InvestorPresentation: function () {

        let api = new API_URLS()
        let url = api.getInvestorURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default InvestorPresentationService;