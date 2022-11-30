
import React from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import LazyLoader from "../Common-features/LazyLoader";
import banner from '../../assets/images/com-vehicle-loan/commercial-vehicle-loan.webp';
import Noadditionalsecurity from '../../assets/images/com-vehicle-loan/no-additional-security-for-commercial-vehicle-loan.svg';
import HassleFreeProcess from '../../assets/images/com-vehicle-loan/hassle-free-commercial-vehicle-loan-process.svg';
import Customisedsolutions from '../../assets/images/com-vehicle-loan/customised-commercial-vehicle-loan-solutions.svg';


function ChannelFinanceBanner() {
    const settings1 = {
        infinite: true,
        speed: 1500,
        slidesToShow:3,
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
            <section className="inv-fin-banner com-vehcl-loan">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-md-7">
                            <div className="fin-banner-caption">
                                <h1 className="big-ttl">Drive Your Finances with Commercial Vehicle Loan</h1>
                                <p>Your search for vehicle loan stops right here with us. We at Choice Finserv offer affordable and budget-friendly vehicle loans making sure that the wheels to your growth keep moving.</p>
                                <p>Get an instant commercial vehicle loan for new &amp; used vehicles with 100% asset value.<br />
                                    <a href="#"><span className="aply-btn">Apply Now!</span></a></p>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex justify-content-end">
                            <LazyLoader src={banner} alt={"Commercial Vehicle Loan"} className={"img-fluid img-banner"} width={"450"} height={"406"} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-12">
                            <Slider {...settings1} className="inv-banner-slider">
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={Noadditionalsecurity} alt={"No Additional Security for Commercial Vehicle Loan"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={Noadditionalsecurity} alt="Low Flexi Loan Processing Fee" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">No additional <br/>security</h3>
                                    </div>
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={HassleFreeProcess} alt={"Hassle Free Commercial Vehicle Loan Process"} className={"img-fluid img"} width={"60"} height={"50"} /> */}
                                            <img src={HassleFreeProcess} alt="Low Flexi Loan Processing Fee" className="img-fluid img"  width={"60"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Hassle- Free <br/>
Process</h3>
                                    </div>
                                
                                    <div className="carditem-nbfc">
                                        <span className='cardimg'>
                                            {/* <LazyLoader src={Customisedsolutions} alt={"Customised Commercial Vehicle Loan Solutions"} className={"img-fluid img"} width={"50"} height={"50"} /> */}
                                            <img src={Customisedsolutions} alt="Low Flexi Loan Processing Fee" className="img-fluid img"  width={"50"} height={"50"}></img> 
                                        </span>
                                        <h3 className="card-ttl">Customised <br/> solutions</h3>
                                    </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ChannelFinanceBanner;
