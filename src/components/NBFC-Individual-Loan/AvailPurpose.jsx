
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import avail from '../../assets/images/nbfc-indivial-loan/avail-man.webp';
import Multitasking from '../../assets/images/nbfc-indivial-loan/multitasking.png';
function Features() {

    return (
        <div>


            <section className="avail">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 heading-sec ">
                            <h4 className="title-third mb-5">Who can avail?</h4>
                            <p className="">Self-Employed non-professional (SENP) like businessmen, shop keepers etc. and Self-Employed
                                professional (SEP) like Doctors,Architect, Consultant etc.</p>
                        </div>
                        <div className="col-md-6">
                            <LazyLoader src={avail} alt={"Avail"} className={"img-fluid img"} width={"627"} height={"538"} />
                        </div>
                    </div>
                   
                </div>
            </section>
            <section className="avail">
                <div className="container">
                <div className="row purpose d-flex align-items-center">
                       
                       <div className="col-md-6">
                           <LazyLoader src={Multitasking} alt={"Avail"} className={"img-fluid img"} width={"627"} height={"538"} />
                       </div>
                       <div className="col-md-6 heading-sec ">
                           <h4 className="title-third mb-5">For what purposes?</h4>
                           <p className="">The loan amount can be used to fulfil any needs like purchase of goods & services, asset creation, housing (purchase/renovation), investments in financial
assets, events expenses etc.</p>
                       </div>
                   </div>
                </div>
            </section>

        </div>
    );
}

export default Features;
