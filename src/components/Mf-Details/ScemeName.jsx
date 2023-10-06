import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp} from '@fortawesome/free-solid-svg-icons'

function ScemeName() {

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
        
        <div className='card-mn box-shadow card-top-details'>
            <div className='row'>
                <div className='col-md-7'>
                    <h3 className='title-secnd'>Quant Tax Plan Growth</h3>
                    <div className='rating-det'>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='fill'/>
                        <FontAwesomeIcon icon={faStar} className='unfill'/>
                    </div>
                    <div className='detaisl-amt-des'>
                        <p className='mar-0'>Tax Saving (ELSS) Funds | Inception Date : Apr 01, 2000</p>
                        <p>Min. Lumpsum Investment <strong>₹ 500</strong></p>
                        <p>Nav <strong>₹ 280.71</strong> | <strong>Sep 13, 2023</strong></p>
                    </div>
                </div>
                <div className='col-md-5 '>
                <div className='holding-value-cont'>
                    <div className='holding-value'>
                        <h4>149.47 &nbsp;<FontAwesomeIcon icon={faArrowUp} className='fill'/></h4>
                        <p>3 Year Return (%)</p>
                    </div>
                    <div className='inv-btn'>
                        <a href='/open-free-demat-account' className='btn-bg'>Invest Now</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ScemeName