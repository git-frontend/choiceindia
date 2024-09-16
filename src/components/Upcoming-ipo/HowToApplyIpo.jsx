
import icon1 from "../../assets/images/upcoming-ipo/step1.svg";
import icon2 from "../../assets/images/upcoming-ipo/step2.svg";
import icon3 from "../../assets/images/upcoming-ipo/step3.svg";
import icon4 from "../../assets/images/upcoming-ipo/step4.svg";
import icon5 from "../../assets/images/upcoming-ipo/step5.svg";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HowToApplyIpo() {

  function updateActiveStep(index) {
    const elements = document.querySelectorAll(".lst-itms");
    elements.forEach((element, i) => {
      if (i === index) {
        element.classList.add("steps-active");
      } else {
        element.classList.remove("steps-active");
      }
    });
  }
  let currentIndex = 0;
  function autoUpdateStep() {
    updateActiveStep(currentIndex);
    currentIndex = (currentIndex + 1) % document.querySelectorAll(".lst-itms").length;
  }

  const intervalId = setInterval(autoUpdateStep, 5000);

  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };


  return (
    <>
        <section className='ipo-apply-steps'>
            <div className='container'>
                  <div className='row justify-content-between'>
                      <div className="col-md-12">
                            <div className='head-ttl'>
                                <h2 className='title-secnd'>How to Apply for an <span>IPO on Choice?</span></h2>
                            </div>
                            <div className="apply-steps-list">
                                  <div className="lst-itms steps-active">
                                        <span>
                                          <div className='circle-big'>
                                              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                              </svg>
                                          </div>
                                          <img src={icon1} />
                                        </span>
                                        <h3>01</h3>
                                        <p>Open Demat + Trading Account with Choice</p>
                                  </div>
                                  <div className="lst-itms">
                                        <span>
                                          <div className='circle-big'>
                                              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                              </svg>
                                          </div>
                                          <img src={icon2} />
                                        </span>
                                        <h3>02</h3>
                                        <p>Select IPO From upcoming list on website/app</p>
                                  </div>
                                  <div className="lst-itms">
                                        <span>
                                          <div className='circle-big'>
                                              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                              </svg>
                                          </div>
                                          <img src={icon3} />
                                        </span>
                                        <h3>03</h3>
                                        <p>Review details check price band &amp; lot size</p>
                                  </div>
                                  <div className="lst-itms">
                                        <span>
                                          <div className='circle-big'>
                                              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                              </svg>
                                          </div>
                                          <img src={icon4} />
                                        </span>
                                        <h3>04</h3>
                                        <p>Enter bid & pay - specify shares, price; pay via bank/UPI</p>
                                  </div>
                                  <div className="lst-itms">
                                        <span>
                                          <div className='circle-big'>
                                              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                              </svg>
                                          </div>
                                          <img src={icon5} />
                                        </span>
                                        <h3>05</h3>
                                        <p>Submit your application</p>
                                  </div>
                            </div>
                            <div className="btn-flex">
                                  <a target="_blank" href="https://www.youtube.com/watch?v=mU_ngDGLfe8" className="btn-bg btn-light">How to Video</a>
                                  <a href="#" className="btn-bg btn-bg-dark">Open Demat Account</a>
                            </div>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default HowToApplyIpo