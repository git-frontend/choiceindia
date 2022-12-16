import axios from "axios";
import { API_URLS } from "./API-URLS";

const cfplService = {


    CfplPolicy: function () {

        let api = new API_URLS()
        let url = api.getCfplPolicyURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default cfplService;