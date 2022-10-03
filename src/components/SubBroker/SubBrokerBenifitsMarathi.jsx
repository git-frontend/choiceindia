import React from 'react';
import Manager from '../../assets/images/sub-broker/local-relationship-manager-assistance.svg';
import Software from '../../assets/images/sub-broker/advanced-software-to-manage-business.svg';
import Sales from '../../assets/images/sub-broker/marketing-and-sales-support.svg';
import Channels from '../../assets/images/sub-broker/dedicated-whatsapp-and-telegram-channels.svg';
import Training from '../../assets/images/sub-broker/sub-broker-training-through-webinars-and-conferences.svg';
import Trading from '../../assets/images/sub-broker/cutting-edge-trading-platforms-app-web.svg';
import Transport from '../../assets/images/sub-broker/transparent-and-growth-oriented-business-model.svg';
import { useState ,useEffect} from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import Lazy from 'yup/lib/Lazy';

function SubBrokerBenifits() {

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
                            <h2 className="titl3">सब ब्रोकर होण्याचे फायदे</h2>
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
                                            <img src={Manager} alt={"स्थानिक संबंध प्रबंधकच्या सहाय्याने सब ब्रोकर फ्रँचायझी"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4> स्थानिक पातळीवरील संपर्क व्यवस्थापन सहायक</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Software} alt={"व्यवसाय व्यवस्थापित करण्यासाठी प्रगत सॉफ्टवेअरसह सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Software} alt="व्यवसाय व्यवस्थापित करण्यासाठी प्रगत सॉफ्टवेअरसह सब ब्रोकर फ्रँचायझी" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>व्यवसाय व्यवस्थापित करण्यासाठी अत्याधुनिक सॉफ्टवेअरचा वापर</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <img src={Sales} alt={"मार्केटिंग आणि सेल्स सपोर्टसह सब ब्रोकर बना"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>मार्केटिंग आणि विक्रीसाठी सहकार्य</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        {/* <LazyLoader src={Channels} alt={"समर्पित व्हॉट्सअँप आणि टेलिग्राम चॅनेलसह सब ब्रोकर बना"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Channels} alt="समर्पित व्हॉट्सअँप आणि टेलिग्राम चॅनेलसह सब ब्रोकर बना" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>व्हॉट्सअँप आणि टेलिग्रामचे समर्पित चॅनेल</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt={"वेबिनार आणि कॉन्फरन्सद्वारे प्रशिक्षणासह सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>वेबिनार आणि सेमिनारच्या माध्यमातून प्रशिक्षण</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt={"अत्याधुनिक ट्रेडिंग प्लॅटफॉर्मसह सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>अत्याधुनिक ट्रेडिंग प्लँटफॉर्म (अँप आणि वेब)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            {/* <LazyLoader src={Transport} alt={"पारदर्शक आणि वाढ-उन्मुख व्यवसाय मॉडेलसह सब ब्रोकरशिप"} className={"img-fluid"} width={"74"} height={"73"} /> */}
                                            <img src={Transport} alt="पारदर्शक आणि वाढ-उन्मुख व्यवसाय मॉडेलसह सब ब्रोकरशिप" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>पारदर्शी आणि विकासाभिमुख बिझनेस मॉडेल</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Manager} alt={"स्थानिक संबंध प्रबंधकच्या सहाय्याने सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4> स्थानिक पातळीवरील संपर्क व्यवस्थापन सहायक</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <img src={Software} alt={"व्यवसाय व्यवस्थापित करण्यासाठी प्रगत सॉफ्टवेअरसह सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>व्यवसाय व्यवस्थापित करण्यासाठी अत्याधुनिक सॉफ्टवेअरचा वापर</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <img src={Sales} alt={"मार्केटिंग आणि सेल्स सपोर्टसह सब ब्रोकर बना"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>मार्केटिंग आणि विक्रीसाठी सहकार्य</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <img src={Channels} alt={"समर्पित व्हॉट्सअँप आणि टेलिग्राम चॅनेलसह सब ब्रोकर बना"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Dedicated WhatsApp &amp; Telegram Channels" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>व्हॉट्सअँप आणि टेलिग्रामचे समर्पित चॅनेल</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt={"वेबिनार आणि कॉन्फरन्सद्वारे प्रशिक्षणासह सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>वेबिनार आणि सेमिनारच्या माध्यमातून प्रशिक्षण</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt={"अत्याधुनिक ट्रेडिंग प्लॅटफॉर्मसह सब ब्रोकर फ्रँचायझी"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>अत्याधुनिक ट्रेडिंग प्लँटफॉर्म (अँप आणि वेब)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt={"पारदर्शक आणि वाढ-उन्मुख व्यवसाय मॉडेलसह सब ब्रोकरशिप"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>पारदर्शी आणि विकासाभिमुख बिझनेस मॉडेल</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>चॉईस सब ब्रोकर बना </h3>
                                <p>चॉईससारख्या एका विश्वासार्ह मित्रासोबत सब ब्रोकरची फ्रँचायझी, जी तुम्हाला मोठे होण्यास सर्वतोपरी मदत करेल! </p>
                                <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>आताच जाईन करा</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default SubBrokerBenifits;