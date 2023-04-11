
// import React from 'react';
import React, { useState, useEffect } from "react";
import './emi-calculator.scss';

function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState(300000);
    const [interestRate, setInterestRate] = useState(11);
    const [tenure, setTenure] = useState(12);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [value, setValue] = useState('');
    useEffect(() => {
        const ele = document.querySelector('.buble');
        calculateEmi();
    })
    const calculateEmi = () => {
        const r = interestRate / (12 * 100); // monthly interest rate
        const n = tenure; // tenure in months
        const p = loanAmount; // loan amount
        const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setMonthlyEMI(emiValue);

    }
    // function to handle changes to the Loan Amount
    const handleLoanAmount = (event) => {
        const newLoanAmount = event.target.value;
        setLoanAmount(newLoanAmount);
        
    }
    const handlesliderLoanAmount = (event) => {
        const newLoanAmount = event.target.value;
        setLoanAmount(newLoanAmount);
        if (newLoanAmount <= 5000000 ) {
            setLoanAmount(newLoanAmount);
          }
          else{
            setLoanAmount("5000000");
          }
    }
    // function to handle changes to the Interest Rate
    const handleInterestRateChange = (event) => {
        const newInterestRate = event.target.value;
        setInterestRate(newInterestRate);
    }
    const handlesliderInterestRateChange = (event) => {
        const newInterestRate = event.target.value;
        setInterestRate(newInterestRate);
        if(newInterestRate<=36){
            setInterestRate(newInterestRate)
        }else{
            setInterestRate('36')
        }
    }

    // function to handle changes to the tenure value
    const handleTenureChange = (event) => {
        const newTenure = event.target.value;
        setTenure(newTenure);
    }
    const handlesliderTenureChange = (event) => {
        const newTenure = event.target.value;
        setTenure(newTenure);
        if(newTenure<=120){
            setTenure(newTenure)
        }else{
            setTenure('120')
        }
    }
    

    return (
        <>
            <section className="emi-calculator">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='emi-flex'>
                                <div className='rightsec'>
                                    <div className="sticy">
                                        {monthlyEMI !== 0 &&
                                            <div className='monthly-emi'>
                                                <p>Monthly EMI</p>
                                                <h6><span>{Number(monthlyEMI).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span></h6>
                                            </div>
                                        }
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
                                            <input type="number" placeholder="0" className="form-ctr" maxLength="7" min="50000" max="5000000" defaultValue="50000" value={loanAmount} onChange={handlesliderLoanAmount}/>
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
                                                    <span className="bar"><span className="" style={{ width: `${loanAmount}%` }}></span></span>
                                                    <input type="range" className="slider" step="1000" min="50000" max="5000000" value={(loanAmount) }
                                                        onChange={handleLoanAmount}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Interest Rate (per annum)</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="text" placeholder="0" step="1" className="form-ctr"  min="10" max="36" value={interestRate} onChange={handlesliderInterestRateChange} />
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
                                                    <span className="bar"><span className="" style={{ width: `${interestRate}%` }}></span></span>
                                                    <input type="range" className="slider" id="myRange" step="0.5" min="10" max="36" value={interestRate}
                                                        onChange={handleInterestRateChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <p>Tenure (in months)</p>
                                        <div className='value-card'>
                                            <div></div>
                                            <input type="text" placeholder="12" className="form-ctr" value={tenure} min="12" max="120" onChange={handlesliderTenureChange} />
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
                                                    <span className="bar"><span className="" style={{ width: `${value}%` }}></span></span>
                                                    <input type="range" className="slider" id="myRange" min="12" max="120" value={tenure} onChange={handleTenureChange} />
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