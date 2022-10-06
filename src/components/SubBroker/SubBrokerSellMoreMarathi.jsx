import React from 'react';
import { Link } from "react-router-dom";
import Commodity from '../../assets/images/sub-broker/equity-commodity-currency-broking.svg';
import MF from '../../assets/images/sub-broker/mutual-funds-distribution.svg';
import Insurance from '../../assets/images/sub-broker/insurance.svg';
import Retail from '../../assets/images/sub-broker/retail-loans.svg';
import LazyLoader from '../Common-features/LazyLoader';


const SubBrokerSellMore = () => {
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
                                        <h2 className="title-secnd">जास्त विका! जास्त कमवा!</h2>
                                        <p className="sml-para-dv">चॉईसजवळ २५ वर्षांपेक्षा जास्त काळाच्या अनुभवासोबतच अनेक वित्तीय उत्पादनांचा मिळून एक व्यापक पोर्टफोलिओ आहे. सब ब्रोकरकडे वित्तीय उत्पादनांची पूर्ण श्रृंखला विकण्याचा पर्याय उपलब्ध आहे.</p>
                                        <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>आताच सुरु करा</span> </Link>
                                        {/* <Link to="/" className="btn-bg btn-bg-dark"><span>Start Now</span> </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"सब ब्रोकर बना आणि इक्विटी आणि कमोडिटी ब्रोकिंगद्वारे कमवा"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">इक्विटी, कमोडिटी आणि करन्सी ब्रोकींग</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"सब ब्रोकर बना आणि म्यूचुअल फंडांद्वारे कमवा"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/*<img src={MF} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />*/}
                                    </span>
                                    <h3 className="itm-ttl">म्युचअल फंड वितरण</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"सब ब्रोकर बना आणि विम्याद्वारे कमवा"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking"  className='img-fluid' width="45" height="45"/> */}
                                    </span>
                                    <h3 className="itm-ttl">विमा</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"सब ब्रोकर बना आणि रिटेल लोनद्वारे कमवा"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">किरकोळ कर्ज</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SubBrokerSellMore;