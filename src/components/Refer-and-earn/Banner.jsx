
import React from "react";
import Bannerimage from '../../assets/images/refer-earn/banner.webp';
import LazyLoader from '../Common-features/LazyLoader';

function Banner() {

    return (
        <div>


            <section className="ref-sec-banner">
                <div className="container">
                    <div className="row">
                    <div className="col-md-7">
                        <div className="sec-banner-left">
                            <h1>Join the Best Demat Account <span>Refer and Earn</span>  Program</h1>
                            <div className="banner-box">
                                <p>Invite your friends and get up to Rs.1000 incentive per referral and your friend will get up to Rs. 500.</p>
                               
                                    <div className="get-link-form refer-link-generated-wrap mt-20" >
                                        <div className="refer-link-generated mb-20">
                                           
                                                
                                                <div className="refer-social-share">
                                                    <a href="#" className="fb" >
                                                        <i className="fa fa-facebook"></i></a>

                                                    <a href="#" data-action="share/whatsapp/share" className="whatsapp">
                                                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                                    </a>

                                                </div>
                                </div>

                                        </div>
                                    </div>
                                    <h4>Don’t have an Account? <a href="https://choiceindia.com/open-free-demat-account">Open Now</a></h4>
                                </div>
                    </div>
                    <div className="col-md-5">
                        <div className="sec-banner-right">
                            <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid"} width={"496"} height={"536"} />

                        </div>
                    </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Banner;
