import './Thankyoupopup.scss';
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import successimg from '../../assets/images/success.svg';
import failureimg from '../../assets/images/failure.svg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Thankyoupopup({ isShow }) {

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

  useEffect(() => {
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
                  <div className={"thanku-popup "+((window.location.pathname =="/sub-broker-franchise" || window.location.pathname =="/authorised-person" || window.location.pathname =="/remisier") ?'sub-broker-success':'campaign-success')}>
                    <div className="sub-row">
                      <div className="close">
                        {/* <Link to="" className="closebtn" onClick={()=>isShow.closeMd(isShow.redirectionLink)} >&times;</Link> */}
                      </div>
                      <div className="thanku">
                        <h1>Thank You !</h1>
                      </div>
                      <div className="body-content">
                        <p className="heading">Thank You For Your Registration!</p>
                        <p className="subheading">You are being redirected to onboarding page!</p>
                        <button className="btn-yellow" onClick={() => isShow.closeMd(isShow.redirectionLink)}>OK</button>
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
