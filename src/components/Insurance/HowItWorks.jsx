
import React from "react";
import FirstStep from '../../assets/images/insurance/all-online.svg';
import SecndStep from '../../assets/images/insurance/smart-compare.svg';
import ThirdStep from '../../assets/images/insurance/all-done.svg';
import LazyLoader from '../Common-features/LazyLoader';


function HowItWorks() {

  return (
    <div>
      
     
    <section className="ins-how-works">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading-sec text-center">
                        <h2 className="title-first">How it Works ?</h2>
                        <p>3 Easy steps to accurate need - based insurance cover</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-9">
                    <div className="how-works-steps">
                        <div className="works-steps-itm steps-itm">
                            <div className="steps-itm-left itm-left-img">
                                <LazyLoader src={FirstStep} alt={"Banner Images"} className={"img-fluid"} width={"154"} height={"198"} />
                            </div>
                            <div className="steps-itm-right">
                                <h2>01</h2>
                                <h3>All Online</h3>
                                <p>Use “ Get Quote “ to tell us what you’re looking for</p>
                            </div>
                        </div>
                        <div className="works-steps-itm steps-itm-reverse">
                            <div className="steps-itm-left itm-left-img">
                                <LazyLoader src={SecndStep} alt={"Banner Images"} className={"img-fluid"} width={"154"} height={"198"} />
                            </div>
                            <div className="steps-itm-right">
                                <h2>02</h2>
                                <h3>Smart Compare</h3>
                                <p>Requirements matched against hundreds of suitable schemes</p>
                            </div>
                        </div>
                        <div className="works-steps-itm">
                            <div className="steps-itm-left itm-left-img">
                                <LazyLoader src={ThirdStep} alt={"Banner Images"} className={"img-fluid"} width={"154"} height={"198"} />
                            </div>
                            <div className="steps-itm-right">
                                <h2>03</h2>
                                <h3>And Done</h3>
                                <p>Best suited option is selected for you</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    
    </div>
  );
}

export default HowItWorks;
