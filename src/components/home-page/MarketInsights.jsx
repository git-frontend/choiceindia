import React, { useEffect, useState } from "react";
// import $ from 'jquery';
import homeServices from '../../Services/homeServices';


// $(document).ready(function () {

//     $('.insights-list-item').hover(
//       function(){ 
//         $(".insights-list-item.insights-list-active").addclassName('inactive').removeclassName('insights-list-active');
//       },
//       function(){ 
//         $(".insights-list-item.inactive").addclassName('insights-list-active').removeclassName('inactive'); 
//       }
//     );

//   });

function MarketInsights() {

    const [selectedId, setSelectedId] = useState(0);
    const [change, setChange] = useState([1, 2, 3, 4]);
    const [trigger, setTrigger] = useState(false)
    const [fabal, setFabal] = useState([]);


    /** load market insights and fabal */
    function loadMarketinsite() {
        homeServices.marketInsiteFabal().then(
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

                                            <div key={response.id} className={classNameNm} onMouseOver={() => setSelectedId(change)} onMouseLeave={() => setSelectedId(0)}  >
                                                <div className="insights-item-cont">
                                                    <img src={response.feature_image} alt="" />
                                                    <span className="ttl-sm" >{response.meta_title || '-'}</span>
                                                </div>
                                                <div className="item-cont-descr">
                                                    <p>{response.meta_description}</p>
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
                            <a href="#" className="btn-bg">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default MarketInsights;
