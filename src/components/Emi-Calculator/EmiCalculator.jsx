
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
                                       
                                         <div class="slidercontainer">
                                            <div class="slidecontainer">
                                                <div class="middle">
                                                    <div class="slider-container">
                                                        <span class="bar"><span class="fill" style={{width : `${value}%`}}></span></span>
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
                                <div className='rightsec'>
                                   
                                </div>
                            </div>                            
                           
                        </div>
                    </div>
                </div>
            </section>

            {/* <div className="slider-parent">
                <input type="range" min="1" max="100" value={value}
                    onChange={({ target: { value: radius } }) => {
                                onChange(radius);
                            }}
                />
                <div className="buble" width={value}> 
                
                </div>
            </div> */}
        </div>
    );
};
export default EmiCalculator;