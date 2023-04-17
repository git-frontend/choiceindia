
import React from "react";
import { Link } from "react-router-dom";
function Features() {

    return (
        <div>


            <section className="features features-nbfc">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <h2 className=" title-first text-center mb-5">Features</h2>
                            <ul>
                                <li>We at Choice Finserv value the needs and requirements of our customers and hence offer business loans ranging between 50K - 25 Lakh.</li>
                                <li>Wherever you are Choice Finserv is there to serve and support your dreams, we provide loans to all MSMEs even in the far-flung locations of “Incredible India”.</li>
                                <li>Get your business financed just by sitting in your home/workplace/ garden from anywhere with our rapid and time-saving loan procedure.</li>
                                <li>Choice Finserv not only offers you efficient and easy processing of your loan but also provides instant loan approvals.</li>
                                <li>Apply for your business loan stress-free with our minimum or zero documentation requirements.</li>
                                <li>We at Choice Finserv help promote digital loan processing for efficient functioning and to boost transparency for our customers.</li>
                            </ul>
                        </div>
                        <div className="col-md-12 text-center"> 
                            <Link to="/" className=" text-center cursor-pointer" >
                                <span className="btn-bg">Apply Now</span>
                            </Link><br/>
                            <Link to="https://cmsapi.choiceindia.com/assets/49dfa23f-9910-4c78-ae63-57f49e5af157" className="soc-links" target="_blank">To view our Schedule of Charges, click here!</Link>
                        </div>

                    </div>

                </div>
            </section>


        </div>
    );
}

export default Features;
