import axios from "axios";
import { API_URLS } from "./API-URLS";


const BasketHeaders =
{
    'Content-Type': 'application/json',
    "x-api-key": "3cxR83ObkDzq2YNqAb7/MP8k1VwD50GZpvE4SaQ+yvE="
}

const OTPHeaders = {
    'Content-Type': 'application/json',
    "dLg2EpslEv1c": "e6k4MEBgzPjZ9OutfecY/PX+6s1Yck2WQmHYlD2nCWQ="
}

const AssistedFlowService  = {

    BasketDetails: function(payload){

        let api = new API_URLS()
        let url = api.getBasketDetailsURL()
        return axios.post(url,payload,{headers: BasketHeaders}).then((response) => {
            return response
        })

    },

    SendOTP: function(payload){

        let api = new API_URLS()
        let url = api.getMFAssistedSendOtpURL()
        return axios.post(url,payload,{headers: OTPHeaders}).then((response) => {
            return response
        })
    },

    VerifyOTP: function(payload){

        let api = new API_URLS()
        let url = api.getMFAssistedVerifyOTPURL()
        return axios.post(url,payload,{headers: OTPHeaders}).then((response) => {
            return response
        })
    },

    Lumpsum: function(payload){

        let api = new API_URLS()
        let url = api.getLumpsumOrderURL()
        return axios.post(url,payload,{headers: OTPHeaders}).then((response) => {
            return response
        })
    },

    XSIP: function(payload){

        let api = new API_URLS()
        let url = api.getSIPOrderURL()
        return axios.post(url,payload,{headers: OTPHeaders}).then((response) => {
            return response
        })
    },

    RefNo: function(payload){

        let api = new API_URLS()
        let url = api.getRefNoURL()
        return axios.post(url, payload,{headers: OTPHeaders}).then((response) => {
            return response
        })
    },

    PaymentLink: function(payload){

        let api = new API_URLS()
        let url = api.getPaymentLinkURL()
        return axios.post(url,payload,{headers: OTPHeaders}).then((response) => {
            return response
        })
    },

    OrderStatus: function(payload){

        let api = new API_URLS()
        let url = api.orderStatusUpdateURL()
        return axios.post(url,payload,{headers: BasketHeaders}).then((response) => {
            return response
        })
    }

}

export default AssistedFlowService;