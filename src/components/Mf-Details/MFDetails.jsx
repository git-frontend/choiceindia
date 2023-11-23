import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from "react";
import "./mf-details.scss";
import PortfolioAnalysis from './PortfolioAnalysis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import DematAccountForm from '../Common-features/DematAccountForm';
import FixedForm from './FixedForm';
import rest from "../../Services/rest";
import noDataimg from '../../assets/images/no-data.webp';
import utils from "../../Services/utils";
import Form from 'react-bootstrap/Form';
import Image1 from '../../assets/images/mf-investica/pie-chart.png';
import Image2 from '../../assets/images/mf-investica/donuts-chart.webp';
function MFTopFunds() {
    const [name, setName] = useState('hideform');
    const [value, onChange] = useState(0);
    const [name2, setName2] = useState('hideform2');
    const [rendercount, setRenderCount] = useState(false);
    const [schemedata, setSchemedata] = useState([]);
    const [managardata, setManagardata] = useState([]);
    const [performanceResponseObject, setPerformanceResponseObject] = useState([]);
    const [peerComparisonResponseObject, setPeerComparisonResponseObject] = useState([]);
    const disableLumpsum = false;
    const disableSIP = false;
    const [typeOfReturn, setTypeOfReturn] = useState(true);
    const [typeOfCalc, setTypeOfCalc] = useState(true);
    const [noOfMonths, setNoOfMonths] = useState(6);
    const [minInvested, setMinInvested] = useState("500");
    const [sipLumpsumdta, setSipLumpsumdta] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [monthsLabel, setMonthsLabel] = useState('');
    const [someRange, setSomeRange] = useState(0.5);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            window.addEventListener('scroll', getPosition);
            initializeschemeData()
            FundManagerDetails();
            getPerformancePeerComparisonData()
            sipLumpsumCalc()
        }
    }, [rendercount]);
    const getPosition2 = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName2('visibleform2');
            } else {
                setName2('hideform2');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', getPosition2);
    }, []);

    const initializeschemeData = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const SchemeCode = arr[0]
        const SchemePlanCode = arr[1]

        const request = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1]
        }
        rest.getSchemeData(request).then(
            res => {
                if (res && res.Response) {
                    console.log("res.Responsec", res.Response)
                    setSchemedata([res.Response])
                    if (SchemePlanCode != 2066) {
                        if (res.Response.SchemeBasic.DRLumpSumAllowed == "N") {
                            disableLumpsum = true;
                        }
                        if (res.Response.SchemeBasic.DRSIPAllowed == "N") {
                            disableSIP = true;
                        }
                        if (res.Response.SchemeBasic.LumpSumAllowed == "Y") {
                            disableLumpsum = false;
                        }
                        if (res.Response.SchemeBasic.SIPAllowed == "Y") {
                            disableSIP = false;
                        }
                    }
                    else {
                        if (res.Response.SchemeBasic.LumpSumAllowed == "N") {
                            disableLumpsum = true;
                        }
                        if (res.Response.SchemeBasic.SIPAllowed == "N") {
                            disableSIP = true;
                        }
                    }
                } else {
                    navigate(`/404`, { replace: true });
                }
            },
            err => {
                if (err && err.message && (err.message.indexOf('404') > -1)) {
                    navigate(`/404`, { replace: true });
                }
                console.log("ERROR", err);
            }
        );
    };
    const FundManagerDetails = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const request1 = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1]
        }
        rest.getFundManagerData(request1).then(
            res => {
                if (res && res.Response) {
                    setManagardata([res.Response])
                }
            }).catch((error) => {

            });
    }

    const optimezeString = (data) => {
        return data.toLowerCase().replace(/\&|[\-|\s]+/g, '-');
    }

    const getPerformancePeerComparisonData = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const request = {
            "AnalysisType": "6",
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1],
            "SchemeDuration": "Monthly",
            "Count": 5
        }
        rest.getPerformancePeerComparisonData(request).then(
            res => {
                if (res.Response != null && res.Response.PeerComparison) {
                    // console.log("API Response:", res.Response);

                    // Check if Performance data is present
                    if (res.Response.Performance && res.Response.Performance.length > 0) {
                        let performanceResponseObject = [];
                        let list = [
                            { label: "1m", key: "OneMonthReturn" },
                            { label: "6m", key: "SixMonthsReturn" },
                            { label: "1y", key: "OneYearReturn" },
                            { label: "3y", key: "ThreeYearReturn" }
                        ];

                        let a = res.Response.Performance;
                        console.log("Performance Data:", a);

                        list.forEach((obj) => {
                            let result = { label: obj.label };

                            if (a[0]) {
                                result["FundReturn"] = Number(a[0][obj.key]) || 0;
                            }
                            if (a[1]) {
                                result["CategoryAvg"] = Number(a[1][obj.key]) || 0;
                            }
                            if (a[2]) {
                                result["CategoryBest"] = Number(a[2][obj.key]) || 0;
                            }

                            performanceResponseObject.push(result);
                        });

                        console.log("Updated Performance Response:", performanceResponseObject);

                        setPerformanceResponseObject([...performanceResponseObject]);
                    }



                    let peerComparisonResponseObjectCopy = [...res.Response.PeerComparison.lstListPeers];
                    peerComparisonResponseObjectCopy.forEach((e, i) => {
                        let paramSplit = e["Scheme"].split("-");
                        e["SchemeCode"] = paramSplit[0];
                        e["SchemePlanCode"] = paramSplit[1];
                        e["OneYearReturn"] = (e["OneYearReturn"] && Number(e["OneYearReturn"] != 0)) ?
                            parseFloat(e["OneYearReturn"]).toFixed(2) + '%' : "N/A";
                        e["ThreeYearReturn"] = (e["OneYearReturn"] && Number(e["ThreeYearReturn"] != 0)) ?
                            parseFloat(e["ThreeYearReturn"]).toFixed(2) + '%' : "N/A";
                        e["Size"] = Math.floor(e["Size"]);
                        e["Size"] = (e["Size"]) ? e["Size"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e["Size"];
                    });

                    let positiveK = []; let negativeK = [], zeroK = [];
                    peerComparisonResponseObjectCopy.forEach((e, i) => {
                        if (e.nDistance < 0) negativeK.push(e);
                        else if (e.nDistance > 0) positiveK.push(e);
                        else zeroK = [e];
                    });

                    positiveK.sort((a, b) => a.nDistance <= b.nDistance);
                    negativeK.sort((a, b) => a.nDistance <= b.nDistance);

                    let finalR = [];
                    finalR = finalR.concat(positiveK).concat(zeroK).concat(negativeK);
                    setPeerComparisonResponseObject(finalR);
                }
                //   sipLumpsumCalc().

            }).catch((error) => {
                // Handle errors
                console.error("Error fetching performance data:", error);
            });
    }

    const sipLumpsumCalc = (event, switchChange) => {
        let tempstore;
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2);

        if (switchChange) {
            setTypeOfCalc(true);
        } else {
            setTypeOfCalc(false);
        }

        if (minInvested < 1) {
            setErrorMsg('Enter a valid amount');
            return false;
        } else {
            setErrorMsg('');
        }

        if (noOfMonths <= 6) {
            tempstore = noOfMonths;
            setMonthsLabel(`${tempstore} Month${tempstore > 1 ? 's' : ''}`);
        } else {
            tempstore = noOfMonths / 12;
            setMonthsLabel(`${tempstore} Year${tempstore > 1 ? 's' : ''}`);
        }

        let request = {
            SchemeCode: arr[0],
            SchemePlanCode: arr[1],
            NoOfMonths: noOfMonths.toString(),
            AmtInvested: minInvested,
            TypeOfCalc: typeOfCalc ? 'SIP' : 'Lumpsum',
        };

        rest.sipLumpsumCalc(request)
            .then((res) => {
                if (res.Response) {
                    setSipLumpsumdta([res.Response]);
                } else {
                    setSipLumpsumdta([]);
                }
                console.log('sipLumpsumCalc res', res);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const fillPercentageloan = ((noOfMonths - 6) / (60 - 6)) * 100;
    const fillStyle = {
        background: `linear-gradient(to right, #D9D9D9 ${fillPercentageloan}%, #D9D9D9 ${fillPercentageloan}%)`,
    };
    return (
        <div>
            <section className="fund-listing-details">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xl-12">
                            {/* <ScemeName /> */}
                            <div className='card-mn box-shadow card-top-details'>
                                {
                                    schemedata.length ?
                                        <div >
                                            {
                                                schemedata.map((res, i) => {
                                                    return (
                                                        <div className='row' key={res.SchemeCode}>
                                                            <div className='col-md-7'>
                                                                <h1 className='title-secnd'>{res.SchemeBasic.SchemeMainName}</h1>
                                                                <div className='rating-det'>
                                                                    {[1, 2, 3, 4, 5].map((rating) => (
                                                                        <FontAwesomeIcon
                                                                            key={rating}
                                                                            icon={faStar}
                                                                            className={`${res?.SchemePerformance?.CMSStarRatings >= rating ? 'fill' : 'unfill'}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <div className='detaisl-amt-des'>
                                                                    <p className='mar-0'>{res.SchemeBasic.Category} | Inception Date : {utils.formatDate(
                                                                        new Date(res.SchemeBasic.LaunchDate.split('/')[2], (res.SchemeBasic.LaunchDate.split('/')[1] - 1), res.SchemeBasic.LaunchDate.split('/')[0]), "MMM dd,yyyy"
                                                                    )}
                                                                    </p>
                                                                    <p>Min. {(!disableLumpsum ? 'Lumpsum' : (!disableSIP) ? 'SIP' : '')} Investment  <strong>₹ {res?.SchemeBasic?.MinInvestment}</strong></p>
                                                                    <p>Nav <strong>₹ {res?.SchemePerformance?.CurrentNav}</strong> | <strong>{utils.formatDate(
                                                                        new Date(res.SchemePerformance.NAVDate.split('-')[0], (res.SchemePerformance.NAVDate.split('-')[1] - 1), res.SchemePerformance.NAVDate.split('-')[2]), "MMM dd,yyyy"
                                                                    )}</strong></p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5 '>
                                                                <div className='holding-value-cont'>
                                                                    <div className='holding-value'>
                                                                        <h4>{parseFloat(res.SchemePerformance.ThreeYrNavper).toFixed(2)} &nbsp;<FontAwesomeIcon icon={faArrowUp} className='fill' /></h4>
                                                                        <p>3 Year Return (%)</p>
                                                                    </div>
                                                                    <div className='inv-btn'>
                                                                        <a href='/open-free-demat-account' className='btn-bg'>Invest Now</a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>
                                }

                            </div>
                            <div className='card-mn box-shadow graph-show' id='showForm'>
                                <div className='row'>
                                    <div className='col-xl-5 col-md-12'>
                                        <div className='mn-graph'>
                                            <div className='top-mn-graph d-flex justify-content-between align-items-center'>
                                                <button className='mn-graph-btn'>
                                                    <span className="graph-topsection">This Fund</span>
                                                    <h6 className="mt-2">45.99%p.a.</h6>
                                                </button>
                                                <p>VS</p>
                                                <div className="toggle">
                                                    <button className='mn-graph-btn'>
                                                        <span className={`graph-topsection ${typeOfReturn ? ' selected' : ''}`}>SENSEX</span>
                                                        <h6 className="mt-2">45.99%p.a.</h6>
                                                    </button>
                                                    <input
                                                        type="checkbox"
                                                        id="exchangeToggle"
                                                        name="exchangeToggle"
                                                        checked={typeOfReturn}
                                                        onChange={(e) => setTypeOfReturn(e.target.checked)}
                                                    />
                                                    <label></label>
                                                    <button className='mn-graph-btn'>
                                                        <span className={`graph-topsection ${!typeOfReturn ? 'selected' : ''}`}>BANKED</span>
                                                        <h6 className="mt-2">45.99%p.a.</h6>
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div className="mn-graph-footer text-center">
                                                <span className="fund"></span><span>This Fund</span>
                                                <span className="fund" style={{ backgroundColor: !typeOfReturn ? 'green' : '#FFFF00' }}></span>{' '}
                                                <span>{(typeOfReturn) ? 'Sensex' : 'Bank FD'}</span>
                                            </div>
                                            <div className="duration">
                                                <button className="dur-button active">1M</button>
                                                <button className="dur-button">3M</button>
                                                <button className="dur-button">6M</button>
                                                <button className="dur-button">1Y</button>
                                                <button className="dur-button">3Y</button>
                                                <button className="dur-button">5Y</button>
                                               
                                            </div>
                                        </div>
                                        <p className='per-ttl'>Showing Funds Performance since Sep 07, 2020</p>
                                    </div>
                                    {
                                        schemedata.length ?
                                            <div className='col-xl-7 col-md-12'>
                                                {
                                                    schemedata.map((res, i) => {
                                                        return (
                                                            <div key={res.SchemeCode}>
                                                                <div className='holding-details'>
                                                                    <div className="row holding-details-row">
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{parseFloat(res.SchemePerformance.StandardDeviation).toFixed(2)}</div>
                                                                                <div className="details-title">Standard Deviation</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="rupee">₹ <span className="holdings-figure">{(parseFloat(res.SchemePerformance.NetAssets).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' Cr')}</span>
                                                                                </div>
                                                                                <div className="details-title">AUM</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="rupee">
                                                                                    <span className="holdings-figure">{parseFloat((res?.SchemeBasic?.CAGR && res?.SchemeBasic?.CAGR != 0.00 && rest?.SchemeBasic?.CAGR != 'NA') ? res?.SchemeBasic?.CAGR + '%'
                                                                                        : 'N/A').toFixed(2)}</span>
                                                                                </div>
                                                                                <div className="details-title">CAGR {(res?.SchemeBasic?.CAGRYears && res?.SchemeBasic?.CAGRYears
                                                                                    != '') ? '-' + res?.SchemeBasic?.CAGRYears : ''}</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{(res?.SchemeBasic?.LockInPeriod != '' && res?.SchemeBasic?.LockInPeriod
                                                                                    != 'nil') ? res?.SchemeBasic?.LockInPeriod : 'N/A'}</div>
                                                                                <div className="details-title">Lock In Period</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{(res?.SchemeBasic?.ExpenseRatio) ? res?.SchemeBasic?.ExpenseRatio
                                                                                    : 'N/A'}</div>
                                                                                <div className="details-title">Expense Ratio</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{(res?.SchemeBasic?.Benchmark) ? res?.SchemeBasic?.Benchmark
                                                                                    : 'N/A'}</div>
                                                                                <div className="details-title">BenchMark</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className='val-exiload'>
                                                                                <h4>Exit Load</h4>
                                                                                <h5>{res.SchemeBasic.ExitLoad}</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }
                                </div>
                            </div>

                            <div className='card-mn box-shadow analysis-portfolio'>
                                <div className='row align-items-center'>
                                    <div className='col-md-6'>
                                        <h3 className='title-secnd'>Scheme's Portfolio <span>Analysis</span></h3>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='order-wise-sec'>
                                            <p className='firt-par'>As on: 2023-07-31</p>
                                            <p className='view-lc'>View allocation % by</p>
                                            <div className='drop-items'>
                                                <select className='form-select'>
                                                    <option value="" selected>Sector</option>
                                                    <option value="">Company</option>
                                                    <option value="">Market Cap</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='cont-all-details'>
                                            <div className='list-tabs-number'>
                                                <button
                                                    className={toggleState === 1 ? "tabs  active-tabs" : "tabs"}
                                                    onClick={() => toggleTab(1)}
                                                >
                                                    Equity: 98.23%

                                                </button>
                                                <button
                                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                                    onClick={() => toggleTab(2)}
                                                >
                                                    Debt: 1.76%

                                                </button>
                                                <button
                                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                                    onClick={() => toggleTab(3)}
                                                >

                                                    Others

                                                </button>
                                            </div>
                                            <div className="content-tabs-details">
                                                <div
                                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                                >
                                                    <div className="equity-tab-cont">
                                                        <div className='lft-chart'>
                                                            <img src={Image1} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="right-cont-details">
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#7C160E" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>BFSI</h4>
                                                                            <h3 style={{ color: "#7C160E" }}>23.33%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="1">
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#AEA096" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Pharmaceuticals</h4>
                                                                            <h3 style={{ color: "#AEA096" }}>23.33%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="2" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#BE7111" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Oil & Gas</h4>
                                                                            <h3 style={{ color: "#BE7111" }}>9.99%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="3" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#8018BA" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Metal & Mining</h4>
                                                                            <h3 style={{ color: "#8018BA" }}>8.41%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="4" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#B8A970" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Infrastructure</h4>
                                                                            <h3 style={{ color: "#B8A970" }}>8.23%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="5" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#CD4BA8" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Power</h4>
                                                                            <h3 style={{ color: "#CD4BA8" }}>6.62%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                                <Accordion.Item eventKey="6" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#45BF60" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>IT Consulting & Software</h4>
                                                                            <h3 style={{ color: "#45BF60" }}>4.89%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. HDFC Bank Limited</h4>
                                                                            <h4>9.19%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. State Bank Of India</h4>
                                                                            <h4>5.67%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>3. Capri Global Capital Limited</h4>
                                                                            <h4>2.77%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>4. Punjab National Bank</h4>
                                                                            <h4>2.32%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>5. Bandhan Bank Ltd</h4>
                                                                            <h4>0.95%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>6. Jio Financial Services </h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>7. Piramal Enterprises Limited</h4>
                                                                            <h4>0.91%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>8. Sundaram Finance Ltd</h4>
                                                                            <h4>0.60%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className={toggleState === 2 ? "content  active-content" : "content"}
                                                >
                                                    <div className="equity-tab-cont">
                                                        <div className='lft-chart'>
                                                            <img src={Image2} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="right-cont-details">
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#7C160E" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Others</h4>
                                                                            <h3 style={{ color: "#7C160E" }}>1.46%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. Clearing Corporation Of India Ltd</h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. Net Receivables / (Payables)</h4>
                                                                            <h4>0.54%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className={toggleState === 3 ? "content  active-content" : "content"}
                                                >
                                                    <div className="equity-tab-cont">
                                                        <div className='lft-chart'>
                                                            <img src={Image2} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="right-cont-details">
                                                            <Accordion defaultActiveKey="0">
                                                                <Accordion.Item eventKey="0" >
                                                                    <Accordion.Header as="h3" className='faq-header'>
                                                                        <span className='cirl' style={{ background: "#7C160E" }}>

                                                                        </span>
                                                                        <div className='header-flx'>
                                                                            <h4>Others</h4>
                                                                            <h3 style={{ color: "#7C160E" }}>1.46%</h3>
                                                                        </div>
                                                                    </Accordion.Header>
                                                                    <Accordion.Body>
                                                                        <div className='acd-list'>
                                                                            <h4>1. Clearing Corporation Of India Ltd</h4>
                                                                            <h4>0.92%</h4>
                                                                        </div>
                                                                        <div className='acd-list'>
                                                                            <h4>2. Net Receivables / (Payables)</h4>
                                                                            <h4>0.54%</h4>
                                                                        </div>
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            </Accordion>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card-mn fund-mang-details'>
                                {
                                    managardata.map((res, i) => {
                                        return (
                                            <div key={res.FundMgrName}>
                                                <h3>Fund Manager Details</h3>
                                                <h4>{res.FundMgrName}</h4>
                                                <p>{(res.FundMgrProfile).replace('<br>', '')}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='card-mn box-shadow fund-comparison-details'>
                                <h3 className='title-secnd'><span>Peer</span> Scheme Comparison</h3>
                                {
                                    peerComparisonResponseObject.length ?
                                        <div>
                                            {
                                                peerComparisonResponseObject.map((res, i) => {
                                                    return (
                                                        <div className='scheme-list' key={i}>
                                                            <div className='scheme-list-itm '>
                                                                <div className='list-itm-lft'>
                                                                    {/* <h4>Quant Tax Plan Growth</h4> */}
                                                                    <h4><a href={`/mf/scheme/${optimezeString(res.SchemeName)}-${res.SchemeCode}-${res.SchemePlanCode}`}>
                                                                        {res.SchemeName}
                                                                    </a></h4>
                                                                    <h5><span>AUM</span> {res.Size + ' Cr'}</h5>
                                                                    <div className='rating-det'>
                                                                        {[1, 2, 3, 4, 5].map((rating) => (
                                                                            <FontAwesomeIcon
                                                                                key={rating}
                                                                                icon={faStar}
                                                                                className={`${res?.CMSStarRatings >= rating ? 'fill' : 'unfill'}`}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className={`list-itm-rght ${res.nDistance === 0 ? 'active-itm' : ''}`} >
                                                                    <ul className='reset'>
                                                                        <li>
                                                                            <h4>{res.OneYearReturn}</h4>
                                                                            <h5>1 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>{res.ThreeYearReturn}</h4>
                                                                            <h5>3 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>{res.ExpenseRatio || 'N/A'}</h4>
                                                                            <h5>Expense Ratio</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>
                                }
                            </div>
                            <div className='card-mn box-shadow performance-hist-details'>
                                <h3 className='title-secnd'>Scheme's <span>Performance</span> (Historical)</h3>
                                <div className='table-responsive'>
                                    {
                                        performanceResponseObject.length ?
                                            <table className='table'>

                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Calendar
                                                        </th>
                                                        <th>
                                                            Fund Return(%)
                                                        </th>
                                                        <th>
                                                            Category Average(%)
                                                        </th>
                                                        <th>
                                                            Category Best(%)
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody >
                                                    {
                                                        performanceResponseObject.map((res, i) => {
                                                            // console.log("performanceResponseObject", res)
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{res.label}</td>
                                                                    <td>{(res.FundReturn).toFixed(2)}</td>
                                                                    <td>{(res.CategoryAvg).toFixed(2)}</td>
                                                                    <td>{(res.CategoryBest).toFixed(2)}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                            </table>
                                            :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className='card-mn box-shadow card-calculator'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h3 className='title-secnd'>Lumpsum & SIP Calculator</h3>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="toggle">
                                            <span className={`${!typeOfCalc ? 'selected' : ''}`}>Lumpsum</span>
                                            <input
                                                type="checkbox"
                                                id="exchangeToggle"
                                                name="exchangeToggle"
                                                checked={typeOfCalc}
                                                onChange={(e) => setTypeOfCalc(e.target.checked)}
                                            />
                                            <label></label>
                                            <span className={`${typeOfCalc ? 'selected' : ''}`}>SIP</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div>

                                            {
                                                sipLumpsumdta && sipLumpsumdta.map((res, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <p className='midl-txt'>SIP of <strong>₹{minInvested}</strong> for <strong>{noOfMonths} Months</strong> would have gained <strong>{(res.AbsoluteProfit).toFixed(2)}%</strong> & its value would have been <strong>₹{Math.floor(res.CurrentValue)}</strong></p>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='accordian-sec'>
                                            <Accordion defaultActiveKey='0'>
                                                <Accordion.Item eventKey='0'>
                                                    <Accordion.Header as='h3' className='faq-header'></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='invst-amt-hirizon'>
                                                            <div className='form-lft'>
                                                                <Form autoComplete='off'>
                                                                    <Form.Group className='formgrp' controlId='formBasicEmail'>
                                                                        <Form.Label className='formlabel'>
                                                                            Enter Amount you Want to Invest{' '}
                                                                        </Form.Label>
                                                                        <div className='amt-enter'>
                                                                            <Form.Control
                                                                                type='text'
                                                                                name='firstName'
                                                                                value={minInvested}
                                                                                maxLength='12'
                                                                                className='formcontrol'
                                                                                onChange={(e) => setMinInvested(e.target.value)}
                                                                            />
                                                                        </div>
                                                                        <span className='text-danger'>{errorMsg} </span>
                                                                    </Form.Group>
                                                                </Form>
                                                            </div>
                                                            <div className='horizon-slider'>
                                                                <div className='row align-items-center'>
                                                                    <div className='col-md-8'>
                                                                        <div className='slidecontainer'>
                                                                            <h6>Investment Horizon</h6>
                                                                            <div className='middle'>
                                                                                <div className='slider-container'>
                                                                                    <span className='bar'>
                                                                                        <span
                                                                                            className='fill'
                                                                                            style={fillStyle}
                                                                                        ></span>
                                                                                    </span>
                                                                                    <input
                                                                                        type='range'
                                                                                        className='slider'
                                                                                        id='myRange'
                                                                                        min='6'
                                                                                        max='60'
                                                                                        step='6'
                                                                                        value={noOfMonths}
                                                                                        onChange={(e) => {
                                                                                            setNoOfMonths(e.target.value);
                                                                                            sipLumpsumCalc(e, true);
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='float-right'>
                                                                            <span>{monthsLabel}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={name}>
                        <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                            <a className="primary-orange-btn scroll-top-account openbtn" href='/open-free-demat-account'>Open Free Account</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className='details-more-cont'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <div className='more-cont-dcr'>
                                <h2 className='title-secnd'>Invest in Quant Tax Plan Growth <span>Online</span></h2>
                                <p>With Choice, grow your wealth in mutual funds as we enable you to buy Quant Tax Plan Growth online. We help you understand all the important details to Invest in Quant Tax Plan Growth Scheme such as its Value, NAV, AUM, Performance, Exit Load, etc. along with its Historical Returns. Also, you can calculate the Expected Future Returns of this scheme using our Lumpsum & SIP Calculator and access its Sector-wise, Company- wise and Category-wise Holdings!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={name2}>
                <FixedForm />
            </div>

        </div>
    )
}

export default MFTopFunds