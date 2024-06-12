
import React, { useEffect, useState } from "react";
import { API_URLS } from "../../Services/API-URLS";
import rest from '../../Services/rest'
import { subscribeOnStream, subscribeMultitouchline, unSubscribeMultitouchline } from "../../Services/socketData";
import utils from "../../Services/utils";
import Template1 from "../Common-features/Template1";
import Template2 from "../Common-features/Template2";
import Template3 from "../Common-features/Template3";
import Template5 from "../Common-features/Template5";
import Template6 from "../Common-features/Template6";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function SBDesk() {

    /**Response Data Locally */
    let resData = []
    /**Set Research Report Data */
    const [researchReport, setResearchReport] = useState([])
    /**To Execute one timeonly */
    const [trigger, setTrigger] = useState(false)
    /**Show loader */
    const [showLoader, setShowLoader] = useState(true);
    const [isloading,setisloading ] = useState(true);




    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
            rest.generateSessionId(getExpertResearch,setShowLoader);   
        }
        return () => {
            let tokenList = []
            researchReport.forEach(ele => {
                tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
            })
            unSubscribeMultitouchline(tokenList)
        }
    }, [trigger])


    // useEffect(() => {
    //     window.open("https://finx.choiceindia.com/research-report/research/experts/EQ");
    // },[])
    /**
     * Generate Session Id
     */
    // function generateSessionId() {
    //     setShowLoader(true)
    //     let api = new API_URLS()
    //     fetch(api.getSessionUrl())
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(res => {
    //             if (res.Status == 'Success') {
    //                 getExpertResearch(res.Response)
    //             } else {
    //                 getExpertResearch()
    //             }

    //         }, err => {
    //             getExpertResearch()
    //         })

    // }
    /**
     * Convert ResponseTring to  Object
     * @param {Response String} data 
     * @returns 
     */
    let pipeToObject = (data) => {
        let name;
        let object = {};
        if (data) {
            data.substring(1, data.length - 1).split(/\||=/).forEach((item, index) => {
                index % 2 ? (object[name] = item) : (name = item);
            });
        }
        return [object];
    }

    /**
     * Recieves socket reponse
     * @param {Socket Response} data 
     */
    let onRealtimeCallback = (data) => {
        processB5String(data.responseString, null)
    }

    /**
     * Process Socket Reponse
     * @param {Socket Response String} b5String 
     * @param {*} newB5 
     */
    let processB5String = (b5String, newB5) => {
        b5String = b5String.replace(/\$/g, "|");
        let splitData = pipeToObject(b5String);

        let bestData = newB5 || {}   //||b5Data
        let indicesData = {}
        indicesData['PrevClose'] = bestData.PrevClose || 0;
        indicesData["LTP"] = (splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0; // if LTP == 0 then show prevClose (10/05/2021)
        indicesData["LTP_DATA"] = (((splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) )|| 0).toFixed(2); // if LTP == 0 then show prevClose (10/05/2021)
        indicesData["Token"] = (splitData[0]["7"])
        indicesData["diff"] = indicesData["LTP"] - (indicesData['PrevClose'] / splitData[0]["399"]);
        indicesData["percentage"] = (((indicesData["diff"]) / ((indicesData["LTP"]) - indicesData["diff"])) * 100) || 0;
        indicesData["change"] = indicesData['PrevClose'] == 0 ? 0 : Math.abs((indicesData["diff"]||0)).toFixed(2);
        indicesData["changePercent"] = indicesData['PrevClose'] == 0 ? 0 : Math.abs((indicesData["percentage"])||0).toFixed(2);
        if (indicesData["diff"] < 0) {
            indicesData["color"] = "red";
            indicesData["arrow"] = "icon-long-arrow-down"
        }
        else if (indicesData["diff"] === 0) {
            indicesData["color"] = "";
            indicesData["arrow"] = ""
        }
        else if (indicesData["diff"] > 0) {
            indicesData["color"] = "green";
            indicesData["arrow"] = "icon-long-arrow-up"
        }
        //Future Reference
        // indicesData["open"] = splitData[0]["75"] / splitData[0]["399"];
        // indicesData["close"] = (splitData[0]["76"] / splitData[0]["399"]);
        // indicesData["wKHigh"] = (splitData[0]["93"] / splitData[0]["399"]);
        // indicesData["WkLow"] = (splitData[0]["94"] / splitData[0]["399"]);
        // indicesData["volume"] = parseInt(splitData[0]["79"]);
        // indicesData["high"] = (splitData[0]["8"] == 0) ? indicesData["close"] : splitData[0]["77"] / splitData[0]["399"]; // if ltp == 0 then show prevClose in high (24/05/2021)
        // indicesData["low"] = (splitData[0]["8"] == 0) ? indicesData["close"] : splitData[0]["78"] / splitData[0]["399"]; // if ltp == 0 then show prevClose in low (24/05/2021)
        // setCompanyData(indicesData)
         

        if ((researchReport && researchReport.length) || (resData && resData.length)) {

            let data = researchReport?.length ? researchReport : resData
           
            data.forEach(ele => {
                
                if (ele.token == indicesData.Token) {
                    ele.LTP = indicesData.LTP

                    if (indicesData.LTP && ele.priceData['stop_loss'] && ele.priceData['target']) {
                        if(ele.status == "Booked Part Profit"){
                            
                            ele.priceData['ltp_price_percentage'] = ((Number(ele.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
                           

                        }else{
                            ele.priceData['ltp_price_percentage'] = ((Number(indicesData.LTP) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
                           

                        }
                        
                   
                        // ele.priceData['part_profit_percentage'] =  ((Number(res.matched_price) - Number(ele.priceData['stop_loss'].value)) / (Number(ele.priceData['target'].value) - Number(ele.priceData['stop_loss'].value))) * 85
                        // console.log("llll",res.matched_price)

                    
                       

                        
                    }

                }
            })
      

            let fin = JSON.parse(JSON.stringify(data))
            resData = fin;
            setResearchReport(fin)
        }


    }


    /**
     * Explore
     */
    let exploreSec = () => {
        // if (/Android|webOS|windows phone|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)) {

        //  window.open("https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy")

        // } else if (/iPod|iPhone|iPad/i.test(navigator.userAgent)) {

        //   window.open("https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261")
        // }else{
        //     window.open("https://jiffy.choiceindia.com/research-report/research/experts/EQ")
        // }
        //Deeplonking
        
    let api = new API_URLS()
         let url = api.getFundamentalDetailURL("https://finx.choiceindia.com/research-report/research/experts/EQ")
        window.open(url)
        
    }

    /**
     * Get Expert Response
     * @param {Session Id} session 
     */
    let getExpertResearch = (session) => {
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
                resData = response
                setResearchReport(response)
            } else {
                setResearchReport([])
            }


        }, err => {
            setShowLoader(false)
        })
    }


    /**
     * Go to Report Detail
     * @param {Report} report 
     */
    let goToDetail = (report) => {
        let api = new API_URLS()
        let url = api.getExpertDetailURL(report.id)
        window.open(url)
    }

    return (
        <div>

            <div className="row">
                <div className="col-md-12">
                    <div className="heading-sec heading-sec-top">
                        <h3 className="title-secnd" >Sumeet Bagadia Desk</h3>
                        <p>Get accurate Research Calls by our team who have proven their worth over time</p>
                    </div>
                </div>
            </div>
    
          {/*   <Template6></Template6> */}
            {/* {!showLoader && (!researchReport || researchReport?.length == 0) ? 
            <div>
                <div className="text-center">
                    <img src={noDataimg} className="img-fluid" alt='loading' height={250} width={250} />
                </div>
            </div> : ''} */}
            {showLoader ? 
              <div className="text-center">
              <div>
                {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} /> */}
                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                 </div>
          </div>
          :
            <div>
                {
                    researchReport && (researchReport?.length)?
                    <div className="sbdesk-tab-cont">
                    <div className="sbdesk-tab-list">
                        {researchReport.map((report, i) => {

                            return <div key={i} className={"sbdesk-tab-itm" + ((report.status == 'Pending') ? "":" tab-itm-inactive")} >
                                <div className="tab-itm-top">
                                    <div className="itm-top-ttl">
                                        <h3 className="ttl-mn">{report.sec_name || report.scrip_sec_desc}</h3>
                                        <h4 className="ttl-sm">  {report.status == 'Pending' ? 'Active' : 'Closed'} {report.status == 'Pending' ? '' : (<span>| <span className={"sml-txt " + (((report?.status_flag == '6') || (report?.status_flag == '0')) ? 'red-txt' : ((report?.status_flag == '3' || report?.status_flag == '4')) ? 'pri-txt' : (report?.status_flag == '7') ? 'bal-txt' : (report?.status_flag == '1') ? 'grn-txt' : 'bal-txt')}>{report?.status == 'Achieved' ? 'Target Achieved' : report?.status == 'Stopped out' ? 'Stop Loss Triggered' : report?.status}</span></span>)} </h4>
                                    </div>
                                    <div className="itm-date-btn">
                                        <h5 className="date-post">{report.published_date}</h5>
                                        <button  disabled={!(report.status == 'Pending')} onClick={() => { goToDetail(report) }} className={((report?.status == "Pending"?' ':'disabled-btn '))+((report.call_type || "").toUpperCase() == 'BUY' ? "grn-btn btn-sm cursor-pointer border-0px" : ((report.call_type || "").toUpperCase() == 'SELL' ? "red-btn btn-sm cursor-pointer" : " btn-sm cursor-pointer"))} >{report.call_type}</button>
                                    </div>
                                </div>
                                <div className="tab-itm-bottom">
                                    <div className="tab-itm-baar">
                                        <div className={"itm-baar-line " + (report?.priceData?.ltp_price_percentage == 100?"target-line-crossed":'')} >

                                        </div>
                                        <div className="itm-cont-des stp-loss">
                                            <h5>Stop Loss</h5>
                                            <h4>{(Number(report?.priceData?.stop_loss?.value || 0)||0).toFixed(2)}</h4>
                                        </div>
                                        <div className={"itm-cont-des targt-prize "+(report?.priceData?.ltp_price_percentage == 100?'target-crossed':'')} >
                                            <h5>Target Price </h5>
                                            <h4>{((Number(report?.priceData?.target?.value || 0)||0)).toFixed(2)}</h4>
                                        </div>
                                        <div className="itm-cont-des entry-prize" style={{ left: report?.priceData?.entry_price_percentage + '%', }}>
                                            <h5>Entry Price</h5>
                                            <h4>{(Number(report?.priceData?.entry_price?.value || 0)||0).toFixed(2)}</h4>
                                        </div>
                                        <div className={" curnt-mrk-price " + ((report?.status == 'Stopped out')?' leftvalueset ':"") + ((report?.status == 'Achieved')?' valueset ':"") + ((report?.LTP < report?.priceData?.entry_price?.value) ? 'red-txt ' : ' grn-txt ') + (report?.priceData?.ltp_price_percentage==100?" cmp-crossed":'')}  style={{ left:(report?.priceData?.ltp_price_percentage > 85 ? 85 : report?.priceData?.ltp_price_percentage)  + '%' }}>
                                            <h4>{report?.status == 'Achieved'||report?.status == 'Stopped out'|| report?.status == 'Booked Part Profit' ? "":'CMP'}  <span className="sm-txt">{ ((report?.status == 'Achieved')? ((Number(report?.priceData?.target?.value || 0)||0)):(report?.status == 'Stopped out')?((Number(report?.priceData?.stop_loss?.value || 0)||0)):(report?.status == 'Booked Part Profit')?((Number(report.matched_price || 0)||0)):(report?.LTP||0)).toFixed(2)}</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <div className="mt-5 d-flex justify-content-center cursor-pointer" onClick={() => { exploreSec() }}><a className="btn-bg" >Explore All</a></div>
                </div>
                :
                <div className="text-center">
                    <img src={noDataimg} className="img-fluid" alt='loading' height={250} width={250} />
                </div>


                }
                
              </div>  
                }




        </div>
    );
}

export default SBDesk;
