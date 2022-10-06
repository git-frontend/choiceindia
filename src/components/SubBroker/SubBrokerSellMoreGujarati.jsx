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
                                        <h2 className="title-secnd">વધુ વેચો. વધુ કમાઓ!</h2>
                                        <p className="sml-para-dv">ચોઇસ પાસે 25 વર્ષથી વધુના અનુભવ દ્વારા સમર્થિત પ્રોડક્ટ ઓફરિંગનો વ્યાપક પોર્ટફોલિયો છે. સબ બ્રોકર્સ પાસે નાણાકીય ઉત્પાદનોની સંપૂર્ણ શ્રેણી ઓફર કરવાનો વિકલ્પ હોય છે.</p>
                                        <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>અત્યારે શરુ કરો</span> </Link>
                                        {/* <Link to="/" className="btn-bg btn-bg-dark"><span>Start Now</span> </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"સબ બ્રોકર બનો અને ઇક્વિટી અને કોમોડિટી બ્રોકિંગ દ્વારા કમાણી કરો"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">ઇક્વિટી, કોમોડિટી અને કરન્સી બ્રોકિંગ</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"સબ બ્રોકર બનો અને મ્યુચ્યુઅલ ફંડ દ્વારા કમાણી કરો"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/*<img src={MF} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />*/}
                                    </span>
                                    <h3 className="itm-ttl">મ્યુચ્યુઅલ ફંડ વિતરણ</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"સબ બ્રોકર બનો અને વીમા દ્વારા કમાણી કરો"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking"  className='img-fluid' width="45" height="45"/> */}
                                    </span>
                                    <h3 className="itm-ttl">વીમા</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"સબ બ્રોકર બનો અને રિટેલ લોન દ્વારા કમાણી કરો"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">છૂટક લોન</h3>
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