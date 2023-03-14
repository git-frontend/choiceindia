import React, { useEffect, useState, useRef } from 'react';
import '../../components/Common-features/SubbrokerStickyFooter';
import Modal from 'react-bootstrap/Modal';

import utils from '../../Services/utils';

function MutualFundStickyFooter() {
  



    return (
        <>
            {/* <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                <button className=" primary-orange-btn scroll-top-account openbtn" onClick={SubbrokerpopupForm}  >Become a Sub Broker</button>
            </div> */}
            <section className="stickybottom">
                <div className="container mx-auto">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <h2 className="text">Become <span> a Mutual Fund Distributor</span></h2>
                        </div>
                        <form className="d-flex justify-content-around">
                            
                            <div className="form-group">
                                <button type="button" className="form-btn ml-3" onClick={() => { utils.scrollToId('sub-broker-form') }}>Apply Now</button>
                                {/* <div>
                                    <small id="API_error" className="errormsg text-danger">error msg</small>
                                    </div> */}
                            </div>
                        </form>

                    </div>
                </div>

            </section>
            
        </>
    )
}

export default MutualFundStickyFooter;
