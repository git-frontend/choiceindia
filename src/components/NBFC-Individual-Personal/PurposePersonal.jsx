
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";


import personalpur from '../../assets/images/NBFCPersonalLoan/personalpur.png';


function PurposePersonal() {

    return (
        <div>


            <section className="veh-bnr-btm" id="showForm3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="veh-bnr-list">
                                <div className="bnr-list-itm">
                                    <div className="bnr-list-left">
                                        <h2 className="title-secnd">For what purposes?</h2>
                                        <p>Personal loans are ideal for covering urgent medical expenses, vacations, weddings, home improvements and more. They can be obtained quickly with minimal paperwork and make your life easier in times of financial need.</p>
                                    </div>
                                    <div className="bnr-list-right">
                                        <LazyLoader src={personalpur} alt={"personal loan requirement"} className={"img-fluid img"} width={"653"} height={"434"} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
          

        </div>
    );
}

export default PurposePersonal;
