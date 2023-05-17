import axios from "axios";
import { API_URLS } from "./API-URLS";


const BasketHeaders =
{
    "x-api-key": "3cxR83ObkDzq2YNqAb7/MP8k1VwD50GZpvE4SaQ+yvE="
}

const AssistedFlowService  = {

    BasketDetails: function(payload){

        let api = new API_URLS()
        let url = api.getBasketDetailsURL()
        return axios.post(url,payload,{headers: BasketHeaders}).then((response) => {
            return response
        })

    }
}

export default AssistedFlowService;