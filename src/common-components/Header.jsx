import "../assets/css/header.scss"
import  ImageSub0  from '../assets/images/logo.svg';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Header() {
    return (
      <div className="Header">
        <header className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="flex-nav">
                  <div className="logo-main">
                    <a href="#">
                      <img src={ImageSub0} className="img-fluid" alt="Choice India" />
                    </a>
                  </div>
                  <nav className="nav-header">
                    <ul className="reset">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">App</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Research</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li className="login-btn">
                        <a href="#">Log In</a>
                      </li>
                      <li className="get-btn">
                        <a href="#">Get Started</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
  
  export default Header;
  