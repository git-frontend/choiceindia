import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  ImageSub0  from '../../assets/images/logo-old.svg';



function MenuHeaderNew() {
    const [show, setShow] = useState(true)
    return (
        <>  
            <div className='top-nav-div'>
                <Navbar className="nav-bar" expand="lg">
                    <Container>
                       <Nav.Link to='/' className='brand-logo'><Navbar.Brand className="navbar-logo">
                            <img src={ImageSub0} width="150" height="37" className="img-fluid logo-dark" alt="Choice India" />
                        </Navbar.Brand></Nav.Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >   
                                <NavLink to= '/about-us'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>About</NavLink>
                                <NavLink to= '/investment-app'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>App</NavLink>
                                <NavLink to= '/services'   onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Services</NavLink>
                                <NavLink to= '/research-listing'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Research</NavLink>
                                <NavLink to= '/partner'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Partners</NavLink>
                                <NavLink to= '/contact-us'  onClick={ ()=>setShow(!show)} className={({isActive}) => "single-nav-links nav-link" + (isActive ? "single-nav-links nav-link active-header" :'')}>Contact</NavLink>
                                
                                
                                

                                <NavDropdown title="Log In" id="navbarScrollingDropdown" className="top-nav-links login-btn">
                                    
                                    <NavDropdown.Item className="nav-dropdown-links">client </NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown-links">partner</NavDropdown.Item>
                                    <NavDropdown.Item className="nav-dropdown-links">employee</NavDropdown.Item>
                                </NavDropdown>

                                <NavLink className="nav-link get-btn"  onClick={ ()=>setShow(!show)} to='/open-free-demat-account'>Open Free Account</NavLink>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default MenuHeaderNew;
