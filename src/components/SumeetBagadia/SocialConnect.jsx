
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function SocialConnect() {



  return (
    <div>
      <section className="social-share">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="social-share-box">
                <h3 className="title-sm-new">Get Daily Insights And Weekly Podcasts</h3>
                <p className="sml-para p-4">Catch Mr Sumeet Bagadia go live daily with stock market tips, weekly market update <br /> podcasts and daily intraday and investment calls. Connect with us:</p>
                <div className="social-list">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/ChoiceHQ/" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <h6>Facebook</h6>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/c/ChoiceHQ" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faYoutube} />
                        </span>
                        <h6>Youtube</h6>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/ChoiceHQ_Social" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <h6>Twitter</h6>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/choice-broking" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </span>
                        <h6>Linkedin</h6>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/choicehq_social/" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faInstagram} />
                        </span>
                        <h6>Instagram</h6>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/CEBPL" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faTelegramPlane} />
                        </span>
                        <h6>Equity</h6>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/CEBPLCOMMODITY" target="_blank" rel='noreferrer'>
                        <span>
                          <FontAwesomeIcon icon={faTelegramPlane} />
                        </span>
                        <h6>Commodity</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SocialConnect;
