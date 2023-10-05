import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp} from '@fortawesome/free-solid-svg-icons';
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
                                <option value="" defaultValue>Returns</option>
                                <option value="">High Returns</option>
                                <option value="">Low Returns</option>
                           </select>
                        </div>
                        <div className='drop-items'>
                            <select className='form-select'>
                                    <option value="" defaultValue>Stars</option>
                                    <option value="">5 Star</option>
                                    <option value="">3 Star</option>
                                    <option value="">4 Star</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-xl-5 col-md-7 col-sm-12'>
                    <div className='serch-drp-sec'>
                        <div className='search-bar-items left-sec'>
                            <input type="text" className="input-control search-icon"  placeholder="Search"/>
                        </div>
                        <div className='search-bar-items right-sec'>
                            <select className='form-select'>
                                    <option value="" defaultValue>Sort</option>
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
                        <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Equity Savings Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xl-5 col-md-6 left'>
                                <ul className='fundlist-flex'>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>1M</h5>
                                        <h5>1.41%</h5>
                                    </li>
                                    <li className='fundlist'>
                                        <h5 className='time-period'>3M</h5>
                                        <h5>4.70%</h5>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Balanced Advantage Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Floating Rate Debt Fund Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Mid-Cap Opportunities Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Small Cap Fund - Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Flexi Cap Fund - Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Small Cap Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Equity Savings Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Hybrid Debt Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                    <div className="display-flex">
                            <div className='flex-i'>
                               <h3>HDFC Short Term Debt Fund - Direct Plan Growth</h3>
                                <p className='category'>
                                    <span>Category : Equity - Hybrid</span>
                                    <span className='brder-left'>NAV : ₹49.58</span>
                                    <span className='brder-left'>AUM: ₹2,844Cr.</span>
                                </p>
                            </div>
                            <div className='flex-i'>
                                <div className='rating-det'>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                    <FontAwesomeIcon icon={faStar} className='fill'/>
                                </div>
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
                                <a className="" href="#">
                                    <LazyLoader src={PreSingleArrow} className="img-fluid" width={20} height={29}></LazyLoader>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
                                    <LazyLoader src={PreDobbleArrow} className="img-fluid" width={25} height={29}></LazyLoader>
                                </a>
                            </li>
                            <li>
                                <ul className="pagination">
                                    <li><a href="#">1</a></li>
                                    <li><a href="#" className="active">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                </ul> 
                            </li>
                            <li>
                                <a className="" href="#">
                                    <LazyLoader src={NextDobbleArrow} className="img-fluid" width={25} height={29}></LazyLoader>
                                </a>
                            </li>
                            <li>
                                <a className="" href="#">
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