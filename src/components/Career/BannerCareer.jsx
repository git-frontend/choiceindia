import  CareerImage0  from '../../assets/images/career/slide1.webp';
import  CareerImage1  from '../../assets/images/career/slide2.webp';
import  CareerImage2  from '../../assets/images/career/slide3.webp';
import  CareerImage3  from '../../assets/images/career/slide4.webp';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Marquee from 'react-fast-marquee';
import LazyLoader from '../Common-features/LazyLoader';

function BannerCareer() {

  return (
    <div className='career-main'>
      
     
    <section className="bannersection">
        <Marquee direction="left" speed={100}   delay={1} pauseOnHover={true} pauseOnClick={true} className="client-list-slider career-list-slider">
                  <div className='marq-itm'>
                  <LazyLoader src={CareerImage0} className={'img-fluid'} width={"482"} height={"400"} alt={"Loading"} />
                     {/* <img src={CareerImage0} className="img-fluid" width={"482"} height={"400"}  alt='Loading' /> */}
                     </div>
                  <div className='marq-itm'>
                  <LazyLoader src={CareerImage1} className={'img-fluid'} width={"482"} height={"400"} alt={"Loading"} /> 
                  {/* <img src={CareerImage1} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'>
                  <LazyLoader src={CareerImage2} className={'img-fluid'} width={"482"} height={"400"} alt={"Loading"} /> 
                  {/* <img src={CareerImage2} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'>
                  <LazyLoader src={CareerImage0} className={'img-fluid'} width={"482"} height={"400"} alt={"Loading"} /> 
                  {/* <img src={CareerImage0} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'> 
                  <LazyLoader src={CareerImage1} className={'img-fluid'} width={"482"} height={"400"} alt={"Loading"} />
                  {/* <img src={CareerImage1} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'> 
                  <LazyLoader src={CareerImage2} className={'img-fluid'} width={"482"} height={"400"} alt="Loading" />
                  {/* <img src={CareerImage2} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
          </Marquee>     
    </section>

    <section className='our-values'>
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-xl-7 col-md-10">
                <div className="heading-sec">
                    <h3 className="title-first">Our Values</h3>
                    <p>We’ve built our workplace upon efficient functional teams that foster leadership, support, and peer learning. At Choice, we treasure our employees who contribute in creating value for the company with diligence, integrity, and innovation.</p>
                </div>
                </div>
            </div>
        </div>
    </section>

    <section className='culture-values'>
        <div className='container'>
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-5 col-md-6">
                  <div className="heading-sec">
                      <h3 className="title-first">The Culture</h3>
                      <p>
                      We are a fast paced organization with robust groups of zealous individuals. We believe in providing free hand and extensive creative liberty to our team. 
                      <br/><br/>We take the responsibility of providing, nurturing, competitive and safe working environment to our teams is our top priority.
                      </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className='culture-values-img'>
                  <LazyLoader src={CareerImage3} className={'img-fluid shdow'} width={"642"} height={"567"} alt="Loading" />
                              <img src={CareerImage3} className='img-fluid shdow' alt="Loading" width={"642"} height={"567"} />
                  </div>
                </div>
            </div>
        </div>
    </section>

      
    
    </div>
  );
}

export default BannerCareer;
