import axios from "axios";
import { API_URLS } from "./API-URLS";
import rest from "./rest";
import utils from "./utils";

const Research = { 

    headerConfig: {
        headers: { 'x-api-key':'B62664943BAA286B21C66BA9A614D' }
    },
    headerConfig1: {
        headers: { 'Authorization':'Session 9CD8B0421F' }
    },

    getExpertResearch: function(session,setShowLoader,setResearchReport,subscribeMultitouchline,onRealtimeCallback){
        setShowLoader(true)

        let payload = {
            end_date: '',
            is_expert: 1,
            research_type: '',
            limit: 4,
            offset: 0,
            segment: 'EQ',
            start_date: '',
            status: '',
            subcategory_id: "",
            search: '',
            id: "",
            user_id: ''
        }
        rest.expertReportData(payload).then(res => {
            setShowLoader(false)
            if (res.message == "Success") {

                let response = []
                response = res.response.research;
                let tokenList = [];
                response.forEach(ele => {

                    ele.published_date = utils.formatDate(new Date(ele.published_date), "dd MMMM'yy hh:mm:ss TT")
                    if (ele.datapoints && ele.datapoints.length) {
                        ele.priceData = {}
                        ele.datapoints.forEach(sub => {
                            sub.key = (sub.key == 'cmp') ? 'entry_price' : sub.key;

                            ele.priceData[sub.key] = sub
                        })

                        if (ele.priceData['entry_price'] && ele.priceData['stop_loss'] && ele.priceData['target']) {
                            ele.priceData['entry_price_percentage'] = ((Number(ele.priceData['entry_price'].value) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
                        }

                    }

                    tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
                    //   if(session)
                    //   subscribeOnStream(1,8866,onRealtimeCallback,'guest',session,false,)
                })

                //let custom=[{ 'SegmentId': 5, 'Token': 241529 }]
                subscribeMultitouchline(tokenList, onRealtimeCallback, session);
                // resData = response
                setResearchReport(response)
            } else {
                setResearchReport([])
            }


        }, err => {
            setShowLoader(false)
        })
    },

    researchcategory: function (id) {
        let api = new API_URLS()
        let url = api.getresearchURL(id)
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    }, 

    researchipo: function () {
        let api = new API_URLS()
        let url = api.getresearchipoURL()
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    },

    

    successratio: function (postdata) {
        let api = new API_URLS()
        let url = api.getsuccessURL()
        return axios.post(url,postdata).then(({ data }) => {
            return data
        })
        
    },

    getSingleResearchDetail: function(id,report_category){
        let api = new API_URLS()
        let url = api.getresearchDetailURL(id,report_category)
        return axios.get(url,this.headerConfig).then(({ data }) => {
            return data
        })
    }
}
export default Research;
