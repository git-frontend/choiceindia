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
        let urlIdentity = window.location.pathname.split('/scheme/')[1];
        let arr = urlIdentity.split('-').slice(-2)
        let SchemeCode = arr[0]
        let SchemePlanCode = arr[1]

        let request = {
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
                                <h3>Fund Manager Details</h3>
                                <h4>Ankit Pande</h4>
                                <p>Mr. Ankit Pande holds CFA, MBA. He began his career in core banking software with Infosys Finacle. Began his career in equity research in 2011, picking up the (U.S. based) CFA charter in 2015 and MBA from The Chinese University of Hong Kong in 2017. He won the Thomson Reuters StarMine Award for best stock picker in the IT sector in 2014 and is a lifetime member of the Beta Gamma Sigma honour society.</p>
                            </div>
                            <SchemeComparison />
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