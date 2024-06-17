
import React from "react";
import noDataimg from '../../assets/images/no-data.webp';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import utils from "../../Services/utils";
import rest from "../../Services/rest";
import { API_URLS } from "../../Services/API-URLS";
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function FnoRecord() {
    const [list, setlist] = useState();
    const [Data1, setData1] = useState();
    const [showLoader, setShowLoader] = useState(false);
    const [rendercount, setRenderCount] = useState(() => false);

    function chapterScroll3(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    let tokenList = [{}]
    let multiValue = [];
    let AllFilesValue = {};
    let tokens = "";
    let storefile;

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            // rest.generateSession(setData1);
            FandORecords()
        }
    }, [rendercount])
    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        margin: 15,
        dots: true,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,

                },
            },
        ],
    };
    // function generateSessionId() {
    //     let api = new API_URLS()
    //     fetch(api.getSessionUrl())
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(res => {
    //             if (res.Status == 'Success') {
    //                 IntraStocks(res.Response);
    //                 setData1(res.Response);
    //             } else {
    //                 IntraStocks([])
    //             }
    //         }, err => {
    //             IntraStocks([])
    //         })
    // }
    function FandORecords() {

        setlist([]);
        tokens = '';
        tokenList = [];
        storefile = '';
        setShowLoader(true)
        let request = {

            "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
            "is_expert": 0,
            "research_type": "",
            "limit": 10,
            "offset": 0,
            "segment": "FO",
            "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
            "status": "Target Achieved",
            "subcategory_id": "",
            "search": "",
            "id": "",
            "user_id": "",
            "timeline_enabled": 1,
            "category_id": 2
        }

        rest.fetchReportData(request,setShowLoader,setlist,Data1);

        // rest.expertReportData(request).then(

        //     res => {

        //         if (res) {
        //             // console.log("checkdd",res.response.research);
        //             storefile = res.response.research;
        //             // setlist(res.response.research);

        //             res.response.research.forEach(ele => {

        //                 tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })

        //                 ele['LTP'] = ele['LTP'] / 100
        //             });

        //             setlist(res.response.research);
        //             let unique = []
        //             for (let i = 0; i < tokenList.length; i++) {
        //                 unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
        //             }
        //             unique.forEach(element => {
        //                 if (!tokens.includes(element)) {
        //                     tokens += element
        //                 }
        //             });
        //             // console.log("SegmentId",tokens);
        //             // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
        //             const payload = {
        //                 'UserId': 'guest',
        //                 'SessionId': Data1,
        //                 'MultipleTokens': tokens
        //             }

        //             rest.multipleTokensURLData(payload).then(
        //                 res => {
        //                     if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {

        //                         res.Response.lMT.forEach((ele, index) => {
        //                             // console.log("ele", ele)
        //                             ele['LTP'] = ele['LTP'] / 100;
        //                             ele.PrevClose = ele.PC / 100;
        //                             ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
        //                             ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
        //                             // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
        //                             for (let i = 0; i < storefile.length; i++) {

        //                                 if (storefile[i].token == ele.Tok && storefile[i].segment_id == ele.Seg) {
        //                                     AllFilesValue = Object.assign(storefile[i], ele);
        //                                     multiValue.push(AllFilesValue)
        //                                     setShowLoader(false)
        //                                 }
        //                             }
        //                         })

        //                         setlist(multiValue);

        //                     }
        //                     else{
        //                         setShowLoader(false)
        //                     }
        //                 }).catch((error) => {

        //                     setShowLoader(false)
              
                            
              
        //                   });
        //         }
        //     })

        //     .catch((error) => {
        //         setShowLoader(false)
        //         setlist([]);
        //     });
    }


    return (
        <>
            <section className="fno-records head-new-pr">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-md-12'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Our Proven Track Record</h2>
                                <p>Future & Options</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <div className="col-md-12">
                            {showLoader ?
                                <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={100} width={100} />
                                    </div>
                                </div>
                                :
                                <div className="record-sliders">
                                    {
                                        list && list.length ?
                                            <Slider {...settings} className="sliders-fno">
                                                {
                                                    (list || []).slice(0, 6).map((response, index) => {
                                                        return (
                                                            <div className="">
                                                                <div className="main-left" key={index}>
                                                                    <div className="top-section">
                                                                        <div className="top-left">
                                                                            <h6 className="top-text">Stop Loss</h6>
                                                                            <div>
                                                                                <h6 className="top-date">{(response?.updated_datetime)}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="top-right">
                                                                            {/* <button className="btn-buy  buybtn"> sell</button> */}
                                                                            <button onClick={() => { chapterScroll3('dematform') }} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="middle-section">
                                                                        <div className="middle-left">
                                                                            <div>
                                                                                <h4 className="big-text">{(response?.scrip_name).replace(/(\|\d{2}[A-Z]{3}\d{2})/, '')}</h4>
                                                                                <span className="small-text">{response?.scrip_s_expiry}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="middle-right">
                                                                            <span className="right-big-text">{response?.LTP ?((response?.LTP).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","):0.00.toFixed(2)}</span>
                                                                            <h6 className={"right-small-text " + ((response?.ChangePer < 0) ? 'text_red' : (response.ChangePer > 0) ? 'text_green' : '')}>
                                                                                {`${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response.Change || 0).toFixed(2)} (${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response?.ChangePer || 0).toFixed(2)}%)`}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom-section">
                                                                        <div className="d-flex justify-content-between pt-3">
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">Stop Loss</h6>
                                                                                <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[2].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">Entry Price</h6>
                                                                                <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">Target Price</h6>
                                                                                <h4 className="bottom_big_text">{(parseFloat((response?.datapoints || [])[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                            {/* <div className="bottom">
                                                                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                                                                <h4 className="bottom_big_text">2,105.05</h4>
                                                                            </div> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                              
                                            </Slider> :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
            </section>


        </>
    );
};
export default FnoRecord;