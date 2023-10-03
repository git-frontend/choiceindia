import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import HDFC from '../../assets/images/mf-top-funds/hdfc-mutual-fund.svg';


function SerachTopFunds() {
  return (
    <>
    <section className='search-amc-sec'>
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='col-md-4 col-sm-12'>
                    <div className='drop-sec'>
                        <div className='drop-items'>
                           <select className='form-select'>
                                <option value="" selected>Returns</option>
                                <option value="">High Returns</option>
                                <option value="">Low Returns</option>
                           </select>
                        </div>
                        <div className='drop-items'>
                            <select className='form-select'>
                                    <option value="" selected>Stars</option>
                                    <option value="">5 Star</option>
                                    <option value="">3 Star</option>
                                    <option value="">4 Star</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 col-sm-12'>
                    <div className='serch-drp-sec'>
                        <div className='search-bar-items'>
                            <input type="text" className="input-control search-icon"  placeholder="Search"/>
                        </div>
                        <div className='search-bar-items'>
                            <select className='form-select'>
                                    <option value="" selected>Sort</option>
                                    <option value="">10</option>
                                    <option value="">20</option>
                                    <option value="">50</option>
                            </select>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
    <section className='listing-details'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Axis Long Term Equity Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹79.91</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Aditya Birla Sun Life ELSS Tax Relief 96 - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Kotak Flexicap Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Mirae Asset Large Cap Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Bandhan Core Equity Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Mirae Asset Emerging Bluechip Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>ICICI Prudential Bluechip Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>Nippon India Large Cap Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>HDFC Mid-Cap Opportunities Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='row d-flex justify-content-between'>
                           <h3>HSBC Midcap Fund - Direct Plan Growth</h3>
                           <div className='start-rating'></div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <p className='category'>
                                    <span>Category : Equity - ELSS</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                </p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-5 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>0.63%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.37%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>6M</h5>
                                        <h5>15.55%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='right col-md-5'>
                            <ul className='fundlist-flex border-left'>
                                    <li className='fundlist text-center'>
                                        <h5 className='time-period'>1Y</h5>
                                        <h5>5.21%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3Y</h5>
                                        <h5>56.28%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>5Y</h5>
                                        <h5>63.98%</h5>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-2'>
                                <button type='button' className='btn-bg'>View Details</button>
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

export default SerachTopFunds