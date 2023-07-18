import React, { useState, useEffect } from "react";
function Banner() {


    const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(10);
  const [tenure, setTenure] = useState(12);
  const [monthlyEMI, setMonthlyEMI] = useState(0);
  const [errorMessages, setErrorMessages] = useState({loanAmount: '',interestRate: '',tenure: ''});
  useEffect(() => {
      calculateEmi();
  },[loanAmount,interestRate,tenure])

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
      // if (!/^\d{1,2}(\.\d)?|3[0-6](\.\d)?$/.test(interestRate)) {
      //     errors.interestRate = 'Please Enter Valid Interest Rate';
      //   }
    
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
      background: `linear-gradient(to right, #004393 ${fillPercentageloan}%, #221f201a ${fillPercentageloan}%)`,
    };
    const fillPercentageint = ((interestRate - 10) / 26) * 100 + 1; // 100000 is the maximum value of the range input
    const fillStyle1 = {
      background: `linear-gradient(to right, #004393 ${fillPercentageint}%, #221f201a ${fillPercentageint}%)`,
    };
    const fillPercentageteenure = ((tenure-12) / 108) * 100+1; // 100000 is the maximum value of the range input
    const fillStyle2= {
      background: `linear-gradient(to right, #004393 ${fillPercentageteenure}%, #221f201a ${fillPercentageteenure}%)`,
    };

  return (
    <>
        <section className='banner-section banner-sip'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-md-12'>
                        <div className='banner-ttle text-center'>
                            <h1 className='title-first'>SIP Calculator</h1>
                            <p>Let’s calculate your SIP returns with the help of a SIP calculator. Enter your SIP amount and get your maturity amount for the desired time period.</p>
                        </div>
                    </div>
                </div>
                <div className='field-sec'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='tabs-btn'>
                            <div className='row'>
                              <div className='col-xl-4 col-md-6'>
                                <ul className='list_group1'>
                                        <li  className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(1); setData(0) }}>SIP</li>
                                        <li  className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(2); setData(1) }}>Lumpsum</li>
                                </ul>
                              </div>
                           </div>
                            </div>
                          
                            <div className="content-tabs">
                                <div className={toggleState === 1 ? "content active-content" : "content"}>
                                    <div className='form-section'>
                                    <div className='leftsec'>
                                    <div className='cal-opt mrg-top'>
                                        {/* <p>Loan Amount</p> */}
                                        <div className='value-card'>
                                            <div><p>Monthly Investment</p></div>
                                            <div className="input-sec">
                                                <span className="rupees-symble">₹</span>
                                                <input type="tel"  className="form-ctr input-1" maxLength={7}  min="50000" max="5000000"  value={loanAmount} onChange={handleLoanAmountChange}/>
                                            </div>
                                        </div>
                                        <div className="slidecontainer">
                                            <div className="middle">
                                                <div className="slider-container">
                                                    {/* <span className="bar"><span style={fillStyle}></span></span> */}
                                                    <input type="range" className="slider" step="1000" min="50000" max="5000000" value={loanAmount} 
                                                        onChange={handleLoanAmountChange} style={fillStyle}
                                                    />
                                                    {errorMessages.loanAmount && <span className="text-danger">{errorMessages.loanAmount}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        {/* <p>Interest Rate (per annum)</p> */}
                                        <div className='value-card'>
                                            <div><p>Expected Return Rate (p.a.)</p></div>
                                            <div className="input-sec">
                                                <input type="number" className="form-ctr input-2" min="10" max="36"   value={interestRate}  
                                                onChange={handleInterestRateChange}/>
                                                <span className="percent-symble">%</span>
                                            </div>
                                        </div>
                                        <div className="slidecontainer">
                                            <div className="middle">
                                                <div className="slider-container">
                                                    {/* <span className="bar"><span className="" style={{ width: `${interestRate}%` }}></span></span> */}
                                                    <input type="range" className="slider" id="myRange"  min="10" max="36" value={interestRate} 
                                                        onChange={handleInterestRateChange}  style={fillStyle1}
                                                    />
                                                    {errorMessages.interestRate && <span className="text-danger">{errorMessages.interestRate}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cal-opt'>
                                        {/* <p>Tenure (in months)</p> */}
                                        <div className='value-card'>
                                            <div><p>Investment Period (years)</p></div>
                                            <div className="input-sec">
                                                <input type="tel"  className="form-ctr input-3" value={tenure} maxLength={3} min="12" max="120"  onChange={handleLoanTenureChange} />
                                                <span className="years-symble">Yr</span>
                                            </div>
                                        </div>
                                        <div className="slidecontainer">
                                            <div className="middle">
                                                <div className="slider-container">
                                                    {/* <span className="bar"><span className="" style={{ width: `(${value} - 12) / (120 - 12) * 100` }}></span></span> */}
                                                    <input type="range" className="slider" id="myRange" min="12" max="120" value={tenure} onChange={handleLoanTenureChange} style={fillStyle2} />
                                                    {errorMessages.tenure && <span className="text-danger">{errorMessages.tenure}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                               
                                             
                                           
                                            </div>
                                            <div className='rightsec'>
                                                <div className='brokerage-card'>
                                                   <div className="card-items">
                                                        <div className="left-itms">
                                                            <div className="current-val">
                                                                <div className="dots dots-primary"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Invested Amount</p>
                                                                    <p className="scrip-val">₹30,00,000</p>
                                                                </div>
                                                            </div>
                                                            <div className="current-val">
                                                                <div className="dots dots-green"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Est. Returns @15%</p>
                                                                    <p className="scrip-val">₹28,08,477</p>
                                                                </div>
                                                            </div>
                                                            <div className="current-val total-val">
                                                                <div className="dots"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Total Value</p>
                                                                    <p className="scrip-val">₹ 58,08,477</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="right-itms">

                                                        </div>
                                                   </div>
                                                   <div className="card-footer">
                                                        <button type="submit" className="btn-bg">Invest Now</button>
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