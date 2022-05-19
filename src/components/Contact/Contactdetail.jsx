import React from "react";
import pin from '../../assets/images/contact/pin.svg';
import clock from '../../assets/images/contact/clock.png';
import {Dropdown} from 'react-bootstrap';
function Contactdetail() {
return (
<div>
   <section className="contactdetail">
      <div className="container">
         <div className="row gap-5">
            <div className="col-md-4">
               <div className="">
                  <img src={pin} />
                  <p className="mt-3">The Office </p>
                  <p>Choice Wealth Management Pvt. Ltd. <br/>Choice House, Shree Shakambhari Corporate Park, <br/>Plt No: -156-158, J.B. Nagar, Andheri (East), <br/>Mumbai - 400 099</p>
               </div>
            </div>
            <div className="col-md-4">
               <div className="">
                  <img src={clock} />
                  <p className="mt-3">Business Hours</p>
                  Monday-Friday: 8:30 am - 7:00 pm <br/>
                  Saturday: 10:00 am - 4:00 pm
               </div>
            </div>
         </div>
      </div>
      <div className="container mt-10" >
         <div className="d-flex justify-content-between ">
            <div>
               120+ branches and partner offices
               <p>Locate and office in your city</p>
            </div>
            <div>
               Bhopal, Madhya Pradesh
               <p>(+91) - 8080-80-8875</p>
               <p>support@choiceindia.com</p>
               <p>Behari Complex, R-2, Ram Gopal Maheshwari Marg,<br/>
                  Opp Harsh Express,Near Bank, Zone-I,Maharana <br/>Pratap Nagar, Bhopal, Madhya Pradesh 462011
               </p>
            </div>
         </div>
         <div className='col-md-5 '>
                            <div className='cust-dropdown'>
                            <Dropdown>
                                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                  Mumbai
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bangalore</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Hyderabad</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>

                                
                            </div>
                        </div>
      </div>
      <div className='container-fluid mt-10'>
      <div className='row'>
      <div className='map bg-light'></div>
      </div>
      </div>
   </section>
</div>
);
}
export default Contactdetail;