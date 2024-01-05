import React, { useState, useEffect } from "react";
import arcticons from '../../assets/images/Corporate-Demat-Account/arcticons.svg';
import nounpartnership from '../../assets/images/Corporate-Demat-Account/noun-partnership.svg';
function TypesofCorporate() {


    return (
        <>
            <section className="types-of-corporate why-corporate-account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11">
                            <div className="why-corporate-heading text-center">
                                <h2 className="title-secnd">Types of Corporate Demat Accounts</h2>
                                <p className="why-corporate-para1">Choice offers different Corporate Demat account services for your business's varied needs. Our comprehensive services for corporates include research calls, investment services, wealth management, and portfolio management. To help you build an optimal portfolio.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="types-list-section">
                                {/* <div className="col-md-4"> */}
                                    <div className="types-list-itm">
                                        <span>
                                            <img src={arcticons} alt={""} />
                                        </span>
                                        <h4>Private Limited/<br />
                                            Limited Company</h4>
                                    </div>
                                {/* </div> */}
                                {/* <div className="col-md-4"> */}
                                    <div className="types-list-itm">
                                        <span>
                                            <img src={nounpartnership} alt={""} />
                                        </span>
                                        <h4>Limited Liability <br />
                                            Partnership (LLP)</h4>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
export default TypesofCorporate;