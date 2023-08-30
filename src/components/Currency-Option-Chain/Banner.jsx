import React from 'react'
import Form from 'react-bootstrap/Form';
function Banner() {
  return (
    <>
        <section className='banner-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-md-12'>
                        <div className='banner-ttle text-center'>
                            <h1 className='title-first'>Currency Option Chain</h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='banner-card'>
                            <div className='first-sec'>
                                <div className='input-sec'>
                                <div className='brokerage-search'>
                                        <Form.Control
                                            type="text"
                                            className="input-control search-icon"
                                            autoComplete="off"
                                            placeholder="USDINR"
                                            value=""
                                        />
                                        {/* <ul className="brokerage-search-result" >
                                            <li key="no-record"><span className='no-record'>No Record Found</span></li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFTY</span>
                                                <span className="name">NIFTY 50</span>
                                            </li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFGS10YRCLN</span>
                                                <span className="name">NIFTY GS 10YR CLN</span>
                                            </li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFTYLMID250</span>
                                                <span className="name">NIFTY LARGEMID250</span>
                                            </li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFTYOIL&GAS</span>
                                                <span className="name">NIFTY OIL AND GAS</span>
                                            </li>
                                        </ul> */}
                                    </div>
                                    <div className='selectbar'>
                                        <span>Expiry: </span>
                                        <select name="" id="" className='select-control'>
                                            <option value="">27 JUL 23</option>
                                            <option value="">10 AUG 23</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='tab-sec'>
                                    <div className="disply-flex">
                                        <div className='no-strike'>
                                            <span>No. of strike ATM:</span>
                                        </div>
                                        <div className='numbers'>
                                            <ul>
                                                <li className='active'>10</li>
                                                <li>20</li>
                                                <li>ALL</li>
                                            </ul>
                                            <button className='btn-refresh'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none">
                                                    <path d="M24.866 14.8C23.9974 20.5736 19.0156 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C17.9207 1 22.1498 3.96183 24.0015 8.2" stroke="#EF404A" strokwidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M19 8.19995H24.28C24.6777 8.19995 25 7.8776 25 7.47995V2.19995" stroke="#EF404A" strokwidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="secnd-sec">
                                <div className='left-sec'>
                                    <h6>3,396.90</h6>
                                    <p>+8.60 (+0.25%)</p>
                                </div>
                                <div className='right-sec'>
                                    <div className='items'>
                                        <p className='lable'>Underlying Value</p>
                                        <p className='val'>3,388.30</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>1M Futures</p>
                                        <p className='val'>3,416.55</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>2M Futures</p>
                                        <p className='val'>3,441.65</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>Spread</p>
                                        <p className='val'>25.10</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>Put Call Ratio</p>
                                        <p className='val'>0.66</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                            <div className='option-chain-table'>
                                <div className='table-header'>
                                    <div className='syncscroll-left table-child-wrapper'>
                                        <table className='sticy-header'>
                                            <thead className='secondry-header'>
                                                <tr>
                                                    <th className='main-section-header txt-danger'>CALLS</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div>
                                            <table className='th-ce'>
                                                <thead>
                                                    <tr>
                                                        <th>Interpretation</th>
                                                        <th className='flex'>OI  
                                                            <div className='dis-flex'>
                                                                Call OI
                                                                <span className='neg-bg'></span>
                                                            </div>
                                                        </th>
                                                        <th>LTP</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                   <div className='strike-table-prnt'>
                                    <table className="strike-table">
                                            <thead>
                                                <tr className="secondary-header">
                                                    <th className='strike-b'>Strike Price</th>
                                                </tr>
                                                <tr className='secondary-header'>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                        </table>
                                   </div>
                                    <div className='syncscroll-right table-child-wrapper'>
                                        <table className='sticy-header'>
                                            <thead className='secondry-header'>
                                                <tr>
                                                    <th className='main-section-header txt-success'>PUTS</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div>
                                            <table className='th-pe'>
                                                <thead>
                                                    <tr>
                                                        <th>LTP</th>
                                                        <th className='flex'>
                                                            <div className='dis-flex'>
                                                                <span className='pos-bg'></span>
                                                                Put OI 
                                                            </div>
                                                            OI
                                                        </th>
                                                        <th>Interpretation</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='table-container'>
                                    <div className='table-wrapper'>
                                        <div className='syncscroll table-child-wrapper cetable'>
                                            <table className='option-chain-ce-table'>
                                                <tbody className='option-chain-ce-body'>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'40%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'20%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'10%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'40%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'100%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'80%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'50%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'30%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'40%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'70%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'20%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'10%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'30%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'40%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'60%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'90%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>
                                                            <span className='txt-danger'>Long BuildUp</span>
                                                        <div className='btn-wrap'>
                                                            <div className='table-btn'>
                                                            <a href="" className='btn-buy'>B</a>
                                                            <a href="" className='btn-sell'>S</a>
                                                            <a href="" className='btn-info'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                    <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_459">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                            </a>
                                                            <a href="" className='btn-chart'>
                                                            <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                </g>
                                                                <defs>
                                                                <clipPath id="clip0_382_455">
                                                                <rect width="13" height="13" fill="white"/>
                                                                </clipPath>
                                                                </defs>
                                                                </svg>

                                                            </a>
                                                            <a href="" className='btn-watchlist'>
                                                                <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g id="watchlist">
                                                                <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                </g>
                                                                </svg>

                                                            </a>
                                                            </div>
                                                        </div>
                                                        </td>
                                                        <td>
                                                            <div className='highlightneg' >
                                                                <span className='highlightneg-bg' style={{width:'40%'}}></span>
                                                                <span>9,609,150</span>
                                                                <span className='per-neg-val'>(-2.31%)</span></div>
                                                        </td>
                                                        <td>43.60 <span className='txt-danger'>(-45.97%)</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <table className='option-chain-strike-price'>
                                                <tbody className='option-chain-strike-body'>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price-cell'>19,550</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='syncscroll table-child-wrapper'>
                                            <table className='option-chain-pe-table'>
                                                <tbody className='option-chain-pe-body'>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'40%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'40%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'20%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'50%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'70%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'10%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'90%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'30%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'80%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'20%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'50%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'40%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'100%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'60%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'30%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'40%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className='option-table-row'>
                                                        <td>65.85 <span className='txt-success'>(1.78%)</span></td>
                                                        <td>
                                                            <div className='highlightpos'>
                                                                <span className='highlightpos-bg' style={{width:'40%'}}></span>
                                                                <span>6,941,100</span> 
                                                                <span className='per-pos-val'>(143.12%)</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className='txt-success'>Long Liquidation</span>
                                                            <div className='btn-wrap'>
                                                                <div className='table-btn'>
                                                                <a href="" className='btn-buy'>B</a>
                                                                <a href="" className='btn-sell'>S</a>
                                                                <a href="" className='btn-info'>
                                                                    <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g id="Layer_1" clipPath="url(#clip0_382_459)">
                                                                        <path id="Vector" d="M5 10C2.24545 10 0 7.75455 0 5C0 2.24545 2.24545 0 5 0C7.75455 0 10 2.24545 10 5C10 7.75455 7.75455 10 5 10ZM5 0.909091C2.74545 0.909091 0.909091 2.74545 0.909091 5C0.909091 7.25455 2.74545 9.09091 5 9.09091C7.25455 9.09091 9.09091 7.25455 9.09091 5C9.09091 2.74545 7.25455 0.909091 5 0.909091ZM5 7.47273C4.74545 7.47273 4.54545 7.27273 4.54545 7.01818V5C4.54545 4.74545 4.74545 4.54545 5 4.54545C5.25455 4.54545 5.45455 4.74545 5.45455 5V7.01818C5.45455 7.27273 5.25455 7.47273 5 7.47273ZM5 3.68182C4.74545 3.68182 4.54545 3.48182 4.54545 3.22727V2.97273C4.54545 2.71818 4.74545 2.51818 5 2.51818C5.25455 2.51818 5.45455 2.71818 5.45455 2.97273V3.22727C5.45455 3.48182 5.25455 3.68182 5 3.68182Z" fill="#221F20"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_382_459">
                                                                        <rect width="13" height="13" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                </a>
                                                                <a href="" className='btn-chart'>
                                                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="Layer_1" clipPath="url(#clip0_382_455)">
                                                                    <path id="Vector" d="M9.54545 10H2.88182C1.96364 10 1.5 10 1.08182 9.78182C0.709091 9.59091 0.409091 9.29091 0.218182 8.91818C0 8.5 0 8.03636 0 7.11818V0.454545C0 0.2 0.2 0 0.454545 0C0.709091 0 0.909091 0.2 0.909091 0.454545V7.11818C0.909091 7.87273 0.909091 8.28182 1.02727 8.50909C1.12727 8.70909 1.29091 8.87273 1.49091 8.97273C1.71818 9.09091 2.12727 9.09091 2.88182 9.09091H9.54545C9.8 9.09091 10 9.29091 10 9.54545C10 9.8 9.8 10 9.54545 10ZM1.97273 6.97273C1.85455 6.97273 1.73636 6.92727 1.65455 6.83636C1.47273 6.65455 1.47273 6.37273 1.65455 6.19091L3.67273 4.17273C3.84545 4 4.14545 4 4.31818 4.17273L6.01818 5.87273L7.95455 3.93636H7.03636C6.78182 3.93636 6.58182 3.73636 6.58182 3.48182C6.58182 3.22727 6.78182 3.02727 7.03636 3.02727H9.05455C9.05455 3.02727 9.06364 3.02727 9.07273 3.02727C9.12727 3.02727 9.18182 3.03636 9.22727 3.06364C9.27273 3.08182 9.32727 3.10909 9.36364 3.15455C9.37273 3.15455 9.38182 3.17273 9.39091 3.18182C9.42727 3.21818 9.45455 3.26364 9.47273 3.30909C9.5 3.36364 9.50909 3.42727 9.50909 3.49091V5.50909C9.50909 5.76364 9.30909 5.96364 9.05455 5.96364C8.8 5.96364 8.6 5.76364 8.6 5.50909V4.58182L6.34545 6.83636C6.17273 7.00909 5.87273 7.00909 5.7 6.83636L4 5.13636L2.3 6.83636C2.20909 6.92727 2.09091 6.97273 1.98182 6.97273H1.97273Z" fill="#221F20"/>
                                                                    </g>
                                                                    <defs>
                                                                    <clipPath id="clip0_382_455">
                                                                    <rect width="13" height="13" fill="white"/>
                                                                    </clipPath>
                                                                    </defs>
                                                                    </svg>

                                                                </a>
                                                                <a href="" className='btn-watchlist'>
                                                                    <svg width="13" height="13" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g id="watchlist">
                                                                    <path id="Vector" d="M2.73474 1.08336L0.869861 2.46857V4.94054L5.46551 8.85378L9.98358 4.9445V2.46404L8.16231 1.08959L5.47401 3.117L2.73474 1.08336ZM2.73474 0L5.47004 2.03081L8.16231 0L10.8534 2.03081V5.34205L5.47004 10L0 5.34205V2.03081L2.73474 0Z" fill="#221F20"/>
                                                                    </g>
                                                                    </svg>

                                                                </a>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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

export default Banner