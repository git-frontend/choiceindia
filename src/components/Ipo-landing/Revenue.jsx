import React from 'react'

function Revenue(){
  return (
    <>
    <section className='revenue-chart-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <h2 className='title-first'>Bajaj Energy <span>Revenue & Profit</span></h2>
                    <div className='chart-card'>
                        <div className='chart-header'>
                            <div className='header-item'>
                                <div className='item1'>
                                    <span className='revenue-color'></span> Revenue
                                </div>
                                <div className='item1'>
                                    <span className='profit-color'></span> Profit
                                </div>
                            </div>
                            <div className='header-item'>
                                <span className='value-all'>All value in ₹ Lakh cr.</span>
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
                <div className='col-md-8'>
                    <div>
                        <h2 className='title-first'>Bajaj Energy <span>IPO Dates</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                        <table className='table table-striped2'>
                            <tbody>
                                <tr>
                                    <td>Open Date</td>
                                    <td className='txt-right'>11th May 2023</td>
                                </tr>
                                <tr>
                                    <td>Closed Date</td>
                                    <td className='txt-right'>14th May 2023</td>
                                </tr>
                                <tr>
                                    <td>Allotment Date</td>
                                    <td className='txt-right'>19th May 2023</td>
                                </tr>
                                <tr>
                                    <td>Initiation of Refunds</td>
                                    <td className='txt-right'>20th May 2023</td>
                                </tr>
                                <tr>
                                    <td>Credit of Shares</td>
                                    <td className='txt-right'>23rd May 2023</td>
                                </tr>
                                <tr>
                                    <td>Listing Date</td>
                                    <td className='txt-right'>24th May 2023</td>
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
                <div className='col-md-8'>
                    <div>
                        <h2 className='title-first'>Bajaj Energy <span>IPO Lot Size</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                        <table className='table table-striped2'>
                            <tbody>
                                <tr>
                                    <td>Minimum Lot Size</td>
                                    <td className='txt-right'>1</td>
                                </tr>
                                <tr>
                                    <td>Maximum Lot Size</td>
                                    <td className='txt-right'>14</td>
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