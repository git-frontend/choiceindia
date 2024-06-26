import React from 'react';
import { Link } from "react-router-dom";
import Commodity from '../../assets/images/sub-broker/equity-commodity-currency-broking.svg';
import MF from '../../assets/images/sub-broker/mutual-funds-distribution.svg';
import Insurance from '../../assets/images/sub-broker/insurance.svg';
import Retail from '../../assets/images/sub-broker/retail-loans.svg';
import LazyLoader from '../Common-features/LazyLoader';


const SubBrokerSellMoreHindi = () => {
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
                                        <h2 className="title-secnd">ज्यादा बेचो! ज्यादा कमाइए!</h2>
                                        <p className="sml-para-dv">चॉइस के पास 25 से अधिक वर्षों के अनुभव के साथ कई वित्तीय उत्पाद मिलाकर एक व्यापक पोर्टफोलियो है। सब ब्रोकर के पास वित्तीय उत्पादों की पूरी श्रृंखला बेचने का विकल्प होता है।</p>
                                        <Link to="/hindi/sub-broker-franchise" className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>अभी शुरू करें</span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"Equity, Commodity &amp; Currency Broking"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">इक्विटी, कमोडिटी और करेंसी ब्रोकिंग</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"Mutual Funds Distribution"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">म्युचुअल फंड वितरण</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"Insurance"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">बीमा</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"Retail Loans"} className={'img-fluid'} width={"60"} height={"60"} />
                                    </span>
                                    <h3 className="itm-ttl">खुदरा ऋण (रिटेल लोन)</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SubBrokerSellMoreHindi;