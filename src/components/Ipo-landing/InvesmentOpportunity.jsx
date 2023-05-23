import ImageSub1 from '../../assets/images/ipo-landing/free-demat.svg';
import ImageSub2 from '../../assets/images/ipo-landing/zero-amc-charges.svg';
import ImageSub3 from '../../assets/images/ipo-landing/low-charges.svg';
import ImageSub4 from '../../assets/images/ipo-landing/free-ipo-report.svg';
import LazyLoader from '../Common-features/LazyLoader';
import React from 'react';

function InvesmentOpportunity() {
  

  return (
    <>
        <section className='investment-opportunity'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='left-sec'>
                            <h2 className='title-first'><span className='yello-txt'>Don’t Miss</span> the Investment <span className='yello-txt'>Opportunity</span> in Bajaj Energy IPO?</h2>
                            <button className="btn-bg btn-bg-dark">Open Free Account</button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='right-sec'>
                        <div className='all-features-list'>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub1} className={"img-fluid"} alt={"Stock Collection"} width={"84"} height={"76"} />
                                        <h5 className="feature-ttl">Free Demat <span>Account Opening</span></h5>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub2} className={"img-fluid"} alt={"Basket Investing "} width={"77"} height={"76"} />
                                        <h5 className="feature-ttl">Zero AMC Charges <span>for First Year</span></h5>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub3} className={"img-fluid"} alt={"Financial Planner"} width={"53"} height={"76"} />
                                        <h5 className="feature-ttl">Low DP Charges <span>(Rs. 10 only)</span></h5>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub4} className={"img-fluid"} alt={"Insurance IntelliMart"} width={"76"} height={"76"} />
                                        <h5 className="feature-ttl">Free IPO Report <span>& Advisory</span></h5>
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

export default InvesmentOpportunity