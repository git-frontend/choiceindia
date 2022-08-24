import React, { useState } from 'react'
import  ImageSub0  from '../../assets/images/choice-logo.svg';
//import  ImageSub1  from '../../assets/images/logo-white.svg';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {

    const [show, setShow] = useState(true)

  
   
    
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
                            <li className="nav-item">
                                <NavLink to= '/about-us'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/investment-app'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>App</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/services'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/research-listing-new'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Research</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to= '/career'   className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Careers</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to= '/partner'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Partners</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/contact-us'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Contact</NavLink>
                            </li>
                            {/* <li className="nav-item login-btn">
                                <a href='https://jiffy.choiceindia.com/auth/login'  onClick={ ()=>setShow(!show)} >Log In</a>
                            </li> */}
                            <li className="nav-item login-btn">
                                <NavDropdown title="Log In" id="navbarScrollingDropdown" className="top-nav-links login-btn">
                               <NavDropdown.Item className="nav-dropdown-links" href='https://jiffy.choiceindia.com/auth/login' target="_blank">client</NavDropdown.Item>
                                  <NavDropdown.Item className="nav-dropdown-links" target="_blank" href='https://login.choiceindia.com/Account/Login'>partner</NavDropdown.Item>
                                 <NavDropdown.Item className="nav-dropdown-links" target="_blank" href='https://hrconnect.qandle.com'>employee</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            {/* <li className="nav-item login-btn">
                                <a href='https://jiffy.choiceindia.com/auth/login'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Log In</a>
                            </li> */}

                           
                            <li className="nav-item get-btn">
                                <NavLink className="nav-link"  onClick={ ()=>setShow(!show)} to='/open-free-demat-account'>Open Free Account</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        )
    }

