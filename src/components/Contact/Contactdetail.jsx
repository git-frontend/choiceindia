import React, { useEffect, useState } from "react";
import pin from '../../assets/images/contact/pin.svg';
import clock from '../../assets/images/contact/clock.png';
import { Form } from "react-bootstrap";
import LazyLoader from '../Common-features/LazyLoader';
import contactMap from "../../Data/ContactMapData";
import city_list from "../../Data/ContactCity";

function Contactdetail() {

   let temp = "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Choice%20International%20Limited,%20Sunil%20Patodia%20Tower,%20J%20B%20Nagar,%20Andheri%20(East),%20Mumbai%20400099.+(ChoiceIndia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
   const [skeleton, setSkeleton] = useState(() => true);
   const [MapNumber, setMapNumber] = useState(() => 0);
   const [firstMap, setIsFirstMap] = useState(() => true);

   setTimeout(() => {
      setSkeleton(() => false);
    }, 1000)

   function selectCity(event) {
      setIsFirstMap(() => false);
      setMapNumber(() => event.target.value);
   }

   return (


      skeleton ?
         <div>
            <section className="contactdetail contactdetail-skeleton">
               <div className="container">
                  <div className="row gap-5">
                     <div className="col-md-5">
                        <div className="">
                           <div className="skeleton-child-img" ></div>
                           {/* <img src={pin} alt="Loading" /> */}
                           <p className="mt-3 maintitle skeleton-child">The Office </p>
                           <p className="subtext skeleton-child">Choice Wealth Management Pvt. Ltd. <br />Choice House, Shree Shakambhari Corporate Park, <br />Plt No: -156-158, J.B. Nagar, Andheri (East), <br />Mumbai - 400 099</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="">
                           <div className="skeleton-child-img" ></div>
                           {/* <img src={clock} alt="Loading" /> */}
                           <p className="mt-3 maintitle skeleton-child">Business Hours</p>
                           <p className="subtext skeleton-child">Monday-Friday: 8:30 am - 7:00 pm <br />
                              Saturday: 10:00 am - 4:00 pm</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container mt-10 "  >
                  <div className="d-flex justify-content-between detailwrap">

                     <div className='d-flex flex-column flex-column-left'>
                        <div>
                           <p className="maintitle skeleton-child">120+ branches and partner offices</p>
                           <p className="subhead skeleton-child">Locate and office in your city</p>
                        </div>
                        <div className='cust-dropdown'>

                           <Form.Select variant="Info" id="dropdown-basic" className="skeleton-child" >
                              <option selected>Select Your City</option>
                              <option >Delhi</option>
                              <option >Bangalore</option>
                              <option >Hyderabad</option>

                           </Form.Select>

                        </div>
                     </div>
                     <div className="text-right address">
                        <p className="maintitle skeleton-child">Bhopal, Madhya Pradesh</p>
                        <p className="subtext mb-0 skeleton-child">(+91) - 8080-80-8875</p>
                        <p className="subtext skeleton-child">support@choiceindia.com</p>
                        <p className="subtext skeleton-child">Behari Complex, R-2, Ram Gopal Maheshwari Marg,<br />
                           Opp Harsh Express,Near Bank, Zone-I,Maharana <br />Pratap Nagar, Bhopal, Madhya Pradesh 462011
                        </p>
                     </div>
                  </div>

               </div>
               <div className='container-fluid mt-10 skeleton-child-map'>
                  <div className='row'>
                     <div className='map'>
                        <div style={{ width: "100%" }}></div>

                     </div>
                  </div>
               </div>
            </section>
         </div> :

         /**======= */
         <div>
            <section className="contactdetail">
               <div className="container">
                  <div className="row gap-5">
                     <div className="col-md-5">
                        <div className="">
                           <LazyLoader src={pin} className="" alt="Loading" />
                           {/* <img src={pin} alt="Loading" /> */}
                           <p className="mt-3 maintitle">The Office </p>
                           <p className="subtext">Choice Wealth Management Pvt. Ltd. <br />Choice House, Shree Shakambhari Corporate Park, <br />Plt No: -156-158, J.B. Nagar, Andheri (East), <br />Mumbai - 400 099</p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="">
                           <LazyLoader src={clock} className="" alt="Loading" />
                           {/* <img src={clock} alt="Loading" /> */}
                           <p className="mt-3 maintitle">Business Hours</p>
                           <p className="subtext">Monday-Friday: 8:30 am - 7:00 pm <br />
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

                           <Form.Select variant="Info" id="dropdown-basic" onChange={selectCity}>
                              {
                                 firstMap?<option defaultValue>Mumbai</option>:
                                 ''
                              }
                              
                              {/* <option value="0" >Pune</option>
                                 <option value="1">Mumbai</option> */}
                              {
                                 city_list.map((item, i) => {

                                    return <option value={i}>{item ? item.city_name : 'NA'}</option>
                                 })
                              }
                           </Form.Select>
                        </div>
                     </div>
                     {
                        firstMap ?
                           <div className="text-right address">
                              <p className="maintitle">Mumbai, Maharashtra</p>
                              <p className="subtext mb-0">(+91) - 8080-80-8875</p>
                              <p className="subtext">support@choiceindia.com</p>
                              <p className="subtext">Choice International Limited, Sunil Patodia Tower,<br />
                                 Opp Harsh Express,Near Bank, Zone-I,Maharana  <br />J B Nagar, Andheri East, Mumbai, Maharashtra 400099
                              </p>
                           </div> :
                           <div className="text-right address">
                              <p className="maintitle">{contactMap[MapNumber].city}</p>
                              <p className="subtext mb-0">{contactMap[MapNumber].mobNum}</p>
                              <p className="subtext">{contactMap[MapNumber].support}</p>
                              <p className="subtext">{contactMap[MapNumber].address1}<br />
                                 {contactMap[MapNumber].address2} <br />{contactMap[MapNumber].address3}
                              </p>
                           </div>
                     }
                  </div>

               </div>
               {
                  firstMap ?
                     <div className='container-fluid mt-10'>
                        <div className='row'>
                           <div className='map '>
                              <div style={{ width: "100%" }}>
                                 <iframe width="100%" height="400" className="gm-control-active" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0467468308443!2d72.86217461437725!3d19.10560505600722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c839a2cd1731%3A0xb39db16c9cf8362b!2sChoice!5e0!3m2!1sen!2sin!4v1655288552703!5m2!1sen!2sin"><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe></div>
                           </div>
                        </div>
                     </div> :
                     <div className='container-fluid mt-10'>
                        <div className='row'>
                           <div className='map '>
                              <div style={{ width: "100%" }}>
                                 <iframe width="100%" height="400" className="gm-control-active" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={contactMap[MapNumber].mapSrc}><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe></div>
                           </div>
                        </div>
                     </div>
               }
            </section>
         </div>
   );
}
export default Contactdetail;