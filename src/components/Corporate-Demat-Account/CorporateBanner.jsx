import React from "react";
// import Bannerimage from "../../assets/images/Corporate-Demat-Account/stock-photo.webp";
import Bannerimage from "../../assets/images/Corporate-Demat-Account/open-corporate-demat-account.png";
import LazyLoader from '../Common-features/LazyLoader';

function CorporateBanner() {


    return (
        <>
            <section className="corporate-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-12">
                            <div className="corporate-banner-headings">
                                <p className="para-first">Open Corporate Demat Account</p>
                                <h1 className="title"><span>EMPOWER</span>
                                    Your Business</h1>
                                <p className="para-scnd">Trade easily across all segments on NSE, BSE, and MCX with our all-in-one Corporate Demat account.</p>
                                <a href="javascript:void(0)" className="btn-bg btn-bg-dark btn-new" onClick={() => scrollToId('campaignForm')}>Start Today</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner-img">
                                <LazyLoader src={Bannerimage} className='img-fluid' width={'806'} height={'596'} alt={'Open corporate demat account'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CorporateBanner;