import React from "react";
import pin from '../../assets/images/contact/pin.svg';
import clock from '../../assets/images/contact/clock.png';
import { Form } from "react-bootstrap";
function Contactdetail() {
return (
<div>
   <section className="contactdetail">
      <div className="container">
         <div className="row gap-5">
            <div className="col-md-5">
               <div className="">
                  <img src={pin} alt="Loading" />
                  <p className="mt-3 maintitle">The Office </p>
                  <p className="subtext">Choice Wealth Management Pvt. Ltd. <br/>Choice House, Shree Shakambhari Corporate Park, <br/>Plt No: -156-158, J.B. Nagar, Andheri (East), <br/>Mumbai - 400 099</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="">
                  <img src={clock} alt="Loading" />
                  <p className="mt-3 maintitle">Business Hours</p>
                  <p className="subtext">Monday-Friday: 8:30 am - 7:00 pm <br/>
                  Saturday: 10:00 am - 4:00 pm</p>
               </div>
            </div>
         </div>
      </div>
      <div className="container mt-10 "  >
         <div className="d-flex justify-content-between detailwrap">
            
            <div className='d-flex flex-column flex-column-left'>
               <div>
                  <p className="maintitle">120+ branches and partner offices</p>
                  <p className="subhead">Locate and office in your city</p>
               </div>
               <div className='cust-dropdown'>
              
                <Form.Select variant="Info" id="dropdown-basic" >
                  <option defaultValue>Select Your City</option>
                  <option >Delhi</option>
                  <option >Bangalore</option>
                  <option >Hyderabad</option>

                </Form.Select>
            
               </div>
            </div>
            <div className="text-right address">
               <p className="maintitle">Bhopal, Madhya Pradesh</p>
               <p className="subtext mb-0">(+91) - 8080-80-8875</p>
               <p className="subtext">support@choiceindia.com</p>
               <p className="subtext">Behari Complex, R-2, Ram Gopal Maheshwari Marg,<br/>
                  Opp Harsh Express,Near Bank, Zone-I,Maharana <br/>Pratap Nagar, Bhopal, Madhya Pradesh 462011
               </p>
            </div>
         </div>
        
      </div>
      <div className='container-fluid mt-10'>
         <div className='row'>
            <div className='map '>
               <div style={{width: "100%"}}>
                  <iframe width="100%" height="400" className="gm-control-active" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Choice%20International%20Limited,%20Sunil%20Patodia%20Tower,%20J%20B%20Nagar,%20Andheri%20(East),%20Mumbai%20400099.+(ChoiceIndia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe></div>
            </div>
         </div>
      </div>
   </section>
</div>
);
}
export default Contactdetail;