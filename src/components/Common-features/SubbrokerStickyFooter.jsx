import React, { useEffect, useState, useRef } from 'react';
import './Subbrokerstickyfooter.scss';
import Modal from 'react-bootstrap/Modal';
import './Subbrokerpopupform.jsx';

function SubbrokerStickyFooter({Subbrokerpopupform}) {
  
    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 160;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }


    return (
        <>
            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                <button className=" primary-orange-btn scroll-top-account openbtn"  >Become a Sub Broker</button>
            </div>
            <section className="stickybottom">
                <div className="container mx-auto">
                    <div className="d-flex justify-content-center align-items-center">
                        <div>
                            <h2 className="text">Start Your <span>Sub Broker Franchise</span></h2>
                        </div>
                        <form className="d-flex justify-content-around">
                            
                            <div className="form-group">
                                <button type="submit" className="form-btn" onClick={() => { utils.scrollToId('sub-broker-form') }}>Get Started</button>
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
