import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Manager from '../../assets/images/sub-broker/local-relationship-manager-assistance.svg';
import Software from '../../assets/images/sub-broker/advanced-software-to-manage-business.svg';
import Sales from '../../assets/images/sub-broker/marketing-and-sales-support.svg';
import Channels from '../../assets/images/sub-broker/dedicated-whatsapp-and-telegram-channels.svg';
import Training from '../../assets/images/sub-broker/sub-broker-training-through-webinars-and-conferences.svg';
import Trading from '../../assets/images/sub-broker/cutting-edge-trading-platforms-app-web.svg';
import Transport from '../../assets/images/sub-broker/transparent-and-growth-oriented-business-model.svg';
import Payouts from '../../assets/images/sub-broker/sub-broking-franchise-with-timely-payouts.svg';

import { useState ,useEffect} from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

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
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                    autoplay: true,
                },
            },
        ],

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
                            <h2 className="titl3">Sub Broker Franchise Benefits</h2>
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
                                    <img src={Manager} alt="Sub Broker Franchise with Dedicated Support" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Dedicated Franchise Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Payouts} alt="Sub Broking Franchise with Timely Payouts" className="img-fluid" width="60" height="73" />
                                        </span>
                                        <h4>Timely Payouts</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Sales} alt="Become a sub broker with marketing &amp; sales support" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Advanced Software</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Channels} alt="Become a sub broker with dedicated whatsapp &amp; telegram channels" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                      <img src={Training} alt="Sub broker training through webinars and conferences" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Local Relationship Manager</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt="Sub broker franchise with cutting-edge trading platforms" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Training Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt="Sub brokership with transparent &amp; growth-oriented business model" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Cutting-edge Trading Platforms</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                        <img src={Manager} alt="Sub Broker Franchise with Dedicated Support" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Dedicated Franchise Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Payouts} alt="Sub Broking Franchise with Timely Payouts" className="img-fluid" width="60" height="73" />
                                        </span>
                                        <h4>Timely Payouts</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Software} alt="Advanced software to manage stock broking franchise business" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Advanced Software</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Sales} alt="Become a sub broker with marketing &amp; sales support" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Channels} alt="Become a sub broker with dedicated whatsapp &amp; telegram channels" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Local Relationship Manager</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                         <img src={Training} alt="Sub broker training through webinars and conferences" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Training Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt="Sub broker franchise with cutting-edge trading platforms" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Cutting-edge Trading Platforms</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt="Sub brokership with transparent &amp; growth-oriented business model" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Become a Choice Sub Broker</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>Become a Choice Sub Broker</h3>
                                <p>Get your sub broking franchise with a partner that puts your best interest at heart.</p>
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