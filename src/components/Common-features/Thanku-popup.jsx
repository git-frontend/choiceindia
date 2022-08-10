import './Thankyoupopup.scss';
import React, { useState } from 'react';
import { useEffect } from 'react';
import successimg from '../../assets/images/success.svg';
import failureimg from '../../assets/images/failure.svg';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Thankyoupopup({ isShow }) {

  console.log('TRTR', isShow);
  // const [show, setShow] = useState(isShow);
  // const show = useRef(null);

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
        <div>

          <Modal className='common-modal-css common-modal-thankyou'
            show={isShow.showModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
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
                <h4>{isShow.titleText}</h4>
              <h3>
                {isShow.msgText}
              </h3>
            </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" className='btn-yellow' onClick={() => isShow.closeMd()}>Ok</Button>
                </Modal.Footer>
          </Modal>

          {/* <div className="thanku-overlay thanku-popup-active">
            <div className="thanku-popup">
              <div className="sub-row">
                <div className="close">
                  <Link to="" className="closebtn" onClick={closeModal} >&times;</Link>
                </div>
                <div className="thanku">
                  <h1>Thank You !</h1>
                </div>
                <div className="body-content">
                  <div className="close">
                    <Link to="" className="closebtn" onClick={() => isShow.closeMd()}>&times;</Link>
                  </div>
                  <p className="heading">Thank You For Your Registration!</p>
                  <div className='body-img'>
                    {
                      isShow.isFailure ? <img src={failureimg} height="100" width="100" alt='Failure' /> : <img src={successimg} height="100" width="100" alt='Success' />
                    }
                  </div>
                  <p className="heading">{isShow.titleText}</p>
                  <p className="subheading">You are being redirected to onboarding page!</p>
                  <p className="subheading">{isShow.msgText}</p>
                  <button className="btn-yellow" onClick={() => isShow.closeMd()}>OK</button>
                  <div>

                  </div>



                </div>


              </div>
            </div>
          </div> */}
        </div>
      }


    </>
  )
}

export default Thankyoupopup;