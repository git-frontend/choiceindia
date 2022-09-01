import axios from "axios";
import { API_URLS } from "./API-URLS";

const VotingResultService = {

    

    VotingResult: function () {

        let api = new API_URLS()
        let url = api.getVotingResultURL()
        return axios.get(url).then((data) => {
            return data
        })
    }

}
export default VotingResultService;