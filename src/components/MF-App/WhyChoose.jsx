import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import img1 from '../../assets/images/mf-app/trust-based.svg';
import img2 from '../../assets/images/mf-app/market-expert.svg';
import img3 from '../../assets/images/mf-app/technological-thrust.svg';
import img4 from '../../assets/images/mf-app/top-recommended.svg';

function WhyChoose() {
  return (
    <>
    <section className='why-choose-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='heading-sec'>
                        <h2 className='title-secnd'>Why Choose <span>Choice Finx</span> Mutual Fund App?</h2>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card-sec'>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <img src={img1} alt="" width={68} height={81}/>
                            </span>
                            <h5 className='choice-ttl'>Trust Based Investing</h5>
                            <p>Experience of more than 25 years</p>
                        </div>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <img src={img2} alt="" width={60} height={86}/>
                            </span>
                            <h5 className='choice-ttl'>Accomplished Market Experts</h5>
                            <p>Great Team of Analysts and Mutual Fund Experts</p>
                        </div>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <img src={img3} alt="" width={60} height={86}/>
                            </span>
                            <h5 className='choice-ttl'>Technological Thrust</h5>
                            <p>Bringing latest technology for our patrons</p>
                        </div>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <img src={img4} alt="" width={77} height={77}/>
                            </span>
                            <h5 className='choice-ttl'>Top Recommended Schemes</h5>
                            <p>Rated & Analyzed by Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default WhyChoose