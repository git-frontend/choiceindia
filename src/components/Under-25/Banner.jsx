import {useState} from 'react';
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {
  const [isCheck, setIsCheck] = useState(false)
  return (
    <>
        <section className='banner-sec'>
              <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                       <div className='banner-form'>
                          <div className='left-sect'>
                            <div className='banner-caption'>
                              <h1>Under 25 just <br />got an upgrade.</h1>
                              <p>The Finapp built for Gen Z.</p>
                            </div>
                          </div>
                          <div className='right-sect'>
                            <div className='form-demat'>
                            {
                            isCheck ?
                                    <div id="campaignForm">
                                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                            <NewDematAccountForm />
                                        </GoogleReCaptchaProvider>
                                </div> :
                                    <div id="campaignForm">
                                        <NewDematAccountForm />
                                </div>
                            }
                            </div>
                          </div>
                       </div>
                    </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Banner