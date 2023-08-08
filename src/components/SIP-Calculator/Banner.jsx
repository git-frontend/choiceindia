import React, { useState, useEffect } from "react";
import { Doughnut, Arc, Tooltip } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
// import DonutChart from 'react-donut-chart';
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
    const [totalvalue,setTotalvalue]=useState(0);


    useEffect(() => {
        calculateEmi();
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
        // if (!/^\d{1,2}(\.\d)?|3[0-6](\.\d)?$/.test(interestRate)) {
        //     errors.interestRate = 'Please Enter Valid Interest Rate';
        //   }

        if (tenure < 3 || tenure > 40) {
            errors.tenure = 'Please Enter Valid Tenure In years';
        }

        if (errors.monthlyinvest || errors.interestRate || errors.tenure) {
            setMonthlyEMI(0);
            setErrorMessages(errors);
        } else {
            const rate = interestRate / 100;
            const monthlyRate = rate / 12;
            const totalMonths = tenure * 12;
            const futureValue = monthlyinvest * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
            setTotalvalue(futureValue.toFixed(2));
            const investamount=monthlyinvest*totalMonths;
            setMonthlyEMI(investamount)
            const expectreturn=futureValue-investamount;
            setEstReturns(expectreturn)
            setErrorMessages({
                monthlyinvest: '',
                interestRate: '',
                tenure: ''
            });
        }
    }
    
    const HandleMonthlyInvest = (event) => {
        const value = parseInt(event.target.value, 10);
        setMonthlyinvest(value);
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
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleHover = (event, chartElements) => {
        if (chartElements.length > 0) {
            const datasetIndex = chartElements[0].datasetIndex;
            const index = chartElements[0].index;
            setHoveredIndex(datasetIndex === 0 ? index : null);
        } else {
            setHoveredIndex(null);
        }
    };
    const datas = {
        labels: ['Value 1', 'Value 2'],
        datasets: [
            {
                data: [monthlyEMI, estReturns], 
                backgroundColor: [
                    hoveredIndex === 0 ? '#FF6384' : '#FFA4B3',
                    hoveredIndex === 1 ? '#36A2EB' : '#9AD8F2',
                ], 
                hoverBackgroundColor: ['#FF6384', '#36A2EB'], // Hover colors
            },
        ],
    };

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
                                <h1 className='title-first'>SIP Calculator</h1>
                                <p>Let’s calculate your SIP returns with the help of a SIP calculator. Enter your SIP amount and get your maturity amount for the desired time period.</p>
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
                                                            <div className="form-control2">
                                                                <span className="rupees-symble">₹</span>
                                                                <input type="tel" className="form-ctr input-1" maxLength={6} min="500" max="500000" value={monthlyinvest} onChange={HandleMonthlyInvest} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                {/* <span className="bar"><span style={fillStyle}></span></span> */}
                                                                <input type="range" className="slider" step="500" min="500" max="500000" value={monthlyinvest}
                                                                    onChange={HandleMonthlyInvest} style={fillStyle}
                                                                />
                                                                {errorMessages.monthlyinvest && <span className="text-danger">{errorMessages.monthlyinvest}</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='cal-opt'>
                                                    {/* <p>Interest Rate (per annum)</p> */}
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
                                                                {/* <span className="bar"><span className="" style={{ width: `${interestRate}%` }}></span></span> */}
                                                                <input type="range" className="slider" id="myRange" min="5" max="25" value={interestRate}
                                                                    onChange={handleInterestRateChange} style={fillStyle1}
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
                                                            <div className="form-control2">
                                                                <input type="tel" className="form-ctr input-3" value={tenure} maxLength={2} min="3" max="40" onChange={handleLoanTenureChange} />
                                                                <span className="years-symble">Yr</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slidecontainer">
                                                        <div className="middle">
                                                            <div className="slider-container">
                                                                {/* <span className="bar"><span className="" style={{ width: `(${value} - 12) / (120 - 12) * 100` }}></span></span> */}
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

                                                        <div className="right-itms"><Doughnut data={datas} onHover={handleHover} /></div>

                                                    </div>
                                                    <div className="card-footer">
                                                        <button type="submit" className="btn-bg">Invest Now</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <DonutChart
                                                data={[
                                                    {
                                                        label: 'Give you up',
                                                        value: 25,
                                                    },
                                                    {
                                                        label: '',
                                                        value: 75,
                                                        isEmpty: true,
                                                    },
                                                ]}
                                            />; */}
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

export default Banner;
