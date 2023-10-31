import React from "react";
import mfsteps from '../../assets/images/mutual-fund-distributor/mf-steps.png';
import LazyLoader from '../Common-features/LazyLoader';
function MFDistributorSteps() {
    return (
        <>
            <section className="MF-Distributor-Steps">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 heading-sec">
                            <h2 className="mf-step-title">Steps to Become a Mutual Fund Distributor with Choice</h2>
                            <p className="text-center">Boost your revenue by offering diverse financial instruments.</p>
                        </div>
                    </div>
                    <row>
                        <div className="col-md-12">
                            <div className="mf-Distributor-Become-steps">
                                <ul className="above-mf-Distributor-Become-steps">
                                    <li className="all-step display-flex">
                                        <div className='number'>
                                            <span className='number-text'>01</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                            Pass NISM Exam
                                        </div>
                                        <div>
                                            <p className="step-para">Register &amp; pass the NISM Series V-A Mutual Fund Distributors certification exam.</p>
                                        </div>
                                    </li>

                                    <li className="all-step display-flex hide-dsk">
                                        <div className='number'>
                                            <span className='number-text'>02</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                        Complete KYD Process
                                        </div>
                                        <div>
                                            <p className="step-para">Submit AMFI and KYD applications with necessary documents at a CAMS POS. Present originals for verification.</p>
                                        </div>
                                    </li>

                                    <li className="all-step display-flex">
                                        <div className='number'>
                                            <span className='number-text'>03</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                            Obtain ARN Number
                                        </div>
                                        <div>
                                            <p className="step-para">Post-exam, secure your ARN (AMFI Registration Number) from NISM.</p>
                                        </div>
                                    </li>

                                    <li className="all-step display-flex hide-dsk">
                                        <div className='number'>
                                            <span className='number-text'>04</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                        Generate EUIN Number
                                        </div>
                                        <div>
                                            <p className="step-para">Get an Employee Unique Identification Number (EUIN).</p>
                                        </div>
                                    </li>

                                    <li className="all-step display-flex">
                                        <div className='number'>
                                            <span className='number-text'>05</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                            Partner with Choice
                                        </div>
                                        <div>
                                            <p className="step-para">Join Choice to offer multiple fund schemes. </p>
                                        </div>
                                    </li>

                                </ul>
                                <div className="step-img">
                                    <LazyLoader src={mfsteps} className="img-fluid"></LazyLoader>
                                </div>
                                <ul className="above-mf-Distributor-Become-steps Become-steps2">
                                    <li className="all-step display-flex">
                                        <div className='number'>
                                            <span className='number-text'>02</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                        Complete KYD Process
                                        </div>
                                        <div>
                                            <p className="step-para">Submit AMFI and KYD applications with necessary documents at a CAMS POS. Present originals for verification.</p>
                                        </div>
                                    </li>
                                    <li className="all-step display-flex">
                                        <div className='number'>
                                            <span className='number-text'>04</span>
                                        </div>
                                        <div className='step-text mr-b'>
                                        Generate EUIN Number
                                        </div>
                                        <div>
                                            <p className="step-para">Get an Employee Unique Identification Number (EUIN).</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </row>
                </div>
            </section>
        </>
    )
}
export default MFDistributorSteps;