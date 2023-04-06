
import React from "react";
import Bannerimage1 from '../../assets/images/investment-banking/about-banner1.webp';
import Bannerimage2 from '../../assets/images/investment-banking/about-banner2.webp';
import LazyLoader from "../Common-features/LazyLoader";
function InvBankingAbout() {

  

    return (
        <div>


            <section className="banking-about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd">About</h2>
                        </div>
                    </div>
                    <div className="row gx-5 mb-5 pb-5 pt-5 align-items-center flex-md-row-reverse">
                        
                        <div className="col-xl-7 col-md-6 d-flex justify-content-end">
                            <div className="rightsec ">
                                <LazyLoader src={Bannerimage1} alt={""} className={"img-fluid"} width={"700"} height={"623"}/>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="bnr-left">
                                <p>Choice Capital Advisors Private Limited is a SEBI Registered Category 1 Merchant banking, a trusted name in the corporate and financial advisory business, offers an entire spectrum of merchant banking services to corporate clients. In line with our principles of client centric and outcome driven approach, we keep our client aspirations at the core and deliver the services through an integrated advisory approach.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-center mt-5 pt-5">
                        
                        <div className="col-xl-7 col-md-6 d-flex justify-content-start">
                            <div className="rightsec ">
                                <LazyLoader src={Bannerimage2} alt={""} className={"img-fluid"} width={"500"} height={"570"}/>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-6">
                            <div className="bnr-left">
                                <p>Our Merchant Banking Division comprises a group of highly experienced professionals with requisite regulatory knowledge, deep industry insights and understanding of market dynamics that provides optimal solutions for our clients in an efficient manner by adhering to uncompromising ethical standards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default InvBankingAbout;
