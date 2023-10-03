import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import PreSingleArrow from '../../assets/images/amc-details/pre-arrow-single.svg';
import PreDobbleArrow from '../../assets/images/amc-details/pre-arrow-dobble.svg';
import NextSingleArrow from '../../assets/images/amc-details/next-arrow-single.svg';
import NextDobbleArrow from '../../assets/images/amc-details/next-arrow-dobble.svg';


function SerachTopFunds() {
  return (
    <>
    <section className='search-amc-sec'>
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='col-xl-4 col-md-5 col-sm-12'>
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
                <div className='col-xl-5 col-md-7 col-sm-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
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
                            <div className='col-xl-5 col-md-6 left'>
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
                            <div className='right col-xl-5 col-md-6'>
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
                            <div className='col-xl-2 col-md-12'>
                                <button type='button' className='btn-bg'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <span className='bg-before'></span>
                    <div className='wrapper'>
                        <ul className='pagination-sec'>
                            <li>
                                <a class="" href="#">
                                    <LazyLoader src={PreSingleArrow} className="img-fluid" width={20} height={29}></LazyLoader>
                                </a>
                            </li>
                            <li>
                                <a class="" href="#">
                                    <LazyLoader src={PreDobbleArrow} className="img-fluid" width={25} height={29}></LazyLoader>
                                </a>
                            </li>
                            <li>
                                <ul className="pagination">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#" class="active">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a class="" href="#">
                                    <LazyLoader src={NextDobbleArrow} className="img-fluid" width={25} height={29}></LazyLoader>
                                </a>
                            </li>
                            <li>
                                <a class="" href="#">
                                    <LazyLoader src={NextSingleArrow} className="img-fluid" width={20} height={29}></LazyLoader>
                                </a>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SerachTopFunds