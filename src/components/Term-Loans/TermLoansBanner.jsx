
import React,{useState,useEffect} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import Quick from '../../assets/images/term-loans/quick-term-business-loan-sanctioned.svg';
import Digital from '../../assets/images/term-loans/digital-term-business-loan-disbursement.svg';
import Minimum from '../../assets/images/term-loans/minimum-paper-work-for-term-business-loan.svg';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function TermLoansBanner() {
    
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

    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        arrows: false,
        autoplay: false,
        dots: false,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
        
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              infinite: false,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true,
            }
          }
         
        ]
    
      };
    return (
        <div>
            <section className="inv-fin-banner term-loan-ban">
                <div className="container">
                    <div className="row">
                        <div className=" col-md-7">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl"> Get Term Loan for <br /> Business Online</h1>
                                <p>Our Term Loans are designed to suit your various financial business needs and help offer capital for expenditure and expansion and are best suited for your pre-defined expenditures.</p>
                                <p>Apply for business term loan online
                                    at the lowest interest rate.<br />
                                    {/* <a href="#"> */}
                                        <span className="aply-btn">Apply Now!</span>
                                    {/* </a> */}
                                        </p>
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
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <Slider {...settings1} className="inv-banner-slider">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={Quick} alt={"Quick Term Business Loan Sanctioned"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={Quick} alt="Quick Term Business Loan Sanctioned" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Quick</h3>
                                        <p className="subtext">Sanction</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={Digital} alt={"Digital Term Business Loan Disbursement"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={Digital} alt="Quick Term Business Loan Sanctioned" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Digital</h3>
                                        <p className="subtext">Disbursement</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={Minimum} alt={"Minimum Paper Work for Term Business Loan"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={Minimum} alt="Quick Term Business Loan Sanctioned" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Minimum</h3>
                                        <p className="subtext">Paperwork</p>
                                    </div>
                            </Slider>
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

export default TermLoansBanner;
