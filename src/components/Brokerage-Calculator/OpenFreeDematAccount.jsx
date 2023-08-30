import React from 'react'
import LazyLoader from '../Common-features/LazyLoader'
import Img1 from "../../assets/images/brokerage-calculator/men.webp";
import FreeAmc from "../../assets/images/brokerage-calculator/free-amc.svg";
import LowDP from "../../assets/images/brokerage-calculator/low-dp.svg";
import  NoAutoSquare from "../../assets/images/brokerage-calculator/square-off.svg";
import FreeResearch from "../../assets/images/brokerage-calculator/research.svg";

function OpenFreeDematAccount() {
  return (
    <>
        <section className='open-free-accont'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='columns'>
                            <div className='left-items'>
                                <div className='benifits'>
                                <div className='benifits-section'>
                                    <div className='card-bg'>
                                        <ul>
                                            <li>
                                            
                                                <span className='bx-icon'>
                                                    <LazyLoader src={FreeAmc} alt={"Free AMC for First Year"} className={"img-fluid"} width={"56"} height={"56"} />
                                                </span>
                                                <p className="bx-text"><span>Free AMC</span> for First Year</p>
                                            </li>
                                            <li>
                                                <span className='bx-icon'>
                                                <LazyLoader src={LowDP} alt={"Low DP Charges (₹ 10)"} className={"img-fluid"} width={"56"} height={"56"} />
                                                </span>
                                                <p className="bx-text"><span>Low DP</span> Charges (₹ 10)</p>
                                            </li>
                                            <li>
                                                <span className='bx-icon'>
                                                    <LazyLoader src={NoAutoSquare} alt={"No Auto Square Off Charges"} className={"img-fluid"} width={"56"} height={"56"} />
                                                </span>
                                                <p className="bx-text"><span>No Auto Square Off</span> Charges</p>
                                            </li>
                                            <li>
                                                <span className='bx-icon'>
                                                    <LazyLoader src={FreeResearch} alt={"Free Research Advisory"} className={"img-fluid"} width={"56"} height={"56"} />
                                                </span>
                                                <p className="bx-text"><span>Free Research</span> Advisory</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    <div className='men'>
                                        <LazyLoader src={Img1} height={374} width={302} className="img-fluid" alt={"Brokerage Calculator"}/>
                                    </div>
                                </div>
                            </div>
                            <div className='right-items'>
                                <div className='free-account-ttl'>
                                    <h2 className='title-first'>Open a <span>FREE</span> Demat <br/>Account in <span>5 Mins.</span></h2>
                                    <a className='btn-bg btn-light' href='/'>Open Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OpenFreeDematAccount