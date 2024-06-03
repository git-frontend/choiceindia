import React, { useState } from "react";
import pin from '../../assets/images/contact/office.svg';
import clock from '../../assets/images/contact/business-hours.webp';
import { Form } from "react-bootstrap";
import LazyLoader from '../Common-features/LazyLoader';
import contactMap from "../../Data/ContactMapData";
import city_list from "../../Data/ContactCity";
import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, faClose, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactTemplate from "../Common-features/ContactTemplate";
import "../Investorcomplaints/investorcomplaints.scss";

import "../CEBPLPolicies/CEBPL-Policies.scss";



function Contactdetail() {

   // let temp = "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Choice%20International%20Limited,%20Sunil%20Patodia%20Tower,%20J%20B%20Nagar,%20Andheri%20(East),%20Mumbai%20400099.+(ChoiceIndia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
   const [MapNumber, setMapNumber] = useState(() => 0);
   const [firstMap, setIsFirstMap] = useState(() => true);
   const [showMap, setShowMap] = useState(() => false);
   const [check, setcheck] = useState(false);
   let data = {};

   let data2 = {}
   contactMap.forEach(ele => {


      data[ele.id] = ele
   })

   city_list.forEach(ele => {

      // console.log(ele.id, ele.city_name, " == ", data[ele.id] ? data[ele.id].id : 'no id', data[ele.id] ? data[ele.id].city : "")
      data2[ele.id] = ele
   })

   function checktable() {
      check = !check;
   }
   setTimeout(() => {
      setShowMap(() => true);
   }, 200)

   function selectCity(event) {
      // console.log("event",event.target.value)
      setIsFirstMap(() => false);
      setMapNumber(() => event.target.value);
   }

   return (

      /**======= */
      <div>
         <section className="contactdetail contactdetail-new">
            <div className="container">
               <div className="row">
                  <div className="col-md-12" >
                     <div className="text-center">
                        {/* <FontAwesomeIcon icon={faHeadphones} /><br/> */}
                        <p className="maintitle">Support Related Queries</p>
                     </div>
                     <div className="support-md">
                        <div className="text-center support-itm">
                           <FontAwesomeIcon icon={faPhone} />
                           <p><a href="tel:+918824242424" target="_blank">+91 88 24 24 24 24</a></p>
                        </div>
                        <div className="text-center support-itm">
                           <FontAwesomeIcon icon={faEnvelope} />
                           <p><a href="mailto:care@choiceindia.com" target="_blank">care@choiceindia.com</a></p>
                        </div>
                     </div>

                     <h3 className="text-center ">For any grievances reach out to our <a onClick={() => { setcheck(true) }} className="cursor-pointer">Escalation Matrix</a></h3>
                  </div>
               </div>

            </div>
            <div className="container mainwrapquick-table">



               {
                  check ?
                     <div className="row ">
                        <div className="col-md-12">
                           <div className="quicklinkswrap mt-5 mb-5">
                              <FontAwesomeIcon icon={faClose} className="icon-table cursor-pointer" onClick={() => { setcheck(false) }} />
                              <div className="clearfix"></div>
                              <h4 className="text-center text-uppercase mt-5 mb-5"><strong>Investor Grievance Redressal Mechanism</strong></h4>
                              <h4 className="text-left text-uppercase mt-5 mb-5"><strong>Escalation Matrix:</strong></h4>
                              <h4 className="text-left text-uppercase mt-5 mb-5"><strong>Annexure A</strong></h4>
                              <div className="table-responsive">
                                 <table className="table table-striped">
                                    <thead>
                                       <tr>
                                          <th className="text-uppercase pb-5">Details of</th>
                                          <th width="200" className="text-uppercase pb-5">Contact Person</th>
                                          <th className="text-uppercase text-left pb-5">Address</th>
                                          <th width="150" className="text-uppercase text-left pb-5">Contact No.</th>
                                          <th className="text-uppercase text-left pb-5">Email Id</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td >Customer care</td>
                                          <td>Shwetha S. Gupta</td>
                                          <td className="text-left">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri(East),Mumbai 400099.</td>
                                          <td className="text-left">022-69092489</td>
                                          <td className="text-left">care@choiceindia.com</td>
                                       </tr>
                                       <tr>
                                          <td>Head of Customer care</td>
                                          <td>Swetha Devadiga</td>
                                          <td className="text-left">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri(East),Mumbai 400099.</td>
                                          <td className="text-left">022-69092483</td>
                                          <td className="text-left">swetha.devadiga@choiceindia.com</td>
                                       </tr>
                                       <tr>
                                          <td>Compliance Officer</td>
                                          <td>Prashant Salian</td>
                                          <td className="text-left">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri(East),Mumbai 400099.</td>
                                          <td className="text-left">022-67079999
                                             - Ext-2310</td>
                                          <td className="text-left">Compliance@choiceindia.com</td>
                                       </tr>
                                       <tr>
                                          <td>CEO/Director</td>
                                          <td>Ajay Kejriwal</td>
                                          <td className="text-left">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri(East),Mumbai 400099.</td>
                                          <td className="text-left">022-6707 9999
                                             -
                                             Ext. 851</td>
                                          <td className="text-left">ea.ajay@choiceindia.com</td>
                                       </tr>
                                    </tbody>
                                 </table>

                              </div>
                           </div>

                        </div>
                        <p className="subtxt">In absence of response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI: at
                           https://scores.gov.in/scores/Welcome.html or Exchange /DP at: <br /><br />
                           BSE: https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx | NSE: https://investorhelpline.nseindia.com/NICEPLUS/ <br />
                           MCX: https://www.mcxindia.com/Investor-Services | NCDEX: https://ncdex.com/investor_complaint <br />
                           CDSL: https://www.cdslindia.com/Footer/grievances.aspx | NSDL: https://www.epass.nsdl.com/complaints/websitecomplaints.aspx <br /><br />
                           (Working hours of each escalation level- Monday to Friday 9.30 am to 12.30 pm and 2.00 pm to 6.00 pm &amp; Saturday 9.30 am to 4.00 PM)
                           <br /><br />
                           Please quote your Service Ticket/Complaint Ref No. while raising your complaint at SEBI SCORES/Exchange portal.</p>
                        <br></br></div> :
                     ""
               }



               <div className="row gap-5 mt-10">
                  <div className="col-md-5">
                     <div>
                        <LazyLoader src={pin} className={"img-fluid"} alt={"Office"} width={'50'} height={'50'} />
                        {/* <img src={pin} alt="Loading" /> */}
                        <p className="mt-3 maintitle">The Office </p>
                        <p className="subtext">Choice International Limited,<br /> Sunil Patodia Tower, J.B. Nagar, Andheri (East),<br /> Mumbai 400099</p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="">
                        <LazyLoader src={clock} className={"img-fluid"} alt={"Business Hours"} width={'50'} height={'50'} />
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
                              firstMap ? <option defaultValue>Mumbai</option> :
                                 ''
                           }

                           {/* <option value="0" >Pune</option>
                                 <option value="1">Mumbai</option> */}
                           {
                              city_list.map((item, i) => {

                                 return (

                                    <option key={item.id} value={item.id}>{item && item.city_name ? item.city_name.toUpperCase() : 'NA'}</option>

                                 )
                              })
                           }
                        </Form.Select>
                     </div>
                  </div>
                  {
                     firstMap ?
                        <div className="text-right address">
                           <p className="maintitle">Mumbai, Maharashtra</p>
                           {/* <p className="subtext mb-0">(+91) - 8080-80-8875</p> */}
                           <p className="subtext cursor-pointer"><a href="mailto:support@choiceindia.com" target="_blank">support@choiceindia.com</a></p>
                           <p className="subtext">Choice International Limited, Sunil Patodia Tower,<br />
                              J B Nagar, Andheri East, Mumbai, Maharashtra 400099
                           </p>
                        </div> :
                        <div className="text-right address" key={data[MapNumber].id}>
                           <p className="maintitle">{data[MapNumber].city}</p>
                           {/* <p className="subtext mb-0">{data[MapNumber].mobNum}</p> */}
                           {/* <p className="subtext">{data[MapNumber].support}</p> */}
                           <p className="subtext cursor-pointer"><a href="mailto:support@choiceindia.com" target="_blank">support@choiceindia.com</a></p>
                           <p className="subtext">{data[MapNumber].address1}<br />
                              {data[MapNumber].address2} <br />{data[MapNumber].address3}
                           </p>
                        </div>
                  }
               </div>

            </div>
            {
               showMap ? firstMap ?
                  <div className='container-fluid mt-10'>
                     <div className='row'>
                        <div className='map '>
                           <div>
                              <iframe className="gm-control-active contact-map" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0467468308443!2d72.86217461437725!3d19.10560505600722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c839a2cd1731%3A0xb39db16c9cf8362b!2sChoice!5e0!3m2!1sen!2sin!4v1655288552703!5m2!1sen!2sin"><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe></div>
                        </div>
                     </div>
                  </div> :
                  <div className='container-fluid mt-10'>
                     <div className='row'>
                        {
                           data[MapNumber].mapSrc === "" ?
                              <div></div> :
                              <div className='map '>
                                 <div>
                                    <iframe className="gm-control-active contact-map" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={data[MapNumber].mapSrc}><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe></div>
                              </div>
                        }

                     </div>
                  </div> : ''
            }
         </section>
      </div>
   );
}
export default Contactdetail;
