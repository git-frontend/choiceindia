import React from 'react'

function MoreContent() {
  return (
    <>
        <section className='more-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='title-content'>
                            <h2 className='title-secnd'>OI Spurts - Open Interest Chart Data</h2>
                        </div>
                        <div>
                            <p>OI spurts or open –interest spurts are only possible for derivatives – commodities – currencies since trades in these 3 segments are contract based, hence, open interest. This page clubs all sorts of OI for these 3 segments in 1 table to make it easier for investors.</p>
                            <h3 className='seo-h3'>Live Open Interest Chart Data Analysis</h3>
                            <p>This section broadly divides each segment based on increase in open interest and increase in price or decrease in open interest and decrease in price. The top strip shows the indices like SENSEX, NIFTY for the trader or investor to know where the market is or heading.</p>
                            <p>Derivatives segment is selected by default and the user can alternate between commodities and currencies. This can be used in tandem with 4 combinations provided,</p>
                            <ul className='list-more'>
                                <li>Rise in OI-Rise in Price</li>
                                <li>Rise in OI-Slide in Price</li>
                                <li>Slide in OI-Rise in Price</li>
                                <li>Slide in OI-Slide in Price</li>
                            </ul>
                            <p>Users can switch between any combinations and the list will be updated in a flash.</p>
                            <p>On the right is the dropdown box to select from INDEX FUTURES – INDEX OPTIONS - STOCK FUTURES and STOCK OPTIONS and the list will change accordingly. Use the refresh button on the right edge of the list to show the updates.</p>
                            <p>The list will show with the LTP – Change (%) - Volume – Traded Value – OI – OI Change (%) for easier reference. The user can click on the stock and it will be redirected to the dedicated stock page where the user can then perform in-depth research, BUY/SELL or other subsidiary actions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MoreContent