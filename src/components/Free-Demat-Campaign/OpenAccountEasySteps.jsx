import React from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import EasyStepsLine from '../../assets/images/free-demat-compaign/easy-steps-bg.webp';

function OpenAccountEasySteps() {
    function updateActiveStep(index) {
        const elements = document.querySelectorAll(".display-flex");
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
        currentIndex = (currentIndex + 1) % document.querySelectorAll(".display-flex").length;
      }
      const intervalId = setInterval(autoUpdateStep, 5000);
  return (
    <>
        <section className='easy-steps-sec'>
            <div className='container'>
                 <div className='row'>
                    <div className="col-md-12">
                        <div className='text-center'>
                            <h2 className="title-first">Open a Demat Account Online <span>in Easy Steps</span></h2>
                            <p>Know the comprehensive step-by-step account opening procedure by <br/><a href="/">visiting this page.</a></p>
                        </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='main-easy-div'>
                            <div className='easy-steps-bg'>
                                <div className='steps-line'>
                                <LazyLoader src={EasyStepsLine} className="img-fluid"></LazyLoader>
                                </div>
                            <ul>
                                <li className='numone display-flex steps-active'>
                                    <div className='easy-text mr-b'>
                                        PAN & DOB
                                    </div>
                                    <div className='number'>
                                        <span className='number-text'>01</span>
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numtwo display-flex'>
                                    <div className='number mr-b'>
                                        <span className='number-text'>02</span>
                                    </div>
                                    <div className='easy-text'>
                                        Basic Details
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numthree display-flex'>
                                    <div className='easy-text mr-b'>
                                        Bank Details
                                    </div>
                                    <div className='number'>
                                        <span className='number-text'>03</span>
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numfourth display-flex'>
                                    <div className='number mr-b'>
                                        <span className='number-text'>04</span>
                                    </div>
                                    <div className='easy-text'>
                                    IPV Details
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numfive display-flex'>
                                    <div className='easy-text mr-b'>
                                    Documents Upload
                                    </div>
                                    <div className='number'>
                                    <span className='number-text'>05</span>
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numsix display-flex'>
                                    <div className='number mr-b'>
                                    <span className='number-text'>06</span>
                                    </div>
                                    <div className='easy-text'>
                                    Nominee Details
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numseven display-flex'>
                                    <div className='easy-text mr-b'>
                                    Esign
                                    </div>
                                    <div className='number'>
                                    <span className='number-text'>07</span>
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                                <li className='numeight display-flex'>
                                    <div className='number mr-b'>
                                    <span className='number-text'>08</span>
                                    </div>
                                    <div className='easy-text'>
                                    Submit DDPI
                                    </div>
                                    <div className='circle-big'>
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle className='progress' cx="40" cy="40" r="39" stroke="#0CBCB7" stroke-width="2" stroke-miterlimit="2.56141"/>
                                    </svg>

                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a className='cursor-pointer'>
                                <span className="btn-bg btn-bg-dark">Open Free Account</span>
                            </a>
                        </div>
                        </div>
                    </div>
            </div>
        </section>
    </>
  )
}

export default OpenAccountEasySteps