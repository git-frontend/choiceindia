import React from 'react'
import Form from 'react-bootstrap/Form';
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
                                <div className='brokerage-search'>
                                        <Form.Control
                                            type="text"
                                            className="input-control search-icon"
                                            autoComplete="off"
                                            placeholder="Tata consultancy service"
                                            value=""
                                        />
                                        <ul className="brokerage-search-result" >
                                            <li key="no-record"><span className='no-record'>No Record Found</span></li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFTY</span>
                                                <span className="name">NIFTY 50</span>
                                            </li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFGS10YRCLN</span>
                                                <span className="name">NIFTY GS 10YR CLN</span>
                                            </li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFTYLMID250</span>
                                                <span className="name">NIFTY LARGEMID250</span>
                                            </li>
                                            <li className='brokerage-search-list'>
                                                <span className="symbol">NIFTYOIL&GAS</span>
                                                <span className="name">NIFTY OIL AND GAS</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='selectbar'>
                                        <select name="" id="" className='select-control'>
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