import React from 'react'

function Revenue(){
  return (
    <>
    <section className='revenue-chart-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-8'>
                    <h2 className='title-first'>Bajaj Energy <span>Revenue & Profit</span></h2>
                    <div className='chart-card'>
                        <div className='chart-header'>
                            <div className='header-item'>
                                <div className='item1'>
                                    <span className='cir-col revenue-color'></span> Revenue
                                </div>
                                <div className='item1'>
                                    <span className='cir-col profit-color'></span> Profit
                                </div>
                                <div className='item1'>
                                    <span className='cir-col loss-color'></span> Loss
                                </div>
                            </div>
                            <div className='header-item'>
                                <span className='value-all'>All value in ₹ Lakh/cr.</span>
                            </div>
                        </div>
                        <div className='chart-custom'>
                              <table className='q-graph'>
                                  <tbody>
                                      <tr className='qtr' id="q1">
                                          <td className='sent bar' style={{height:"60.11%"}}><p>+6.11</p></td>
                                          <td className='paid bar profit' style={{height:"3.9%"}}><p>+0.39</p></td>
                                      </tr>
                                      <tr className='qtr' id="q2">
                                          <td className='sent bar' style={{height:"50.5%"}}><p>+5.05</p></td>
                                          <td className='paid bar profit'  style={{height:"4.9%"}}><p>+0.49</p></td>
                                      </tr>
                                      <tr className='qtr' id="q3">
                                          <td className='sent bar'  style={{height:"70.18%"}}><p>+7.18</p></td>
                                          <td className='paid bar loss' style={{height:"6.1%"}}><p>-0.61</p></td>
                                      </tr>
                                      <tr className='qtr' id="q4">
                                          <td className='sent bar'  style={{height:"89.10%"}}><p>+8.91</p></td>
                                          <td className='paid bar profit'  style={{height:"6.7%"}}><p>+0.67</p></td>
                                          
                                      </tr>
                                  </tbody>
                              </table>

                              <div className='ticks'>
                                  <div className='tick' ><p>10</p></div>
                                  <div className='tick' ><p>8</p></div>
                                  <div className='tick' ><p>6</p></div>
                                  <div className='tick' ><p>4</p></div>
                                  <div className='tick' ><p>2</p></div>
                                  <div className='tick' ><p>0</p></div>
                              </div>
                              <div className='for-date'>
                                    <div className='sub-l1'>
                                        2020
                                    </div>
                                    <div className='sub-l1'>
                                        2021
                                    </div>
                                    <div className='sub-l1'>
                                        2022
                                    </div>
                                    <div className='sub-l1'>
                                        2023
                                    </div>
                              </div>
                              
                          </div>
                    </div>

                          
            </div>
        </div>
        </div>
    </section>
    <section className='ipo-dates-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-8'>
                    <div>
                        <h2 className='title-first'>Bajaj Energy <span>IPO Dates</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                        <table className='table table-striped2'>
                            <tbody>
                                <tr>
                                    <td>Open Date</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Closed Date</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Allotment Date</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Initiation of Refunds</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Credit of Shares to Demat Account</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Listing Date</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='ipo-lotsize'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-8'>
                    <div>
                        <h2 className='title-first'>Bajaj Energy <span>IPO Lot Size</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                        <table className='table table-striped2'>
                            <tbody>
                                <tr>
                                    <td>Minimum Lot Size</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                                <tr>
                                    <td>Maximum Lot Size</td>
                                    <td className='txt-right'>To be announced</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Revenue