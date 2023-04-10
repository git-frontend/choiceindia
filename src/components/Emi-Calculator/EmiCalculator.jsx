
// import React from 'react';
import React,{useState,useEffect} from "react";
import './emi-calculator.scss';

function EmiCalculator() {
    const [loanAmount, setLoanAmount]=useState(300000);
    const [interestRate, setInterestRate] = useState(11);
    const [tenure, setTenure] = useState(12);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const value="";
    useEffect(()=>{
        const ele = document.querySelector('.buble');
        calculateEmi();
    })
    const handleLoanAmount = (event) => {
        const newLoanAmount = Number(event.target.value);
        setLoanAmount(newLoanAmount);
      }

const handleInterestRateChange = (event) => {
        const newInterestRate = Number(event.target.value);
        setInterestRate(newInterestRate);
      }
   // function to handle changes to the tenure value
  const handleTenureChange = (event) => {
    const newTenure = Number(event.target.value);
    setTenure(newTenure);
  }

  const calculateEmi = () => {
    const r = interestRate / (12 * 100); // monthly interest rate
    const n = tenure; // tenure in months
    const p = loanAmount; // loan amount
    const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setMonthlyEMI(emiValue);

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
                                    {monthlyEMI > 0 &&
                                        <div className='monthly-emi'>
                                            <p>Monthly EMI</p>
                                            <h6><span>{Number(monthlyEMI).toLocaleString('en-IN',{maximumFractionDigits: 0})}</span></h6>
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
                                            <input type="text" placeholder=" " className="form-ctr" maxLength="7" min="50000" max="5000000" value={(loanAmount)} onChange={handleLoanAmount}/>
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
                                                        <span className="bar"><span className="" style={{width :`${loanAmount}%`}}></span></span>
                                                        <input type="range" className="slider"  min="50000" max="5000000" value={(loanAmount)}
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
                                            <input type="text" placeholder="11%" step="1" className="form-ctr" value={interestRate} onChange={handleInterestRateChange}/>
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
                                                        <span className="bar"><span className="" style={{width : `${interestRate}%`}}></span></span>
                                                        <input type="range" className="slider" id="myRange" min="10" max="36" value={interestRate}
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
                                            <input type="text" placeholder="12" className="form-ctr" value={tenure}  onChange={handleTenureChange}/>
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
                                                        <span className="bar"><span className="" style={{width : `${value}%`}}></span></span>
                                                        <input type="range" className="slider" id="myRange" min="12" max="120" value={tenure} onChange={handleTenureChange}/>
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