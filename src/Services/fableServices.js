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
    },

    fabalcategory:function(){
        let api=new API_URLS()
        let url =api.getFableCategoryURL();
        return axios.get(url).then((data) =>{
            return data
        })

    },
    fabalFolder:function(pros){
        let api=new API_URLS()
        let url =api.getFableFolderURL(pros);
        return axios.get(url).then((data) =>{
            return data
        })

    },

    fableListingTopFive: function () {
        let api = new API_URLS()
        let url = api.getFableTopFiveURL();
        return axios.get(url);
    },


}
export default FablesTrending;