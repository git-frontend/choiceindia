import './Thankyoupopup.scss';
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import successimg from '../../assets/images/success.svg';
import failureimg from '../../assets/images/failure.svg';

function Thankyoupopup({isShow}) {

  console.log('TRTR',isShow);

  // useEffect(() => {
  //   if(isShow.closeOTP){
  //     isShow.closeOTP;
  //   }
  // },[isShow])
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

  return (
    <>
      {
        isShow.page == 'add-lead'?
        <div>
          <div className="thanku-overlay thanku-popup-active">
            <div className="thanku-popup">
              <div className="sub-row">
                {/* <div className="close">
                  <Link to="" className="closebtn" onClick={closeModal} >&times;</Link>
                </div> */}
                {/* <div className="thanku">
                  <h1>Thank You !</h1>
                </div> */}
                <div className="body-content">
                <div className="close">
                  <Link to="" className="closebtn" onClick={()=>isShow.closeMd()}>&times;</Link>
                </div>
                  {/* <p className="heading">Thank You For Your Registration!</p> */}
                  <div className='body-img'>
                    {
                      isShow.isFailure? <img src = {failureimg} height="100" width="100" alt='Failure'/>:<img src = {successimg} height="100" width="100" alt='Success'/>
                    }
                  </div>
                  <p className="heading">{isShow.titleText}</p>
                  {/* <p className="subheading">You are being redirected to onboarding page!</p> */}
                  <p className="subheading">{isShow.msgText}</p>
                  <button className="btn-yellow" onClick={()=>isShow.closeMd()}>OK</button>
                  <div>

                  </div>



                </div>


              </div>
            </div>
          </div>
        </div> : 
        <div>
        <div className="thanku-overlay thanku-popup-active">
          <div className="thanku-popup">
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
                <button className="btn-yellow" onClick={()=>isShow.closeMd(isShow.redirectionLink)}>OK</button>
                <div>
  
                </div>
  
  
  
              </div>
  
  
            </div>
          </div>
        </div>
        </div>
  
  
      }


    </>
  )
}

export default Thankyoupopup;