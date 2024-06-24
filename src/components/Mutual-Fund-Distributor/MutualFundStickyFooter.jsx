import React, { useEffect, useState, useRef } from 'react';
import '../../components/Common-features/SubbrokerStickyFooter';
import Modal from 'react-bootstrap/Modal';
import '../Common-features/MutualFundpopupform';
import utils from '../../Services/utils';

function MutualFundStickyFooter({MutualFundpopupform,openInfoPopup}) {
  



    return (
        <>
            <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                <button className=" primary-orange-btn scroll-top-account openbtn" onClick={MutualFundpopupform} >Become a MF Distributor</button>
            </div>
           
            
        </>
    )
}

export default MutualFundStickyFooter;
