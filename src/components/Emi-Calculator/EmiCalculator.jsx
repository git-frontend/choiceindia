
import React from 'react';
import './emi-calculator.scss';


function EmiCalculator() {
    
    return (
        <div>
            <section className="emi-calculator">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='emi-flex'>
                                <div className='leftsec'>
                                    <div className='heading-sec'>
                                        <h1 className="title-first topmr">EMI Calculator</h1>
                                        <p className='para'>Check out our calculator to calculate the amount of EMI for different loans and tenures</p>
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Loan Amount</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="text" value="3,00,000" className="form-ctr"/>
                                        </div>
                                        <div class="range-figures">
                                            <div className='range-item'>
                                            <span>₹  50,000</span>
                                            </div>
                                            <div className='range-item'>
                                            <span>₹ 50,00,000</span>
                                            </div>
                                        </div>  
                                        {/* <div className='progress-slider'>
                                            <div className='slider-range'></div>
                                            <span className='slider-handle'></span>
                                        </div> */}
                                         <div class="slidercontainer">
                                            <input class="slider" type="range" min="0" max="100"/>
                                        </div>
                                </div>
                                </div>
                                <div className='rightsec'>
                                   
                                </div>
                            </div>                            
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default EmiCalculator;