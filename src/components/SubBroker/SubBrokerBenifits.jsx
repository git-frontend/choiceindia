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
                            <h2 className="titl3">Sub Broker Benefits</h2>
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
                                            <LazyLoader src={Manager} alt={"Sub broker franchise with local RM assistance"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Local Relationship Manager Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Advanced software to manage stock broker franchise business"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Advanced Software to Manage Business</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Become a sub broker with marketing & sales support"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Become a sub broker with dedicated whatsapp & telegram channels"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Dedicated WhatsApp &amp; Telegram Channels" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Dedicated WhatsApp &amp; Telegram Channels</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"Sub broker training through webinars and conferences"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Training through Webinars &amp; Conferences</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"Sub broker franchise with cutting-edge trading platforms"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Cutting-edge Trading Platforms (App &amp; Web)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"Sub brokership with transparent & growth-oriented business model"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Transparent &amp; Growth-oriented Business Model</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"Sub broker franchise with local RM assistance"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Local Relationship Manager Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Advanced software to manage stock broker franchise business"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Advanced Software to Manage Business</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Become a sub broker with marketing & sales support"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Become a sub broker with dedicated whatsapp & telegram channels"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Dedicated WhatsApp &amp; Telegram Channels" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Dedicated WhatsApp &amp; Telegram Channels</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"Sub broker training through webinars and conferences"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Training through Webinars &amp; Conferences</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"Sub broker franchise with cutting-edge trading platforms"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Cutting-edge Trading Platforms (App &amp; Web)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"Sub brokership with transparent & growth-oriented business model"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Transparent &amp; Growth-oriented Business Model</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>Become a Choice Sub Broker</h3>
                                <p>Start Sub Broker franchise with a trustworthy partner that can help you to grow up.</p>
                                <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Join Now</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default SubBrokerBenifits;