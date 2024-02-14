
import React,{useState,useEffect} from "react";

import Slider from 'react-slick';
import LazyLoader from "../Common-features/LazyLoader";
import time from '../../assets/images/nbfc-indivial-loan/quick-flexi-loan-approval.svg';
import fixedrate from '../../assets/images/NBFCPersonalLoan/fixedrate.svg';
import custservice from '../../assets/images/NBFCPersonalLoan/custservice.svg';
import flexibleoption from '../../assets/images/nbfc-indivial-loan/flexibleoption.svg';

function AdvantagesPersonal() {
    const [name, setName ] = useState('hideform');
    const [idscroll, setIdScroll ] = useState('');
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
    
      
      /** hide and show section */
      const getPosition = () => {
        const element = document.getElementById("showForm3");
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
                            <div className="personal-sectitle">
                            <h2 className="title-secnd text-center">Advantages</h2>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <Slider {...settings1}>
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                       
                                        <img src={time} alt="Quick Flexi Loan Approval" className="img-fluid img"  width={"45"} height={"34"}></img> 
                                    </span>
                                    <h3 className="card-ttl">Quick</h3>
                                    <p className="subtext">Loan Sanction</p>
                                </div>
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                       
                                        <img src={fixedrate} alt="fixed interest rate on personal loan" className="img-fluid img"  width={"50"} height={"34"}></img> 
                                    </span>
                                    <h3 className="card-ttl">Fixed</h3>
                                    <p className="subtext">Interest Rate</p>
                                </div>
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                        
                                        <img src={flexibleoption} alt="Flexible Repayment Options" className="img-fluid img"  width={"45"} height={"34"}></img> 
                                    </span>
                                    <h3 className="card-ttl">Flexible</h3>
                                    <p className="subtext">Loan Terms</p>
                                </div>
                                <div className="carditem-nbfc">
                                    <span className='cardimg'>
                                       
                                        <img src={custservice} alt="Personalized Customer Services" className="img-fluid img"  width={"45"} height={"34"}></img> 
                                    </span>
                                    <h3 className="card-ttl">Personalized</h3>
                                    <p className="subtext">Customer Services </p>
                                </div>
                        </Slider>
                        </div>
                    </div>
                    <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('nbfcForm')}}>Get a Call from us</button>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default AdvantagesPersonal;
