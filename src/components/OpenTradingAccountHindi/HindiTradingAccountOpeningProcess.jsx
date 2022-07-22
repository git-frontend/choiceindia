import React from 'react';

import Image19 from '../../assets/images/open-demat-account/one.webp';
import Image20 from '../../assets/images/open-demat-account/steparrow.svg';
import Image21 from '../../assets/images/open-demat-account/downarrow.png';
import Image22 from '../../assets/images/open-demat-account/two.webp';
import Image23 from '../../assets/images/open-demat-account/three.webp';
import Image24 from '../../assets/images/open-demat-account/four.webp';
import utils from "../../Services/utils";
const HindiTradingAccountOpeningProcess = () => {
    return (
        <div>

            <section className="open-acnt ">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="get-started-sect ">


                                <div className="headtext">
                                    <h3 className="mb-0">मुफ्त में  <span>पेपरलेस</span> डीमैट अकाउंट खोलें</h3>
                                </div>

                                <div className="text-right text-sm-center">
                                    <a href="javascript:void(0)" className="btn-bg btn-bg-dark " onClick={() => { utils.scrollToId('open-account-wrap') }} >Get Started </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 className="sect-title">डीमैट अकाउंट खोलने की प्रक्रिया</h2>



                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                    <img src={Image19}  width={"93"} height={"93"} alt="Step One" className="img-fluid lazyload image" />
                                    <img src={Image20}  width={"127"} height={"23"} alt="Step One" className="img-fluid lazyload image deskimg" />
                                    <img src={Image21}  width={"17"} height={"93"} alt="Step One" className="img-fluid lazyload respimag" />
                                </div>
                                <div className="info respspace">
                                    <h5>ऑनलाइन पंजीकरण करें</h5>
                                    <p>आवश्यक विवरण भरें और पासपोर्ट आकार के फोटो के साथ संबंधित दस्तावेज अपलोड करें।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap">
                                    <img src={Image22}  width={"93"} height={"93"} alt="Step Two" className="img-fluid lazyload image" />
                                    <img src={Image20}  width={"127"} height={"23"} alt="Step Two" className="img-fluid lazyload image deskimg" />
                                    <img src={Image21}  width={"17"} height={"93"} alt="Step Two" className="img-fluid lazyload respimag" />
                                </div>
                                <div className="info">
                                    <h5>व्यक्तिगत सत्यापन</h5>
                                    <p>इन-पर्सन वेरिफिकेशन (आईपीवी) को पूरा करें।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                    <img src={Image23}  width={"93"} height={"93"} alt="Step Three" className="img-fluid lazyload image" />
                                    <img src={Image20} width={"127"} height={"23"} alt="Step Three" className="img-fluid lazyload image deskimg" />
                                    <img src={Image21} width={"17"} height={"93"}  alt="Step Three" className="img-fluid lazyload respimag" />
                                </div>
                                <div className="info" >
                                    <h5>पंजीकरण पूर्ण</h5>
                                    <p>चॉइस के साथ आपका ट्रेडिंग अकाउंट सफलापुरवक खुल गया है |

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                    <img src={Image24}  width={"93"} height={"93"}  alt="Step Four" className="img-fluid lazyload" />
                                </div>
                                <div className="info" >
                                    <h5>कूरियर पीओए</h5>
                                    <p>आपके पंजीकृत ईमेल आईडी पर भेजे गए पावर ऑफ अटॉर्नी (पीओए) की हस्ताक्षर कर के हमें कुरियर करें।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default HindiTradingAccountOpeningProcess;
