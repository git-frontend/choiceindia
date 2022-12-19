
import React from "react";
import { Link } from "react-router-dom";
function FeaturesVehLoan() {

    return (
        <div>


            <section className="features features-nbfc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className=" title-first text-center mb-5">Features</h2>
                            <ul><li>Our initiative is to help provide loans to all salaried Government/ Private Sector employees, self-employed non-professional (SENP) –businessmen, shopkeepers, etc. Self-employed Professional (SEP) -Doctors, Architect, Consultant, etc. Farmer- For transportation of Agri/Dairy Produce.</li>
                                <li>Convenient for far-flung locations with easy branch reach.</li>
                                <li>Our structured process helps you avail finances up to 80-95% of asset value.</li>
                                <li>Choice Finserv loan tenure can range from 12 months to 60 months. </li>
                                <li>We at Choice Finserv offer our customers rapid and fast-moving financing services.</li>
                                <li>
                                Get an attractive and feasible rate of interest with Easy Monthly Equated installments (EMI).</li>
                                <li>
                                Our Minimum documentation standards lead to a quick and hassle-free process.</li>
                                <li>
                                We respect and understand the needs of your finances and thus believe in the immediate disbursal of your loan.</li>
                                <li>
                                We at Choice Finserve strictly believe in and practice environmental conservation by providing you with a paperless loan procedure.</li>
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

export default FeaturesVehLoan;
