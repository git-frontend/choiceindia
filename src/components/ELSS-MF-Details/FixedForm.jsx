import React from 'react'

function FixedForm() {
  return (
    <>
    <section className='fixed-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
                <div className='form-section'>
                  <div className='form-items'>
                    <div className='shape-yellow'>
                      <div className='cross-border'></div>
                        <h6>Enjoy Zero Brokerage on <br/> Mutual Funds</h6>
                    </div>
                  </div>
                  <div className='form-items'>
                    <div className='form-grp'>
                      <input type="text" className='form-control' placeholder='Enter Mobile Number'/>
                    </div>
                  </div>
                  <div className='form-items'>
                    <a href="" className='btn-bg'>GET FREE DEMAT ACCOUNT</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default FixedForm