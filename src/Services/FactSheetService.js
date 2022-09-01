import axios from "axios";
import { API_URLS } from "./API-URLS";

const FactSheetService = {

    

    Factsheet: function () {

        let api = new API_URLS()
        let url = api.getFactSheetURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default FactSheetService;