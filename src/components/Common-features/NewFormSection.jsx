import React, { useEffect, useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import "../Common-features/common-demat-suppotive.scss";
const NewFormSection = ({sections,dataLayerValues}) => {
    return (

        <>
            <section className="form-section-all">
                <div className="container">
                    <div className="best-stock-Newform">
                        {sections.map((section, index) => (
                            <div key={index} className='row align-items-center position-relative'>
                                <div className="col-md-8" >
                                    <div className='row'>
                                        <div className='col-xl-12 col-md-12'>
                                            <h3 className="best-stock-left-title">
                                                {section.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        {section.images.map((imgSrc, i) => (
                                            <div className="col-xl-3 col-md-12">
                                                <div key={i} className="list-item">
                                                    <span>
                                                        <img
                                                            src={imgSrc}
                                                            className={'img-fluid mobile-img'}
                                                            width={'56'}
                                                            height={'56'}
                                                            alt={section.alt[i]}
                                                        />
                                                    </span>
                                                    <h4 className="list-item-title">
                                                        {section.subtitle[i].split('\n').map((line, j) => (
                                                            j === 0 ? line : [<br key={j} />, line]
                                                        ))}
                                                    </h4>
                                                    {/* <h4 className="list-item-title" >
                                                        {section.subtitle[i]}
                                                        <span className="font-weight-new">{section.subtitle[i]}</span>
                                                    </h4> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-4">

                                
                                        <div id="dematformsticky">
                                        {/* <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" > */}
                                            <OpenDemateAccountStickyFooter dataLayerValues={dataLayerValues || ""}/>
                                            {/* </GoogleReCaptchaProvider> */}
                                        </div>
                                  
                               
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

        </>
    )
}
export default NewFormSection;