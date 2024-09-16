import React, { useState, useEffect } from "react";
import arcticons from '../../assets/images/Corporate-Demat-Account/private-limited-company.svg';
import nounpartnership from '../../assets/images/Corporate-Demat-Account/limited-liability-partnership-(llp).svg';
import LazyLoader from '../Common-features/LazyLoader';
function TypesofCorporate() {


    return (
        <>
            <section className="types-of-corporate why-corporate-account">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 why-corporate-top">
                            <div className="why-corporate-heading text-center">
                                <h2 className="title-secnd">Types of Corporate Demat Accounts</h2>
                                <p className="why-corporate-para1">Corporate Demat accounts are tailored to suit different business structures. For Private Limited/Limited Companies and Limited Liability Partnerships (LLPs), these accounts facilitate seamless trading and management of securities, enhancing operational efficiency.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="types-list-section">
                                    <div className="types-list-itm">
                                        <span>
                                            <LazyLoader src={arcticons} className={'img-fluid'} width={"100"} height={"100"} alt={"Private limited company"} />
                                        </span>
                                        <h4>Private Limited/<br />
                                            Limited Company</h4>
                                    </div>
                                    <div className="types-list-itm">
                                        <span>
                                            <LazyLoader src={nounpartnership} className={'img-fluid'} width={"100"} height={"100"} alt={"limited-liability-partnership-(llp)"} />
                                        </span>
                                        <h4>Limited Liability <br />
                                            Partnership (LLP)</h4>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default TypesofCorporate;