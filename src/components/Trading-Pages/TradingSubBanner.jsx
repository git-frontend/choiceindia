import React from 'react';
import LazyLoader from '../Common-features/LazyLoader';
function TradingSubBanner({data}) {
  return (
      <>
          <div className="banner-card">
            <div className="banner-card-items">
            {data.map((response, index) => (
                <div className="bannerbox" key={index}>
                    <div className="respgrid">
                        <div className="iconwrap">
                        <LazyLoader src={response.bannerIcon} className={'img-fluid'} width={"30"} height={"30"} alt={"Open Commodity Trading Account with Low DP Charges"} />
                        </div>
                    </div>
                    <div className="resptext">
                        <p>{response.bannerIconText}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
      </>
  )
}

export default TradingSubBanner