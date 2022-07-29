
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Marquee from 'react-fast-marquee';

import ClientImage0 from '../../assets/images/insurance/client-img1.webp';
import ClientImage1 from '../../assets/images/insurance/client-img2.webp';
import ClientImage2 from '../../assets/images/insurance/client-img3.webp';
import ClientImage3 from '../../assets/images/insurance/client-img4.webp';
import ClientImage4 from '../../assets/images/insurance/client-img5.webp';

function Benefits() {

  return (
    <div>
      
     
    <section className="ins-benefits">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-sec text-center">
                        <h2 className="title-first">The Benefits You Get With <br/> Choice</h2>
                        <p>We simplify the insurance buying experience and prioritize customer <br/> satisfaction over everything else</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="benefits-list">
                        <div className="benefits-itm">
                            <h3>Registered with <br/> IRDAI</h3>
                        </div>
                        <div className="benefits-itm">
                            <h3>Customised <br/>advisory</h3>
                        </div>
                        <div className="benefits-itm">
                            <h3>Quick quotes at demand</h3>
                        </div>
                        <div className="benefits-itm">
                            <h3>Hassle-free <br/>claims</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="client-marquee">
    <Marquee direction="left" speed={100}   delay={1} pauseOnHover={true} pauseOnClick={true} className="client-list-slider career-list-slider">
                  <div className='marq-itm'>
                      <LazyLoader src={ClientImage0} className={'img-fluid'} width={"312"} height={"105"} alt={"Loading"} />
                     {/* <img src={CareerImage0} className="img-fluid" width={"482"} height={"400"}  alt='Loading' /> */}
                     </div>
                  <div className='marq-itm'>
                      <LazyLoader src={ClientImage1} className={'img-fluid'} width={"280"} height={"105"} alt={"Loading"} />
                  {/* <img src={CareerImage1} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'>
                      <LazyLoader src={ClientImage2} className={'img-fluid'} width={"151"} height={"105"} alt={"Loading"} />
                  {/* <img src={CareerImage2} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'>
                  <LazyLoader src={ClientImage3} className={'img-fluid'} width={"281"} height={"105"} alt={"Loading"} /> 
                  {/* <img src={CareerImage0} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'> 
                  <LazyLoader src={ClientImage4} className={'img-fluid'} width={"350"} height={"92"} alt={"Loading"} />
                  {/* <img src={CareerImage1} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
                  <div className='marq-itm'> 
                  <LazyLoader src={ClientImage1} className={'img-fluid'} width={"312"} height={"105"} alt="Loading" />
                  {/* <img src={CareerImage2} className="img-fluid" width={"482"} height={"400"} alt='Loading' /> */}
                  </div>
          </Marquee>     
    </section>

   
    
    </div>
  );
}

export default Benefits;
