import axios from "axios";
import { API_URLS } from "./API-URLS";

const newsService = {

    

    NewsAnnounce: function (postdata) {

        let api = new API_URLS()
        let url = api.getNewsUrl()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default newsService;