
import React,{useState,useEffect} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import zerocollateral from '../../assets/images/channel-finance/zero-collateral-for-channel-finnacing.svg';
import FullFledged from '../../assets/images/channel-finance/full-fledge-channel-financing-assistance.svg';
import HighValue from '../../assets/images/channel-finance/high-value-channel-financing.svg';
import Documentation from '../../assets/images/channel-finance/digital-channel-financing-documentation.svg';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


function ChannelFinanceBanner() {

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
        slidesToShow:4,
        arrows: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
        
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              infinite: false,
              dots: true,
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
            <section className="inv-fin-banner channel-ban-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="fin-banner-caption ">
                                <h1 className="big-ttl"> Empower Your Business <br/>
                                    With Channel Finance</h1>
                                <p>We provide Working capital finance like in form of channel finance limit generally to selected “Spoke” on the recommendation of anchor, for the purpose of selling or buying of products and services.</p>
                                <p>Apply for channel finance
                                facility up to 50 crores.<br />
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
                        <div className="col-md-12">
                            <Slider {...settings1} className="inv-banner-slider">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                           
                                            <img src={zerocollateral} alt="Zero Collateral for Channel Finnacing" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Zero</h3>
                                        <p className="subtext">Collateral</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                          
                                            <img src={FullFledged} alt="Full Feldge Channel Financing Assistance" className="img-fluid img"  width={"45"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Full-Fledged</h3>
                                        <p className="subtext">Loan Assistance</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <img src={HighValue} alt="High Value Channel Financing" className="img-fluid img"  width={"45"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">High Value</h3>
                                        <p className="subtext">Working Capital</p>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            <img src={Documentation} alt="Digital Channel Financing Documentation" className="img-fluid img"  width={"30"} height={"45"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Digital</h3>
                                        <p className="subtext">Documentation Process</p>
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

export default ChannelFinanceBanner;
