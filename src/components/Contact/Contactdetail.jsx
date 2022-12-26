import React, { useState, useEffect } from "react";
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
import contactService from "../../Services/contactService";
import noDataimg from '../../assets/images/no-data.webp';

function Contactdetail() {
   const [address, setaddress] = useState({});
   const [city, setcity] = useState('MUMBAI');
   const [check, setcheck] = useState(false);
   const [trigger, setTrigger] = useState(false);
   let citylists = [];

   function cityList() {
      contactService.contactCity().then(res => {
         if (res && res.data && res.data.data) {
            console.log(res.data.data);
            
            res.data.data.forEach(ele => {

               if (!citylists[ele.branch_name]) {
                  citylists[ele.branch_name] = [];
                  citylists[ele.branch_name].push(ele);
               } else {
                  citylists[ele.branch_name].push(ele);
               }
               
            })
            setaddress(citylists);   
         }
      })
   }

   function selectCity() {
      setcity(event.target.value); 
   }

   useEffect(() => {
      setTrigger(true)
      if (trigger === true) {
          cityList()
      }

  }, [trigger])

   return (

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
                           <p><a href="mailto:customercare@choiceindia.com" target="_blank">customercare@choiceindia.com</a></p>
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
                                          <td className="text-left">customercare@choiceindia.com</td>
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
                                          <td>Swati Matkar</td>
                                          <td className="text-left">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri(East),Mumbai 400099.</td>
                                          <td className="text-left">022-6707 9999
                                             -Ext. 896</td>
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
            {
               address  ?
               <div>
            <div className="container mt-10 "  >
                     <div className="d-flex justify-content-between detailwrap">

                           <div className='d-flex flex-column flex-column-left'>
                              <div>
                                 <p className="maintitle">120+ branches and partner offices</p>
                                 <p className="subhead">Locate and office in your city</p>
                              </div>

                              <div className='cust-dropdown'>

                                 <Form.Select variant="Info" id="dropdown-basic" onChange={()=>selectCity()}>

                                    {

                                       Object.keys(address)?.map((keyValue, i) => {
                                          return (
                                             <option  value={keyValue}>{keyValue}</option>

                                          )
                                       }
                                       )

                                    }


                                 </Form.Select>
                              </div>
                           </div>

                           <div className="text-right address" >
                           <p className="maintitle">{address && address[city] && address[city][0] && address[city][0].address_title}</p>
                           {/* <p className="subtext cursor-pointer"><a href="mailto:`${address && address[city] && address[city][0] && address[city][0].email}`" target="_blank">{address && address[city] && address[city][0] && address[city][0].email}</a></p> */}
                           <p className="subtext">{address && address[city] && address[city][0] && address[city][0].branch_address}</p>
                        </div>

                     </div> 
            </div>
           
               <div className='container-fluid mt-10'>
                     <div className='row'>
                        <div className='map '>
                        {
                            address && address[city] && address[city][0] && address[city][0].link ?
                              <iframe className="gm-control-active contact-map" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={address && address[city] && address[city][0] && address[city][0].link} ><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe>:""
                        }
                        </div>
                     </div>
                  </div>
                  </div>

                  : <div className="text-center">
                  <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                  
              </div>


            }

                   
         </section>
      </div>
   );
}
export default Contactdetail;
