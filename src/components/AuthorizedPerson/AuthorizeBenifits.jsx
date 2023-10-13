import React,{useState, useEffect} from 'react';
import Manager from '../../assets/images/sub-broker/local-relationship-manager-assistance.svg';
import Software from '../../assets/images/sub-broker/advanced-software-to-manage-business.svg';
import Sales from '../../assets/images/sub-broker/marketing-and-sales-support.svg';
import Channels from '../../assets/images/sub-broker/dedicated-whatsapp-and-telegram-channels.svg';
import Training from '../../assets/images/sub-broker/sub-broker-training-through-webinars-and-conferences.svg';
import Trading from '../../assets/images/sub-broker/cutting-edge-trading-platforms-app-web.svg';
import Transport from '../../assets/images/sub-broker/transparent-and-growth-oriented-business-model.svg';
import Tpayout from '../../assets/images/sub-broker/sub-broking-franchise-with-timely-payouts.svg';
import { Link } from 'react-router-dom';
import utils from "../../Services/utils";
import Slider from 'react-slick';


function RemisierBenifits() {

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
                            <h2 className="titl3">Authorised Person Benefits</h2>
                        </div>
                    </div>
                    <div className="row relative">
                        <div className="col-md-12">
                        <div>

                        {
                                view && !view.matches ?
                                    <Slider {...settings} className="benifits-list slider-hide">
                            
                                <div className={"sl-slider " + defaultOption }>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Manager} alt="Authorised Person with Dedicated Franchise Support" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Dedicated Franchise Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Tpayout} alt="Authorised Person with Timely Payouts" className="img-fluid" width="62" height="73"/>
                                        </span>
                                        <h4>Timely Payouts</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Advanced Software to Manage Business</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Sales} alt="Marketing & Sales Support" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Marketing & Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Local Relationship Manager Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt="Training through Online & Offline Webinars" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Training through Online & Offline Webinars</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt="Cutting-edge Trading Platforms (App & Web)" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Cutting-edge Trading Platforms (App & Web)</h4>
                                    </div>
                                </div>
                                </Slider>
                            :
                            <div className="benifits-list slider-hide">
                            
                                <div className={"sl-slider " + defaultOption }>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Manager} alt="Authorised Person with Dedicated Franchise Support" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Dedicated Franchise Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Tpayout} alt="Authorised Person with Timely Payouts" className="img-fluid" width="60" height="73"/>
                                        </span>
                                        <h4>Timely Payouts</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Advanced Software to Manage Business</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Local Relationship Manager Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt="Training through Online &amp; Offline Webinars" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Training through Online &amp; Offline Webinars</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt="Authorised Person with transparent &amp; growth-oriented business model" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Cutting-edge Trading Platforms (App & Web)</h4>
                                    </div>
                                </div>
                                </div>
                        }
                            </div>
                            <div className="item-next1">
                                <h3>Become a Choice Authorised Person</h3>
                                <p>Start Authorised Person with a trustworthy partner that can help you to grow up.</p>
                                <Link to="/authorised-person" className="btn-bg btn-bg-dark" onClick={() => { utils.scrollToId('sub-broker-form') }}><span>Join Now</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default RemisierBenifits;