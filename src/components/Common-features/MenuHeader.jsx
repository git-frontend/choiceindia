import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import  ImageSub0  from '../../assets/images/logo.svg';
import  ImageSub1  from '../../assets/images/logo-white.svg';
import {Link,NavLink} from 'react-router-dom';


export default function Header() {

    const [show, setShow] = useState(true)
    
        return (
          
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand logo-main" href="/">
                        <img src={ImageSub0} className="img-fluid logo-dark" alt="Choice India" />
                        <img src={ImageSub1} className="img-fluid logo-light" alt="Choice India" />
                    </a>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>{ setShow(false) } } >
                        { show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                        <div className={ show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto nav-header">
                            <li className="nav-item">
                                <NavLink to= '/AboutIndex' activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                  }}  className="single-nav-links nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/app' activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                  }} className="single-nav-links nav-link">App</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/'  className="single-nav-links nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/' className="single-nav-links nav-link">Research</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/Career'  className="single-nav-links nav-link">Careers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to= '/' className="single-nav-links nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item login-btn">
                                <NavLink to= '/AboutIndex' className="single-nav-links nav-link">Log In</NavLink>
                            </li>
                            <li className="nav-item get-btn">
                                <a className="nav-link" href="#">Get Started</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
          
        )
    }

