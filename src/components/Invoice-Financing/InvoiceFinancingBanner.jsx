import React,{useState,useEffect} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import zerocollateral from '../../assets/images/invoice-financing/zero-collateral-for-invoice-finnacing.svg';
import documentation from '../../assets/images/invoice-financing/simple-invoice-financing-documention.svg';
import liquidity from '../../assets/images/invoice-financing/enhance-invoice-financing-liquidity.svg';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function InvoiceFinancingBanner() {
    /** scroll purpose */
function chapterScroll(id) {
    // console.log("check",id);
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
        autoplay: true,
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
            <section className="inv-fin-banner invoicefinance-banner">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className=" col-md-7">
                            <div className="fin-banner-caption ">
                                <h1 className="big-ttl"> Apply for Invoice
<br /> Financing Online </h1>
                                <p>Choice is offering loans to the anchor’s ecosystem against selling or purchasing invoices. Borrower as Anchor “or” spoke may be decided as per the deal structure and mutual agreement.</p>
                                <p>Apply for invoice financing
                                    In India up to 50 crores.<br />
                                        <span className="aply-btn">Apply Now!</span>
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
                                           
                                            <img src={zerocollateral} alt="Zero Collateral for Invoice Finnacing" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Zero <br/>Collateral</h3>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            
                                            <img src={documentation} alt="Simple Invoice Financing Documentation" className="img-fluid img"  width={"60"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Simplified <br/>Documentation</h3>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            
                                            <img src={liquidity} alt="Enhance Invoice Financing Liquidity" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Enhance <br/> Liquidity</h3>
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

export default InvoiceFinancingBanner;
