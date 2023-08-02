import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import EasyStepsLine from '../../assets/images/free-demat-compaign/easy-steps-bg.webp';

function OpenAccountEasySteps() {
  return (
    <>
        <section className='easy-steps-sec'>
            <div className='container'>
                 <div className='row'>
                    <div className="col-md-12">
                        <div className='text-center'>
                            <h2 className="title-secnd">Open a Demat Account Online <span>in Easy Steps</span></h2>
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
                                <li className='numone display-flex'>
                                    <div className='easy-text mr-b'>
                                        PAN & DOB
                                    </div>
                                    <div className='number'>
                                        <span className='number-text'>01</span>
                                    </div>
                                </li>
                                <li className='numtwo display-flex'>
                                    <div className='number mr-b'>
                                        <span className='number-text'>02</span>
                                    </div>
                                    <div className='easy-text'>
                                        Basic Details
                                    </div>
                                </li>
                                <li className='numthree display-flex'>
                                    <div className='easy-text mr-b'>
                                        Bank Details
                                    </div>
                                    <div className='number'>
                                        <span className='number-text'>03</span>
                                    </div>
                                </li>
                                <li className='numfourth display-flex'>
                                    <div className='number mr-b'>
                                        <span className='number-text'>04</span>
                                    </div>
                                    <div className='easy-text'>
                                    IPV Details
                                    </div>
                                </li>
                                <li className='numfive display-flex'>
                                    <div className='easy-text mr-b'>
                                    Documents Upload
                                    </div>
                                    <div className='number'>
                                    <span className='number-text'>05</span>
                                    </div>
                                </li>
                                <li className='numsix display-flex'>
                                    <div className='number mr-b'>
                                    <span className='number-text'>06</span>
                                    </div>
                                    <div className='easy-text'>
                                    Nominee Details
                                    </div>
                                </li>
                                <li className='numseven display-flex'>
                                    <div className='easy-text mr-b'>
                                    Esign
                                    </div>
                                    <div className='number'>
                                    <span className='number-text'>07</span>
                                    </div>
                                </li>
                                <li className='numeight display-flex'>
                                    <div className='number mr-b'>
                                    <span className='number-text'>08</span>
                                    </div>
                                    <div className='easy-text'>
                                    Submit DDPI
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </section>
    </>
  )
}

export default OpenAccountEasySteps