import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import  ImageSub0  from '../assets/images/logo.svg';


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
                    <a className="navbar-brand logo-main" href="#">
                        <img src={ImageSub0} className="img-fluid" alt="Choice India" />
                    </a>
                    <button className="navbar-toggler border" 
                    onClick={ ()=>{ this.setState({show: !this.state.show}) } } >
                        {this.state.show ? <MenuIcon /> : <CloseIcon />}
                    </button>
                        <div className={this.state.show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto nav-header">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">App</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Research</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Careers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item login-btn">
                                <a className="nav-link" href="#">Log In</a>
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
