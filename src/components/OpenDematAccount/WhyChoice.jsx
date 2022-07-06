import React from 'react';
import Image13 from '../../assets/images/open-demat-account/web.svg';
import Image14 from '../../assets/images/open-demat-account/android.svg';
import Image15 from '../../assets/images/open-demat-account/ios.svg';
import Image16 from '../../assets/images/open-demat-account/why-choice.webp';
const WhyChoice = () => {
    return (
        <div>
          
            <section className="why-choice-section">
            <div className="container-fluid">
              
                <div className="row">
                    <div className="wrap">
                    <div className="leftsect">
                       <h2 className="secttile">Why Choice?</h2>
                       <div className="img">
                       <img src={Image16} alt="Why Choice" width={"365"} height={"788"}   className="img-fluid" />
                       </div>
                      
                    </div>
                    <div className="rightsect">
                        <div className="row d-sm-flex m-0 line ">
                            <div className="col-md-5 col-md-offset-1 col-sm-5">
                                <p className="headtxt">RESEARCH &amp; ADVISORY SERVICES</p>
                            </div>
                            <div className="col-md-6 col-sm-7">
                                <p className="subtxt">A dedicated research team that provides Technical and Fundamental Research at no extra cost.</p>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="row mt-2 d-sm-flex m-0 line">
                            <div className="col-md-5 col-md-offset-1 col-sm-5 ">
                                <p className="headtxt">CUSTOMER SUPPORT</p>
                            </div>
                            <div className="col-md-6 col-sm-7">
                                <p className="subtxt">An excellent support team that guides you at every step available via phone and emails and branch offices.</p>
                            </div>
                        </div>
                        <hr></hr>

                        <div className="row mt-2 d-sm-flex m-0 line">
                            <div className="col-md-5 col-md-offset-1 col-sm-5 ">
                                <p className="headtxt">LOCAL OFFICES</p>
                            </div>
                            <div className="col-md-6 col-sm-7">
                                <p className="subtxt">We have 48 local offices available across the country at your service.</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row mt-2 d-sm-flex m-0 line line-last">
                            <div className="col-md-5 col-md-offset-1 col-sm-5">
                                <p className="headtxt">25+ YEARS OF EXPERIENCE</p>
                            </div>
                            <div className="col-md-6 col-sm-7">
                                <p className="subtxt">A trusted name in the broking industry backed by 25+ years of experience in the finance domain.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                  
                </div>
                <div className="row  d-flex justify-content-center">
                    <div className="col-md-10 col-lg-10">
                        <div className="availablewrap">
                        <div className="col-md-4">
                            <h2 className="wraptitle">We’re <br /> Available On</h2>
                        </div>
                            <div className="col-md-8">
                                <div className="iconwrap">
                                    <a href="<?php echo JIFFY_URL;  ?>" target="_blank">
                                        <div className="icon">
                                            <img src={Image13} alt="Web" width={"45"} height={"46"} className="img-fluid " />
                                            <p>Web</p>
                                        </div>
                                    </a>
                                      <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank">
                                        <div className="icon">
                                            <img src={Image14} alt="Android" width={"35"} height={"36"}  className="img-fluid " />
                                            <p>Android</p>
                                        </div>
                                    </a>
                                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261" target="_blank">
                                        <div className="icon">
                                            <img src={Image15} width={"45"} height={"46"} alt="IOS" className="img-fluid " />
                                            <p>iOS</p>
                                        </div>
                                    </a>
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

export default WhyChoice;

