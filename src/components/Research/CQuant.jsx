
import React, { useEffect, useState } from "react";
import { API_URLS } from "../../Services/API-URLS";
import rest from '../../Services/rest'
import { subscribeOnStream, subscribeMultitouchline } from "../../Services/socketData";
import utils from "../../Services/utils";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function CQuant() {
    /**Set Research Report Data */
    const [researchReport, setResearchReport] = useState([])
    /**To Execute one timeonly */
    const [trigger, setTrigger] = useState(false)
    /**Show loader */
    const [showLoader, setShowLoader] = useState(false)

    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {

            generateSessionId()
        }

    }, [trigger])


    /**
     * Generate Session Id
     */
    function generateSessionId() {
        setShowLoader(true)
        let api = new API_URLS()
        fetch(api.getSessionUrl())
            .then(response => {
                return response.json();
            })
            .then(res => {
                if (res.Status == 'Success') {
                    getSignalResearch(res.Response)
                } else {
                    getSignalResearch()
                }

            }, err => {
                getSignalResearch()
            })

    }

    /**
     * Signal Matched Price
     * @param {Signal  Report} item 
     * @returns 
     */
    let getSignalMatchedPice = (item) => {
        let matched_price = ""
        /* 6,26,56 - Exit case */  /* 7,27,57 Book Profit */  /* 8,28 Book Part Profit */
        if ((item.TACode == 6) ||
            (item.TACode == 26) ||
            (item.TACode == 56) || (item.TACode == 8) ||
            (item.TACode == 28) || (item.TACode == 7) ||
            (item.TACode == 27) ||
            (item.TACode == 57)) {
            if ((item.TACode == 6) ||
                (item.TACode == 26) ||
                (item.TACode == 56)) {
                if (item.exitPrice != null && item.exitPrice > 0) {
                    matched_price = item.exitPrice
                } else {
                    matched_price = ""
                }
            } else if ((item.TACode == 8) ||
                (item.TACode == 28)) {
                if (item.targetPrice0 != null && item.targetPrice0 > 0) {
                    matched_price = item.targetPrice0
                } else {
                    matched_price = ""
                }
            } else {
                if (item.miniTarget != null && item.miniTarget > 0.0) {
                    matched_price = item.miniTarget
                } else {
                    matched_price = ""
                }
            }
        }
        return matched_price
    }

    /**
     * Profit Percentages
     */
    let getProfitPercentage = (
        isBuy,
        entryPriceInPaise,
        matchedPriceInPaise
    ) => {
        let profitPercentage = 0
        try {
            
         
              if (isBuy) {
        
                if (matchedPriceInPaise > 1) {
                  profitPercentage =
                      (((matchedPriceInPaise - entryPriceInPaise)) / entryPriceInPaise)
                  profitPercentage = (profitPercentage * 100)
              } else {
                  profitPercentage = 0
              }
             
              } else {
        
        
                if (matchedPriceInPaise > 1) {
                  profitPercentage =
                      (((entryPriceInPaise - matchedPriceInPaise)) / entryPriceInPaise)
                  profitPercentage = (profitPercentage * 100)
              } else {
                  profitPercentage = 0
              }
                
            
        }
        
        }
        catch (e) {
            //  e.printStackTrace()
        }
        return (profitPercentage||0).toFixed(2)
    }

    /**
     * Go to Jiffy Signal Report
     */
    let exploreSec = () => {
        //Deeplinking

        window.open("https://finx.choiceindia.com/research-report/research/signals/EQ")
    }


    /**
     * Get Formatted Response
     * @param {Report Element} element 
     * @returns 
     */
    let getFormattedResearch = (element) => {
        let call_type_buy = element.HLType ? (element.HLType == 'High' ? 'BUY' : (element.HLType == 'sell'||element.HLType == 'Low') ? 'SELL' : '') : (element.Side ? ((['B', 'BUY', 'Buy'].indexOf(element.Side) > -1) ? 'BUY' : ['S', 'SELL', 'Sell'].indexOf(element.Side) > -1 ? 'SELL' : '') : '')
        let signalConfigPre = {
            1: { slug: 'active', label: 'Active', className: 'balance', iStatusType: 1 },
            2: { slug: 'target1', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            3: { slug: 'target2', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            4: { slug: 'sl', label: 'SL Hit', className: 'red-txt', iStatusType: 3 },
            5: { slug: 'target3', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            6: { slug: 'exit', label: 'Exit', ignoreIncrement: true, className: call_type_buy ? (element.EP < element.ExitP ? 'grn-txt' : 'red-txt') : (element.EP > element.ExitP ? 'grn-txt' : 'red-txt'), iStatusType: 4 },
            7: { slug: 'bookProfit', label: 'Book Profit', className: 'grn-txt', iStatusType: 5 }, //
            8: { slug: 'bookProfit', label: 'Book Part Profit', className: 'grn-txt', iStatusType: 6 },
            10: { slug: 'indexGenerated', label: 'Index Generated', ignoreIncrement: true, className: 'grn-txt', iStatusType: 0 },
            11: { slug: 'active', label: 'Active', className: 'balance', iStatusType: 1 },
            12: { slug: 'target1', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            13: { slug: 'target2', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            14: { slug: 'sl', label: 'SL Hit', className: 'red-txt', iStatusType: 3 },
            15: { slug: 'exit', label: 'Exit', ignoreIncrement: true, className: call_type_buy ? (element.EP < element.ExitP ? 'grn-txt' : 'red-txt') : (element.EP > element.ExitP ? 'grn-txt' : 'red-txt'), iStatusType: 4 },
            21: { slug: 'active', label: 'Active', className: 'balance', iStatusType: 1 },
            22: { slug: 'target1', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            23: { slug: 'target2', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            24: { slug: 'sl', label: 'SL Hit', className: 'red-txt', iStatusType: 3 },
            26: { slug: 'exit', label: 'Exit', ignoreIncrement: true, className: call_type_buy ? (element.EP < element.ExitP ? 'grn-txt' : 'red-txt') : (element.EP > element.ExitP ? 'grn-txt' : 'red-txt'), iStatusType: 4 },
            27: { slug: 'bookProfit', label: 'Book Profit', className: 'grn-txt', iStatusType: 5 },
            28: { slug: 'bookProfit', label: 'Book Part Profit', className: 'grn-txt', iStatusType: 6 },
            31: { slug: 'active', label: 'Active', className: 'balance', iStatusType: 1 },
            32: { slug: 'target1', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            33: { slug: 'target2', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            34: { slug: 'sl', label: 'SL Hit', className: 'red-txt', iStatusType: 3 },
            35: { slug: 'target3', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            51: { slug: 'active', label: 'Active', className: 'balance', iStatusType: 1 },
            52: { slug: 'target1', label: 'Achieved', className: 'grn-txt', iStatusType: 2 },
            54: { slug: 'sl', label: 'SL Hit', className: 'red-txt', iStatusType: 3 },
            56: { slug: 'exit', label: 'Exit', ignoreIncrement: true, className: call_type_buy ? (element.EP < element.ExitP ? 'grn-txt' : 'red-txt') : (element.EP > element.ExitP ? 'grn-txt' : 'red-txt'), iStatusType: 4 },
            57: { slug: 'bookProfit', label: 'Book Profit', className: 'grn-txt', iStatusType: 5 },
        }
        let segmentMapper = {
            1: { segmentLabel: "NSE", segmentTime: "0915-1600" },
            2: { segmentLabel: "NSEFO", segmentTime: "0900-1600" },
            3: { segmentLabel: "BSE", segmentTime: "0915-1600" },
            4: { segmentLabel: "BSEFO", segmentTime: "0915-1600" },
            5: { segmentLabel: "MCX", segmentTime: "0900-2330" },
            6: { segmentLabel: "MCXSPOT", segmentTime: "0900-2330" },
            7: { segmentLabel: "NCDEX", segmentTime: "0900-2100" },
            8: { segmentLabel: "NCDEX Spot", segmentTime: "0900-2100" },
            13: { segmentLabel: "NSECDS", segmentTime: "0900-1700" },
            14: { segmentLabel: "NSECDS Spot", segmentTime: "0900-1700" },
        }
        let data = {
            call_type: element.HLType ? (element.HLType == 'High' ? 'buy' : element.HLType == 'sell' ? 'SELL' : '') : (element.Side ? ((['B', 'BUY', 'Buy'].indexOf(element.Side) > -1) ? 'buy' : ['S', 'SELL', 'Sell'].indexOf(element.Side) > -1 ? 'sell' : '') : ''),
            category_id: "",
            category_name: "",
            category_slug: "",
            matched_price: null,
            option_type: "",
            ATime: element.ATime,
            priceData: {
                entry_price: { key: 'entry_price', label: 'Entry Price', value: element.EP / 100 },
                stop_loss: { key: 'stop_loss', label: 'Stop Loss', value: element.SL / 100 },
                target: { key: 'target', label: 'Target', value: element.TP1 / 100 },
                target2: { key: 'target2', label: '2nd Target', value: element.TP2 / 100 },
                target3: { key: 'target3', label: '3rd Target', value: element.TP3 / 100 },
            },
            id: element.Id,
            call_type_buy: call_type_buy,
            scrip_name: element.Sym,
            scrip_expiry: element.IsExpired,
            isExpired: element.IsExpired,
            scrip_sec_desc: element.Name,
            scrip_symbol: element.Sym,
            sec_name: element.Sym,
            segment_id: element.Seg,
            series: "",
            status_flag: "",
            AType: element.AType,
            title: "",
            token: element.Tok,
            LTP: element.LTP / 100,
            status: element.TACode && signalConfigPre[element.TACode] && signalConfigPre[element.TACode].label ? signalConfigPre[element.TACode].label : '',//this.config.signalConfig&&element.AType&&this.config.signalConfig[element.AType]&&element.TACode&&this.config.signalConfig[element.AType].statusCodes&&this.config.signalConfig[element.AType].statusCodes[element.TACode]&&this.config.signalConfig[element.AType].statusCodes[element.TACode].label?this.config.signalConfig[element.AType].statusCodes[element.TACode].label:"",
            statusClass: element.TACode && signalConfigPre[element.TACode] && signalConfigPre[element.TACode].label ? signalConfigPre[element.TACode].className : '',//this.config.signalConfig&&element.AType&&this.config.signalConfig[element.AType]&&element.TACode&&this.config.signalConfig[element.AType].statusCodes&&this.config.signalConfig[element.AType].statusCodes[element.TACode]&&this.config.signalConfig[element.AType].statusCodes[element.TACode].label?this.config.signalConfig[element.AType].statusCodes[element.TACode].label:"",
            subcategory_id: '',
            profitPercentage: 0,
            calculatedQty: (element.MarketLot || 1) * 1,
            iStatusType: element.TACode && signalConfigPre[element.TACode] && signalConfigPre[element.TACode].iStatusType ? signalConfigPre[element.TACode].iStatusType : 0,
            bookedProfitPriceInPaise: 0,
             segmentName: segmentMapper[element.Seg].segmentLabel,//this.utils.getSegmentDetail(element.Seg, 'SegmentName'),
            TACode: element.TACode,
            exitPrice: element.ExitP,
            miniTarget: element.MT,
            targetPrice0: element.TP0,
        }
        data.matched_price = element.MP||0
        data.bookedProfitPriceInPaise = (element.MT || 0)
       data.profitPercentage =  getProfitPercentage(data.call_type == 'buy',  element.EP, element.MP)  
       if (element.Sym == 'LTI') {
        }
        return data
    }


    /**
     * Go to jiffy signal detail page
     * @param {Report} report 
     */
    let goToDetail = (report) => {
        let api = new API_URLS()
        let url = api.getSignalDetailURL(report.id)
        window.open(url)
    }


    /**
     * Signal Research Report
     * @param {Session Id} session 
     */
    let getSignalResearch = (session) => {
        setShowLoader(true)
        let payload = {
            Count: 1000,
            endDate: utils.formatDate(new Date(), "dd-MM-yyyy"),
            SessionId: session,
            Start: 0,
            startDate: utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "dd-MM-yyyy"),
            status: 'ALL',
            type: 'EQ',
            UserId: 'guest',
            search: ''
        }
        rest.signalReportData(payload).then(res => {

            setShowLoader(false)
            if (res.Status == "SUCCESS") {

                let response = []
                console.log("all response",response)
                res.Response.Data.forEach(ele => {
                    if ((ele.TACode == 2)||(ele.TACode == 3)||(ele.TACode == 5)||(ele.TACode == 12)||(ele.TACode == 13)||(ele.TACode == 22)||(ele.TACode == 23)||(ele.TACode == 32)||(ele.TACode == 33)||(ele.TACode == 35)||(ele.TACode == 52) ) {
                    
                        response.push(ele)
                   
                }
                
                })


                    response = response.map(ele => {

                        ele = JSON.parse(JSON.stringify(getFormattedResearch(ele)))
    
                        let dateData = ele.ATime;
                        if (dateData) {
                            let len = dateData.split(" ")
                            if (len.length) {
                                ele.date = len[0];
                                ele.time = len[1];
                            }
                        }
                        ele.published_date = utils.formatDate(new Date(ele.date.split('-')[2], (ele.date.split('-')[1] - 1), ele.date.split('-')[0], ele.time.split(':')[0], ele.time.split(':')[1], ele.time.split(':')[2]), "dd MMMM'yy hh:mm:ss TT")
    
    
                         //FUTURE REFERENCE
                        return ele
                    })
                    //FUTURE REFERENCE
                    setResearchReport(response)
                
   
            } else {
                setResearchReport([])
            }


        }, err => {
            setShowLoader(false)
        })
    }


    return (
        <div>

            <div className="row">
                <div className="col-xl-8 col-md-12">
                    <div className="heading-sec heading-sec-top">
                        <h3 className="title-secnd" >Signal</h3>
                        <p>Explore the world of trading with our robust algorithms that empower both novices as well as professionals by providing effective positional calls.</p>
                    </div>
                </div>
            </div>


           
            {
            showLoader ? 
            <div className="text-center">
            <div>

                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                 </div>
        </div>
        :
                <div>
                    {
                        (researchReport && researchReport?.length) ?
                        <div className="cquant-tab-cont">
                <div className="cquant-tab-list">
                    {researchReport.slice(0,6).map((report, index) => {
                        return (<div className="cquant-tab-itm" key={index}>
                            <div className="tab-itm-top inactive-call">
                                <div className="itm-top-ttl">
                                    <div className="d-flex align-self-end">
                                        <h3 className="ttl-mn">{report?.scrip_name} <small>{report?.segmentName}</small></h3>
                                        <h3 className={"ttl-sm " + (report?.statusClass)}>{report?.status}</h3>
                                    </div>
                                    <h5 className="date-publish">Published at {report?.published_date}</h5>
                                </div>
                                <div className="itm-date-btn">
                                    <a onClick={() => { goToDetail(report) }} className={"btn-sm cursor-pointer " +(report?.call_type_buy == 'BUY' ? 'grn-btn' : (report?.call_type_buy == 'SELL' ? 'red-btn' : ''))}>{report?.call_type_buy}</a>
                                    {report?.status == "Active" ? <h5 className={"ltp-percent grn-txt"}>Active</h5> : <h5 className={"ltp-percent " + report?.statusClass}>{report?.profitPercentage < 0 ? "Loss" : "Profit"} ({report?.profitPercentage} %)</h5>}
                                </div>
                                <div className="view-post">
                                    <a onClick={() => { goToDetail(report) }}  className="post-read cursor-pointer">View More</a>
                                </div> 
                                
                            </div>

                        </div>)
                    })}

                </div>
                <div className="mt-5 d-flex justify-content-center cursor-pointer" onClick={() => { exploreSec() }}><a className="btn-bg" >Explore All</a></div>
            </div>:
            <div className="text-center">
            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
        </div>

                    }
                
            </div>
            }
            




        </div>
    );
}

export default CQuant;
