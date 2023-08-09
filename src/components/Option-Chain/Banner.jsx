import React from 'react'

function Banner() {
  return (
    <>
        <section className='banner-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-md-12'>
                        <div className='banner-ttle text-center'>
                            <h1 className='title-first'>TCS Option Chain</h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='banner-card'>
                            <div className='first-sec'>
                                <div className='input-sec'>
                                    <div className='searchbar'>
                                        <input type="text" name="" id="" className='input-control search-icon'/>
                                    </div>
                                    <div className='selectbar'>
                                        <select name="" id="" className='input-control'>
                                            <option value=""><span className='expry'>Expiry:</span> 27 JUL 23</option>
                                            <option value=""><span className='expry'>Expiry:</span> 10 AUG 23</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='tab-sec'>

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

export default Banner