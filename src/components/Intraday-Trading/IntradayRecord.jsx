
import React from "react";
import Slider from 'react-slick';
import { API_URLS } from "../../Services/API-URLS";
import { useState, useEffect } from 'react';
import utils from "../../Services/utils";
import rest from "../../Services/rest";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';
function IntradayRecord() {
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
            generateSessionId()
            IntraStocks()
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
        autoplaySpeed: 3000,
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

                },
            },
        ],
    };
    function generateSessionId() {
        let api = new API_URLS()
        fetch(api.getSessionUrl())
            .then(response => {
                return response.json();
            })
            .then(res => {
                if (res.Status == 'Success') {
                    IntraStocks(res.Response);
                    setData1(res.Response);
                } else {
                    IntraStocks([])
                }
            }, err => {
                IntraStocks([])
            })
    }
    function IntraStocks(session) {

        setlist([]);
        tokens = '';
        tokenList = [];
        storefile = '';
        setShowLoader(true)
        let request = {
            "Count": 10,
            "endDate": utils.formatDate(new Date(), "dd-MM-yyyy"),
            "SessionId": session,
            "Start": 0,
            "startDate": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "dd-MM-yyyy"),
            "status": "Book Profit",
            "type": "EQ",
            "UserId": "guest",
            "search": ""
        }
        rest.signalReportData(request).then(
            res => {

                if (res) {
                    storefile = res.Response.Data;
                    // console.log("storefile",storefile)

                    res.Response.Data.forEach(ele => {

                        tokenList.push({ 'SegmentId': ele.Seg, 'Token': ele.Tok })
                        let dateData = ele.TATime;
                        if (dateData) {
                            let len = dateData.split(" ")
                            if (len.length) {
                                ele.date = len[0];

                            }
                        }
                        ele.published_date = utils.formatDate(new Date(ele.date.split('-')[2], (ele.date.split('-')[1] - 1), ele.date.split('-')[0]), "dd MMMM'yy")
                        ele.call_type = ele.HLType ? (ele.HLType == 'High' ? 'BUY' : (ele.HLType == 'sell' || ele.HLType == 'Low') ? 'SELL' : '') : (ele.Side ? ((['B', 'BUY', 'Buy'].indexOf(ele.Side) > -1) ? 'BUY' : ['S', 'SELL', 'Sell'].indexOf(ele.Side) > -1 ? 'SELL' : '') : '')

                    });
                    let unique = []
                    for (let i = 0; i < tokenList.length; i++) {
                        unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
                    }
                    unique.forEach(element => {
                        if (!tokens.includes(element)) {
                            tokens += element
                        }
                    });
                    // console.log("SegmentId",tokens);

                    // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
                    const payload = {
                        'UserId': 'guest',
                        'SessionId': session,
                        'MultipleTokens': tokens
                    }

                    rest.multipleTokensURLData(payload).then(
                        res => {

                            if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
                                res.Response.lMT.forEach((ele, index) => {

                                    ele['LTP'] = ele['LTP'] / 100;
                                    ele.PrevClose = ele.PC / 100;
                                    ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                                    ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                                    // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                                    for (let i = 0; i < storefile.length; i++) {

                                        if (storefile[i].Tok == ele.Tok && storefile[i].Seg == ele.Seg) {
                                            setShowLoader(false)
                                            AllFilesValue = Object.assign(storefile[i], ele);
                                            multiValue.push(AllFilesValue)
                                        } else {



                                        }
                                    }
                                })

                                setlist(multiValue);

                            } else {
                                setlist([])
                            }
                        })
                }
            })
            // )
            .catch((error) => {
                setShowLoader(false)
                setlist([]);
            });
    }
    return (
        <>
            <section className="fno-records head-new-pr">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-md-12'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Our Proven Track Record</h2>
                                <p>Intraday</p>
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
                                                                                <h6 className="top-date">{(response?.published_date)}</h6>
                                                                            </div>
                                                                        </div>
                                                                        <div className="top-right">
                                                                            <div className="top-right"><button onClick={() => { chapterScroll3('dematform') }} className={"btn-buy " + ((response.call_type == "Sell") ? " sellbtn" : " buybtn")} > {response?.call_type}</button></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="middle-section">
                                                                        <div className="middle-left">
                                                                            <div>
                                                                                <h4 className="big-text">{response?.Sym}</h4>
                                                                                <span className="small-text">{response?.Name}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="middle-right">
                                                                            <span className="right-big-text">{((response?.LTP).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                                                            <h6 className={"right-small-text " + ((response?.ChangePer < 0) ? 'text_red' : (response.ChangePer > 0) ? 'text_green' : '')}>
                                                                                {`${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response.Change || 0).toFixed(2)} (${response?.ChangePer < 0 ? '-' : ''}${Math.abs(response?.ChangePer || 0).toFixed(2)}%)`}</h6>
                                                                        </div>
                                                                    </div>
                                                                    <div className="bottom-section">
                                                                        <div className="d-flex justify-content-between pt-3">
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">Stop Loss</h6>
                                                                                <h4 className="bottom_big_text">{((response?.SL / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">Entry Price</h6>
                                                                                <h4 className="bottom_big_text">{((response?.EP / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">Target Price</h6>
                                                                                <h4 className="bottom_big_text">{((response?.TP1 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                            <div className="bottom">
                                                                                <h6 className="bottom_small_text">2nd Target Price</h6>
                                                                                <h4 className="bottom_big_text">{((response?.TP2 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </Slider>
                                            :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>

                </div>
            </section>


        </>
    );
};
export default IntradayRecord;