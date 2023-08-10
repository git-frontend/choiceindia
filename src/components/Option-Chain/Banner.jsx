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
                                        {/* <ul className="brokerage-search-result" >
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
                                        </ul> */}
                                    </div>
                                    <div className='selectbar'>
                                        <select name="" id="" className='select-control'>
                                            <option value="">27 JUL 23</option>
                                            <option value="">10 AUG 23</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='tab-sec'>
                                    <div className="disply-flex">
                                        <div className='no-strike'>
                                            <span>No. of strike ATM:</span>
                                        </div>
                                        <div className='numbers'>
                                            <ul>
                                                <li className='active'>10</li>
                                                <li>20</li>
                                                <li>ALL</li>
                                            </ul>
                                            <button className='btn-refresh'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 26 26" fill="none">
                                                    <path d="M24.866 14.8C23.9974 20.5736 19.0156 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C17.9207 1 22.1498 3.96183 24.0015 8.2" stroke="#EF404A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M19 8.19995H24.28C24.6777 8.19995 25 7.8776 25 7.47995V2.19995" stroke="#EF404A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
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

export default Banner