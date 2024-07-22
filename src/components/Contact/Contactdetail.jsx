import React, { useState, useEffect } from "react";
import pin from '../../assets/images/contact/office.svg';
import clock from '../../assets/images/contact/business-hours.webp';
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
import Modal from 'react-bootstrap/Modal';
import { Form, ModalFooter, ModalHeader } from "react-bootstrap";
import Image2 from '../../assets/images/icons/security.svg';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import { FaRegFilePdf } from 'react-icons/fa';

function Contactdetail() {
   const [address, setaddress] = useState({});
   const [city, setcity] = useState('MUMBAI');
   const [check, setcheck] = useState(false);
   const [trigger, setTrigger] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
   const [show, setShow] = useState(false);
   const [content, setContent] = useState()
   const [isloading, setisloading] = useState(true);
   let citylists = [];

   function cityList() {
      contactService.contactCity().then(res => {
         if (res && res.data && res.data.data) {

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

   function loadEscalation() {

      contactService.escalationMatrix().then(
         res => {
            if (res) {
               setisloading(false)
               setContent(res.data.data);


            } else {
               setisloading(false)
               setContent([]);

            }

         }
      ).catch((error) => {
         setisloading(false)
         setContent([]);
      });
   }

   return (

      <div>
         <section className="contactdetail contactdetail-new">
            <div className="container">
               <div className="row">
                  <div className="col-md-12" >
                     <div className="support-md">
                        <h3 className="maintitle resmaintitle">Support Related Queries</h3>
                        <div className=" support-itm">
                           <FontAwesomeIcon icon={faPhone} />
                           <p className="subtitle"><a href="tel:+918824242424" target="_blank">+91 88 24 24 24 24</a></p>
                        </div>
                        <div className=" support-itm">
                           <FontAwesomeIcon icon={faEnvelope} />
                           <p className="subtitle"><a href="mailto:care@choiceindia.com" target="_blank">care@choiceindia.com</a></p>
                        </div>
                     </div>


                     <p className="text-center esctext ">For any grievances reach out to our <a variant="primary" onClick={() => { setShow(true); loadEscalation() }} className="cursor-pointer">
                        Escalation Matrix
                     </a></p>
                     <p className="text-center esctext "><a href="https://choiceindia.com/assets/downloads/KMP.pdf" target="_blank">Click here</a> for our KMPs Details</p>
                  </div>
               </div>

            </div>
            <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" className="contact-modal" centered>

               <div className="container mainwrapquick-table">
                  <div className="row ">
                     <div className="col-md-12">

                        <div className="quicklinkswrap mt-5 mb-5">
                           <ModalHeader>

                              <FontAwesomeIcon icon={faClose} className="icon-table cursor-pointer" onClick={() => { setShow(false) }} />
                              <div className="clearfix"></div>
                              <h4 className="text-center text-uppercase mt-5 mb-5"><strong>Investor Grievance Redressal Mechanism</strong></h4>
                              <h4 className="text-left text-uppercase mt-5 mb-5"><strong>Annexure A</strong></h4>

                           </ModalHeader>


                           <Modal.Body>
                              {
                                 isloading ?
                                    <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} /> :


                                    <div className="table-responsive">
                                       {
                                          (content && content.length) ?


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
                                                   {
                                                      content?.map((res, i) => {
                                                         return (
                                                            <tr>
                                                               <td >{res.details_of}</td>
                                                               <td>{res.contact_person}</td>
                                                               <td className="text-left">{res.address}</td>
                                                               <td className="text-left">{res.contact_number}</td>
                                                               <td className="text-left">{res.email_id}</td>
                                                            </tr>
                                                         )
                                                      })
                                                   }
                                                </tbody>
                                             </table>

                                             :
                                             <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                             </div>
                                       }

                                    </div>
                              }


                              <div className="subtxtcontent " >
                                 <p>In absence of response/complaint not addressed to your satisfaction, you may lodge a complaint with SEBI: at <br />
                                    https://scores.gov.in/scores/Welcome.html <br /><br /> or Exchange /DP at: <br /><br />
                                    BSE:  https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx |<br /> NSE:  https://investorhelpline.nseindia.com/NICEPLUS/ <br />
                                    MCX: https://www.mcxindia.com/Investor-Services |<br /> NCDEX:https://ncdex.com/investor_complaint  <br />
                                    CDSL:https://www.cdslindia.com/Footer/grievances.aspx  |<br /> NSDL: https://www.epass.nsdl.com/complaints/websitecomplaints.aspx <br /><br />
                                    (Working hours of each escalation level- <strong>Monday to Friday 9.30 am to 12.30 pm and 2.00 pm to 6.00 pm &amp; Saturday 9.30 am to 4.00 PM)</strong>
                                    <br /><br />
                                    Please quote your Service Ticket/Complaint Ref No. while raising your complaint at SEBI SCORES/Exchange portal.</p>

                              </div>
                           </Modal.Body>
                        </div>


                     </div>
                  </div>





               </div>

            </Modal>
            <div className="container mainwrapquick-table">
               <div className=" office-details mt-7 gap-5">
                  <div className="contactoffice">
                     <div className="officedeatil">
                        <LazyLoader src={pin} className={"img-fluid"} alt={"Office"} width={'40'} height={'40'} />
                        <p className="mt-4 maintitle">Corporate office </p>
                        <p className="subtext">Choice International Limited,<br /> Sunil Patodia Tower, J.B. Nagar,<br /> Andheri (East), Mumbai 400099</p>
                     </div>
                     <div className="officedeatil">
                        <LazyLoader src={clock} className={"img-fluid"} alt={"Business Hours"} width={'40'} height={'40'} />
                        <p className="mt-4 maintitle">Business Hours</p>
                        <p className="subtext">Monday-Friday: 8:30 am - 7:00 pm </p>
                        <p className="subtext">
                           Saturday: 10:00 am - 4:00 pm</p>
                     </div>
                  </div>
                  <div className="contactcyber">
                     <div >
                        <LazyLoader src={Image2} className={"img-fluid"} alt={"Business Hours"} width={'40'} height={'40'} />
                        <p className="mt-4 maintitle">Cyber Security</p>
                        <p className="subtext"><a href="tel:8824242424">+(91) 88 2424 2424 ( IVR Option 5 )</a></p>
                        <p className="subtext"><a href="mailto:security.support@choiceindia.com" target="_blank">security.support@choiceindia.com</a></p>
                     </div>
                  </div>
               </div>
            </div>

            {
               address ?
                  <div>
                     <div className="container mt-10 "  >
                        <div className="d-flex justify-content-between detailwrap">

                           <div className='d-flex flex-column flex-column-left'>
                              <div>
                                 <p className="maintitle">120+ branches and partner offices</p>
                                 <p className="subhead">Locate and office in your city</p>
                              </div>

                              <div className='cust-dropdown'>

                                 <Form.Select variant="Info" id="dropdown-basic" onChange={() => selectCity()}>

                                    {

                                       Object.keys(address)?.map((keyValue, i) => {
                                          return (
                                             <option value={keyValue} key={i}>{keyValue}</option>

                                          )
                                       }
                                       )

                                    }


                                 </Form.Select>
                              </div>
                           </div>

                           <div className="text-right address" >
                              <p className="maintitle">{address && address[city] && address[city][0] && address[city][0].address_title}</p>
                              <p className="subtext">{address && address[city] && address[city][0] && address[city][0].branch_address}</p>
                           </div>

                        </div>
                     </div>

                     <div className='container-fluid mt-10'>
                        <div className='row'>
                           <div className='map '>
                              {
                                 address && address[city] && address[city][0] && address[city][0].link ?
                                    <iframe className="gm-control-active contact-map" title="Choiceindia" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={address && address[city] && address[city][0] && address[city][0].link} ><a href="https://www.gps.ie/sport-gps/">ChoiceIndia</a></iframe> : ""
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
