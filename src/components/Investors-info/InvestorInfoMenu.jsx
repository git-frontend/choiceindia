
import React from "react";
import Navbar from '../Common-features/Navbar';

function InvestorInfoMenu() {

  return (
    <div>
      
     
    <section className="Investormenu page-height">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="title">Investor Info</h2>
                    <Navbar />
                </div>
              
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="wrap">
                        <h3 className="head">Welcome to Choice International Investor Relations</h3>
                        <p className="subtext">Choice International Ltd. engages in providing financial services. The company provides broking & distribution, investment banking, financial services to business advisory, regulatory compliances to government authorities & other corporate entities, retail loan distribution, mutual fund distribution, technical services and other ancillary services. It operates through the following segments: NBFC & Other, Investment Banking, Broking & Distribution, Consulting & Outsourcing, and Technical Services. The company was founded on March 12, 1993 and is headquartered in Mumbai, India.</p>
                    </div>
                    <div className="wrap">
                        <h3 className="head">Link</h3>
                        <a className="links">Stock Exchange Information ( BSE: 531358 )</a>
                    </div>
                    <div className="wrap">
                        <h3 className="head">Registered Office</h3>
                        <div className="detail"><span className="subhead">Name:</span><span className="info">Choice International Limited</span></div>
                        <div className="detail"><span className="subhead">Address:</span><span className="info">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.</span></div>
                        <div className="detail"><span className="subhead">Telephone:</span><span className="info">+91-022-6707 9999</span></div>
                        <div className="detail"><span className="subhead">E-mail:</span><span className="info">Choice International Limited</span></div>
                    </div>
                    <div className="wrap">
                        <h3 className="head">Registrar &amp; Transfer Agent</h3>
                        <div className="detail"><span className="subhead">Name:</span><span className="info">Link Intime India Pvt Ltd</span></div>
                        <div className="detail"><span className="subhead">Address:</span><span className="info">C-101, 247 Park, L.B.S. Marg, Vikhroli (West), Mumbai -400 083, Maharashra, India</span></div>
                        <div className="detail"><span className="subhead">Telephone:</span><span className="info">+91 022 49186270</span></div>
                        <div className="detail"><span className="subhead">E-mail:</span><span className="info">Choice International Limited</span></div>
                    </div>
                    <div className="wrap">
                        <h3 className="head">Investor Relations Advisors</h3>
                        <div className="detail"><span className="subhead">Name:</span><span className="info">Bijay Sharma and Ashok Negi</span></div>
                        <div className="detail"><span className="subhead">Address:</span><span className="info">https://www.churchgatepartners.com/a</span></div>
                        <div className="detail"><span className="subhead">Telephone:</span><span className="info">+91 22 6169 5988</span></div>
                        <div className="detail"><span className="subhead">E-mail:</span><span className="info">cil@churchgatepartners.com</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default InvestorInfoMenu;
