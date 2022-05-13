import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import  ImageSub0  from '../assets/images/logo.svg';
import  ImageSub1  from '../assets/images/logo-white.svg';
import {Link} from 'react-router-dom';


export default class Header extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }
    render() {
        return (
          
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand logo-main" href="/">
                        <img src={ImageSub0} className="img-fluid logo-dark" alt="Choice India" />
                        <img src={ImageSub1} className="img-fluid logo-light" alt="Choice India" />
                    </a>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                        {this.state.show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto nav-header">
                            <li className="nav-item">
                                <Link to= '/AboutIndex' className="single-nav-links">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/app' className="single-nav-links nav-link">App</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/' className="single-nav-links nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/' className="single-nav-links nav-link">Research</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/Career' className="single-nav-links nav-link">Careers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to= '/' className="single-nav-links nav-link">Contact</Link>
                            </li>
                            <li className="nav-item login-btn">
                                <Link to= '/AboutIndex' className="single-nav-links nav-link">Log In</Link>
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
}
