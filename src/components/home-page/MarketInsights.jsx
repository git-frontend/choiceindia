import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

function MarketInsights() {

    const [selectedId, setSelectedId] = useState(0);
    // const [change, setChange] = useState([1, 2, 3, 4]);
    const [trigger, setTrigger] = useState(false)
    const [fabal, setFabal] = useState([]);
    const [view, setView] = useState({
        matches: window.innerWidth < 770 ? false : true,
    });

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,

    };


    /** load market insights and fabal */
    function loadMarketinsite() {
        let payload = {
            // "end_date": "",
            // "is_expert": 0,
            // "research_type": "Medium To Long Term",
            "limit": 4,
            "offset": 0,
            // "segment": "EQ",
            // "start_date": "",
            // "status": "target_achieved",
            // "subcategory_id": "",
            // "search": "",
            // "id": "",
            // "user_id": "",
            // "timeline_enabled": 1,
            // "category_id": 1
        };
        homeServices.marketInsiteNew(payload).then(
            res => {
                // setFabal(res.data.posts);
                if (res && res.status === 200 && res.data && res.data.response && res.data.status_code === 200 && res.data.response.data) {
                    setFabal(res.data.response.data);
                }
                // console.log(res, "Research Report");
            }
        )
    };


    /**onInIt Market insite and fabal */

    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
            loadMarketinsite();
            let mediaQuery = window.matchMedia("(min-width: 770px)");
            mediaQuery.addListener(setView);
            // this is the cleanup function to remove the listener
            return () => mediaQuery.removeListener(setView);
        }

    }, [trigger])

    return (
        <div>
            <section className="market-insights-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-md-8">
                            <div className="heading-sec">
                                <h2 className="title-first">Market Insights</h2>
                                <p>Get insightful market updates &amp; company analysis directly from our experts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                view && !view.matches ?
                                    <Slider {...settings} className="market-insights-list">


                                        {
                                            fabal.slice(0, 4).map((response, index) => {
                                                let classNameNm = "insights-list-item insights-list " + ((index === selectedId) ? 'insights-list-active' : '')

                                                return (

                                                    <div key={response.uuid} className={classNameNm} onMouseOver={() => setSelectedId(index)} onMouseLeave={() => setSelectedId(0)}  >
                                                        <div className="insights-item-cont">
                                                            <LazyLoader src={response.feature_image} threshold={[0, 0.5, 1]} alt={"Loading"} />
                                                            {/* <img src={response.feature_image} alt="" /> */}
                                                            <span className="ttl-sm" >{response.scrip_sec_name || '-'}</span>
                                                        </div>
                                                        <div className="item-cont-descr">
                                                            {/* <p>{response.report_subtype_name}</p> */}
                                                            <p>{response.plain_description}</p>
                                                        </div>
                                                    </div>

                                                )

                                            })
                                        }
                                    </Slider>
                                    :
                                    <div className="market-insights-list">


                                        {
                                            fabal.slice(0, 4).map((response, index) => {
                                                let classNameNm = "insights-list-item insights-list " + ((index === selectedId) ? 'insights-list-active' : '')

                                                return (

                                                    <div key={response.uuid} className={classNameNm} onMouseOver={() => setSelectedId(index)} onMouseLeave={() => setSelectedId(0)}  >
                                                        <div className="insights-item-cont">
                                                            <LazyLoader src={response.feature_image} threshold={[0, 0.5, 1]} alt={"Loading"} />
                                                            {/* <img src={response.feature_image} alt="" /> */}
                                                            <span className="ttl-sm" >{response.scrip_sec_name || '-'}</span>
                                                        </div>
                                                        <div className="item-cont-descr">
                                                            {/* <p>{response.report_subtype_name}</p> */}
                                                            <p>{response.plain_description}</p>
                                                        </div>
                                                    </div>

                                                )

                                            })
                                        }
                                    </div>
                            }

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-5 d-flex justify-content-center">
                            <Link to="/research-listing-new" className="btn-bg">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default MarketInsights;
