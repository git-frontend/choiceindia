import React, { useState } from 'react'
import  ImageSub0  from '../../assets/images/choice-logo.svg';
//import  ImageSub1  from '../../assets/images/logo-white.svg';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import utils from '../../Services/utils';

export default function Header() {

    const [show, setShow] = useState(true)

  function check(){
    window.location.pathname="/services"
    // console.log("checking",window.location.pathname);

    
  }
  function check2(){
    // console.log("checking")
    //  window.open = "https://choiceinsurance.in/";    
     window.open("https://choiceinsurance.in/");   
  }
   
    
        return (
          
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                
                <a href="/">
                    <div  className="navbar-brand logo-main">
                        <img src={ImageSub0} width="150" height="37" className="img-fluid logo-dark" alt="Choice - Best Stock Broker in India" />
                        </div>
                        {/*<img src={ImageSub1} className="img-fluid logo-light" alt="Choice India" />
  */}                      </a>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>setShow(!show)} >
                        { show ? <FontAwesomeIcon icon={faBars} />  : <FontAwesomeIcon icon={faXmark} /> }
                    </button>
                        <div className={ show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto nav-header">
                            <li className="nav-item generic-id">
                                <NavLink to= '/about-us'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>About</NavLink>
                            </li>
                            <li className="nav-item generic-id">
                                <NavLink to= '/investment-app'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>App</NavLink>
                            </li>
                            <li className="nav-item service-section-sub generic-id">
                                <NavLink to= '/services'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Services</NavLink>
                                
                                 <NavDropdown  title="Services" id="navbarScrollingDropdown" className="top-nav-links service-section serv-drop">
                                <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>setShow(!show)} as={Link} to="/equity-broking">Broking &amp; Distribution</NavDropdown.Item>
                                  {/* <NavDropdown.Item className="nav-dropdown-links"><NavLink to='/equity-broking'>Wealth Planning</NavDropdown.Item> */}
                                 <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>{setShow(!show),check2()}}  >Insurance</NavDropdown.Item>
                                 <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>setShow(!show)} as={Link} to='/loan'>Loans</NavDropdown.Item>
                                 {/* <NavDropdown.Item className="nav-dropdown-links"><NavLink to='/equity-broking' className="sub-link">Capital Advisory</NavDropdown.Item> */}
                                 {/* <NavDropdown.Item className="nav-dropdown-links"><NavLink to='/equity-broking' className="sub-link">Management Consultancy</NavDropdown.Item> */}
                                 <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>setShow(!show)}  as={Link} to='/government-advisory'>Government Advisory</NavDropdown.Item>
                                 {/* <NavDropdown.Item className="nav-dropdown-links"><NavLink to='/equity-broking' className="sub-link">Tax Advisory</NavDropdown.Item> */}
                                </NavDropdown>
                            </li>
                            <li className="nav-item generic-id">
                                <NavLink to= '/research-listing'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Research</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to= '/career'   className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Careers</NavLink>
                            </li> */}
                            <li className="nav-item generic-id">
                                <NavLink to= '/partner'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Partners</NavLink>
                            </li>
                            <li className="nav-item generic-id">
                                <NavLink to= '/contact-us'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Contact</NavLink>
                            </li>
                            {/* <li className="nav-item login-btn">
                                <a href='https://jiffy.choiceindia.com/auth/login'  onClick={ ()=>setShow(!show)} >Log In</a>
                            </li> */}
                            <li className="nav-item login-btn">
                                <NavDropdown title="Log In" id="navbarScrollingDropdown" className="top-nav-links login-btn">
                                <NavDropdown.Item className="nav-dropdown-links generic-id" href='https://finx.choiceindia.com/auth/login' target="_blank" onClick={() => {utils.pushDataLayerEvent(
                                    {
                                        'event': 'login_click',
                                        'page_path': window.location.pathname,
                                        'page_url': window.location.href,
                                        login_type:'client',
                                        'platform': 'website'
                                    }
                                )}}>client</NavDropdown.Item>
                                  <NavDropdown.Item className="nav-dropdown-links" target="_blank" href='https://backoffice.choiceindia.com/WebLogin/index.cfm?Logintype=Branch' onClick={() => {utils.pushDataLayerEvent(
                                    {
                                        'event': 'login_click',
                                        'page_path': window.location.pathname,
                                        'page_url': window.location.href,
                                        login_type:'partner',
                                        'platform': 'website'
                                    }
                                )}}>partner</NavDropdown.Item>
                                 <NavDropdown.Item className="nav-dropdown-links" target="_blank" href='https://hrconnect.qandle.com'
                                 onClick={() => {utils.pushDataLayerEvent(
                                    {
                                        'event': 'login_click',
                                        'page_path': window.location.pathname,
                                        'page_url': window.location.href,
                                        login_type:'employee',
                                        'platform': 'website'
                                    }
                                )}}>employee</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            {/* <li className="nav-item login-btn">
                                <a href='https://jiffy.choiceindia.com/auth/login'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Log In</a>
                            </li> */}

                           
                            <li className="nav-item get-btn get-btn2" id="open-account-tag">
                                <NavLink className="nav-link"  onClick={ ()=>{setShow(!show);utils.pushDataLayerEvent({
                                    'event': 'open_free_account_click',
                                    'page_path': window.location.pathname,
                                    'page_url': window.location.href,
                                    'cta_source': 'top_nav',
                                    'platform': 'website'
                                })
                                }} to='/open-free-demat-account'>Open Free Account</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        )
    }

