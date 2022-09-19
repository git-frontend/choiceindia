import axios from "axios";
import { API_URLS } from "./API-URLS";

const cebplService = {

    

    CebplPolicy: function () {

        let api = new API_URLS()
        let url = api.getCebplPolicyURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default cebplService;