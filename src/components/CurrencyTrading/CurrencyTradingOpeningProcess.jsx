import React from 'react';

import Image19 from '../../assets/images/open-demat-account/register-online.webp';
import Image20 from '../../assets/images/open-demat-account/steparrow.svg';
import Image21 from '../../assets/images/open-demat-account/downarrow.png';
import Image22 from '../../assets/images/open-demat-account/in-person-verification.webp';
import Image23 from '../../assets/images/open-demat-account/registration-complete.webp';
import Image24 from '../../assets/images/open-demat-account/courier-poa.webp';
import LazyLoader from '../Common-features/LazyLoader';

const CurrencyTradingOpeningProcess = () => {

        function chapterScroll(id) {
            var element = document.getElementById(id);
            var headerOffset = 140;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
        }
    return (
        <div>

            <section className="open-acnt ">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="get-started-sect ">


                                <div className="headtext col-md-9">
                                    <h3 className="mb-0">Open a <span>Paperless </span>  Forex Trading Account Online For Free</h3>
                                </div>

                                <div className="text-right text-sm-center col-md-3">
                                    <a  onClick={()=>{chapterScroll('dematform')}} className="btn-bg btn-bg-dark cursor-pointer ">Open Now </a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 className="sect-title">Open a Currency Trading Account in Few Steps</h2>



                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image19} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"Register to Open Currency Trading Account"} />
                                    {/* <img src={Image19}  width={"93"} height={"93"} alt="Step One" className="img-fluid lazyload image" /> */}
                                    <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step One"} />
                                    {/* <img src={Image20}  width={"127"} height={"23"} alt="Step One" className="img-fluid lazyload image deskimg" /> */}
                                    <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step One"} />
                                    {/* <img src={Image21}  width={"17"} height={"93"} alt="Step One" className="img-fluid lazyload respimag" /> */}
                                </div>
                                <div className="info respspace">
                                    <h5>Register at Choice </h5>
                                    <p>Fill in the required details and upload the relevant documents along with a passport size photograph.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap">
                                <LazyLoader src={Image22} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"Complete IPV to Open Currency Trading Account in India"} />
                                    {/* <img src={Image22}  width={"93"} height={"93"} alt="Step Two" className="img-fluid lazyload image" /> */}
                                    <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step Two"} />
                                    {/* <img src={Image20}  width={"127"} height={"23"} alt="Step Two" className="img-fluid lazyload image deskimg" /> */}
                                    <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step Two"} />
                                    {/* <img src={Image21}  width={"17"} height={"93"} alt="Step Two" className="img-fluid lazyload respimag" /> */}
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
                                <LazyLoader src={Image23} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"Complete registration for Online Currency Trading in India"} />
                                    {/* <img src={Image23}  width={"93"} height={"93"} alt="Step Three" className="img-fluid lazyload image" /> */}
                                    <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step Three"} />
                                    {/* <img src={Image20} width={"127"} height={"23"} alt="Step Three" className="img-fluid lazyload image deskimg" /> */}
                                    {/* <img src={Image21} width={"17"} height={"93"}  alt="Step Three" className="img-fluid lazyload respimag" /> */}
                                    <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step Three"} />
                                </div>
                                <div className="info" >
                                    <h5>Registration Complete</h5>
                                    <p>Your Demat Account opening is successful with Choice.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image24} className={'img-fluid lazyload'} width={"93"} height={"93"} alt={"Courier POA to active your Currency Trading Account"} />
                                    {/* <img src={Image24}  width={"93"} height={"93"}  alt="Step Four" className="img-fluid lazyload" /> */}
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

export default CurrencyTradingOpeningProcess;

