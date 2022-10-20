import axios from "axios";
import { API_URLS } from "./API-URLS";

const referService = {

    

    referearn: function (postdata) {

        let api = new API_URLS()
        let url = api.getreferearnURL(postdata)
        return axios.get(url).then(({ data }) => {
            return data
        })
    }

}
export default referService;