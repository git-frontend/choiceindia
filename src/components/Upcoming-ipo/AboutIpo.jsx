
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import AboutImg from "../../assets/images/upcoming-ipo/about-ipo.png";

function AboutIpo() {
  return (
    <>
        <section className='about-ipo-sec'>
              <div className='container'>
                  <div className='row justify-content-between'>
                    <div className='col-xl-6'>
                        <div className='ipo-abt'>
                            <h2 className='title-secnd'>About IPO</h2>
                            <p>An Initial Public Offering (IPO) is the process through which a private company goes public, allowing its shares to be traded on a stock exchange. It involves selling a portion of the company's ownership to public investors, raising capital, and becoming a publicly-traded entity.</p>
                        </div>
                    </div>
                    <div className='col-xl-5'>
                        <img src={AboutImg} className='img-sm' />
                    </div>  
              </div>
            </div>
        </section>
    </>
  )
}

export default AboutIpo