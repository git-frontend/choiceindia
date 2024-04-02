import React from 'react'
import  SecuredInvs  from '../../assets/images/under-25/secured-invesments.webp';
import  Covered  from '../../assets/images/under-25/covered.webp';
import  Track  from '../../assets/images/under-25/track.webp';
function HoldUp() {
  return (
    <>
      <section className='hold-up-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='heading-sec'>
                        <h2>Hold up, we ain't done yet.</h2>
                        <p>We have more opportunities for you to uncover.</p>
                    </div>
                    <div className='hold-up'>
                        <div className='imgcard'>
                            <div className='card-details'>
                                <img alt='Secured Investments' src={SecuredInvs} width={587} height={503} className="img-fluid ban-mf"/>
                                <div className='card-caption'>
                                    <h3>Secured Investments, Smart moves.</h3>
                                    <p>Chill investments for low-key money goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className='imgcard'>
                            <div className='card-details'>
                                <img alt='Covered' src={Covered} width={587} height={503} className="img-fluid ban-mf"/>
                                <div className='card-caption'>
                                    <h3>Adulting 101? We got you covered</h3>
                                    <p>Get a range of insurance to live a stress-free life.</p>
                                </div>
                            </div>
                        </div>
                        <div className='imgcard'>
                            <div className='card-details'>
                                <img alt='Tacks in a single app' src={Track} width={587} height={503} className="img-fluid ban-mf"/>
                                <div className='card-caption'>
                                    <h3>Keep all tacks in a single app</h3>
                                    <p>One app, endless possibilities for all your financial needs.</p>
                                </div>
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

export default HoldUp