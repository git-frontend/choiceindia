import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import { Routes, Route, useNavigate } from 'react-router-dom';
import noDataimg from '../../assets/images/no-data.webp';

import loaderimg2 from '../../assets/vedio/loader2.mp4';

function MarketInsights() {

    const [selectedId, setSelectedId] = useState(0);
    const [trigger, setTrigger] = useState(false);
    const [isloading,setisloading ] = useState(true);

    const [fabal, setFabal] = useState([]);
    const [tempid, setTempId] = useState({ 'name': 'economic-analysis' });

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,

    };


    /** load market insights and fabal */
    function loadMarketinsite() {

        let payload = {
            "limit": 4,
            "offset": 0,
        };
        homeServices.marketInsiteNew(payload).then(
            res => {
               
                if (res && res.status === 200 && res.data && res.data.response && res.data.status_code === 200 && res.data.response.data) {
                    setisloading(false)
                    setFabal(res.data.response.data);
                    
                }else{
                    setisloading(false)
                    setFabal([])

                }
            }
        ).catch((error) => {
            setisloading(false);
            setFabal([])
          });
    };
    const navigate = useNavigate();

    function marketinsightDetail(id, id2) {
        if (id2 === 'f890363a-512e-4797-91fd-4d40732844a3') {
            navigate(`/research-report/${id}-share-price-target`);
          } else if (id2 === '0') {
            navigate(`/research-report/${id}-ipo-review`);
          } else if (id2 === '1aa86611-7b88-4069-af82-1e04e80659a4') {
            navigate(`/research-report/${id}-industry-analysis`);
          } else if (id2 === '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad') {
            navigate(`/research-report/${id}`);
          } else {
            navigate(`/research-new/${id}/${tempid.name}`, {
                search: `?id=${id2}`
            });
          }
      }


    /**onInIt Market insite and fabal */

    useEffect(() => {
        setTrigger(true)

        if (trigger === true) {
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
                                <h2 className="title-first">Market Insights</h2>
                                <p>Get insightful market updates &amp; company analysis directly from our experts.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            isloading?
                            <div className="text-center">
                                    <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                </div>
                                :
<div>
                                <div className="row">
                        

                                {
                                    fabal.length?
                                            <div className="col-md-12">
                                                <div className="market-insights-list">
            
            
                                                    {
                                                        (fabal || []).slice(0, 4).map((response, index) => {
                                                            let classNameNm = "insights-list-item insights-list " + ((index === selectedId) ? 'insights-list-active' : '')
            
            
                                                            return (
            
                                                                <div key={response.uuid} className={classNameNm} onClick={() => { marketinsightDetail(response.redirect_slug,response.report_subtype_uuid
                                                                    ) }} onMouseOver={() => setSelectedId(index)} onMouseLeave={() => setSelectedId(0)}  >
                                                                    <div className="insights-item-cont cursor-pointer generic-id-footer">
                                                                        <LazyLoader src={response.feature_image} threshold={[0, 0.5, 1]} alt={"Loading"} />
                                                                        <span className="ttl-sm" >{response.tag || '-'}</span>
                                                                    </div>
                                                                    <div className="item-cont-descr">
                                                                        <p>{response.plain_description}</p>
                                                                    </div>
                                                                </div>
            
                                                            )
            
                                                        })
                                                    }
                                                </div>
            
                                            </div> :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                }
            
                                </div>
            
                                {
                                    fabal.length ?
                                        <div className="row">
                                            <div className="col-md-12 mt-5 d-flex justify-content-center">
                                                <Link to="/research-listing" className="btn-bg" id="read-more-tag">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div> : ''
                                }
                            

                        
 
                </div>
                }
                </div>
                </div>
            </section>


        </div>

    );
}

export default MarketInsights;
