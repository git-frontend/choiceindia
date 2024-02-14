import React, { useState } from "react";



function IpoDetails() {
  const [show, setshow]=useState(false);
  return (
    <>
      <section className="ipo-details" id="showCard">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="ipo-text-details">
                          <h2 className="title-first">Bajaj Energy <span>IPO Details</span></h2>
                        <div className="para-sec">
                          <p>Bajaj Energy Ltd (BEL), a leading name in thermal energy production in India, is a subsidiary of Bajaj Group. The company has generated an operating revenue of more than Rs. 500 crores in 2021. It holds a total authorized share capital of Rs. 2500 crores and plans on raising Rs. 5450 crores through the Bajaj Energy IPO.</p>
                          <p>The power suppliers to Uttar Pradesh Power Corporation Ltd. (UPPCL) constantly leverages innovation and technology to set new standards. It has always maintained an adequate operating margin indicating excellent profitability and cash flow. Now that Bajaj Energy aims to provide 100% electricity to villages, it is likely to increase the company's share price.</p>
                          <p>As part of the Bajaj Group of companies, the brand always has its customers' undivided trust regarding the performance of its plants. So, naturally, the Bajaj Energy IPO is a lucrative opportunity for investors to invest in a reputed {!show ? <span onClick={()=>{setshow(true)}}>... <em className="btn-read">Read more</em></span>:""}{show ?<span>&nbsp;company and diversify their portfolio. 
                          <p className="pd-1">The company has plans to use the funds raised from the IPO to buy about 6,99,36,900 equity shares of Lalitpur Power Generation Company, another subsidiary of the Bajaj Group. Bajaj Energy intends to purchase the shares from Bajaj Power Ventures and Bajaj Hindustan Sugar for Rs. 4,972 crores.</p>
                          <p>The company also plans to utilize the remaining capital for general expenses once it acquires Lalitpur Power's 1980 MW. So, the Bajaj Energy IPO can act as a catalyst in catapulting the organization's expansion aspirations.</p>
                          <p>Once investors have thoroughly analysed the potential of the Bajaj Energy IPO and calculated all the risks, they can decide whether to invest in it. Acquiring accurate information on the company's fundamentals and any other news about the IPO is crucial.</p>
                          <p>Here are the strengths and weaknesses of the Bajaj Energy IPO to provide a clearer picture.<span onClick={()=>{setshow(false);}}>&nbsp;<em className="btn-read">Read less</em></span> </p></span>:""}
                          </p>
                        </div>
                        </div>
                        <div className="ipo-strength">
                          <h4 className="title-ipo">Bajaj Energy IPO Strengths</h4>
                          <ul>
                            <li>The company has undertaken a mission to electrify villages. Successful completion of this project will increase the power supply demand and may contribute to their profits.</li>
                            <li>Possesses an unrivalled and long-standing agreement with Central CoalFields Limited to acquire fossil fuels for energy. Minimal chance of experiencing coal shortage.</li>
                            <li>Years of experience in successfully building, operating and managing multiple thermal power plants.</li>
                            <li>Boasts a big market in Uttar Pradesh, with a dominant position among the state’s largest independent power producing companies.</li>
                          </ul>
                        </div>
                        <div className="ipo-weekness">
                        <h4 className="title-ipo">Bajaj Energy IPO Weaknesses</h4>
                          <ul>
                            <li>The company relies on a heavy supply of coal. Among the nation's commitment towards renewable energy and the possibility of disrupted fuel supply, this can create issues.</li>
                            <li>Coal-produced thermal energy causes environmental damage and pollution. As green energy becomes more popular, it could reduce the company's market share.</li>
                            <li>The company is currently amidst a dispute with the Uttar Pradesh Power Corporation Limited (UPPCL) regarding payment tariffs.</li>
                            <li>The final tariff of power supply is decided by the Uttar Pradesh Electricity Regulatory Commission (UPERC). Sudden changes may lead to drastic impact on the profits of Bajaj Energy. </li>
                          </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default IpoDetails;
