import './Thankyoupopup.scss';
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import successimg from '../../assets/images/success.svg';
import failureimg from '../../assets/images/failure.svg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Thankyoupopup({ isShow, isBlog }) {

  // console.log("Thank you Page "+window.location.pathname);
  const [classIdentifier,setClassIdentifier]=useState();

  //  console.log('TRTR', isShow);

  // useEffect(() => {
  //   if(isShow.closeOTP){
  //     isShow.closeOTP;
  //   }
  // },[isShow])
  // const [show, setShow] = useState(isShow);
  // const show = useRef(null);
  //  const [check, setCheck] = useState(true);
  // useEffect(() => {
  //   // setShow(() => isShow)
  //   show.current = isShow.showModal;
  //   console.log('effect',show);
  // },[props]);

  // function closeModal(){
  //   // setShow(() => false);
  //   show.current = false;
  //   console.log('CLosemodal',show)
  // }

  // const [display, setDisplay] = useState(true);
  

  function leadIdentifierClass() {
  setClassIdentifier('')
  if (window.location.pathname.includes('sub-broker-franchise') || window.location.pathname.includes('authorised-person') || window.location.pathname.includes('remisier') || isBlog === 'blog') {
    setClassIdentifier('sub-broker-success')
  } else if (window.location.pathname.includes('corporate-demat-account')) {
      setClassIdentifier('corporate-dl-success');
  }
   else if (window.location.pathname.includes('minor-demat-account')) {
      setClassIdentifier('minor-dl-success');
  }
     else if(window.location.pathname.includes('nri-demat-account')){
    setClassIdentifier('nri-dl-success')
  } 
  else if (window.location.pathname.includes('open-free-demat-account') || window.location.pathname.includes('demat-account') ||
    window.location.pathname.includes('open-brokerage-account') || window.location.pathname.includes('open-demat-trading-account')
    || window.location.pathname.includes('open-demat-account') || window.location.pathname.includes('free-amc-demat-account') ||
    window.location.pathname.includes('open-trading-account') || window.location.pathname.includes('trading-account') || window.location.pathname.includes('equity-stock-trading') ||
    window.location.pathname.includes('derivatives-trading') || window.location.pathname.includes('commodity-trading') || window.location.pathname.includes('currency-forex-trading') ||
    window.location.pathname.includes('best-stocks-to-buy') || window.location.pathname.includes('best-intraday-stocks-to-buy') ||
    window.location.pathname.includes('best-short-term-stocks-to-buy') || window.location.pathname.includes('best-stocks-for-long-term-investment')
    || window.location.pathname.includes('stock-market-holidays') || window.location.pathname.includes('nse-holidays') ||
    window.location.pathname.includes('bse-holidays') || window.location.pathname.includes('mcx-ncdex-holidays') ||
    window.location.pathname.includes('sumeet-bagadia') || window.location.pathname.includes('intraday-charges') ||
    window.location.pathname.includes('ipo-investment-account') || window.location.pathname.includes('commodity-margin-calculator') ||
    window.location.pathname.includes('forex-margin-calculator') || window.location.pathname.includes('brokerage-calculator') ||
    window.location.pathname.includes('margin-calculator') || window.location.pathname.includes('futures-and-options-margin-calculator') ||
    window.location.pathname.includes('option-chain') || window.location.pathname.includes('nse-option-chain') ||
    window.location.pathname.includes('mcx-option-chain') || window.location.pathname.includes('currency-option-chain') ||
    window.location.pathname.includes('open-demat-account') || window.location.pathname.includes('free-demat-account') ||
    window.location.pathname.includes('futures-options-trading') || window.location.pathname.includes('commodity-trading') ||
    window.location.pathname.includes('forex-trading') || window.location.pathname.includes('technical-analysis') ||
    window.location.pathname.includes('trading-strategies') || window.location.pathname.includes('etf-exchange-traded-funds') ||
    window.location.pathname.includes('upcoming-agm') || window.location.pathname.includes('upcoming-board-meeting') ||
    window.location.pathname.includes('upcoming-bonus-shares') || window.location.pathname.includes('upcoming-dividend-paying-stocks') ||
    window.location.pathname.includes('upcoming-stock-splits') || window.location.pathname.includes('upcoming-rights-issue') ||
    window.location.pathname.includes('fno-trading') || window.location.pathname.includes('intraday-trading')) {
      setClassIdentifier('campaign-success');
  } 
    else if (window.location.pathname.includes('mutual-funds-investment') || window.location.pathname.includes('sip-calculator')
      || window.location.pathname.includes('mutual-fund-calculator')) {
      setClassIdentifier('mf-success');
  }
   } 

  useEffect(() => {
    //  console.log('Inside thanku',isShow)
    leadIdentifierClass();
    if (isShow.page != 'add-lead' && !isShow.redirectionLink) {
      setTimeout(() => {
        if (isShow.redirectionLink === null) {
          isShow.closeMd();
        } else {
          isShow.closeMd(isShow.redirectionLink);
        }
      }, 15000)
    } else if (isShow.page != 'add-lead' && isShow.redirectionLink) {
      setTimeout(() => {
        if (isShow.redirectionLink === null) {
          isShow.closeMd();
        } else {
          isShow.closeMd(isShow.redirectionLink);
        }
      }, 15000)
    }
  }, [])

  // function closeModal() {
  //   setDisplay(false);
  //   props.toggleModal(false)
  // }

  return (
    <>
      {
        isShow.page == 'add-lead' ?
          <div>
            <Modal className='common-modal-css common-modal-thankyou'
              show={isShow.showModal}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              backdrop='static'
              keyboard={false}
              centered
              onHide={() => isShow.closeMd()}
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {
                  isShow.isFailure ? <img src={failureimg} height="80" width="80" alt='Failure' /> : <img src={successimg} height="100" width="100" alt='Success' />
                }
                {/* {
                  check ? <img src={failureimg} height="80" width="80" alt='Failure' /> : <img src={successimg} height="100" width="100" alt='Success' />
                } */}
                <h4>{isShow.titleText}</h4>
                {/* <h4>Oops</h4> */}
                <h3>
                  {isShow.msgText}
                </h3>
                {/* <h3>
                  Something went wrong!
                </h3> */}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="warning" className='btn-yellow' onClick={() => isShow.closeMd()}>Ok</Button>
              </Modal.Footer>
            </Modal>
          </div> :

          <Modal className='common-modal-css common-modal-thankyou  thanku-mdl-parent'
            show={isShow.showModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop='static'
            keyboard={false}
            centered
          >

            <Modal.Body className='thanku-mdl-parent'>
              <div>
                <div className="thanku-overlay thanku-popup-active" >
                  <div className="thanku-popup">
                    <div className="sub-row">
                      <div className="close">
                        {/* <Link to="" className="closebtn" onClick={()=>isShow.closeMd(isShow.redirectionLink)} >&times;</Link> */}
                      </div>
                      {/* <div className={((window.location.pathname.indexOf('sub-broker-franchise') > -1) || (window.location.pathname.indexOf('authorised-person') > -1) || (window.location.pathname.indexOf('remisier') > -1) || (isBlog === 'blog')) ? "thanku sub-broker-success" : ((!isShow.isOnboarding) && (window.location.pathname.indexOf('mutual-fund-distributor') > -1)) ? 'thanku mf-distributor-leads' : (((window.location.pathname.indexOf('sub-broker-franchise') === -1) && (window.location.pathname.indexOf('authorised-person') === -1) && (window.location.pathname.indexOf('remisier') === -1)) && (window.location.pathname.indexOf("nri-demat-account") === -1)&&(window.location.pathname.indexOf("demat-account") === -1)&& (window.location.pathname.indexOf("/minor-demat-account") === -1) && (window.location.pathname.indexOf("/corporate-demat-account") === -1)) ? 'thanku campaign-success' : (((window.location.pathname.indexOf("/minor-demat-account") > -1)) ? 'thanku minor-dl-success' : (((window.location.pathname.indexOf("nri-demat-account") > -1)) ? 'thanku nri-dl-success' : (((window.location.pathname.indexOf("/corporate-demat-account") > -1)) ? 'thanku corporate-dl-success' : 'thanku ')))}> */}
                      <div className={`thanku ${classIdentifier}}`}>
                        <h1>Thank You !</h1>
                      </div>

                      <div className="body-content">
                        {/* <p className="heading">Thank You For Your Registration!</p> */}
                        <p className="subheading">{isShow.resText ? isShow.resText : "You are being redirected to onboarding page!"}</p>
                        {/* <button className="btn-yellow" onClick={() => isShow.closeMd(isShow.redirectionLink)}>OK</button> */}
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

        // <div>
        //   <div className="thanku-overlay thanku-popup-active">
        //     <div className="thanku-popup">
        //       <div className="sub-row">
        //         <div className="close">
        //           {/* <Link to="" className="closebtn" onClick={()=>isShow.closeMd(isShow.redirectionLink)} >&times;</Link> */}
        //         </div>
        //         <div className="thanku">
        //           <h1>Thank You !</h1>
        //         </div>
        //         <div className="body-content">
        //           <p className="heading">Thank You For Your Registration!</p>
        //           <p className="subheading">You are being redirected to onboarding page!</p>
        //           <button className="btn-yellow" onClick={() => isShow.closeMd(isShow.redirectionLink)}>OK</button>
        //           <div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>

      }


    </>
  )
}
export default Thankyoupopup;
