import React from 'react'

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp} from '@fortawesome/free-solid-svg-icons'


function SchemeComparison() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };

  return (
    <>
       <div className='card-mn box-shadow fund-comparison-details'>
            <h3 className='title-secnd'><span>Peer</span> Scheme Comparison</h3>
            <div className='scheme-list'>
                <div className='scheme-list-itm active-itm'>
                    <div className='list-itm-lft'>
                    <h4>Quant Tax Plan Growth</h4>
                    <h5><span>AUM</span> 4,433 Cr</h5>
                    <div className='rating-det'>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
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
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='unfill'/>
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
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='unfill'/>
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
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='unfill'/>
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
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
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
            </div>
        </div>  
    </>
  )
}

export default SchemeComparison