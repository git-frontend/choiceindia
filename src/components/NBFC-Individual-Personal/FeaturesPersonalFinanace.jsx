
import React from "react";
import { Link } from "react-router-dom";
function FeaturesPersonalFinanace() {

    return (
        <div>


            <section className="features features-nbfc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className=" title-first text-center mb-5">Features</h2>
                            <ul>
                                <li>Unsecured: The loan offered is free of any collateral requirement</li>
                                <li>Fixed interest rate: Offering of personal loan comes with a fixed interest rate, allowing for borrower to budget and plan their expenses</li>
                                <li>Fixed repayment term: The loan can be availed for a period starting at 6 months upto 5 years</li>
                                <li>Loan Amount: The loan amount starts from Rs50,000 to Rs50 lakh</li>
                                <li>Fees: Personal loan is offered at the attractive interest rate and low processing fees</li>
                                <li>Quick Disbursal: The loan application is processed digitally and disbursal is made to customers quickly</li>
                               
                            </ul>
                        </div>
                        <div className="col-md-12 text-center"> <Link to="/" className=" text-center cursor-pointer" >
                            <span className="btn-bg">Apply Now</span>
                        </Link></div>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default FeaturesPersonalFinanace;
