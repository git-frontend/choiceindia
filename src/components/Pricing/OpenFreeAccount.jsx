
import React from "react";

import pricingimage1 from '../../assets/images/pricing/demat-arrow.svg';
import DematAccountForm from '../Common-features/DematAccountForm'


function OpenFreeAccount() {



    return (
        <div>

            <section className="pricing-demat-account">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-xl-6 col-md-7">
                            <div className="demat-account-features">
                                <h3 className="title-secnd">100% Free Demat Account</h3>    
                                <div className="account-features-list">
                                    <div className="feat-list-itm">
                                        <h4>Free</h4>
                                        <p>Demat Account Opening</p>
                                    </div>
                                    <div className="feat-list-itm">
                                        <h4>78%</h4>
                                        <p>Research Success Ratio</p>
                                    </div>
                                    <div className="feat-list-itm">
                                        <h4>Instant</h4>
                                        <p>Paperless Account Opening</p>
                                    </div>
                                    <div className="feat-list-itm">
                                        <h4>Advanced</h4>
                                        <p>Trading Platform ( Web &amp; App )</p>
                                    </div>
                                </div>
                                <img src={pricingimage1} alt="Become a Stock Market Agent" className="img-demat-arrow"/>
                            </div>
                            
                        </div>
                        <div className="col-xl-6 col-md-5 d-flex justify-content-end">
                            <DematAccountForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OpenFreeAccount;
