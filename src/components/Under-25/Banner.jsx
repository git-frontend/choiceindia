import {useState,useEffect} from 'react';
import DematForm from './DematForm';
function Banner() {

  return (
    <>
        <section className='banner-sec'>
              <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                       <div className='banner-form'>
                          <div className='left-sect'>
                            <div className='banner-caption'>
                              <h1>Under 25 just <br />got an upgrade.</h1>
                              <p>The Finapp built for Gen Z.</p>
                            </div>
                          </div>
                          <div className='right-sect'>
                            <DematForm />
                          </div>
                       </div>
                    </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Banner