import React, { useState } from 'react'
import  ImageSub0  from '../../assets/images/logo.svg';
import  ImageSub1  from '../../assets/images/logo-white.svg';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {

    const [show, setShow] = useState(true)
   
    
        return (
          
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                
                <NavLink className="navbar-brand logo-main" to="/">
                        <img src={ImageSub0} className="img-fluid logo-dark" alt="Choice India" />
                        <img src={ImageSub1} className="img-fluid logo-light" alt="Choice India" />
                        </NavLink>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>{ setShow(false) } } >
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
                                <NavLink to= '/Services'  className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/Research'className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Research</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/Career'  className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Careers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/Contact' className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Contact</NavLink>
                            </li>
                            <li className="nav-item login-btn">
                                <NavLink to= '/Log In' className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Log In</NavLink>
                            </li>
                            <li className="nav-item get-btn">
                            <NavLink className="nav-link"  to= "/">Get Started</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        )
    }

