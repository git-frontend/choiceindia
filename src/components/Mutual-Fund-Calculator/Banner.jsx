import React, { useState, useEffect } from "react";
import { Doughnut, Arc, Tooltip } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js/auto';
Chart.register(ArcElement)
function Banner() {


    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const [monthlyinvest, setMonthlyinvest] = useState(25000);
    const [interestRate, setInterestRate] = useState(15);
    const [tenure, setTenure] = useState(15);
    const [errorMessages, setErrorMessages] = useState({ monthlyinvest: '', interestRate: '', tenure: '' });
    const [monthlyEMI, setMonthlyEMI] = useState(0);
    const [estReturns, setEstReturns] = useState(0);
    const [totalvalue, setTotalvalue] = useState(0);
    const [lumpsumtotalvalue, setLumpsumtotalvalue] = useState(0);
    const [lumpsumamount, setLumpsumamount] = useState(0);
    const [lumpsumestReturns, setLumpsumestReturns] = useState(0);


    useEffect(() => {
        calculateEmi();
        calculateLumpsumReturns();
    }, [monthlyinvest, interestRate, tenure])

    // Calculate EMi 
    const calculateEmi = () => {
        const errors = {
            monthlyinvest: '',
            interestRate: '',
            tenure: ''
        };

        if (monthlyinvest < 500 || monthlyinvest > 500000) {
            errors.monthlyinvest = 'Please Enter Valid Amount';

        }

        if (interestRate < 5 || interestRate > 25) {
            errors.interestRate = 'Please Enter Valid Interest Rate';
        }
       

        if (tenure < 3 || tenure > 40) {
            errors.tenure = 'Please Enter Valid Tenure In years';
        }

        if (errors.monthlyinvest || errors.interestRate || errors.tenure) {
            
            setErrorMessages(errors);
        } else {
            if (!isNaN(monthlyinvest)) { 
                const rate = interestRate / 100;
                const monthlyRate = rate / 12;
                const totalMonths = tenure * 12;
                const futureValue = monthlyinvest * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
                setTotalvalue(futureValue.toFixed(2));
                const investamount = monthlyinvest * totalMonths;
                setMonthlyEMI(investamount);
                const expectreturn = futureValue - investamount;
                setEstReturns(expectreturn);
            }
        }
    }
    const calculateLumpsumReturns = () => {
        const errors = {
            monthlyinvest: '',
            interestRate: '',
            tenure: ''
        };

        if (monthlyinvest < 500 || monthlyinvest > 500000) {
            errors.monthlyinvest = 'Please Enter Valid Amount';
        }

        if (interestRate < 5 || interestRate > 25) {
            errors.interestRate = 'Please Enter Valid Interest Rate';
        }

        if (tenure < 1 || tenure > 40) {
            errors.tenure = 'Please Enter Valid Tenure In years';
        }

        if (errors.monthlyinvest || errors.interestRate || errors.tenure) {
            setLumpsumtotalvalue(0);
            setLumpsumamount(0);
            setLumpsumestReturns(0);
            setErrorMessages(errors);
        } else {
            const rate = interestRate / 100;
            const totalYears = tenure;
            const futureValue = monthlyinvest * (Math.pow(1 + rate, totalYears));
            setLumpsumtotalvalue(futureValue.toFixed(2));
            setLumpsumamount(monthlyinvest);
            const expectReturn = futureValue - monthlyinvest;
            setLumpsumestReturns(expectReturn);
            setErrorMessages({
                monthlyinvest: '',
                interestRate: '',
                tenure: ''
            });
        }
    };

   
    const HandleMonthlyInvest = (event) => {
        const value = event.target.value;
        if (value === "" || /^[0-9]+$/.test(value)) {
            setMonthlyinvest(value);
        }
    };
    const handleInterestRateChange = (event) => {
        const value = event.target.value;
        const regex = /^[1-9][0-9]?(\.\d{1,2})?$|^0\.\d{1,2}$/;
        if (regex.test(value)) {
            setInterestRate(event.target.value);
        }
        else {
            setInterestRate("");
        }
    };
    // TO handle Tenure 
    const handleLoanTenureChange = (event) => {

        setTenure((event.target.value).replace(/\D/g, ""))

    };

    const fillPercentageloan = ((monthlyinvest - 500) / (500000 - 500)) * 100;
    const fillStyle = {
        background: `linear-gradient(to right, #004393 ${fillPercentageloan}%, #221f201a ${fillPercentageloan}%)`,
    };

    const fillPercentageint = ((interestRate - 5) / 20) * 100;
    const fillStyle1 = {
        background: `linear-gradient(to right, #004393 ${fillPercentageint}%, #221f201a ${fillPercentageint}%)`,
    };
    const fillPercentageteenure = ((tenure - 3) / 37) * 100;
    const fillStyle2 = {
        background: `linear-gradient(to right, #004393 ${fillPercentageteenure}%, #221f201a ${fillPercentageteenure}%)`,
    };

    const datas = {
        labels: ['Invested Amount', `Est. Returns ${interestRate}%`],
        datasets: [
            {
                data: [ monthlyEMI, estReturns],
                backgroundColor: [
                    '#5085c5',
                    '#50ae8c',
                ],
                hoverBackgroundColor: ['#004393', '#00AE6F'], // Hover colors

            },
        ],
    };
    const ldatas = {
        labels: ['Invested Amount', `Est. Returns ${interestRate}%`],
        datasets: [
            {
                data: [ lumpsumamount, lumpsumestReturns],
                backgroundColor: [
                    '#5085c5',
                    '#50ae8c',
                ],
                hoverBackgroundColor: ['#004393', '#00AE6F'], // Hover colors

            },
        ],
    };
const charteroption={
    plugins: {
        legend: {
            display: false, 
            position: 'right',
        },
        tooltip: {
            enabled: true, 
            backgroundColor: 'rgba(255, 255, 255, 0.49)',
            titleFont: {
                size: 14, 
                weight:'normal'
              },
              bodyColor:  'rgba(0, 0, 0, 1)',
              borderColor: 'rgba(255, 255, 255, 0.49)',
              borderWidth: 1,
              titleColor: 'rgba(0, 0, 0, 1)',
              borderColor:'#786c6b',
              bodyFont: {
                size: 16, 
                weight: 'bold', 
              },                                                          
        },
        
    },
}

    function formatIndianCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    }
    return (
        <>
            <section className='banner-section banner-sip'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-md-12'>
                            <div className='banner-ttle text-center'>
                                <h1 className='title-first'>Mutual Fund Calculator</h1>
                                <p>Let’s calculate your SIP & Lumpsum investment returns with the help of a mutual fund calculator.</p>
                            </div>
                        </div>
                    </div>
                    <div className='field-sec'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='tabs-btn'>
                                    <div className='row justify-center'>
                                        <div className='col-xl-4 col-md-8'>
                                            <ul className='list_group1'>
                                                <li className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                                    onClick={() => { toggleTab(1); setData(0) }}>SIP</li>
                                                <li className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                                    onClick={() => { toggleTab(2); setData(1); calculateLumpsumReturns() }}>Lumpsum</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-tabs">
                                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                                        <div className='form-section'>
                                            <div className='leftsec'>
                                                <div className='cal-opt mrg-top'>
                                                    <div className='value-card'>
                                                        <div><p>Monthly Investment</p></div>
                                                        <div className="input-sec">
                                                            <div className="form-control2">
                                                                <span className="rupees-symble">₹</span>
                                                                <input type="tel" className="form-ctr input-1" maxLength={6} min="500" max="500000" value={monthlyinvest} onChange={HandleMonthlyInvest} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                <input type="range" className="slider" step="500" min="500" max="500000" value={monthlyinvest}
                                                                    onChange={HandleMonthlyInvest} style={fillStyle}
                                                                />
                                                                {errorMessages.monthlyinvest && <span className="text-danger">{errorMessages.monthlyinvest}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='cal-opt'>
                                                    <div className='value-card'>
                                                        <div><p>Expected Return Rate (p.a.)</p></div>
                                                        <div className="input-sec">
                                                            <div className="form-control2">
                                                                <input type="tel" className="form-ctr input-2" min="5" max="25" value={interestRate}
                                                                    onChange={handleInterestRateChange} />
                                                                <span className="percent-symble">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                <input type="range" className="slider" id="myRange" min="5" max="25" value={interestRate}
                                                                    onChange={handleInterestRateChange} style={fillStyle1}
                                                                />
                                                                {errorMessages.interestRate && <span className="text-danger">{errorMessages.interestRate}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='cal-opt'>
                                                    <div className='value-card'>
                                                        <div><p>Investment Period (years)</p></div>
                                                        <div className="input-sec">
                                                            <div className="form-control2">
                                                                <input type="tel" className="form-ctr input-3" value={tenure} maxLength={2} min="3" max="40" onChange={handleLoanTenureChange} />
                                                                <span className="years-symble">Yr</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                <input type="range" className="slider" id="myRange" min="3" max="40" value={tenure} onChange={handleLoanTenureChange} style={fillStyle2} />
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
                                                                    <p className="scrip-val">{formatIndianCurrency(monthlyEMI)}</p>
                                                                </div>
                                                            </div>
                                                            <div className="current-val">
                                                                <div className="dots dots-green"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Est. Returns @{interestRate}%</p>
                                                                    <p className="scrip-val">{formatIndianCurrency(estReturns)}</p>
                                                                </div>
                                                            </div>
                                                            <div className="current-val total-val">
                                                                <div className="dots"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Total Value</p>
                                                                    <p className="scrip-val">{formatIndianCurrency(totalvalue)}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="right-itms"><Doughnut
                                                                data={datas}
                                                                options={charteroption}
                                                            />

                                                        </div>

                                                    </div>
                                                    <div className="card-footer">
                                                    <a type="submit" href="https://choiceindia.com/open-free-demat-account" target="" className="btn-bg">Invest Now</a>
                                                    </div>
                                                </div>
                                            </div>

                                           
                                        </div>
                                    </div>
                                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                                        <div className='form-section'>
                                            <div className='leftsec'>
                                                <div className='cal-opt mrg-top'>
                                                    <div className='value-card'>
                                                        <div><p>Lumpsum Investment</p></div>
                                                        <div className="input-sec">
                                                            <div className="form-control2">
                                                                <span className="rupees-symble">₹</span>
                                                                <input type="tel" className="form-ctr input-1" maxLength={6} min="500" max="500000" value={monthlyinvest} onChange={HandleMonthlyInvest} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                <input type="range" className="slider" step="500" min="500" max="500000" value={monthlyinvest}
                                                                    onChange={HandleMonthlyInvest} style={fillStyle}
                                                                />
                                                                {errorMessages.monthlyinvest && <span className="text-danger">{errorMessages.monthlyinvest}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='cal-opt'>
                                                    <div className='value-card'>
                                                        <div><p>Expected Return Rate (p.a.)</p></div>
                                                        <div className="input-sec">
                                                            <div className="form-control2">
                                                                <input type="tel" className="form-ctr input-2" min="5" max="25" value={interestRate}
                                                                    onChange={handleInterestRateChange} />
                                                                <span className="percent-symble">%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                <input type="range" className="slider" id="myRange" min="5" max="25" value={interestRate}
                                                                    onChange={handleInterestRateChange} style={fillStyle1}
                                                                />
                                                                {errorMessages.interestRate && <span className="text-danger">{errorMessages.interestRate}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='cal-opt'>
                                                    <div className='value-card'>
                                                        <div><p>Investment Period (years)</p></div>
                                                        <div className="input-sec">
                                                            <div className="form-control2">
                                                                <input type="tel" className="form-ctr input-3" value={tenure} maxLength={2} min="3" max="40" onChange={handleLoanTenureChange} />
                                                                <span className="years-symble">Yr</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                <input type="range" className="slider" id="myRange" min="3" max="40" value={tenure} onChange={handleLoanTenureChange} style={fillStyle2} />
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
                                                                    <p className="scrip-val">{formatIndianCurrency(lumpsumamount)}</p>
                                                                </div>
                                                            </div>
                                                            <div className="current-val">
                                                                <div className="dots dots-green"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Est. Returns @{interestRate}%</p>
                                                                    <p className="scrip-val">{formatIndianCurrency(lumpsumestReturns)}</p>
                                                                </div>
                                                            </div>
                                                            <div className="current-val total-val">
                                                                <div className="dots"></div>
                                                                <div className="scrip">
                                                                    <p className="scrip-name">Total Value</p>
                                                                    <p className="scrip-val">{formatIndianCurrency(lumpsumtotalvalue)}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="right-itms"><Doughnut
                                                                data={ldatas}
                                                                options={charteroption}
                                                            /></div>

                                                    </div>
                                                    <div className="card-footer">
                                                    <a type="submit" href="https://choiceindia.com/open-free-demat-account" target="" className="btn-bg">Invest Now</a>
                                                    </div>
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
    )
}

export default Banner;
