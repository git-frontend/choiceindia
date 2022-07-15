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
                                    <h3 className="mb-0">Open a <span>Paperless </span> Trading Account For Free</h3>
                                </div>

                                <div className="text-right text-sm-center">
                                    <a href="#open-account-wrap" className="btn-bg btn-bg-dark " >Get Started </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 className="sect-title">Trading Account Opening Process</h2>



                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                    <img src={Image19}  width={"93"} height={"93"} alt="Step One" className="img-fluid lazyload image" />
                                    <img src={Image20}  width={"127"} height={"23"} alt="Step One" className="img-fluid lazyload image deskimg" />
                                    <img src={Image21}  width={"17"} height={"93"} alt="Step One" className="img-fluid lazyload respimag" />
                                </div>
                                <div className="info respspace">
                                    <h5>Register Online</h5>
                                    <p>Fill in the required details and upload the relevant documents along with a passport size photograph.
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
                                    <h5>In-Person Verification</h5>
                                    <p>Complete the In-person verification (IPV).
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
                                    <h5>Registration Complete</h5>
                                    <p>Your Trading Account opening is successful with Choice Broking.

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
                                    <h5>Courier POA</h5>
                                    <p>Courier us the signed copy of the Power of Attorney (POA) sent on your registered Email ID.
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

