import React, { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
const NewFormSection = ({ sections }) => {
    console.log("sections", sections)
    return (

        <>
            <section className="form-section-all">
                <div className="container">
                    {sections.map((section, index) => (
                        <div key={index} className="best-stock-Newform">
                            <div className="best-stock-left">
                                <h3 className="best-stock-left-title">
                                    {section.title.map((text, i) => (
                                        <span key={i} >
                                            {text}
                                        </span>
                                    ))}
                                </h3>
                                <div className="list-section list-item-big">
                                    {section.images.map((imgSrc, i) => (
                                        <div key={i} className="list-item">
                                            <span>
                                                <img
                                                    src={imgSrc}
                                                    className={'img-fluid'}
                                                    width={'56'}
                                                    height={'56'}
                                                    alt={section.alt[i]}
                                                />
                                            </span>
                                            <h4 className="list-item-title">
                                                {section.subtitle[i]}
                                                {/* <span className="font-weight-new">{section.subtitle[i]}</span> */}
                                            </h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="best-stock-right">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
                                    <div id="dematformsticky">
                                        <OpenDemateAccountStickyFooter />
                                    </div>
                                </GoogleReCaptchaProvider></div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}
export default NewFormSection;