import React from 'react';
import { Link } from "react-router-dom";
import Insurance from '../../assets/images/mutual-fund-distributor/sell-insurance.svg';
import Retail from '../../assets/images/mutual-fund-distributor/sell-retail-loans.svg';
import Commodity from '../../assets/images/mutual-fund-distributor/open-stock-market-account.svg';
import MF from '../../assets/images/mutual-fund-distributor/sell-bonds-fds-nps.svg';
import LazyLoader from '../Common-features/LazyLoader';


const MFDistributorSellMore = () => {
    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <section className="sell-more">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sell-left-sec">
                                        <h2 className="title-secnd">ज्यादा बेचे और अधिक कमाए!</h2>
                                        <p className="sml-para-dv">चॉइस म्यूचुअल फंड वितरक बनने के साथ न केवल अपने पोर्टफोलियो का विस्तार करें बल्कि अपने ग्राहकों को कई वित्तीय प्रोडक्ट्स की पेशकश भी करें और अपनी कमाई को अधिकतम करें। </p>
                                        <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark hide-mob" onClick={()=>scrollToId('sub-broker-form')}><span>अभी शुरू करें</span> </Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"म्यूचुअल फंड वितरक बनें और बीमा बेचें"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">बीमा</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"म्यूचुअल फंड वितरक बनें और खुदरा ऋण बेचें"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">खुदरा ऋण</h3>
                                </div>
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"शेयर बाजार खाता खोलें"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">शेयर बाजार</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"म्यूचुअल फंड वितरक बनें और बॉन्ड, FD और NPS बेचें"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">बॉन्ड, एफडी और एनपीएस </h3>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark show-mob" onClick={()=>scrollToId('sub-broker-form')}><span>अभी शुरू करें</span> </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default MFDistributorSellMore;