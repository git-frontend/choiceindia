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
                              <h6>GOLD</h6>
                              <span>NSE (EQ)</span>
                            </div>
                            <p>GOLD</p>
                          </div>
                          <div className='right-items'>
                            <div className='values'>
                              <h6>3,396.90</h6>
                              <p>+8.60 (+0.25%)</p>
                            </div>
                            <div className='btn-sec'>
                                <button className='btn-buy'>BUY</button>
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