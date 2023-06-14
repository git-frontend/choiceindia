import React from 'react';
import Image13 from '../../assets/images/open-demat-account/web.svg';
import Image14 from '../../assets/images/open-demat-account/android.svg';
import Image15 from '../../assets/images/open-demat-account/ios.svg';
import Image16 from '../../assets/images/open-demat-account/choice-free-demat-account-opening.webp';
import LazyLoader from '../Common-features/LazyLoader';

const WhyEquityStockTrading = () => {
    return (
        <div>
          
          <section className="why-choice-section">
                <div className="container">

                    <div className="row">
                        <div className='col-md-12'>
                            <div className="wrap">
                                <div className="leftsect">
                                    <h2 className="secttile">Why Choice?</h2>
                                    <div className="img">
                                        <img src={Image16} alt={"Why Open Equity Trading Account with Choice"} width={"365"} height={"788"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="rightsect">
                                    <div className="rightsect-sub">
                                        <p className="headtxt">RESEARCH &amp;<br /> ADVISORY SERVICES</p>
                                        <p className="subtxt">A dedicated research team that provides Technical and Fundamental Research on the equity market at no extra cost.</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">CUSTOMER <br />SUPPORT</p>
                                        <p className="subtxt">An excellent support team that guides you at every step available via phone and emails and branch offices.</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">LOCAL <br />OFFICES</p>
                                        <p className="subtxt">We have 95+ local offices available across the country at your service.</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">25+ YEARS OF  <br />EXPERIENCE</p>
                                        <p className="subtxt">A trusted name in the broking industry backed by 25+ years of experience in the finance domain.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-md-10 col-lg-10">

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="availablewrap ">
                                <div className='row align-items-center'>
                                <div className="col-xl-4 col-md-6">
                                    <h2 className="wraptitle">We’re <br /> Available On</h2>
                                </div>
                                <div className="col-xl-8 col-md-6">
                                    <div className="iconwrap">
                                        <a href="https://finx.choiceindia.com/" target="_blank">
                                            <div className="icon">
                                                <img src={Image13} alt="Choice FinX Trading Platform" width={"45"} height={"46"} className="img-fluid " />
                                                <p>Web</p>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank">
                                            <div className="icon">
                                                <img src={Image14} alt="Choice FinX Trading App for Android" width={"35"} height={"36"} className="img-fluid " />
                                                <p>Android</p>
                                            </div>
                                        </a>
                                        <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261" target="_blank">
                                            <div className="icon">
                                                <img src={Image15} width={"45"} height={"46"} alt="Choice FinX Trading App for IOS" className="img-fluid " />
                                                <p>iOS</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default WhyEquityStockTrading;

