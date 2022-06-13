import React, { useState } from 'react'
import  ImageSub0  from '../../assets/images/logo.svg';
import  ImageSub1  from '../../assets/images/logo-white.svg';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import LazyLoader from '../Common-features/LazyLoader';

export default function Header() {

    const [show, setShow] = useState(true)

  
   
    
        return (
          
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                
                <NavLink className="navbar-brand logo-main" to="/">
                <LazyLoader src={ImageSub0} className={"img-fluid logo-dark"} alt={"Choice India"} />
                        {/* <img src={ImageSub0} className="img-fluid logo-dark" alt="Choice India" /> */}
                        <LazyLoader src={ImageSub1} className={"img-fluid logo-light"} alt={"Choice India"} />
                        {/* <img src={ImageSub1} className="img-fluid logo-light" alt="Choice India" /> */}
                        </NavLink>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>setShow(!show)} >
                        { show ? <FontAwesomeIcon icon={faBars} />  : <FontAwesomeIcon icon={faXmark} /> }
                    </button>
                        <div className={ show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto nav-header">
                            <li className="nav-item">
                                <NavLink to= '/about-us' className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/app' className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>App</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/services'  className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/research'className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Research</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/career'  className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Careers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/contact' className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Contact</NavLink>
                            </li>
                            <li className="nav-item login-btn">
                                <NavLink to= '/log in' className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Log In</NavLink>
                            </li>
                            <li className="nav-item get-btn">
                            <a className="nav-link"  href= "https://choiceindia.com/open-free-demat-account">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        )
    }

