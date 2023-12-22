import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import img1 from '../../assets/images/mf-app/trust-based-mutual-fund-investment-app.svg';
import img2 from '../../assets/images/mf-app/mutual-fund-app-with-market-experts.svg';
import img3 from '../../assets/images/mf-app/mutual-fund-app-with-technological-thrust.svg';
import img4 from '../../assets/images/mf-app/mutual-fund-app-with-top-schemes-recommendation.svg';

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
                <div className='col-lg-8 col-md-12'>
                    <div className='card-sec'>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <LazyLoader src={img1} alt={"Trust Based Mutual Fund Investment App"} width={77} height={77}/>
                            </span>
                            <h5 className='choice-ttl'>Trust Based Investing</h5>
                            <p>Experience of more than 25 years</p>
                        </div>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <LazyLoader src={img2} alt={"Mutual Fund App with Market Experts"} width={77} height={77}/>
                            </span>
                            <h5 className='choice-ttl'>Accomplished Market Experts</h5>
                            <p>Great Team of Analysts and Mutual Fund Experts</p>
                        </div>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <LazyLoader src={img3} alt={"Mutual Fund App with Technological Thrust"} width={77} height={77}/>
                            </span>
                            <h5 className='choice-ttl'>Technological Thrust</h5>
                            <p>Bringing latest technology for our patrons</p>
                        </div>
                        <div className='card-items'>
                            <span className='cfx-img'>
                                <LazyLoader src={img4} alt={"Mutual Fund App with Top Schemes Recommendation"} width={77} height={77}/>
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