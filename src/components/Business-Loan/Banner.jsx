
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import banner from '../../assets/images/business-loan/business-loan.webp';


function ChannelFinanceBanner() {
    
    return (
        <div>
            <section className="inv-fin-banner nbfc-business-loan">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-6">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl">Business Loan</h1>
                                <p>We at Choice Finserv understand and value the business needs and requirement of our customers.</p>
                                <p>We offer Business Loans to meet capital requirement and give you the financial push to make your business vision come true.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end bus-loan-img d-none d-sm-block">
                            <LazyLoader src={banner} alt={"Apply for Business Loan"} className={"img-fluid img-banner"} width={"550"} height={"378"} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChannelFinanceBanner;
