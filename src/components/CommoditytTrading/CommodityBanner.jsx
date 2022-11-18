import React from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';

const CommodityBanner = () => {
    return (
        <div>
             <section className="banner-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <h1 className="banner-title" >
                            <div className="desktop">Open a Commodity Trading <br /> Account <span className="yellow">Online For Free</span></div>
                            </h1>
                            {/* <LazyLoader src={Image1} className={'img-fluid zigzagline'} alt="zigzagline" /> */}
                            {/* <img src={Image1} alt="zigzagline" className="img-fluid zigzagline" /> */}
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt={"Open Commodity Trading Account with Low DP Charges"} />
                                                    {/* <img src={Image2} width={"30"} height={"30"} alt="Zero Account Opening Fee" className="img-fluid " /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span> Account Opening
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <LazyLoader src={Image3} className={'img-fluid'} width={"28"} height={"24"} alt={"Open Low Brokerage Commodity Trading Account"} />
                                                    {/* <img src={Image3} width={"28"} height={"24"} alt="No Square Off Charges" className="img-fluid " /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free  </span>AMC for First Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mbrespflex mt2">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt={"Open a Commodity Trading Account with Expert Research Advisory"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Expert  </span>  Research &amp; Advisory</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                <LazyLoader src={Image5} className={'img-fluid'} width={"32"} height={"20"} alt={"Online Commodity Trading Account with No Annual Charges"} />
                                                    {/* <img src={Image5} width={"32"} height={"20"} alt="Free Call For Trade Facility" className="img-fluid" /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low  </span>Brokerage Charges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6" id="open-account-wrap">
                            <div className="formwrap d-flex justify-content-end ">
                                {/* <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt="Background Image" /> */}
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} />
                                <DematAccountForm />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default CommodityBanner;
