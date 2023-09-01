import React from 'react'
import { Link } from 'react-router-dom'

function MoreContent() {
  return (
    <>
        <section className='more-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='title-content'>
                            <h2 className='title-secnd'>Intraday & Delivery Brokerage Calculator</h2>
                        </div>
                        <div>
                            <p>Use our easy brokerage calculator to calculate your entire brokerage costs and other transaction costs even before you execute your trades. Choice aims to provide complete transparency in terms of trading fees and charges even before you place your trading order with us. Find accurate costs of intraday and delivery trading with our stock brokerage calculator.</p>
                            <p>Apart from delivery brokerage or intraday brokerage other trading expenses such as STT, state-wise stamp duty, exchange transaction charges can also be directly seen with the brokerage charges calculator. It also gives a detailed breakdown of other charges like <Link to="https://choiceindia.com/blog/demat-transaction-charges/">transaction charges</Link>, STT, stamp duty for each state, SEBI turnover charges & GST Charges. You can also see how much you need to break even. Just provide your buy & sell details & you are all done.</p>
                            <p>It is flexible enough for you to calculate brokerage for all asset classes like equity intraday, equity delivery, equity futures, equity options, currency futures, currency options & commodity.</p>
                            <p>It is a helpful tool provided to our investors to get a clear picture of the amount you will be paying for your investments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MoreContent