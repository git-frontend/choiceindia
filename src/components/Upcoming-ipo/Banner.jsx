
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import img1 from "../../assets/images/upcoming-ipo/expert.png";
import img2 from "../../assets/images/upcoming-ipo/details-report.png";
import img3 from "../../assets/images/upcoming-ipo/free-ipo-account.png";
function Banner() {
  return (
    <>
        <section className='banner-sec'>
              <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                       <div className='banner-form'>
                          <div className='left-sect'>
                            <div className='banner-caption'>
                              <h1 className='ttl-m'>Upcoming <span>IPOs</span> in India</h1>
                              <p>Explore the list of upcoming IPOs in India and be among the first to apply.</p>
                            </div>
                            <div className='form-demat'>
                                <div id="">
                                    <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                        <NewDematAccountForm />
                                    </GoogleReCaptchaProvider>
                                </div>
                            </div>
                            <div className='bnr-benifit-list'>
                                <div className='bnt-itm'>
                                    <img src={img1} alt='Expert IPO Analysis' width={96} height={109} className='mn-img'/>
                                    <div className='cont-sc'>
                                      <h4 className='bold'>Expert IPO Analysis</h4>
                                      <h4>for Informed Decisions</h4>
                                    </div>
                                </div>
                                <div className='bnt-itm'>
                                    <img src={img2} alt='Detailed IPO Reports' width={96} height={109} className='mn-img'/>
                                    <div className='cont-sc'>
                                      <h4 className='bold'>Detailed IPO Reports</h4>
                                      <h4>for Confident Investing</h4>
                                    </div>
                                    
                                </div>
                                <div className='bnt-itm'>
                                    <img src={img3} alt='Free IPO Account' width={96} height={109} className='mn-img'/>
                                    <div className='cont-sc'>
                                      <h4 className='bold'>Free IPO Account</h4>
                                      <h4>for Easy Participation</h4>
                                    </div>
                                </div>
                            </div>
                          </div>
                          {/* <div className='right-sect'>
                            
                          </div> */}
                       </div>
                    </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Banner