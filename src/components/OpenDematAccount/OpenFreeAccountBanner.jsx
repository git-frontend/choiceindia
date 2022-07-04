import React from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/Lowest-DP.webp';
import Image3 from '../../assets/images/open-demat-account/nosqroff.webp';
import Image4 from '../../assets/images/open-demat-account/sucessratio.webp';
import Image5 from '../../assets/images/open-demat-account/AMC.webp';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';

const OpenFreeAccountBanner = () => {
    return (
        <div>
             <section className="banner-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <h1 className="banner-title" >
                                <div className="desktop"><span> Open a <span className="free">Free</span></span><br /> Demat Account <br />with <span className="yellow">No Annual Charges*</span></div>
                                
                            </h1>
                            <img src={Image1} alt="zigzagline" className="img-fluid zigzagline" />
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-md-5 col-sm-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image2} width={"15"} height={"24"} alt="Zero Account Opening Fee" className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low</span> DP Charges<span className="subtxt"> (Rs. 10 Only)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-sm-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image3} width={"28"} height={"24"} alt="No Square Off Charges" className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low </span> Brokerage Charges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 mbrespflex">
                                    <div className="col-md-5 col-sm-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt="Call Success Ratio" className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span>  Research Advisory</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5  col-sm-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image5} width={"32"} height={"20"} alt="Free Call For Trade Facility" className="img-fluid   " />
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