import React from 'react'
import {useState,useEffect} from 'react';
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function FormSec() {
  const [isCheck, setIsCheck] = useState(false)
  return (
    <>
      <section className='form-section'>
        <div className='container'>
          <div className='form-ban'>
          <div className='form-card'>
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
      </section>
    </>
  )
}

export default FormSec