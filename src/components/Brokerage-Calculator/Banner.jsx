import React from 'react'
import { useState } from 'react';
function Banner() {


    const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
        <section className='banner-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-md-12'>
                        <div className='banner-ttle text-center'>
                            <h1 className='title-first'>Brokerage Calculator</h1>
                            <p>Use the brokerage calculator to calculate exactly how much you will pay in brokerage and your breakeven.</p>
                        </div>
                    </div>
                </div>
                <div className='field-sec'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='tabs-btn'>
                            <div className='row tabs-list'>
                              <div className='col-xl-6 col-md-6'>
                                <ul className='list_group1'>
                                    <li  className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                        onClick={() => { toggleTab(1); setData(0) }}>Intraday</li>
                                    <li  className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                        onClick={() => { toggleTab(2); setData(1) }}>Delivery</li>
                                </ul>
                              </div>
                           </div>
                            </div>
                          
                            <div className="content-tabs">
                                <div className={toggleState === 1 ? "content active-content" : "content"}>
                                        <div className='form-section'>
                                            <div className='left-sec'>
                                                <div className="row row-sec">
                                                    <div className="col-md-12">
                                                        <input className='form-control input-font search-icon' placeholder='Search for scrips'/>
                                                    </div>
                                                </div>
                                                <div className='mobile-view'>
                                              <div className="row row-sec width-resp">
                                                    <div className="col-xl-7 col-md-12">
                                                        <p className='frm-label'>Quantity</p>
                                                    </div>
                                                    <div className="col-xl-5 col-md-12">
                                                        <div className='form-control2'>
                                                            <input type="text" className='form-control input-form input-1'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row row-sec width-resp">
                                                    <div className="col-xl-7 col-md-12">
                                                    <p className='frm-label'>Buy Price</p>
                                                    </div>
                                                    <div className="col-xl-5 col-md-12">
                                                    <div className='form-control2'>
                                                            <span className="rupees-symble">₹</span>
                                                            <input type="text" className='form-control input-form input-1'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row row-sec width-resp">
                                                    <div className="col-xl-7 col-md-12">
                                                    <p className='frm-label'>Sell Price</p>
                                                    </div>
                                                    <div className="col-xl-5 col-md-12">
                                                        <div className='form-control2'>
                                                            <span className="rupees-symble">₹</span>
                                                            <input type="text" className='form-control input-form input-1'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row row-sec width-resp">
                                                    <div className="col-xl-7 col-md-12">
                                                    <p className='frm-label'>Brokerage Rate</p>
                                                    </div>
                                                    <div className="col-xl-5 col-md-12">
                                                    <div className='form-control2'>
                                                            <input type="text" className='form-control input-form input-3'/>
                                                            <span className="percent-symble">%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                              </div>
                                              <div className='calculate-btn'>
                                                <button type="submit" className="btn-bg btn btn-primary">Calculate Brokerage</button>
                                              </div>
                                            </div>
                                            <div className='right-sec'>
                                                <div className='brokerage-card'>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Turnover</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>1,888.80</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Brokerage</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>0.57</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex brd-bottom'>
                                                        <div className='flex-items'>
                                                            <span className='font-danger'>Net P&L</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='font-danger'>-0.99</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Brokerage</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.57</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>STT/CTT</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.24</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Transaction Charges</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span> 0.06</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Clearing Charges</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.01</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>GST</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.11</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>State Stamp Duty</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.02</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>SEBI Turnover Fees</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span> 0.00</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>TOTAL TAXES & CHARGES</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>0.99</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Net Buy Value</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>994.40</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Net Sell Value</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>994.40</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                {/* <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                    Vehicle Loan
                                </div> */}
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner