
import React from "react";
import pin from '../../assets/images/contact/pin.svg';
import clock from '../../assets/images/contact/clock.png';
function Contactdetail() {

  return (
    <div>
        
        <section className="contactdetail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="">
                                <img src={pin} />
                                <p>The Office </p>
                                <p>Choice Wealth Management Pvt. Ltd. Choice House, Shree Shakambhari Corporate Park, Plt No: -156-158, J.B. Nagar, Andheri (East), Mumbai - 400 099</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <img src={clock} />
                                <p>The Office </p>
                                <p>Choice Wealth Management Pvt. Ltd. Choice House, Shree Shakambhari Corporate Park, Plt No: -156-158, J.B. Nagar, Andheri (East), Mumbai - 400 099</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
        </section>
     
    
      
    
    </div>
  );
}

export default Contactdetail;
