import axios from "axios";

import { API_URLS } from "./API-URLS";

const FablesTrending ={


    /** Fables trending list */

    fabalTrending:function(){
        let api =new API_URLS()
        let url =api.getFableTrendingURL();
        return axios.get(url).then((data) => {
            return data
        })
    }


}
export default FablesTrending;