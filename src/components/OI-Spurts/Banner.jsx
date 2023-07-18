import React from 'react'
import { useState,useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
function Banner() {
    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState(0);
    const toggleTab = (index) => {
    setToggleState(index);
  };
  

  return (
    <>
        <section className='tab-section'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8 col-md-12'>
                        <div className='banner-ttle text-center'>
                            <h1 className='title-first'>Open Interest <br/>(OI Spurts)</h1>
                            <p>Get Live Open Interest (OI Spurts) Data for Futures & Options</p>
                        </div>
                    </div>
                </div>
                <div className='tabs-btn'>
                            <div className='row justify-content-center'>
                              <div className='col-xl-8 col-md-12'>
                                <ul className='list_group1'>
                                        <li  className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(1); setData(0) }}>Derivatives</li>
                                        <li  className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(2); setData(1) }}>Commodities</li>
                                        <li  className={toggleState === 3 ? "list-group-item tabs active" : "list-group-item"}
                                            onClick={() => { toggleTab(3); setData(1) }}>Currencies</li>
                                </ul>
                              </div>
                           </div>
            </div>
           
            </div>
        </section>
        <section className='banner-section'>
                <div className='container'>
                <div className='main-sec'>
                    <div className='row'>
                        <div className='col-md-12'>
                           
                          
                            <div className="content-tabs">
                                <div className={toggleState === 1 ? "content active-content" : "content"}>
                                    <div className='table-section'>
                                        <div className='row'>
                                            <div className='col-xl-6 col-md-12'>
                                            <div className='row align-items-center'>
                                                    <div className='col-md-6'>
                                                    <Dropdown className='list-drpdwn'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn-drp'>
                                                        Long Built Up
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='drop-menu'>
                                                            <Dropdown.Item href="#" className='drop-item'>Long Built Up</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-item'>Short Built Up</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-item'>Short Covering</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-item'>Long Liquidation</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </div>
                                                    <div className='col-md-6'>
                                                    <Dropdown className='list-drpdwn'>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn-drp'>
                                                        Stock Options
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className='drop-menu'>
                                                            <Dropdown.Item href="#" className='drop-item'>Long Built Up</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-item'>Short Built Up</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-item'>Short Covering</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-item'>Long Liquidation</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-md-12'>
                                                <div className='toggle-refresh'>
                                                    <div className=''>
                                                            <div className="toggle">
                                                                <span>MCX</span>
                                                                <input type="checkbox"/>
                                                                <label></label>
                                                                <span>NCDX</span>
                                                            </div>
                                                    </div>
                                                <div className='refresh-boxs'>
                                                    <button className='btn-refresh'>
                                                        <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                            <path d="M25.866 15.8C24.9974 21.5736 20.0156 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C18.9207 2 23.1498 4.96183 25.0015 9.2" stroke="#004393" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                                            <path d="M20 9.19995H25.28C25.6777 9.19995 26 8.8776 26 8.47995V3.19995" stroke="#004393" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                    </button>
                                                </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className='table-margin-cal'>
                                            <div className='table-responsive'>
                                            <table className="table table-striped ">
                                            <thead>
                                                <tr>
                                                    <th className='text-start'>Sec Desc</th>
                                                    <th className='text-end'>LTP</th>
                                                    <th className='text-end'>Change(%)</th>
                                                    <th className='text-end'>OI</th>
                                                    <th className='text-end'>OI Change(%)</th>
                                                    <th className='text-end'>Volume</th>
                                                    <th className='text-end'>Traded Value</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                        <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                        <td className='text-end'>9.10</td>
                                                        <td className='text-end profit'>8.38</td>
                                                        <td className='text-end'>4,082.00</td>
                                                        <td className='text-end profit'>37.12</td>
                                                        <td className='text-end'>8,703.00</td>
                                                        <td className='text-end'>78,567.91</td>
                                                    </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end profit'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end profit'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end profit'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end profit'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end profit'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end profit'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                        <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                        <td className='text-end'>9.10</td>
                                                        <td className='text-end loss'>-8.38</td>
                                                        <td className='text-end'>4,082.00</td>
                                                        <td className='text-end loss'>-37.12</td>
                                                        <td className='text-end'>8,703.00</td>
                                                        <td className='text-end'>78,567.91</td>
                                                    </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end profit'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end profit'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end profit'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end profit'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end loss'>-8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end loss'>-37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end profit'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end profit'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                                <tr>
                                                    <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                    <td className='text-end'>9.10</td>
                                                    <td className='text-end'>8.38</td>
                                                    <td className='text-end'>4,082.00</td>
                                                    <td className='text-end'>37.12</td>
                                                    <td className='text-end'>8,703.00</td>
                                                    <td className='text-end'>78,567.91</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                            </div>
                                            <div className='pagination-sec'>
                                            <div className='paginations'>
                                                <div className='rows-page'>
                                                   <span className='text-rows'>Rows per page:</span>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="success" id="dropdown-basic" className='pagination-dropdwn'>
                                                       01
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#" className='drop-items'>01</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-items'>02</Dropdown.Item>
                                                            <Dropdown.Item href="#" className='drop-items'>03</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                                <div className='entries'>
                                                    <span>1-10 of 20</span>
                                                </div>
                                                <div className='arrows'>
                                                    <div className='arrow-icons'>
                                                        <div className='arro-pre'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='arrow-fill'>
                                                            <path d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill="black" fill-opacity="0.56"/>
                                                            </svg>
                                                        </div>
                                                        <div className='arrow-next'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='arrow-fill'>
                                                                <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" fill="black" fill-opacity="0.56"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>

                                      </div>

                                    </div>
                                </div>
                                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                    Commodities
                                </div>
                                  <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                    Currencies
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