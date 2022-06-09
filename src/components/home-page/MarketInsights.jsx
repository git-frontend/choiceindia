import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function MarketInsights() {

    const [selectedId, setSelectedId] = useState(0);
    // const [change, setChange] = useState([1, 2, 3, 4]);
    const [trigger, setTrigger] = useState(false)
    const [fabal, setFabal] = useState([]);


    /** load market insights and fabal */
    function loadMarketinsite() {
        homeServices.marketInsite().then(
            res => {
                setFabal(res.data.posts);
            }
        )
    };


    /**onInIt Market insite and fabal */

    useEffect(() => {
        setTrigger(true)

        if (trigger===true) {
            loadMarketinsite();
        }

    }, [trigger])

    return (
        <div>
            <section className="market-insights-sec">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-md-8">
                            <div className="heading-sec">
                                <h3 className="title-first">Market Insights</h3>
                                <p>Get insightful market updates &amp; company analysis directly from our experts.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="market-insights-list">
                                {
                                    fabal.slice(0, 4).map((response, index) => {
                                        let classNameNm = "insights-list-item insights-list " + ((index === selectedId) ? 'insights-list-active' : '')

                                        return (

                                            <div key={response.id} className={classNameNm} onMouseOver={() => setSelectedId(index)} onMouseLeave={() => setSelectedId(0)}  >
                                                <div className="insights-item-cont">
                                                <LazyLoader src={response.feature_image} threshold={[0, 0.5, 1]} alt="Loading"/>
                                                    {/* <img src={response.feature_image} alt="" /> */}
                                                    <span className="ttl-sm" >{response.meta_title || '-'}</span>
                                                </div>
                                                <div className="item-cont-descr">
                                                    <p>{response.excerpt}</p>
                                                </div>
                                            </div>
                                            
                                        )

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-5 d-flex justify-content-center">
                            <Link to="/" className="btn-bg">
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
