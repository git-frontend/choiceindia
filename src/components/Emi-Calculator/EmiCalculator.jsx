
// import React from 'react';
import React, { useState, useEffect } from "react";
import './emi-calculator.scss';

function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [interestRate, setInterestRate] = useState(10);
    const [tenure, setTenure] = useState(12);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [value, setValue] = useState('');
    const [intvalue, setIntvalue] = useState('');
    const [tenurevalue, settenurevalue] = useState('');
    useEffect(() => {
        calculateEmi();
    })
    // Calculate EMi 
    const calculateEmi = () => {
        if ((loanAmount >=50000 && loanAmount <= 5000000) && (interestRate>=10 && interestRate <= 36) && (tenure >= 12 && tenure <= 120)) {
        const r = interestRate / (12 * 100); // monthly interest rate
        const n = tenure; // tenure in months
        const p = loanAmount; // loan amount
        const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyEMI(emiValue);
        setValue('')
        setIntvalue('')
        settenurevalue('')
    }
        else{
            setMonthlyEMI(0);
            setValue("Please Enter Valid Amount") 
            setIntvalue("Please Enter Valid Interest Rate")
            settenurevalue("Please Enter Valid Tenure In month")
        }
        

    }
    // TO handle Loan Amount
    const handleLoanAmountChange = (event) => {
        if(event.target.value == ""){
            setLoanAmount(50000)
        }else{
            setLoanAmount(event.target.value)
        }
        
      };
      // TO handle Interest Rate
      const handleInterestRateChange = (event) => {
        if(event.target.value == ""){
            setInterestRate(10)
        }else{
            setInterestRate(event.target.value)
        }
      };
      // TO handle Tenure 
      const handleLoanTenureChange = (event) => {
          if(event.target.value == ""){
            setTenure(12)
        }else{
            setTenure(event.target.value)
        }
      };
      const fillPercentageloan = (loanAmount / 5000000) * 100; 
      const fillStyle = {
        background: `linear-gradient(to right, #FFF ${fillPercentageloan}%, #F5FFE9 ${fillPercentageloan}%)`,
      };
      const fillPercentageint = ((interestRate - 10) / 26) * 100 + 1; // 100000 is the maximum value of the range input
      const fillStyle1 = {
        background: `linear-gradient(to right, #FFF ${fillPercentageint}%, #F5FFE9 ${fillPercentageint}%)`,
      };
      const fillPercentageteenure = ((tenure-12) / 108) * 100+1; // 100000 is the maximum value of the range input
      const fillStyle2= {
        background: `linear-gradient(to right, #FFF ${fillPercentageteenure}%, #F5FFE9 ${fillPercentageteenure}%)`,
      };
    return (
        <>
            <section className="emi-calculator">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='emi-flex'>
                                <div className='rightsec'>
                                    <div className="sticy">
                                            <div className='monthly-emi'>
                                                <p>Monthly EMI</p>
                                                <h6><span>{Number(monthlyEMI).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span></h6>
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
                                            <input type="tel"  className="form-ctr"  min="50000" max="5000000"  value={loanAmount} onChange={handleLoanAmountChange}/>
                                        </div>
                                        <div className="range-figures">
                                            <div className='range-item'>
                                                <span className="sm-tln">₹ 50,000</span>
                                            </div>
                                            <div className='range-item'>
                                                <span className="sm-tln">₹ 50,00,000</span>
                                            </div>
                                        </div>
                                        <div className="slidecontainer">
                                            <div className="middle">
                                                <div className="slider-container">
                                                    {/* <span className="bar"><span style={fillStyle}></span></span> */}
                                                    <input type="range" className="slider" step="1000" min="50000" max="5000000" value={loanAmount}
                                                        onChange={handleLoanAmountChange} style={fillStyle}
                                                    />
                                                    <span className="text-danger">{value}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Interest Rate (per annum)</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="number"  className="form-ctr"  min="10" max="36" value={interestRate} onChange={handleInterestRateChange} />
                                            <span>%</span>
                                        </div>
                                        <div className="range-figures">
                                            <div className='range-item'>
                                                <span className="sm-tln">10%</span>
                                            </div>
                                            <div className='range-item'>
                                                <span className="sm-tln">36%</span>
                                            </div>
                                        </div>
                                        <div className="slidecontainer">
                                            <div className="middle">
                                                <div className="slider-container">
                                                    {/* <span className="bar"><span className="" style={{ width: `${interestRate}%` }}></span></span> */}
                                                    <input type="range" className="slider" id="myRange" min="10" max="36" value={interestRate}
                                                        onChange={handleInterestRateChange} style={fillStyle1}
                                                    />
                                                    <span className="text-danger">{intvalue}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Tenure (in months)</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="number"  className="form-ctr" value={tenure} min="12" max="120" onChange={handleLoanTenureChange} />
                                        </div>
                                        <div className="range-figures">
                                            <div className='range-item'>
                                                <span className="sm-tln">12 months</span>
                                            </div>
                                            <div className='range-item'>
                                                <span className="sm-tln">120 months</span>
                                            </div>
                                        </div>
                                        <div className="slidecontainer">
                                            <div className="middle">
                                                <div className="slider-container">
                                                    {/* <span className="bar"><span className="" style={{ width: `(${value} - 12) / (120 - 12) * 100` }}></span></span> */}
                                                    <input type="range" className="slider" id="myRange" min="12" max="120" value={tenure} onChange={handleLoanTenureChange} style={fillStyle2} />
                                                    <span className="text-danger">{tenurevalue}</span>
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
        </>
    );
};
export default EmiCalculator;