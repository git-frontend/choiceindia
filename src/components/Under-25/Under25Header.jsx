import React, {useState,useEffect} from 'react'
import  ImageSub0  from '../../assets/images/under-25/choice-logo.svg';
import  ImageSub1  from '../../assets/images/under-25/choice-logo-dark.svg';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../assets/css/header.scss";
export default function Under25Header() {
    const [scrolling, setScrolling] = useState(false);
    const [show, setShow] = useState(true)
    function check(){
        window.location.pathname="/services"
    }
    function check2(){  
        window.open("https://choiceinsurance.in/");   
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
        return (
            <div className="Header">
            <header className={scrolling ? 'main-header header-scroll' : 'main-header'}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="/">
                    <div  className="navbar-brand logo-main">
                        <img src={scrolling ? ImageSub1 : ImageSub0} width="150" height="37" className="img-fluid logo-dark" alt="Choice - Best Stock Broker in India" /> 
                    </div>
                       </a>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>setShow(!show)} >
                        { show ? <FontAwesomeIcon icon={faBars} />  : <FontAwesomeIcon icon={faXmark} /> }
                    </button>
                        <div className={ show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav me-auto nav-header">
                            <li className="nav-item service-section-sub">
                                <NavLink to= '/services'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Services</NavLink>
                                 <NavDropdown  title="Services" id="navbarScrollingDropdown" className="top-nav-links service-section serv-drop">
                                    <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>setShow(!show)} as={Link} to="/equity-broking">Broking &amp; Distribution</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>{setShow(!show),check2()}}  >Insurance</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>setShow(!show)} as={Link} to='/loan'>Loans</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown-links" onClick={ ()=>setShow(!show)}  as={Link} to='/government-advisory'>Government Advisory</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/research-listing'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Research</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/investment-app'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>App</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/career'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Career</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link fw-semibold" + (isActive ? "single-nav-links nav-link fw-semibold active-header" :'')}>Youth</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto nav-header">
                            <li className="nav-item get-btn-outline">
                                <NavLink className="nav-link"  onClick={ ()=>setShow(!show)} to='/'>Log in</NavLink>
                            </li>
                            <li className="nav-item get-btn get-btn2">
                                <NavLink className="nav-link"  onClick={ ()=>setShow(!show)} to='/open-free-demat-account'>Get Started</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </header>
            </div>
          
        )
    }

