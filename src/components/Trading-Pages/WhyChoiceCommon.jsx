import React from 'react'
import Image16 from '../../assets/images/open-demat-account/choice-free-demat-account-opening.webp';
import AvailbleOn from './AvailbleOn';
import CommodityTradingData from '../CommoditytTrading/CommodityTradingData';
function WhyChoiceCommon({data}) {
  return (
    <>
       <section className="why-choice-section">
                <div className="container">
                    <div className="row">
                        <div className='col-md-12'>
                            <div className="wrap">
                                <div className="leftsect">
                                    <h2 className="secttile" dangerouslySetInnerHTML={{ __html: data[0].title }}></h2>
                                    <div className="img">
                                        <img src={Image16} alt={"Choice Free Demat Account OpeningFree Commodity Trading Account Opening with Choice"} width={"365"} height={"788"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="rightsect">
                                    {
                                        data.map((response, index) =>{
                                            return(
                                                <div className="rightsect-sub brder-bottom" key={index}>
                                                    <p className="headtxt" dangerouslySetInnerHTML={{ __html: response.headtxt }}></p>
                                                    <p className="subtxt">{response.subtxt}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AvailbleOn data={CommodityTradingData.availbleOn}/>
    </>
  )
}

export default WhyChoiceCommon