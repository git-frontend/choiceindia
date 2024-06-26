import React from 'react';
import Manager from '../../assets/images/sub-broker/local-relationship-manager-assistance.svg';
import Software from '../../assets/images/sub-broker/advanced-software-to-manage-business.svg';
import Sales from '../../assets/images/sub-broker/marketing-and-sales-support.svg';
import Channels from '../../assets/images/sub-broker/dedicated-whatsapp-and-telegram-channels.svg';
import Training from '../../assets/images/sub-broker/sub-broker-training-through-webinars-and-conferences.svg';
import Trading from '../../assets/images/sub-broker/cutting-edge-trading-platforms-app-web.svg';
import Transport from '../../assets/images/sub-broker/transparent-and-growth-oriented-business-model.svg';
import { useState,useEffect } from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function SubBrokerBenifitsHindi() {

    const [defaultOption, setdefaultOption] = useState(() => 'sl-slider-active');
    const [view, setView] = useState({
        matches: window.innerWidth < 768 ? false : true,
    });

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


            <section className="broker-benifits" id="showForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">सब ब्रोकर होने के लाभ</h2>
                        </div>
                    </div>
                    <div className="row relative">
                        <div className="col-md-12">
                        {
                                view && !view.matches ?
                        <Slider {...settings} className="benifits-list slider-hide">
                              <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"Local Relationship Manager Assistance"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>स्थानीय संबंध प्रबंधक सहायता</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Advanced Software to Manage Business"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>व्यवसाय को प्रबंधित करने के लिए उन्नत सॉफ़्टवेयर</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Marketing &amp; Sales Support"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>मार्केटिंग और बिक्री सहायता</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Dedicated WhatsApp &amp; Telegram Channels"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>समर्पित व्हाट्सएप और टेलीग्राम चैनल</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt={"Sub Broker Training through Webinars &amp; Conferences"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>वेबिनार और सम्मेनों के माध्यम से प्रशिक्षण</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt={"Cutting Edge Trading Platforms (App &amp Web)"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>अत्याधुनिक ट्रेडिंग प्लेटफॉर्म (ऐप और वेब)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt={"Transparent &amp; Growth Oriented Business Model"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>पारदर्शी और विकासोन्मुखी बिजनेस मॉडल</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                        
                            <div className="benifits-list slider-hide">
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"Local Relationship Manager Assistance"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>स्थानीय संबंध प्रबंधक सहायता</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Advanced software to manage stock broking franchise business"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>व्यवसाय को प्रबंधित करने के लिए उन्नत सॉफ़्टवेयर</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Marketing &amp; Sales Support"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>मार्केटिंग और बिक्री सहायता</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Dedicated WhatsApp &amp; Telegram Channels"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>समर्पित व्हाट्सएप और टेलीग्राम चैनल</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt={"Sub Broker Training through Webinars &amp; Conferences"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>वेबिनार और सम्मेनों के माध्यम से प्रशिक्षण</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt={"Cutting Edge Trading Platforms (App &amp Web)"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>अत्याधुनिक ट्रेडिंग प्लेटफॉर्म (ऐप और वेब)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt={"Transparent Growth Oriented Business Model"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>पारदर्शी और विकासोन्मुखी बिजनेस मॉडल</h4>
                                    </div>
                                </div>
                            </div>


                            }
                            <div className="item-next1">  
                                <h3>चॉइस सब ब्रोकर बनें</h3>
                                <p>एक भरोसेमंद साथी के साथ सब ब्रोकर फ्रैंचाइज़ी जो आपको बड़े होने में मदद कर सके।</p>
                                <Link to="/hindi/sub-broker-franchise" className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>अभी जॉईन करो</span> </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default SubBrokerBenifitsHindi;