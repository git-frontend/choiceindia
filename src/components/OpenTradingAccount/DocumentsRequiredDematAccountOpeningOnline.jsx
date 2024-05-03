
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import LazyLoader from '../Common-features/LazyLoader';
import Image1 from '../../assets/images/free-demat-compaign/identity-proof-to-open-free-demat-account.svg';
import Image2 from '../../assets/images/free-demat-compaign/address-proof-to-open-demat-account.svg';
import Image3 from '../../assets/images/free-demat-compaign/income-proof-to-open-a-demat-account.svg';
import Image4 from '../../assets/images/free-demat-compaign/bank-proof-to-open-a-free-demat-account.svg';
import Image5 from '../../assets/images/free-demat-compaign/upload-signature-to-complete-demat-account-opening-process.svg';

function DocumentsRequiredDematAccountOpeningOnline() {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
    <section className="documents-required-sec">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-first text-center"><span>Documents Required</span> for Opening Trading Account</h2>
                </div>
                <div className="col-xl-6 col-md-8">
                  <div className="scroll-mobile">
                    <ul className="list-group list_group1">
                        <li className= {toggleState === 1 ? "list-group-item list listsec" : "list-group-item list"}
                    onClick={() => { toggleTab(1); setData(0) }} >Non KRA Verified Users</li>
                        <li className= {toggleState === 2 ? "list-group-item list listsec" : "list-group-item list"}
                    onClick={() => { toggleTab(2); setData(2) }} >KRA Verified Users </li>
                      </ul>
                  </div>
                </div>
            </div>
            <div className="content-tabs active-content">
              <div className={toggleState === 1 ? "content  active-content" : "content"}>
                <div className="row justify-content-between">
                  <div className="col-md-12">
                    <div className="doc-rec-list">
                      <div className="comman-sec">
                        <div className="doc-rec-details">
                          <div className="doc-img">
                            <LazyLoader src={Image1} className={'img-fluid'} width={"100"} height={"100"} alt={"Identity Proof to Open Free Trading Account"}/>
                          </div>
                        <div className="doc-caption">
                          <h3 className="count">Identity Proof</h3>
                          <p>PAN Card is mandatory for Trading Account Opening.</p>
                        </div>
                  </div>
                  <div className="doc-rec-details">
                      <div className="doc-img">
                        <LazyLoader src={Image2} className={'img-fluid'} width={"100"} height={"100"} alt={"Address Proof to Open Trading Account"}/>
                      </div>
                      <div className="doc-caption">
                        <h3 className="count count-2">Address Proof</h3>
                        <p>Aadhaar Card, Passport, Voter ID, Driving Licence.</p>
                      </div>
                  </div>
                  <div className="doc-rec-details">
                      <div className="doc-img">
                        <LazyLoader src={Image3} className={'img-fluid'} width={"100"} height={"100"} alt={"Income Proof to Open a Trading Account"}/>
                      </div>
                      <div className="doc-caption">
                        <h3 className="count count-3">Income Proof</h3>
                        <p>Bank Statement or ITR (Required for F&O and Currency Trading)</p>
                      </div>
                  </div>
                </div>
                <div className="comman-sec">
                <div className="doc-rec-details">
                      <div className="doc-img">
                        <LazyLoader src={Image4} className={'img-fluid'} width={"100"} height={"100"} alt={"Bank Proof to Open a Free Trading Account"}/>
                      </div>
                      <div className="doc-caption">
                        <h3 className="count count-4">Bank Proof</h3>
                        <p>Bank Account Number, IFSC Code Or Cancelled Cheque  (that captures the MICR Code)</p>
                      </div>
                  </div>
                  <div className="doc-rec-details">
                      <div className="doc-img">
                        <LazyLoader src={Image5} className={'img-fluid'} width={"100"} height={"100"} alt={"Upload Signature to Complete Trading Account Opening Process"}/>
                      </div>
                      <div className="doc-caption">
                        <h3 className="count count-5">Signature</h3>
                        <p>Upload the photo of your signature, while completing your trading account opening process.</p>
                      </div>
                  </div>
                </div>
            </div>
            </div>
            </div>
              </div>
              <div className={toggleState === 2 ? "content  active-content" : "content"}>
              <div className="row justify-content-between">
                  <div className="col-md-12">
              <div className="doc-rec-list">
                    <div className="comman-sec">
                      <div className="doc-rec-details">
                          <div className="doc-img">
                          <LazyLoader src={Image3} className={'img-fluid'} width={"100"} height={"100"} alt={"Income Proof"}/>
                          </div>
                          <div className="doc-caption">
                            <h3 className="count">Income Proof</h3>
                            <p>Bank Statement or ITR (Required for F&O and Currency Trading)</p>
                          </div>
                      </div>
                      <div className="doc-rec-details">
                          <div className="doc-img">
                            <LazyLoader src={Image4} className={'img-fluid'} width={"100"} height={"100"} alt={"Bank Proof"}/>
                          </div>
                          <div className="doc-caption">
                            <h3 className="count count-2">Bank Proof</h3>
                            <p> Bank Account Number, IFSC Code Or Cancelled Cheque  (that captures the MICR Code)</p>
                          </div>
                      </div>
                    </div>
                    <div className="comman-sec">
                      <div className="doc-rec-details">
                          <div className="doc-img">
                            <LazyLoader src={Image5} className={'img-fluid'} width={"100"} height={"100"} alt={"Signature Proof"}/>
                          </div>
                          <div className="doc-caption">
                            <h3 className="count count-3">Signature</h3>
                            <p>Upload the photo of your signature, while completing your trading account opening process.</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </div>
          </div>
          </div>
          </div>
    </section>

    

   
    
    </div>
  );
}

export default DocumentsRequiredDematAccountOpeningOnline;
