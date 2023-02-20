
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
                    /*  vd.tvStatus.text =
                         "${activity.resources.getString(item.signalTypeEnum.signalTypeObj.name)} @ $
                         {
                             item.scripInfo?.cf(
                                 item.miniTarget
                             )
                         } */
                } else {
                    matched_price = ""
                    /*  vd.tvStatus.text =
                         activity.resources.getString(item.signalTypeEnum.signalTypeObj.name) */
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
        // if (/Android|webOS|windows phone|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {

        //  window.open("https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy")

        // } else if (/iPod|iPhone|iPad/i.test(navigator.userAgent)) {

        //   window.open("https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261")
        // }else{
        //     window.open("https://jiffy.choiceindia.com/research-report/research/signals/EQ")
        // }

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
       // data.profitPercentage = ((data.call_type ? getProfitPercentage(data.call_type == 'buy', data.iStatusType, ((element.TACode == 5 || element.TACode == 35) ? (element.TP3 || element.TP2 || element.TP1) : ([3, 13, 23, 33].indexOf(element.TACode) > -1) ? (element.TP2 || element.TP1) : element.TP1), element.SL, element.ExitP, data.bookedProfitPriceInPaise, element.EP, data.calculatedQty, element.Sym, element.TP0) : 0)||0).toFixed(2)
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
            Count: 6,
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
                response = res.Response.Data;
                console.log("all response",response)
                let tokenList = {};

                if(response.TACode === 2 || response.TACode === 3 || response.TACode === 4){


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
                        // tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
                        return ele
                    })
                    //FUTURE REFERENCE
                    // subscribeMultitouchline(tokenList,onRealtimeCallback,session);
                    setResearchReport(response)
                }
   
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


            {/* {!showLoader && (!researchReport || researchReport?.length == 0) ? <div>
                <div className="text-center">
                    <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                </div>
            </div> : ''} */}


           
            {
            showLoader ? 
            <div className="text-center">
            <div>
                {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> */}

                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                 </div>
        </div>
        :
                <div>
                    {
                        (researchReport && researchReport?.length) ?
                        <div className="cquant-tab-cont">
                <div className="cquant-tab-list">
                    {researchReport.map((report, index) => {
                        return (<div className="cquant-tab-itm" key={index}>
                            <div className="tab-itm-top inactive-call">
                                <div className="itm-top-ttl">
                                    <div className="d-flex align-self-end">
                                        <h3 className="ttl-mn">{report?.scrip_name} <small>{report?.segmentName}</small></h3>
                                        <h3 className={"ttl-sm " + (report?.statusClass)}>{report?.status}</h3>
                                        {/* <h4 className="ttl-sm-nw grn-txt">Active</h4> */}
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



//Future Reference

    //   let pipeToObject=(data)=> {
    //     let name;
    //     let object = {};
    //     if (data) {
    //       data.substring(1, data.length - 1).split(/\||=/).forEach((item, index) => {
    //         index % 2 ? (object[name] = item) : (name = item);
    //       });
    //     }
    //     return [object];
    //   }
    //   let onRealtimeCallback=(data)=>{
    //     console.log("onRealtimeCallback: ",data)
    //     processB5String(data.responseString,null)
    //   }
    //   let processB5String=(b5String,newB5)=>{
    //     b5String = b5String.replace(/\$/g, "|");
    //     let splitData = pipeToObject(b5String);

    //  // console.log(newB5," datata ",b5Data)
    //   let bestData=newB5||{} //||b5Data
    //     let indicesData={}
    //         indicesData['PrevClose'] = bestData.PrevClose||0;
    //     indicesData["LTP"] = (splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0; // if LTP == 0 then show prevClose (10/05/2021)
    //     indicesData["LTP_DATA"] = ((splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0).toFixed(2); // if LTP == 0 then show prevClose (10/05/2021)
    //     indicesData["Token"] = (splitData[0]["7"])
    //     indicesData["diff"] = indicesData["LTP"] - (indicesData['PrevClose'] / splitData[0]["399"]);
    //     indicesData["percentage"] = (((indicesData["diff"]) / ((indicesData["LTP"]) - indicesData["diff"])) * 100) || 0;
    //     indicesData["change"] = indicesData['PrevClose']==0?0:Math.abs(indicesData["diff"]).toFixed(2);
    //     indicesData["changePercent"] = indicesData['PrevClose']==0?0:Math.abs(indicesData["percentage"]).toFixed(2);
    //     if (indicesData["diff"] < 0) {
    //         indicesData["color"] = "red";
    //         indicesData["arrow"] = "icon-long-arrow-down"
    //     }
    //     else if (indicesData["diff"] === 0) {
    //         indicesData["color"] = "";
    //         indicesData["arrow"] = ""
    //     }
    //     else if (indicesData["diff"] > 0) {
    //         indicesData["color"] = "green";
    //         indicesData["arrow"] = "icon-long-arrow-up"
    //     }

    //     indicesData["open"] = splitData[0]["75"] / splitData[0]["399"];
    //     indicesData["close"] = (splitData[0]["76"] / splitData[0]["399"]);
    //     indicesData["wKHigh"] = (splitData[0]["93"] / splitData[0]["399"]);
    //     indicesData["WkLow"] = (splitData[0]["94"] / splitData[0]["399"]);
    //     indicesData["volume"] = parseInt(splitData[0]["79"]);
    //     indicesData["high"] = (splitData[0]["8"] == 0) ? indicesData["close"] : splitData[0]["77"] / splitData[0]["399"]; // if ltp == 0 then show prevClose in high (24/05/2021)
    //     indicesData["low"] = (splitData[0]["8"] == 0) ? indicesData["close"] : splitData[0]["78"] / splitData[0]["399"]; // if ltp == 0 then show prevClose in low (24/05/2021)
    //    // setCompanyData(indicesData)

    //     console.log("onRealtimeCallback processed CQUANT",indicesData)

    //     if(researchReport&& researchReport.length)
    //     { let data=researchReport
    //      data.forEach(ele=>{


    //         // console.log("compare",ele,indicesData)
    //         if(ele.token==indicesData.Token){
    //             ele.LTP=indicesData.LTP
    //         }
    //      })

    //      console.log("datadatadata",data)
    //      setResearchReport(data)}
    // }



                        {/*     <div className="cquant-tab-itm">
                <div className="tab-itm-top">
                    <div className="itm-top-ttl">
                       <div className="d-flex align-self-end">
                            <h3 className="ttl-mn">POLYPLEX <small>NSE</small></h3> 
                            <h4 className="ttl-sm">Short Term</h4>
                       </div>
                       <h5 className="date-publish">Published at 4th Apr’22 09:45:32 AM</h5>
                       <a href="#" className="post-read">View More</a>
                    </div>
                    <div className="itm-date-btn">
                        <a href="/" className="btn-sm grn-btn">BUY</a>
                        <h5 className="ltp-percent grn-txt">Upside (6.26 %)</h5>
                    </div>
                </div>
                
            </div> */}
                    {/*             <div className="cquant-tab-itm">
                <div className="tab-itm-top">
                    <div className="itm-top-ttl">
                       <div className="d-flex align-self-end">
                            <h3 className="ttl-mn">POLYPLEX <small>NSE</small></h3> 
                            <h4 className="ttl-sm">Short Term</h4>
                       </div>
                       <h5 className="date-publish">Published at 4th Apr’22 09:45:32 AM</h5>
                       <a href="#" className="post-read">View More</a>
                    </div>
                    <div className="itm-date-btn">
                        <a href="/" className="btn-sm red-btn">SELL</a>
                        <h5 className="ltp-percent red-txt">Upside (6.26 %)</h5>
                    </div>
                </div>
            </div>
            <div className="cquant-tab-itm">
                <div className="tab-itm-top">
                    <div className="itm-top-ttl">
                       <div className="d-flex align-self-end">
                            <h3 className="ttl-mn">POLYPLEX <small>NSE</small></h3> 
                            <h4 className="ttl-sm">Short Term</h4>
                       </div>
                       <h5 className="date-publish">Published at 4th Apr’22 09:45:32 AM</h5>
                       <a href="#" className="post-read">View More</a>
                    </div>
                    <div className="itm-date-btn">
                        <a href="/" className="btn-sm red-btn">SELL</a>
                        <h5 className="ltp-percent red-txt">Upside (6.26 %)</h5>
                    </div>
                </div>
            </div>
            <div className="cquant-tab-itm">
                <div className="tab-itm-top">
                    <div className="itm-top-ttl">
                       <div className="d-flex align-self-end">
                            <h3 className="ttl-mn">POLYPLEX <small>NSE</small></h3> 
                            <h4 className="ttl-sm">Short Term</h4>
                       </div>
                       <h5 className="date-publish">Published at 4th Apr’22 09:45:32 AM</h5>
                       <a href="#" className="post-read">View More</a>
                    </div>
                    <div className="itm-date-btn">
                        <a href="/" className="btn-sm grn-btn">BUY</a>
                        <h5 className="ltp-percent grn-txt">Upside (6.26 %)</h5>
                    </div>
                </div>
            </div>
            <div className="cquant-tab-itm">
                <div className="tab-itm-top">
                    <div className="itm-top-ttl">
                       <div className="d-flex align-self-end">
                            <h3 className="ttl-mn">POLYPLEX <small>NSE</small></h3> 
                            <h4 className="ttl-sm">Short Term</h4>
                       </div>
                       <h5 className="date-publish">Published at 4th Apr’22 09:45:32 AM</h5>
                       <a href="#" className="post-read">View More</a>
                    </div>
                    <div className="itm-date-btn">
                        <a href="/" className="btn-sm grn-btn">BUY</a>
                        <h5 className="ltp-percent grn-txt">Upside (6.26 %)</h5>
                    </div>
                </div>
            </div> */}

