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


            <section className="broker-benifits" id="showForm">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="titl3">Benefits of <span>Becoming a Mutual Fund Distributor</span></h2>
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
                                            <LazyLoader src={Manager} alt={"Sales and Marketing Assistance"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Sales &amp; Marketing <br/> Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Research and Reccommendations Support"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Research &amp; Recommendations Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Trading App"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Cutting-edge Platforms (App &amp; Web)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Custom Portfolio Analysis for HNI Clients"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Custom Portfolio Analysis for HNI Clients</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"Dedicated Relationship Manager"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Dedicated Relationship Manager</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"Multiple Fianancial Products"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Multiple <br/>Products on Offer</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"Complete Online Process"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Complete <br/>Online Procedure</h4>
                                    </div>
                                </div>
                            </Slider>
                            :
                            <div className="benifits-list slider-hide">
                                
                                <div className={"sl-slider " + defaultOption}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Manager} alt={"Sales and Marketing Assistance"} className={"img-fluid franchise-img"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Sales &amp; Marketing Assistance</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Software} alt={"Research and Reccommendations Support"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Research &amp; Recommendations Support</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Sales} alt={"Trading App"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Cutting-edge Platforms (App &amp; Web)</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                <div className="benifits-item">
                                        <span>
                                        <LazyLoader src={Channels} alt={"Custom Portfolio Analysis for HNI Clients"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Custom Portfolio Analysis for HNI Clients</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Training} alt={"Dedicated Relationship Manager"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Dedicated Relationship Manager</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Trading} alt={"Multiple Fianancial Products"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Multiple <br/>Products on Offer</h4>
                                    </div>
                                </div>
                                <div className="sl-slider" onMouseOver={() => { setdefaultOption(() => '') }}>
                                    <div className="benifits-item">
                                        <span>
                                            <LazyLoader src={Transport} alt={"Complete Online Process"} className={"img-fluid"} width={"74"} height={"73"} />
                                        </span>
                                        <h4>Complete <br/>Online Procedure</h4>
                                    </div>
                                </div>
                            </div>
                           
                            }
                             </div>
                            <div className="item-next1">  
                                <h3>Become a Mutual Fund Distributor</h3>
                                <p>Become a Choice Mutual Fund Distributor and let’s create a lifetime source of income.</p>
                                <Link to={(window.location.pathname =="/campaign/mutual-fund-distributor")? "/campaign/mutual-fund-distributor":(window.location.pathname =="/mutual-fund-distributor")? "/mutual-fund-distributor":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Join Now</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default MFDistributorBenifits;