
import React from "react";
import img1 from '../../assets/images/nbfc-loans/loan-repayment-reminders.svg';
import img2 from '../../assets/images/nbfc-loans/easy-loan-repayment-options.svg';
import img3 from '../../assets/images/nbfc-loans/check-soa.svg';
import img4 from '../../assets/images/nbfc-loans/easy-documentation.svg';
import img5 from '../../assets/images/nbfc-loans/fast-loan-disbursal.svg';
import img6 from '../../assets/images/nbfc-loans/multipe-platform-access.svg';
import LazyLoader from '../Common-features/LazyLoader';


function ApplicationFeatures() {



    return (
        <div>
            <section className="application-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd">Application <br /> Features</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="loans-features-list">
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img1} alt={"Loan Repayment Reminders"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Re-payment <br /> Reminders</h3>
                                    <p>Our app features an option of re-payment reminders so that you never miss out on payments</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img2} alt={"Easy Loan Repayment Options"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Easy <br/>Repayment Options</h3>
                                    <p>Our app features an option of re-payment reminders so that you never miss out on payments</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img3} alt={"Check SOA"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Check <br/> SOA</h3>
                                    <p>Our app features an option of re-payment reminders so that you never miss out on payments</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img4} alt={"Easy Documentation"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Easy <br/>Documentation</h3>
                                    <p>Our app features an option of re-payment reminders so that you never miss out on payments</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img5} alt={"Fast Loan Disbursal"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Fast <br/>Loan Disbursal</h3>
                                    <p>Our app features an option of re-payment reminders so that you never miss out on payments</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img6} alt={"Multiple Platform Access"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Multiple <br/>Platform Access</h3>
                                    <p>Our app features an option of re-payment reminders so that you never miss out on payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ApplicationFeatures;
