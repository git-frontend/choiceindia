import React, { useState, useEffect,useRef } from "react";
import Bannerimage from '../../assets/images/contact/contact-us-new.webp';
import dotsimage from '../../assets/images/contact/dots.webp';
import phoneicon from '../../assets/images/contact/phone-icon.svg';
import openicon from '../../assets/images/contact/open-icon.svg';
import emailicon from '../../assets/images/contact/email-icon.svg';
import officeicon from '../../assets/images/contact/office-icon.svg';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, faClose, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { CgAsterisk } from 'react-icons/cg';
import contactService from '../../Services/contactService'
import LazyLoader from '../Common-features/LazyLoader';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import { Form, ModalFooter, ModalHeader } from "react-bootstrap";
import utils from "../../Services/utils";
import { useSearchParams } from "react-router-dom";

function Contactbanner() {

  const [datas, setdatas] = useState()
  let inputRef = "";
  const [data, setData] = useState("");
  const [isloader, setIsloader] = useState(false);

  const [nbfc, setNbfc] = useState(false);
  const [list, setList] = useState();
  const [sublist, setSublist] = useState();
  const [dept, setdept] = useState();
  const [subdept, setSubdept] = useState();
  const [trigger, setTrigger] = useState(false);
  const [listid, setListid] = useState(true);
  const [subListid, setSubListid] = useState(true);
  const phoneRegExp = /^(6|7|8|9)([0-9]{9})$/
  let departmentlist = {};
  let subdepartmentlist = {}
  var active = useRef('');
  let nbfclist={};
  
 
  const [searchParams, setSearchParams] = useSearchParams();
  active.current = searchParams.get('active') || '';

  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    lastName: yup.string().required("Last Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    mobile: yup.string().required("Phone Number is required").matches(phoneRegExp, "Invalid number").matches(/^\d+$/, 'The field should have digits only'),
    email: yup.string().email(" Invalid Email ").required("Email Id is required"),
    question: yup.string().max(200).required("Need to fill your question")

  })

  function loadDepartmentList() {
    contactService.departmentCollection().then(
      res => {
        if (res) {
          setList(res.data.data);
        } else {
          setList([]);
        }
      }
    ).catch((error) => {
      setList([]);
    });
  }
  function loadSubDepartmentList(id) {
    contactService.subDepartmentCollection(id).then(
      res => {
        if (res) {
          setSublist(res.data.data);
        } else {
          setSublist([]);
        }
      }
    ).catch((error) => {
      setSublist([]);
    });
  }
  function selectdepartment() {
    departmentlist = event.target.value.split("+")
    setdept(departmentlist)
    setSubListid(true);
    document.getElementById('dropdown-basic').value = "Select here"
    loadSubDepartmentList(departmentlist[0])

  }
  function selectSubdepartment() {
    subdepartmentlist = event.target.value.split("+")
    setSubdept(subdepartmentlist)
    setListid(true);

  }
  useEffect(() => {
    setTrigger(true)
    if (trigger == true) {
      loadDepartmentList()
      if(active.current =='NBFC'){
        departmentlist={0:"5",1:"NBFC",2:"customercare.finserv@choiceindia.com",3:"1800-203-5193 ( Toll No. )",4:"Choice Finserv Pvt Ltd,<br /> Sunil Patodia Tower, J.B. Nagar, Andheri (East), Mumbai 400099",5:"Between 9:30 AM to 6:30 PM Monday to Saturday",6:"Mr. Arun Rathor (Grievances Redressal Officer), 1 St Floor, Plot No. 25, Sunder Nagar, Girdhar Marg Malviya Nagar, Jaipur – 302017, Grievances@choiceindia.com, 1800 203 5193."}
         loadSubDepartmentList('5');
         setdept(departmentlist);
       
      }
      
      
   
      

    }
  }, [trigger])

  function checklist() {
    if (document.getElementById('dropdown-basic').value == "Select here") {
      utils.scrollToId('dropdown-basic');
      setListid(false);
    }

    if (document.getElementById('dropdown') && document.getElementById('dropdown').value == "Select here") {
      utils.scrollToId('dropdown');
      setSubListid(false);
    }


  }

 function restBanneForm(){
  document.getElementById('dropdown-basic').value = "Select here"
  document.getElementById('dropdown').value = "Select here"

 }

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  const submitFormData = (FormData) => {
    let formData = FormData;
    formData['department'] = (dept || [])[1] || '';
    formData['sub_department'] = (subdept || [])[0] || '';
    formData['email_to'] = (subdept || [])[1] || '';
    if(listid && subListid){
      setIsloader(true)
      contactService.contactForm(formData).then(res => {
        setIsloader(false)
        reset();
        restBanneForm();
        setData("Mail sent Successfully")
      })

    }else{
      setIsloader(false)

    }

  }

  return (
    <div>
      <div className="banner-parent">
        <section className="banner-contact">
          <div className='banner-caption'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='caption-cont'>
                    <h1 className='big-ttl'>We’re here! <br /> Let’s have a talk</h1>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className='dipar-dropdown'>
                        <p className="depart-text">Department *</p>
                        <Form.Select variant="Info" id="dropdown" onChange={() => selectdepartment()} className=" department getvalue" >
                          {
                            active.current =='NBFC'?
                            <option value="Select here" >Select here</option>:
                            <option value="Select here" selected >Select here</option>
                          }
                            
                          {
                            list?.map((res, i) => {
                              return (

                                <option selected={active.current =='NBFC'&& res.department=='NBFC'} value={res.id + '+' + res.department+ '+' + res.email_id+ '+' + res.contact+ '+' + res.office+ '+' + res.open}>{res.department}</option>

                              )
                            })
                          }
                        </Form.Select>
                        {
                          subListid ? '' : <span className="text-danger">Need to choose Department </span>
                        }
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className='dipar-dropdown request-dropdown'>
                        <p className="depart-text">Request type *</p>
                        <Form.Select variant="Info" id="dropdown-basic" onChange={() => selectSubdepartment()} className=" department" >
                          <option value="Select here" selected>Select here</option>
                          {
                            sublist?.map((res, i) => {

                              return (

                                <option value={res.sub_department + '+' + res.email_id}>{res.sub_department}</option>

                              )
                            })
                          }
                        </Form.Select>
                        {
                          listid ? '' : <span className="text-danger">Need to choose Sub-Department </span>
                        }
                      </div>
                    </div>

                  </div>

                </div>

                <div className="col-md-4">
                  <div className="bannerbg">
                    <LazyLoader src={Bannerimage} className='img-fluid' width={'387'} height={'609'} alt={'contact us'} />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section className="cnt-banner-bottm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cnt-form-details">
                  {
                     dept ?
                      <div className="left-from">
                        <p className="whiteus-text colorchange">Contact information</p>
                        <div className="form-data">
                          <div className="form-data-left"><LazyLoader src={phoneicon} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding">Phone</span> </div>
                          <div className="form-data-right"><p className="form-right-text" >{(dept || [])[3] || '+91-022-6707 9999'}</p></div>
                        </div>
                        <div className="form-data">
                          <div className="form-data-left"><LazyLoader src={openicon} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding"> Open</span></div>
                          <div className="form-data-right"> <p className="form-right-text" >{(dept || [])[5] ||'Between 9:30 AM to 6:30 PM Monday to Saturday'}</p></div>
                        </div>
                        <div className="form-data">
                          <div className="form-data-left"><LazyLoader src={emailicon} className={"img-fluid "} width={'18'} height={'18'} /><span className="svgpadding"> Email</span> </div>
                          <div className="form-data-right"><p className="form-right-text">{(dept || [])[2] || 'care@choiceindia.com'}</p></div>
                        </div>
                        {
                          (dept || [])[1] == "NBFC" ?
                          <div className="form-data">
                          <div className="form-data-left"><LazyLoader src={""} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding">Officer </span></div>
                          <div className="form-data-right"><p className="form-right-text" >{(dept || [])[6] || 'Mr. Arun Rathor (Grievances Redressal Officer), 1 St Floor, Plot No. 25, Sunder Nagar, Girdhar Marg Malviya Nagar, Jaipur – 302017, Grievances@choiceindia.com, 1800 203 5193.'}</p> </div>
                        </div>:""

                        }
                        
                        <div className="form-data">
                          <div className="form-data-left"><LazyLoader src={officeicon} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding">Office</span></div>
                          <div className="form-data-right"><p className="form-right-text" >{(dept || [])[4] || 'Choice Finserv Pvt Ltd,<br /> Sunil Patodia Tower,J.B. Nagar, Andheri (East),Mumbai 400099'}</p> </div>
                        </div>
                      </div>
                     :
                      <div className="left-from">
                      <p className="whiteus-text colorchange">Contact information</p>
                      <div className="form-data">
                        <div className="form-data-left"><LazyLoader src={phoneicon} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding">Phone</span> </div>
                        <div className="form-data-right"><p className="form-right-text" >+91-022-6707 9999</p></div>
                      </div>
                      <div className="form-data">
                        <div className="form-data-left"><LazyLoader src={openicon} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding"> Open</span></div>
                        <div className="form-data-right"> <p className="form-right-text" >Between 9:30 AM to 6:30 PM<br />
                          Monday to Saturday</p></div>
                      </div>
                      <div className="form-data">
                        <div className="form-data-left"><LazyLoader src={emailicon} className={"img-fluid "} width={'18'} height={'18'} /><span className="svgpadding"> Email</span> </div>
                        <div className="form-data-right"><p className="form-right-text">care@choiceindia.com</p></div>
                      </div>
                      
                      <div className="form-data">
                        <div className="form-data-left"><LazyLoader src={officeicon} className={"img-fluid "} width={'18'} height={'18'} /> <span className="svgpadding">Office</span></div>
                        <div className="form-data-right"><p className="form-right-text" >Choice Finserv Pvt Ltd,<br /> Sunil Patodia Tower,
                          J.B. Nagar, Andheri (East),
                          Mumbai 400099</p> </div>
                      </div>
                    </div>

                  }
                  <div className="right-form form">
                    <p className="whiteus-text">Write to Us</p>

                    <Form onSubmit={handleSubmit(submitFormData)} autoComplete="off">
                      <div className="row d-flex justify-content-between">
                        <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                          <Form.Label className="formlabel">First Name  <span className="warning">*</span> </Form.Label>
                          <Form.Control type="text" name="firstName" className="formcontrol" {...register('firstName',)} />
                          <span className="text-danger"> {errors?.firstName?.message} </span>
                        </Form.Group>


                        <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                          <Form.Label className="formlabel"> Last Name <span className="warning">*</span> </Form.Label>
                          <Form.Control type="text" className="formcontrol" {...register('lastName')} />
                          <span className="text-danger"> {errors?.lastName?.message} </span>
                        </Form.Group>
                      </div>

                      <div className="row mt-3 d-flex justify-content-between">
                        <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                          <Form.Label className="formlabel">Email  <span className="warning">*</span></Form.Label>
                          <Form.Control type="text" className="formcontrol" {...register('email')} />
                          <span className="text-danger"> {errors?.email?.message} </span>
                        </Form.Group>

                        <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                          <Form.Label className="formlabel"> Mobile Number <span className="warning">*</span> </Form.Label>
                          <Form.Control type="tel" pattern="\d*" maxLength={10} className="formcontrol" {...register('mobile')} />
                          <span className="text-danger"> {errors?.mobile?.message} </span>
                        </Form.Group>
                      </div>



                      <label className="formlabel mt-5"> Your Question <span className="warning">*</span></label>
                      <div className=" messagefield">
                        <textarea className="messagearea" placeholder="Enter text here..." {...register('question')} />
                        <span className="text-danger"> {errors?.question?.message} </span>
                      </div>

                      <div className="uploadbtn mt-3 d-flex align-items-center">
                        <div className="feel-msg">{data}</div>
                        <Button variant="primary" onClick={() => checklist()}
                          type="submit" className="btn-bg sendbtn ">
                          {isloader === false ?
                            "Send" : <Spinner animation="border" />
                          }
                        </Button>
                      </div>
                    </Form>

                  </div>
                </div>

              </div>
              <div className="col-md-12">
                {
                 (dept || [])[1] == "NBFC" ?
                 <p className="text-center esctext ">For any NBFC related grievances reach out to our <a variant="primary" onClick={() => { setNbfc(true) }} className="cursor-pointer">
                  Escalation Matrix
                </a></p>:""
                }
              
                
              </div>
            </div>
          </div>
          <Modal show={nbfc} onHide={() => { setNbfc(false) }} size="lg" aria-labelledby="contained-modal-title-vcenter" className="contact-modal" centered>

            <div className="container mainwrapquick-table">
              <div className="row ">
                <div className="col-md-12">

                  <div className="quicklinkswrap mt-5 mb-5">
                    <ModalHeader>

                      <FontAwesomeIcon icon={faClose} className="icon-table cursor-pointer" onClick={() => { setNbfc(false) }} />
                      <div className="clearfix"></div>
                      <h4 className="text-center text-uppercase mt-5 mb-5"><strong>CUSTOMER GRIEVANCE REDRESSAL MECHANISM</strong></h4>

                    </ModalHeader>


                    <Modal.Body>
                      <div className="table-responsive customer-grivence">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <th>Level 1 - Customer Care</th>
                            </tr>
                            <tr>
                              <td className="pb-5">Write in to <a href="mailto:customercare.finserv@choiceindia.com" target="_blank" className="mail-a">customercare.finserv@choiceindia.com</a> or call us on our customer care number <strong>1800 203 5193</strong></td>
                            </tr>
                            <tr>
                              <th>Level 2 - Grievance & Redressal Officer</th>
                            </tr>
                            <tr>
                              <td className="pb-5">If you are not satisfied with the resolution provided to you,<br/>
                               you may please reach to:<br/>Grievances Redressal Officer: Mr. Arun Rathor<br/>
                              Address: Choice Finserv Private Limited, 1 St Floor, Plot No. 25, Sunder Nagar, Girdhar Marg Malviya Nagar, Jaipur – 302017.<br/>
                              Email: <a href="mailto:Grievances@choiceindia.com" target="_blank" className="mail-a">Grievances@choiceindia.com</a><br/>
                              Phone: <strong>1800 203 5193</strong>
                              </td>
                            </tr>
                            <tr>
                              <th>Level 3 - Customer Principal Nodal Officer</th>
                            </tr>
                            <tr>
                              <td className="pb-5">If you are still not satisfied with the resolution provided by the Officials on above mentioned Levels, we request you to kindly reach to our:<br />
                              Principal Nodal Officer: Mr. Vijendra Singh Shekhawat <br />
                              Email: <a href="mailto:pno@choiceindia.com" target="_blank" className="mail-a">pno@choiceindia.com</a><br />
                              Phone: <strong>1800 203 5193</strong>
                              </td>
                            </tr>
                            <tr>
                              <th>Level 4 - Centralised Receipt and Processing Centre </th>
                            </tr>
                            <tr>
                              <td className="pb-5">In case your complaint has not been addressed to your satisfaction within 30 days at all Levels, you can approach the regulatory authority at the address given below:</td>
                            </tr>
                            <tr>
                              <td>
                                Centralised Receipt and Processing Centre (CRPC)<br />
                                Reserve Bank of India<br />
                                Central Vista, Sector 17<br />
                                Chandigarh – 160017<br />
                                Email id: <a href="mailto:crpc@rbi.org.in" target="_blank" className="mail-a">crpc@rbi.org.in</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </Modal.Body>
                  </div>
                </div>
              </div>





            </div>

          </Modal>
        </section>

      </div>
    </div>

  );
}

export default Contactbanner;
