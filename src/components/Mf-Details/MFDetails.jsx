import React from 'react'

import { useState, useEffect } from "react";
import "./mf-details.scss";
import ScemeName from './ScemeName';
import PerformaceGraph from './PerformaceGraph';
import PortfolioAnalysis from './PortfolioAnalysis';
import FundManager from './FundManager';
import SchemeComparison from './SchemeComparison';
import SchemePerformance from './SchemePerformance';
import MfCalculator from './MfCalculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import DematAccountForm from '../Common-features/DematAccountForm';
import FixedForm from './FixedForm';
import rest from "../../Services/rest";
import noDataimg from '../../assets/images/no-data.webp';
import utils from "../../Services/utils";

function MFTopFunds() {
    const [name, setName] = useState('hideform');
    const [name2, setName2] = useState('hideform2');
    const [rendercount, setRenderCount] = useState(false);
    const [schemedata, setSchemedata] = useState([]);
    const [managardata, setManagardata] = useState([]);
    const [performanceResponseObject, setPerformanceResponseObject] = useState([]);
    const [peerComparisonResponseObject, setPeerComparisonResponseObject] = useState([]);
    const disableLumpsum = false;
    const disableSIP = false;
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
                    let performanceResponseObject = [];
                    let list = [
                        { label: "1m", key: "OneMonthReturn" },
                        { label: "6m", key: "SixMonthsReturn" },
                        { label: "1y", key: "OneYearReturn" },
                        { label: "3y", key: "ThreeYearReturn" }
                    ];

                    let a = res.Response.Performance;
                    let updatedPerformanceResponseObject = list.map((obj) => {
                        let result = { label: obj.label };

                        if (a[0]) {
                            result["FundReturn"] = Number(a[0][obj.key]);
                            result["CategoryAvg"] = (a[1]) ? Number(a[1][obj.key]) : 0;
                            result["CategoryBest"] = (a[2]) ? Number(a[2][obj.key]) : 0;
                            performanceResponseObject.push(result);
                        }
                        return null;
                    });

                    setPerformanceResponseObject(updatedPerformanceResponseObject);

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
                //   sipLumpsumCalc()
            }).catch((error) => {

            });
    }
    const optimezeString = (data) => {
        return data.toLowerCase().replace(/\&|[\-|\s]+/g, '-');
    }

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
                                {
                                    schemedata.length ?
                                        <div>
                                            {
                                                schemedata.map((res, i) => {
                                                    return (
                                                        <div className='row' key={res.SchemeCode}>
                                                            <div className='col-xl-5 col-md-12'>
                                                                <div className='mn-graph'>
                                                                    {/* <img  src={res.SchemeBasic.AMCURL} className="img-fluid" alt='' height={400} /> */}
                                                                </div>
                                                                <p className='per-ttl'>Showing Funds Performance since Sep 07, 2020</p>
                                                            </div>
                                                            <div className='col-xl-7 col-md-12'>
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

                            <PortfolioAnalysis />

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
                                                            {/*
                                                            active-itm
                                                             <div className='scheme-list-itm'>
                                                                <div className='list-itm-lft'>
                                                                    <h4>Quant Tax Plan Growth</h4>
                                                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                                                    <div className='rating-det'>
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='unfill' />
                                                                    </div>
                                                                </div>
                                                                <div className='list-itm-rght'>
                                                                    <ul className='reset'>
                                                                        <li>
                                                                            <h4>74.84%</h4>
                                                                            <h5>1 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>149.47%</h4>
                                                                            <h5>3 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>1.67</h4>
                                                                            <h5>Expense Ratio</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='scheme-list-itm'>
                                                                <div className='list-itm-lft'>
                                                                    <h4>Quant Tax Plan Growth</h4>
                                                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                                                    <div className='rating-det'>
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='unfill' />
                                                                    </div>
                                                                </div>
                                                                <div className='list-itm-rght'>
                                                                    <ul className='reset'>
                                                                        <li>
                                                                            <h4>74.84%</h4>
                                                                            <h5>1 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>149.47%</h4>
                                                                            <h5>3 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>1.67</h4>
                                                                            <h5>Expense Ratio</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='scheme-list-itm'>
                                                                <div className='list-itm-lft'>
                                                                    <h4>Quant Tax Plan Growth</h4>
                                                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                                                    <div className='rating-det'>
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='unfill' />
                                                                    </div>
                                                                </div>
                                                                <div className='list-itm-rght'>
                                                                    <ul className='reset'>
                                                                        <li>
                                                                            <h4>74.84%</h4>
                                                                            <h5>1 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>149.47%</h4>
                                                                            <h5>3 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>1.67</h4>
                                                                            <h5>Expense Ratio</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='scheme-list-itm'>
                                                                <div className='list-itm-lft'>
                                                                    <h4>Quant Tax Plan Growth</h4>
                                                                    <h5><span>AUM</span> 4,433 Cr</h5>
                                                                    <div className='rating-det'>
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                        <FontAwesomeIcon icon={faStar} className='fill' />
                                                                    </div>
                                                                </div>
                                                                <div className='list-itm-rght'>
                                                                    <ul className='reset'>
                                                                        <li>
                                                                            <h4>74.84%</h4>
                                                                            <h5>1 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>149.47%</h4>
                                                                            <h5>3 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>1.67</h4>
                                                                            <h5>Expense Ratio</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div> */}
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
                            <SchemePerformance />
                            <MfCalculator />
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