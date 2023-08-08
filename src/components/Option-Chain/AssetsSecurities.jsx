import React from 'react'

function AssetsSecurities() {
  return (
    <>
        <section className='underlying-assets'>
            <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className='title-secnd'>Underlying Assets & Securities</h2>
                    <div className='underlying-card'>
                        <div className='assets-items'>
                          <div className='left-items'>
                            <div className='display-flex'>
                              <h6>TCS</h6>
                              <span>NSE (EQ)</span>
                            </div>
                            <p>TATA CONSULTANCY SERVICE</p>
                          </div>
                          <div className='right-items'>
                            <div className='values'>
                              <p>3,396.90</p>
                              <p>+8.60 (+0.25%)</p>
                            </div>
                            <div className='btn-sec'>
                                <a href="">
                                  <span className='btn'>BUY</span>
                                </a>
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

export default AssetsSecurities