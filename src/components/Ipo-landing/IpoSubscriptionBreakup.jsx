import React from 'react'

function IpoSubscriptionBreakup() {
  return (
    <>
       <section className='ipo-breakup'>
        <div className='container'>
            <div className='row'>
                <div className='col-xl-8'>
                    <div>
                        <h2 className='title-first'>Bajaj Energy IPO <span>Subscription Breakup</span></h2>
                    </div>
                    <div className="ipo-dates-table">
                        <table className='table table-striped2'>
                            <tbody>
                                <tr>
                                    <td>QIBs</td>
                                    <td className='txt-right'>50%</td>
                                </tr>
                                <tr>
                                    <td>Non-Institutional Investors</td>
                                    <td className='txt-right'>15%</td>
                                </tr>
                                <tr>
                                    <td>Retail Individual Investors</td>
                                    <td className='txt-right'>35%</td>
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

export default IpoSubscriptionBreakup