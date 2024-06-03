import axios from "axios";
import { API_URLS } from "./API-URLS";

const cmsService = {

    
/** Voting Result page */ 

    VotingResult: function () {

        let api = new API_URLS()
        let url = api.getVotingResultURL()
        return axios.get(url).then((data) => {
            return data
        })
    },

/** Annual Report page */   

    AnnualReport: function () {

        let api = new API_URLS()
        let url = api.getAnnualReportURL()
        return axios.get(url).then((data) => {
            return data
        })
    },

    Annual2Report: function () {

        let api = new API_URLS()
        let url = api.getAnnualReport2URL()
        return axios.get(url).then((data) => {
            return data
        })
    },

/** Board of director page */

    BoardOfdirector: function () {
        let api = new API_URLS()
        let url = api.getBoardOfDirector()
        return axios.get(url).then((data) => {
            return data

    })
},

/** company ipo API */

    companyIpoService: function () {
    let api = new API_URLS()
    let url = api.companyIpoURL()
    return axios.get(url).then((data) => {
        return data

})
},

/** company ipo API */

insightService: function () {
    let api = new API_URLS()
    let url = api.getinsightsURL()
    return axios.get(url).then((data) => {
        return data

})
},

/** for CEBPL Polices page */
CebplPolicy: function () {

    let api = new API_URLS()
    let url = api.getCebplPolicyURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** for CFPL Policies page */

CfplPolicy: function () {

    let api = new API_URLS()
    let url = api.getCfplPolicyURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Closure Trading page */

ClosureTrading: function () {

    let api = new API_URLS()
    let url = api.getClosureTradingURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Related party transaction */

Transaction: function () {

    let api = new API_URLS()
    let url = api.getTransactionURL()
    return axios.get(url).then((data) => {
        return data
    })
},
/** share holding page */

ShareHolding: function () {

    let api = new API_URLS()
    let url = api.getShareholdingURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Offer Document */


documentList: function () {

    let api = new API_URLS()
    let url = api.getOfferDocumnetURL()
    return axios.get(url).then((data) => {
        return data
    })
},

    /** Corporate Services page */

CorporateGovernance: function () {

        let api = new API_URLS()
        let url = api.getcorporateGovernanceURL()
        return axios.get(url).then((data) => {
            return data
        })
    },

Corporate: function () {

    let api = new API_URLS()
    let url = api.getcorporateURL()
    return axios.get(url).then((data) => {
        return data
    })
},

CorporateCommitee: function () {

    let api = new API_URLS()
    let url = api.getcorporatecommiteeURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** factsheet page */

Factsheet: function () {

    let api = new API_URLS()
    let url = api.getFactSheetURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** file download page */
MarginDay: function () {

    let api = new API_URLS()
    let url = api.getMarginURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** finance info page */

FinanceInfo: function () {

    let api = new API_URLS()
    let url = api.getFinancialURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Investor awareness page */

InvestorAware: function () {

    let api = new API_URLS()
    let url = api.getInvestorAwareURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Investor Charcter page */

InvestorCharter: function () {

    let api = new API_URLS()
    let url = api.getInvestorStockURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Investor presentation page */

InvestorPresentation: function () {

    let api = new API_URLS()
    let url = api.getInvestorURL()
    return axios.get(url).then((data) => {
        return data
    })
},

/** News Announce page */

NewsAnnounce: function (postdata) {

    let api = new API_URLS()
    let url = api.getNewsUrl()
    return axios.get(url).then((data) => {
        return data
    })
},

/** Notice page  */

Notices: function (postdata) {

    let api = new API_URLS()
    let url = api.getNoticesUrl()
    return axios.get(url).then((data) => {
        return data
    })
},

// NoticesRight: function (postdata) {

//     let api = new API_URLS()
//     let url = api.getNoticesUrlR()
//     return axios.get(url).then((data) => {
//         return data
//     })
// }
trackdocumentList: function () {

    let api = new API_URLS()
    let url = api.gettrackDocumnetURL()
    return axios.get(url).then((data) => {
        return data
    })
},
investorCharterData: function () {

    let api = new API_URLS()
    let url = api.getinvestorcharterdataURL()
    return axios.get(url).then((data) => {
        return data
    })
},

}
export default cmsService;