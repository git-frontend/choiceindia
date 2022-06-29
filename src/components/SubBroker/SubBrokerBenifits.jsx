import React from 'react';
import Manager from '../../assets/images/sub-broker/relationship-manager.svg';
import Software from '../../assets/images/sub-broker/advanced-software.svg';
import Sales from '../../assets/images/sub-broker/marketing-sales.svg';
import Channels from '../../assets/images/sub-broker/channels.svg';
import Training from '../../assets/images/sub-broker/training.svg';
import Trading from '../../assets/images/sub-broker/edge-trading.svg';
import Transport from '../../assets/images/sub-broker/transport-growth.svg';



function SubBrokerBenifits() {
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
                    <div className="sl-slider sl-slider-active">
                        <div className="benifits-item">
                        <span>
                                            <img src={Manager} alt="Local Relationship Manager Assistance" className="img-responsive" />
                        </span>
                        <h4>Local Relationship Manager Assistance</h4>
                        </div>
                    </div>
                    <div className="sl-slider">
                        <div className="benifits-item">
                        <span>
                                            <img src={Software} alt="Advanced Software to Manage Business" className="img-responsive" />
                        </span>
                        <h4>Advanced Software to Manage Business</h4>
                        </div>
                    </div>
                    <div className="sl-slider">
                        <div className="benifits-item">
                        <span>
                                            <img src={Sales} alt="Marketing &amp; Sales Support" className="img-responsive" />
                        </span>
                        <h4>Marketing &amp; Sales Support</h4>
                        </div>
                    </div>
                    <div className="sl-slider">
                        <div className="benifits-item">
                        <span>
                                            <img src={Channels} alt="Dedicated WhatsApp &amp; Telegram Channels" className="img-responsive" />
                        </span>
                        <h4>Dedicated WhatsApp &amp; Telegram Channels</h4>
                        </div>
                    </div>
                    <div className="sl-slider">
                    <div className="benifits-item">
                        <span>
                                            <img src={Training} alt="Training through Webinars &amp; Conferences" className="img-responsive" />
                        </span>
                        <h4>Training through Webinars &amp; Conferences</h4>
                    </div>
                    </div>
                    <div className="sl-slider">
                    <div className="benifits-item">
                        <span>
                                            <img src={Trading} alt="Cutting-edge Trading Platforms (App &amp; Web)" className="img-responsive" />
                        </span>
                        <h4>Cutting-edge Trading Platforms (App &amp; Web)</h4>
                    </div>
                    </div> 
                    <div className="sl-slider">
                    <div className="benifits-item">
                        <span>
                                            <img src={Transport} alt="Transparent &amp; Growth-oriented Business Model" className="img-responsive" />
                        </span>
                        <h4>Transparent &amp; Growth-oriented Business Model</h4>
                    </div>
                    </div>
                    </div>
                    <div className="item-next1">
                        <h3>Become a Choice Sub Broker</h3>
                        <p>Start Sub Broker franchise with a trustworthy partner that can help you to grow up.</p>
                        <a href="#" className="franchise-same-btn"><span>Join Now</span> </a>
                    </div>
                </div>
                </div>
            </div>
        </section>

            
    
        </div>

    )
}

export default SubBrokerBenifits;