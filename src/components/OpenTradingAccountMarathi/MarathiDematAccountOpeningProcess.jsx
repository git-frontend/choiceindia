import React from 'react';

import Image19 from '../../assets/images/open-demat-account/register-online.webp';
import Image20 from '../../assets/images/open-demat-account/steparrow.svg';
import Image21 from '../../assets/images/open-demat-account/downarrow.png';
import Image22 from '../../assets/images/open-demat-account/in-person-verification.webp';
import Image23 from '../../assets/images/open-demat-account/registration-complete.webp';
import Image24 from '../../assets/images/open-demat-account/courier-poa.webp';
import utils from "../../Services/utils";
import { Link } from 'react-router-dom';
import LazyLoader from '../Common-features/LazyLoader';
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
                                    <Link to="/marathi/open-demat-account" className="btn-bg btn-bg-dark " onClick={() => { utils.scrollToId('open-account-wrap') }} >आताच सुरुवात करा! </Link>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 className="sect-title">डिमॅट अकाऊंट ओपन करण्याची प्रक्रिया</h2>



                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image19} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"मोफत डिमॅट खाते उघडण्यासाठी नोंदणी करा"} />   
                                <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step One"} />          
                                <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step One"} />                                
                                </div>
                                <div className="info respspace">
                                    <h5>A trusted name </h5>
                                    <p>Fill in the required details and upload the relevant documents along with a passport size photograph.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap">
                                <LazyLoader src={Image22} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"मोफत डीमॅट खाते उघडण्यासाठी पूर्ण आईपीवी करा"} />
                                <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step Two"} />
                                <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step Two"} />
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
                                <LazyLoader src={Image23} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"मोफत डीमॅट खाते उघडण्यासाठी नोंदणी पूर्ण करा"} />
                                <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step Three"} />
                                <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step Three"} />
                                </div>
                                <div className="info" >
                                    <h5>Registration Complete</h5>
                                    <p>Your Demat Account opening is successful with choice.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image24} className={'img-fluid lazyload'} width={"93"} height={"93"} alt={"तुमचे मोफत डीमॅट खाते सक्रिय करण्यासाठी कुरिअर पीओए करा"} />
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

