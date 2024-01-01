import React, { useState, useEffect } from "react";

function CorporateCount() {


    return (
        <>
            <section className="count-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-count">
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>25</span></span><small>+</small></h3>
                                    <h5>Year of Experience</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>104</span></span><small>+</small></h3>
                                    <h5>Local Branches</h5>
                                </div>
                                <div className="count-itm">
                                    <h3><span class="hvr-txt"><span>850K</span></span><small>+</small></h3>
                                    <h5>Happy Clients</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CorporateCount;