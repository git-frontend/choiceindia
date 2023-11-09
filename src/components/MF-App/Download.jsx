import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
import appstore from '../../assets/images/mf-app/app-store-white.svg';
import googleplay from '../../assets/images/mf-app/google-play-white.svg';
import download from '../../assets/images/mf-app/download-choice-finx-mutual-fund-app.webp';
function Download() {
    
  return (
    <>
        <section className='download-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='flex-col'>
                            <div className='caption-cont'>
                                <h2 className='title-secnd'>Download Now</h2>
                                <p>Stay on top of your Mutual fund <br/> Investments with Choice FinX.</p>
                                <div className="wrap-app-links">
                                    <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank" className='link-nrl dark'>
                                    <LazyLoader src={googleplay} className={"img-fluid"} alt={"App Store"} width={"27"} height={"24"}/>
                                    <span className='whitecolor'>Google Play</span>
                                    </a>
                                    <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1" target="_blank" className='link-nrl dark'>
                                    {/* <img src={appstore} className="" alt={"App Store"} width="27" height="24" /> */}
                                    <LazyLoader src={appstore} className={"img-fluid"} alt={"App Store"} width={"27"} height={"24"}/>
                                    <span className='whitecolor'>App Store</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <LazyLoader src={download} height={559} width ={473} className={"img-fluid"} alt={"Download Choice FinX Mutual Fund App"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Download