import React from 'react';
import Manager from '../../assets/images/mutual-fund-distributor/sales-and-marketing-assistance.svg';
import Software from '../../assets/images/mutual-fund-distributor/research-and-recommendations-support.svg';
import Sales from '../../assets/images/mutual-fund-distributor/trading-app.svg';
import Channels from '../../assets/images/mutual-fund-distributor/custom-portfolio-analysis-for-hni-clients.svg';
import Training from '../../assets/images/mutual-fund-distributor/dedicated-relationship-manager.svg';
import Trading from '../../assets/images/mutual-fund-distributor/multiple-financial-products.svg';
import Transport from '../../assets/images/mutual-fund-distributor/complete-online-process.svg';
import { useState ,useEffect} from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import Lazy from 'yup/lib/Lazy';

function MFDistributorBenifits() {

    const [defaultOption, setdefaultOption] = useState(() => 'sl-slider-active');

    const [view, setView] = useState({
        matches: window.innerWidth < 768 ? false : true,
    });

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,

    };

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

    useEffect(() => {
       
           
            let mediaQuery = window.matchMedia("(min-width: 768px)");
            mediaQuery.addListener(setView);
            // this is the cleanup function to remove the listener
            return () => mediaQuery.removeListener(setView);
        

    }, [])

    return (
        <div>


            <section className="broker-benifits">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">म्यूचुअल फंड वितरक बनने के लाभ </h2>
                        </div>
                    </div>
                    <div className="row relative">
                        <div className="col-md-12">
                            <div>
                            {
                                view && !view.matches ?
                                    <Slider {...settings} className="benifits-list slider-hide">
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"सेल्स और मार्केटिंग सपोर्ट के साथ म्यूचुअल फंड वितरक बनें"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Sales and Marketing Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>सेल्स और मार्केटिंग में <br/> सहायता</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"रिसर्च और रिकमेन्डेशन सपोर्ट के साथ म्यूचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Research and Reccommendations Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>रिसर्च और रिकमेन्डेशन सपोर्ट</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"अत्याधुनिक प्लेटफॉर्म के साथ म्यूचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Trading App" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>अत्याधुनिक प्लेटफॉर्म (ऐप और वेब)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"एचएनआई ग्राहकों के लिए कस्टम पोर्टफोलियो विश्लेषण"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Custom Portfolio Analysis for HNI Clients" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>एचएनआई ग्राहकों के लिए कस्टम पोर्टफोलियो विश्लेषण</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"डेडिकेटेड रिलेशनशिप मैनेजर के साथ म्युचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Dedicated Relationship Manager" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>समर्पित संबंध प्रबंधक</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"म्यूचुअल फंड वितरक बनने के साथ कई वित्तीय प्रोडक्ट्स की पेशकश करें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Multiple Fianancial Products" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>कई  <br/>प्रोडक्ट्स पर ऑफर</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"म्यूचुअल फंड वितरक बनने के लिए पूरी ऑनलाइन प्रक्रिया"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Complete Online Process" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>पूरी <br/>ऑनलाइन प्रक्रिया</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"सेल्स और मार्केटिंग सपोर्ट के साथ म्यूचुअल फंड वितरक बनें"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Sales and Marketing Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>सेल्स और मार्केटिंग में सहायता</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"रिसर्च और रिकमेन्डेशन सपोर्ट के साथ म्यूचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Research and Reccommendations Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>रिसर्च और रिकमेन्डेशन सपोर्ट</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"अत्याधुनिक प्लेटफॉर्म के साथ म्यूचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Trading App" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>अत्याधुनिक प्लेटफॉर्म (ऐप और वेब)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"एचएनआई ग्राहकों के लिए कस्टम पोर्टफोलियो विश्लेषण"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Custom Portfolio Analysis for HNI Clients" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>एचएनआई ग्राहकों के लिए कस्टम पोर्टफोलियो विश्लेषण</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"डेडिकेटेड रिलेशनशिप मैनेजर के साथ म्युचुअल फंड वितरक बनें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Dedicated Relationship Manager" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>समर्पित संबंध प्रबंधक</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"म्यूचुअल फंड वितरक बनने के साथ कई वित्तीय प्रोडक्ट्स की पेशकश करें"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Multiple Fianancial Products" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>कई  <br/>प्रोडक्ट्स पर ऑफर</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"म्यूचुअल फंड वितरक बनने के लिए पूरी ऑनलाइन प्रक्रिया"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Complete Online Process" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>पूरी  <br/>ऑनलाइन प्रक्रिया</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>म्यूचुअल फंड वितरक बनें</h3>
                                <p>चॉइस म्यूचुअल फंड डिस्ट्रीब्यूटर बनें और आय का एक आजीवन स्रोत बनाएं। </p>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>अभी जॉईन करें</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default MFDistributorBenifits;