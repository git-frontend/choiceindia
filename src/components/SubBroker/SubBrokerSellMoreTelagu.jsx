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
                                        <h2 className="title-secnd">ఎక్కువ అమ్మండి. ఎక్కువ సంపాదించండి!</h2>
                                        <p className="sml-para-dv">ఛాయిస్ విస్తృతమైన ఉత్పత్తుల పోర్టిఫోలియోను కలిగి ఉంది . దీనికి 25 సంవత్సరాలకుపైగా ఉన్న అనుభవం తోడుగా ఉంది. సబ్‌ బ్రోకర్ అన్ని శ్రేణుల్లోనూ ఆర్థిక ఉత్పత్తులను అందించగలిగే ఆప్షన్‌ను కలిగి ఉంది.</p>
                                        <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>ఇప్పుడే ఆరంభించు</span> </Link>
                                        {/* <Link to="/" className="btn-bg btn-bg-dark"><span>Start Now</span> </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8">
                            <div className="sell-more-list">
                                <div className="more-list-item">
                                    <span>
                                        <LazyLoader src={Commodity} alt={"సబ్ బ్రోకర్ అవ్వండి మరియు ఈక్విటీ మరియు కమోడిటీ బ్రోకింగ్ ద్వారా సంపాదించండి"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Commodity} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">ఈక్విటీ, ద్రవ్య &amp; నగదు మధ్యవర్తిత్వం</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={MF} alt={"సబ్ బ్రోకర్ అవ్వండి మరియు మ్యూచువల్ ఫండ్స్ ద్వారా సంపాదించండి"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/*<img src={MF} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" />*/}
                                    </span>
                                    <h3 className="itm-ttl">మ్యూచువల్ ఫండ్స్ పంపిణీ</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Insurance} alt={"సబ్ బ్రోకర్ అవ్వండి మరియు బీమా ద్వారా సంపాదించండి"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Insurance} alt="Equity, Commodity &amp; Currency Broking"  className='img-fluid' width="45" height="45"/> */}
                                    </span>
                                    <h3 className="itm-ttl">బీమా</h3>
                                </div>
                                <div className="more-list-item wow fadeInRight">
                                    <span>
                                        <LazyLoader src={Retail} alt={"సబ్ బ్రోకర్ అవ్వండి మరియు రిటైల్ లోన్ల ద్వారా సంపాదించండి"} className={'img-fluid'} width={"60"} height={"60"} />
                                        {/* <img src={Retail} alt="Equity, Commodity &amp; Currency Broking" className='img-fluid' width="45" height="45" /> */}
                                    </span>
                                    <h3 className="itm-ttl">రిటైల్ రుణాలు</h3>
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