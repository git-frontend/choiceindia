import "../assets/css/footer.scss"
import  ImageFooter0  from '../assets/images/footer-logo.svg';
import  ImageFooter1  from '../assets/images/icons/google-play.svg';
import  ImageFooter2  from '../assets/images/icons/app-store.svg';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'




function Footer() {
    return (
      <div className="Footer">
                <footer class="main-footer">
            <div class="footer-top-sec">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="top-sec-sub">
                      <div class="footer-logo">
                        <img src={ImageFooter0} class="" />
                      </div>
                    </div>
                    <div class="top-sec-quick-links">
                      <div class="row">
                        <div class="col-md-7">
                          <div class="quick-links-list">
                            <ul class="reset"> 
                              <li>
                                <h4>Services</h4>
                              </li>
                              <li>
                                <a href="#">Equity Broking</a>
                              </li>
                              <li>
                                <a href="#">Wealth Mangement</a>
                              </li>
                              <li>
                                <a href="#">Insurance</a>
                              </li>
                              <li>
                                <a href="#">Loans</a>
                              </li>
                              <li>
                                <a href="#">Merchant Banking</a>
                              </li>
                              <li>
                                <a href="#">Management Consultancy</a>
                              </li>
                              <li>
                                <a href="#">Government Advisory</a>
                              </li>
                              <li>
                                <a href="#">Tax Advisory</a>
                              </li>
                            </ul>
                            <ul class="reset"> 
                              <li>
                                <h4>Company</h4>
                              </li>
                              <li>
                                <a href="#">Our Team</a>
                              </li>
                              <li>
                                <a href="#">Investors</a>
                              </li>
                              <li>
                                <a href="#">Pricing</a>
                              </li>
                              <li>
                                <a href="#">Careers</a>
                              </li>
                              <li>
                                <a href="#">Contact Us</a>
                              </li>
                              <li>
                                <a href="#">FAQ’s</a>
                              </li>
                            </ul>
                            <ul class="reset"> 
                              <li>
                                <h4>Research</h4>
                              </li>
                              <li>
                                <a href="#">Fundamental</a>
                              </li>
                              <li>
                                <a href="#">Technical</a>
                              </li>
                              <li>
                                <a href="#">Fables</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="footer-cont-details">
                            <p>Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099. <FontAwesomeIcon icon={faLocationDot} /></p>
                            <p>Monday - Friday : 08:30 am - 7:00 pm <br/>
                              Saturday : 10:00 am - 4:00 pm  <FontAwesomeIcon icon={faClock} /> </p>
                            <p><a href="tel:02267079999">+91-022-6707 9999</a>  <FontAwesomeIcon icon={faPhone} /> </p>
                            <p><a href="mailto:customercare@choiceindia.com">customercare@choiceindia.com</a>  <FontAwesomeIcon icon={faEnvelope} /> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="top-social-extra-links">
                      <div class="row align-items-center">
                        <div class="col-md-6">
                          <div class="links-wrap-social">
                            <div class="wrap-app-links">
                              <a href="#" target="_blank">
                                <img src={ImageFooter1} class="img-fluid" />
                              </a>
                              <a href="#" target="_blank">
                                <img src={ImageFooter2} class="img-fluid" />
                              </a>
                            </div>
                            <div class="footer-social-links">
                              <a href="#" target="_blank">
                                <FontAwesomeIcon icon={faFacebookF} /> 
                              </a>
                              <a href="#" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faLinkedinIn} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faInstagram} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faYoutube} />
                              </a>
                              <a href="#" target="_blank">
                              <FontAwesomeIcon icon={faTelegramPlane} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <ul class="extra-links-right">
                            <li>
                              Made with <i class="fa fa-heart" aria-hidden="true"></i> in India
                            </li>
                            <li>
                              <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                              <a href="#">Terms &amp; Conditions</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
      </div>
    );
  }
  
  export default Footer;
  