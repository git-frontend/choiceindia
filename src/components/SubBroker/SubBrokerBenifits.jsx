import React from 'react';
import Manager from '../../assets/images/sub-broker/relationship-manager.svg';
import Software from '../../assets/images/sub-broker/advanced-software.svg';
import Sales from '../../assets/images/sub-broker/marketing-sales.svg';
import Channels from '../../assets/images/sub-broker/channels.svg';
import Training from '../../assets/images/sub-broker/training.svg';
import Trading from '../../assets/images/sub-broker/edge-trading.svg';
import Transport from '../../assets/images/sub-broker/transport-growth.svg';
import { useState } from 'react';
import LazyLoader from '../Common-features/LazyLoader';
// import Lazy from 'yup/lib/Lazy';

function SubBrokerBenifits() {

    const [defaultOption, setdefaultOption] = useState(() => 'sl-slider-active');

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


            <section className="broker-benifits">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">Sub Broker Benefits</h2>
                        </div>
                    </div>
                    <div className="row relative">
                        <div className="col-md-12">
                            <div className="benifits-list slider-hide">
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Manager} alt={"Local Relationship Manager Assistance"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Manager} alt="Local Relationship Manager Assistance" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Local Relationship Manager Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Advanced Software to Manage Business"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Software} alt="Advanced Software to Manage Business" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Advanced Software to Manage Business</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Marketing &amp; Sales Support"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Sales} alt="Marketing &amp; Sales Support" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Dedicated WhatsApp &amp; Telegram Channels"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Channels} alt="Dedicated WhatsApp &amp; Telegram Channels" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Dedicated WhatsApp &amp; Telegram Channels</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Training} alt={"Training through Webinars &amp; Conferences"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Training through Webinars &amp; Conferences</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Trading} alt={"Cutting-edge Trading Platforms (App &amp; Web)"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Cutting-edge Trading Platforms (App &amp; Web)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Transport} alt={"Transparent &amp; Growth-oriented Business Model"} className={"img-fluid"} width={"74"} height={"73"} />
                                            {/* <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-fluid" width="74" height="73" /> */}
                                        </span>
                                        <h4>Transparent &amp; Growth-oriented Business Model</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="item-next1">  
                                <h3>Become a Choice Sub Broker</h3>
                                <p>Start Sub Broker franchise with a trustworthy partner that can help you to grow up.</p>
                                <a href="javascript:void(0)" className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Join Now</span> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default SubBrokerBenifits;