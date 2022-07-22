import './Thankyoupopup.scss';
import { Link } from "react-router-dom";
function Thankyoupopup() {
  return (
    <>
<div>
      <div className="thanku-overlay thanku-popup-active">
        <div className="thanku-popup">
          <div className="sub-row">
             <div className="close">
                <Link to="" className="closebtn" >&times;</Link>
              </div> 
            <div className="thanku">
              <h1>Thank You !</h1>
            </div>
            <div className="body-content">
              <p className="heading">Thank You For Your Registration!</p>
              <p className="subheading">You are being redirected to onboarding page!</p>
              <button className="btn-yellow">OK</button>
              <div>

              </div>



            </div>


          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Thankyoupopup;