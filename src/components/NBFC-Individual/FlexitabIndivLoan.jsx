
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import time from '../../assets/images/nbfc-indivial-loan/quick-flexi-loan-approval.svg';
import disburse from '../../assets/images/nbfc-indivial-loan/flexi-loan-disbursed-in-48-hours.svg';
import paperwork from '../../assets/images/nbfc-indivial-loan/minimum-paper-work-for-flexi-business-loan.svg';
import fee from '../../assets/images/nbfc-indivial-loan/low-flexi-loan-processing-fees.svg';
import NbfcForm from "../Common-features/NbfcForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { set } from "react-hook-form";
function flexitab() {
    
    /** scroll purpose */
function chapterScroll3(id) {
    
    // console.log("checkal",id)
    var element3 = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition3 = element3.getBoundingClientRect().top;
    var offsetPosition3 = elementPosition3 + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition3,
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
        slidesToShow: 4,
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
                dots: true,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              }
            }
      
          ]

    };
    return (
        <div>
            <section className="card-wrap-nbfc">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <Slider {...settings1}>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={time} alt="Individual Loan Sanctioned in 10 Minutes" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">10 Mins</h3>
                                <p className="subtext">Loan Sanctioned Time</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={disburse} alt="Get Individual Loan Disbursed in 48 Hours" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">48 Hours</h3>
                                <p className="subtext">to Get Loan Disbursed</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={paperwork} alt="Minimum Paperwork" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">Minimum</h3>
                                <p className="subtext">Paperwork</p>
                            </div>
                            <div className="carditem-nbfc">
                            <span className='cardimg'>
                                <img src={fee} alt="Low Loan Processing Fee" className="img-fluid img"  width={"45"} height={"34"}></img> 
                            </span>
                                <h3 className="card-ttl">Low</h3>
                                <p className="subtext">processing Fee</p>
                            </div>
                        </Slider>
                        </div>
                       
                    </div>
                    <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll3('nbfcForm')}}>Get a Call from us</button>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default flexitab;
