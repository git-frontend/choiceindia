
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import StepsBanner from '../../assets/images/free-demat-compaign/how-to-open-demat-account-with-choice.webp';
import SliderApp from "./SliderApp";

function DematAccountOnlineSteps() {
  function chapterScroll3(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  return (
    <div>
    <section className="open-account-steps">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Open a Demat Account Online in 4 Steps</h2>
                </div>
                <div className="account-steps-list">
                    <div className="left-sec">
                        <SliderApp />
                        <div className="text-center pt-5">
                          <a onClick={()=>{chapterScroll3('dematform')}} class="cursor-pointer"><span class="btn-bg btn-bg-dark">Open Free Account</span></a>
                        </div>
                      </div>
                    <div className="right-sec">
                      <div className="step-banner">
                       <LazyLoader src={StepsBanner} className={'img-fluid'} width={"796"} height={"522"} alt={"How to Open Demat Account with Choice"}/>
                      </div>
                    </div>
                </div>
              </div>
        </div>
    </section>
    </div>
  );
}

export default DematAccountOnlineSteps;
