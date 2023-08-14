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
                                        <span>Expiry: </span>
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
                            <div className="secnd-sec">
                                <div className='left-sec'>
                                    <h6>3,396.90</h6>
                                    <p>+8.60 (+0.25%)</p>
                                </div>
                                <div className='right-sec'>
                                    <div className='items'>
                                        <p className='lable'>Underlying Value</p>
                                        <p className='val'>3,388.30</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>1M Futures</p>
                                        <p className='val'>3,416.55</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>2M Futures</p>
                                        <p className='val'>3,441.65</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>Spread</p>
                                        <p className='val'>25.10</p>
                                    </div>
                                    <div className='items'>
                                        <p className='lable'>Put Call Ratio</p>
                                        <p className='val'>0.66</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='table-content'>
                            <div className='option-chain-table'>
                                <div className='table-header'>
                                    <div className='syncscroll'>
                                        <table className='sticy-header'>
                                            <thead className='secondry-header'>
                                                <tr>
                                                    <th className='main-section-header'>CALLS</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Interpretation</th>
                                                        <th>OI Call OI</th>
                                                        <th>LTP</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                    <table className="strike-table">
                                        <thead>
                                            <tr className="secondary-header">
                                            <th>Strike Price</th>
                                            </tr>
                                            <tr>
                                            <th>Price</th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <div className='syncscroll'>
                                        <table className='sticy-header'>
                                            <thead className='secondry-header'>
                                                <tr>
                                                    <th className='main-section-header'>PUTS</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div>
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>LTP</th>
                                                        <th>Put OI OI</th>
                                                        <th>Interpretation</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className='table-container'>
                                    <div className='table-wrapper'>
                                        <div className='syncscroll cetable'>
                                            <table className='option-chain-ce-table'>
                                                <tbody>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Long BuildUp</td>
                                                        <td>9,609,150 (-2.31%)</td>
                                                        <td>43.60 (-45.97%)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div>
                                            <table className='option-chain-strike-price'>
                                                <tbody>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                    <tr className='strike-price-row'>
                                                        <td className='strike-price--cell'>19,550</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='syncscroll cetable'>
                                            <table className='option-chain-ce-table'>
                                                <tbody>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                    <tr>
                                                        <td>65.85 (1.78%)</td>
                                                        <td>6,941,100 (143.12%)</td>
                                                        <td>Long Liquidation</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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