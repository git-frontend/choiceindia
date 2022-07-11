import React from 'react';

import Image19 from '../../assets/images/open-demat-account/one.webp';
import Image20 from '../../assets/images/open-demat-account/steparrow.svg';
import Image21 from '../../assets/images/open-demat-account/downarrow.png';
import Image22 from '../../assets/images/open-demat-account/two.webp';
import Image23 from '../../assets/images/open-demat-account/three.webp';
import Image24 from '../../assets/images/open-demat-account/four.webp';

const DematAccountOpeningProcess = () => {
    return (
        <div>

            <section className="open-acnt ">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="get-started-sect ">


                                <div className="headtext">
                                    <h3 className="mb-0"><span>पेपरलेस </span> आणि मोफत डिमॅट अकाऊंट ओपन करा!</h3>
                                </div>

                                <div className="text-right text-sm-center">
                                    <a href="#open-account-wrap" className="btn-bg btn-bg-dark " >आताच सुरुवात करा! </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 className="sect-title">डिमॅट अकाऊंट ओपन करण्याची प्रक्रिया</h2>



                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                    <img src={Image19}  width={"93"} height={"93"} alt="Step One" className="img-fluid lazyload image" />
                                    <img src={Image20}  width={"127"} height={"23"} alt="Step One" className="img-fluid lazyload image deskimg" />
                                    <img src={Image21}  width={"17"} height={"93"} alt="Step One" className="img-fluid lazyload respimag" />
                                </div>
                                <div className="info respspace">
                                    <h5>ऑनलाईन नोंदणी</h5>
                                    <p>आवश्यक सर्व माहिती भरून, योग्य कागदपत्रे आणि पासपोर्ड आकारचे फोटो सोबत अपलोड करा.
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
                                    <h5> वैयक्तीक पडताळणी</h5>
                                    <p>वैयक्तीक पडताळणी (IPV)
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
                                    <h5> नोंदणी पूर्णझाल्यनंतर</h5>
                                    <p>चॉईस ब्रोकिंगसोबत तुमचे डिमॅट अकाऊंट यशस्वीपणे उघडले गेले.

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
                                    <h5>कुरिअर पीओए</h5>
                                    <p>आमच्या दिलेल्या ई-मेल आयडीवर तुमची पॉवर ऑफ अँटर्नी (पीओए) वर स्वाक्षरी करुन पाठवा.
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

export default DematAccountOpeningProcess;

