import React from 'react'

import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import "./mf-details.scss";
import SerachTopFunds from './SerachTopFunds';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import Image1 from '../../assets/images/mf-investica/pie-chart.png';
import Form from 'react-bootstrap/Form';

function FundManager() {

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
        <div className='card-mn fund-mang-details'>
            <h3>Fund Manager Details</h3>
            <h4>Ankit Pande</h4>
            <p>Mr. Ankit Pande holds CFA, MBA. He began his career in core banking software with Infosys Finacle. Began his career in equity research in 2011, picking up the (U.S. based) CFA charter in 2015 and MBA from The Chinese University of Hong Kong in 2017. He won the Thomson Reuters StarMine Award for best stock picker in the IT sector in 2014 and is a lifetime member of the Beta Gamma Sigma honour society.</p>
        </div>  
    </>
  )
}

export default FundManager