
import React,{useState,useEffect} from "react";
import LazyLoader from "../Common-features/LazyLoader";
import banner from '../../assets/images/business-loan/business-loan.webp';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function ChannelFinanceBanner() {
    
/** scroll purpose */
function chapterScroll(id) {
    console.log("check",id);
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const [name, setName ] = useState('hideform');
  /** hide and show section */
  const getPosition = () => {
    const element = document.getElementById("showForm");
    if(element){
        const rect = element.getBoundingClientRect();
        
        if(rect.top.toFixed() < 259){
            setName('visibleform');
        }else{
            setName('hideform');
        }   
    }
};

  useEffect(() => {
    window.addEventListener('scroll', getPosition);
}, []);
    return (
        <div>
            <section className="inv-fin-banner nbfc-business-loan">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-7">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl">Business Loan</h1>
                                <p>We at Choice Finserv understand and value the business needs and requirement of our customers.</p>
                                <p>We offer Business Loans to meet capital requirement and give you the financial push to make your business vision come true.</p>
                            </div>
                        </div>
                        <div className=" col-md-5">
                            <div className="formwrap float-right">
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <NbfcForm/> 
                                </GoogleReCaptchaProvider>  
                            </div>
                        </div>
                    </div>
                    <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('nbfcform')}}>Get a Call from us</button>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChannelFinanceBanner;
