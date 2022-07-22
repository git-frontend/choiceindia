import React from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';

const OpenFreeAccountBanner = () => {
    return (
        <div>
             <section className="banner-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <h1 className="banner-title" >
                                <div className="desktop"><span> मोफत डीमॅट खाते उघडा</span></div>
                                
                            </h1>
                            {/* <img src={Image1} alt="zigzagline" className="img-fluid zigzagline" /> */}
                            {/* <LazyLoader src={Image1} className={'img-fluid zigzagline'} width={'146'} height={'20'} alt={'zigzagline'} /> */}
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image2} width={"30"} height={"30"} alt={"सर्वात कमी डीपी शुल्क"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>कमी डिपी चार्जेस<span className="subtxt"> (१० रुपये मात्र)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image3} width={"28"} height={"28"} alt={"कमी ब्रोकरेज शुल्क"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>कमी ब्रोक्रेज चार्जेस</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt={"मोफत संशोधन सल्ला"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>मोफत संशोधन सल्लागार</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image5} width={"32"} height={"20"} alt={"वार्षिक शुल्काशिवाय डीमॅट खाते"} className="img-fluid   " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>पहिल्या वर्षी एएमसी चार्जेस मोफत</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6" id="open-account-wrap">
                            <div className="formwrap d-flex justify-content-end ">
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} />
                                <DematAccountForm language="marathi"/>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default OpenFreeAccountBanner;