import React, { useState, useEffect } from "react";
import './emi-calculator.scss';
import meta_tags from '../../Data/MetaTags';

function EmiCalculator() {
    const [loanAmount, setLoanAmount] = useState(50000);
    const [interestRate, setInterestRate] = useState(10);
    const [tenure, setTenure] = useState(12);
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [errorMessages, setErrorMessages] = useState({loanAmount: '',interestRate: '',tenure: ''});
    useEffect(() => {
        calculateEmi();
    }, [loanAmount, interestRate, tenure])
    
    useEffect(() => {
    document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
    },[])
        
    // Calculate EMi 
    const calculateEmi = () => {
        const errors = {
          loanAmount: '',
          interestRate: '',
          tenure: ''
        };
        
        if (loanAmount < 50000 || loanAmount > 5000000) {
          errors.loanAmount = 'Please Enter Valid Amount';
        }
      
        if (interestRate < 10 || interestRate > 36) {
          errors.interestRate = 'Please Enter Valid Interest Rate';
        }
        
      
        if (tenure < 12 || tenure > 120) {
          errors.tenure = 'Please Enter Valid Tenure In month';
        }
      
        if (errors.loanAmount || errors.interestRate || errors.tenure) {
          setMonthlyEMI(0);
          setErrorMessages(errors);
        } else {
          const r = interestRate / (12 * 100); // monthly interest rate
          const n = tenure; // tenure in months
          const p = loanAmount; // loan amount
          const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          setMonthlyEMI(emiValue);
          setErrorMessages({
            loanAmount: '',
            interestRate: '',
            tenure: ''
          });
        }
      }
    // TO handle Loan Amount
    const handleLoanAmountChange = (event) => {
        
            setLoanAmount((event.target.value).replace(/\D/g, ""))
       
      };

    const handleInterestRateChange = (event) => {
        const value = event.target.value;
        const regex = /^[1-9][0-9]?(\.\d{1,2})?$|^0\.\d{1,2}$/;
        if (regex.test(value)) {
          setInterestRate(event.target.value);
        }
        else{
            setInterestRate("");
        }
      };
      // TO handle Tenure 
      const handleLoanTenureChange = (event) => {
        
            setTenure((event.target.value).replace(/\D/g, ""))
      
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
                                        <div className='value-card'>
                                            <div><p>Loan Amount</p></div>
                                            <input type="tel"  className="form-ctr" maxLength={7}  min="50000" max="5000000"  value={loanAmount} onChange={handleLoanAmountChange}/>
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
                                                    <input type="range" className="slider" step="1000" min="50000" max="5000000" value={loanAmount} 
                                                        onChange={handleLoanAmountChange} style={fillStyle}
                                                    />
                                                    {errorMessages.loanAmount && <span className="text-danger">{errorMessages.loanAmount}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <div className='value-card'>
                                            <div><p>Interest Rate (per annum)</p></div>
                                            <div><input type="number" className="form-ctr" min="10" max="36"   value={interestRate}  
                                            onChange={handleInterestRateChange}/>
                                            <span>%</span>
                                            </div>
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
                                                    <input type="range" className="slider" id="myRange"  min="10" max="36" value={interestRate} 
                                                        onChange={handleInterestRateChange}  style={fillStyle1}
                                                    />
                                                    {errorMessages.interestRate && <span className="text-danger">{errorMessages.interestRate}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        <div className='value-card'>
                                            <div><p>Tenure (in months)</p></div>
                                            <input type="tel"  className="form-ctr" value={tenure} maxLength={3} min="12" max="120"  onChange={handleLoanTenureChange} />
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
                                                    <input type="range" className="slider" id="myRange" min="12" max="120" value={tenure} onChange={handleLoanTenureChange} style={fillStyle2} />
                                                    {errorMessages.tenure && <span className="text-danger">{errorMessages.tenure}</span>}
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