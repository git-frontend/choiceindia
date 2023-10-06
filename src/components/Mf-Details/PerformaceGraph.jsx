import React from 'react'
import { useState } from "react";

function PerformaceGraph() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };

  return (
    <>
        <div className='card-mn box-shadow graph-show' id='showForm'>
            <div className='row'>
                <div className='col-xl-5 col-md-12'>
                    <div className='mn-graph'>
                        
                    </div>
                    <p className='per-ttl'>Showing Funds Performance since Sep 07, 2020</p>
                </div>
                <div className='col-xl-7 col-md-12'>
                    <div className='holding-details'>
                    <div className="row holding-details-row">
                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                            <div className="holdings-value">
                            <div className="holdings-figure">6.34</div>
                            <div className="details-title">Standard Deviation</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                            <div className="holdings-value">
                            <div className="rupee">₹ <span className="holdings-figure">15,583 Cr</span>
                            </div>
                            <div className="details-title">AUM</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                            <div className="holdings-value">
                            <div className="rupee">
                                <span className="holdings-figure">28.39% </span>
                            </div>
                            <div className="details-title">CAGR -3y</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                            <div className="holdings-value">
                            <div className="holdings-figure">N/A</div>
                            <div className="details-title">Lock In Period</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                            <div className="holdings-value">
                            <div className="holdings-figure">1.72</div>
                            <div className="details-title">Expense Ratio</div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                            <div className="holdings-value">
                            <div className="holdings-figure">NIfty 500 Total Return</div>
                            <div className="details-title">BenchMark</div>
                            </div>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='col-md-12'>
                            <div className='val-exiload'>
                                <h4>Exit Load</h4>
                                <h5>Not Applicable</h5>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default PerformaceGraph