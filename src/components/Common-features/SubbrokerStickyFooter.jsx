import React, { useEffect, useState, useRef } from 'react';
import './Subbrokerstickyfooter.scss';
import Modal from 'react-bootstrap/Modal';
import './Subbrokerpopupform.jsx';
import utils from '../../Services/utils';

function SubbrokerStickyFooter({Subbrokerpopupform,openInfoPopup}) {
  



    return (
        <>
            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                <button className=" primary-orange-btn scroll-top-account openbtn"onClick={Subbrokerpopupform}  >Become a Sub Broker</button>
            </div>
            <section className="stickybottom">
                <div className="container mx-auto">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <h2 className="text">Start Your <span>Sub Broker Franchise</span></h2>
                        </div>
                        <form className="d-flex justify-content-around">
                            
                            <div className="form-group">
                                <button type="button" className="form-btn" onClick={() => { utils.scrollToId('sub-broker-form') }}>Get Started</button>
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

export default SubbrokerStickyFooter;
