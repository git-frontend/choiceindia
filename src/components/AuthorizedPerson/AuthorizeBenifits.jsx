import React,{useState} from 'react';
import Manager from '../../assets/images/sub-broker/local-relationship-manager-assistance.svg';
import Software from '../../assets/images/sub-broker/advanced-software-to-manage-business.svg';
import Sales from '../../assets/images/sub-broker/marketing-and-sales-support.svg';
import Channels from '../../assets/images/sub-broker/dedicated-whatsapp-and-telegram-channels.svg';
import Training from '../../assets/images/sub-broker/sub-broker-training-through-webinars-and-conferences.svg';
import Trading from '../../assets/images/sub-broker/cutting-edge-trading-platforms-app-web.svg';
import Transport from '../../assets/images/sub-broker/transparent-and-growth-oriented-business-model.svg';
import { Link } from 'react-router-dom';
import utils from "../../Services/utils";


function RemisierBenifits() {

    const [defaultOption, setdefaultOption] = useState(() => 'sl-slider-active');

    return (
        <div>


            <section className="broker-benifits">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">Authorised Person Benefits</h2>
                        </div>
                    </div>
                    <div className="row relative">
                        <div className="col-md-12">
                            <div className="benifits-list slider-hide">
                                <div className={"sl-slider " + defaultOption }>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Manager} alt="Authorised Person with local RM assistance" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Local Relationship Manager Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Software} alt="Authorised Person with Advanced software to manage business" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Advanced Software to Manage Business</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Sales} alt="Dedicated marketing &amp; sales support for Authorised Person" className="img-fluid" width="74" height="73"/>
                                        </span>
                                        <h4>Marketing &amp; Sales Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Channels} alt="Dedicated whatsapp &amp; telegram channels for Authorised Person" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Dedicated WhatsApp &amp; Telegram Channels</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Training} alt="Training through webinars and conferences for Authorised Person" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Training through Webinars &amp; Conferences</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Trading} alt="Cutting-edge trading platforms for Authorised Person" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Cutting-edge Trading Platforms (App &amp; Web)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '' ) }}>
                                    <div className="benifits-item">
                                        <span>
                                            <img src={Transport} alt="Authorised Person with transparent &amp; growth-oriented business model" className="img-fluid" width="74" height="73" />
                                        </span>
                                        <h4>Transparent &amp; Growth-oriented Business Model</h4>
                                    </div>
                                </div>
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