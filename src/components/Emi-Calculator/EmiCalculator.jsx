
// import React from 'react';
import React,{useState,useEffect} from "react";
import './emi-calculator.scss';


function EmiCalculator() {
    const [value,onChange]=useState(0);
    useEffect(()=>{
        const ele = document.querySelector('.buble');
    //   if (ele) {
    //     ele.style.left = `${Number(value / 4)}px`;
    //   }
    })
    return (
        <div>
            <section className="emi-calculator">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='emi-flex'>
                                <div className='rightsec'>
                                    <div className="sticy">
                                        <div className='monthly-emi'>
                                            <p>Monthly EMI</p>
                                            <h6>26,514</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='leftsec'>
                                    <div className='heading-sec'>
                                        <h1 className="title-first topmr">EMI Calculator</h1>
                                        <p className='para'>Check out our calculator to calculate the amount of EMI for different loans and tenures</p>
                                    </div>
                                    <div className='cal-opt mrg-top'>
                                        <p>Loan Amount</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="text" placeholder="3,00,000" className="form-ctr"/>
                                        </div>
                                        <div className="range-figures">
                                            <div className='range-item'>
                                            <span>₹  50,000</span>
                                            </div>
                                            <div className='range-item'>
                                            <span>₹ 50,00,000</span>
                                            </div>
                                        </div>  
                                            <div className="slidecontainer">
                                                <div className="middle">
                                                    <div class="slider-container">
                                                        <span className="bar"><span className="fill" style={{width : `${value}%`}}></span></span>
                                                        <input type="range" className="slider" id="myRange1" min="0" max="100" value={value}
                                                    onChange={({ target: { value: radius } }) => {
                                                                onChange(radius);
                                                            }}
                                                />
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Interest Rate (per annum)</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="text" placeholder="11%" className="form-ctr"/>
                                        </div>
                                        <div className="range-figures">
                                            <div className='range-item'>
                                            <span>10%</span>
                                            </div>
                                            <div className='range-item'>
                                            <span>36%</span>
                                            </div>
                                        </div>
                                            <div className="slidecontainer">
                                                <div className="middle">
                                                    <div className="slider-container">
                                                        <span className="bar"><span className="fill" style={{width : `${value}%`}}></span></span>
                                                        <input type="range" className="slider" id="myRange" min="0" max="100" value={value}
                                                    onChange={({ target: { value: radius } }) => {
                                                                onChange(radius);
                                                            }}
                                                />
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Tenure (in months)</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="text" placeholder="12" className="form-ctr"/>
                                        </div>
                                        <div className="range-figures">
                                            <div className='range-item'>
                                            <span>12 months</span>
                                            </div>
                                            <div className='range-item'>
                                            <span>120 months</span>
                                            </div>
                                        </div>
                                            <div className="slidecontainer">
                                                <div className="middle">
                                                    <div className="slider-container">
                                                        <span className="bar"><span className="fill" style={{width : `${value}%`}}></span></span>
                                                        <input type="range" className="slider" id="myRange" min="0" max="100" value={value}
                                                    onChange={({ target: { value: radius } }) => {
                                                                onChange(radius);
                                                            }}
                                                />
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
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