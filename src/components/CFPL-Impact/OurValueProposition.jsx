
import React from "react";
import img1 from '../../assets/images/cfpl-impact/serving-the-underserved.svg';
import img2 from '../../assets/images/cfpl-impact/minimum-documentation.svg';
import img3 from '../../assets/images/cfpl-impact/machine-based-credit-underwriting-payments.svg';
import img4 from '../../assets/images/cfpl-impact/digital-payments.svg';
import img5 from '../../assets/images/cfpl-impact/ensuring-transparency.svg';
import img6 from '../../assets/images/cfpl-impact/end-to-end-digital-process.svg';
import LazyLoader from '../Common-features/LazyLoader';


function OurValueProposition() {



    return (
        <div>
            <section className="value-propositon">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd">Our Value <br /> Proposition</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="loans-features-list">
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img1} alt={"Serving The Underserved"} className={"img-fluid"} width={"50"} height={"50"} />
                                    </span>
                                    <h3>Serving <br />The Underserved</h3>
                                    <p>Our priority is to serve those parts of the society which haven't received financial help</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img2} alt={"Minimum Documentation"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Minimum <br/>Documentation</h3>
                                    <p>We offer loans through an easy process involving minimal documentation</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img3} alt={"Machine Based Credit Underwriting & Payments"} className={"img-fluid"} width={"40"} height={"40"} />
                                    </span>
                                    <h3>Machine Based Credit <br/>Underwriting & Payments</h3>
                                    <p>We offer modern automated systems for credit underwriting and payments</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img4} alt={"Digital Payments"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Digital <br/>Payments</h3>
                                    <p>Hassle free payment experience for our customers through digital channels</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img5} alt={"Ensuring Transparency"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>Ensuring <br/>Transparency</h3>
                                    <p>Our processes from loan application to loan disbursal are optimized and transparent</p>
                                </div>
                                <div className="loans-feat-itm">
                                    <span>
                                        <LazyLoader src={img6} alt={"End to End Digital Process"} className={"img-fluid"} width={"60"} height={"60"} />
                                    </span>
                                    <h3>End to End <br/>Digital Process</h3>
                                    <p>Apply for loans, keep track of your applications and receive loan in your account digitally</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OurValueProposition;

