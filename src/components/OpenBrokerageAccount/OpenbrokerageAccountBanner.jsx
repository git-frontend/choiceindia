import React from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';

const OpenFreeAccountBanner = () => {
    return (
        <div>
             <section className="banner-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <h1 className="banner-title" >
                                <div className="desktop">Open a Brokerage Account <br /> <span className="yellow">Online For Free</span></div>
                                
                            </h1>
                            <img src={Image1} alt="zigzagline" className="img-fluid zigzagline" />
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image2} width={"30"} height={"30"} alt="Lowest DP Charges" className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low</span> DP Charges<span className="subtxt"> (Rs. 10 Only)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image3} width={"28"} height={"28"} alt="Low Brokerage Charges" className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low </span> Brokerage Charges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt="Free Research Advisory" className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span>  Research Advisory</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image5} width={"32"} height={"20"} alt="Demat Account without Annual Charges" className="img-fluid   " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span> AMC for First Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6" id="open-account-wrap">
                            <div className="formwrap d-flex justify-content-end ">
                                <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" />
                                <DematAccountForm />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default OpenFreeAccountBanner;