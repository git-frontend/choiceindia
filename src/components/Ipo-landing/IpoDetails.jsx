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
                          <p>As part of the Bajaj Group of companies, the brand always has its customers' undivided trust regarding the performance of its plants. So, naturally, the Bajaj Energy IPO is a lucrative opportunity for investors to invest in a reputed....{!show ? <span onClick={()=>{setshow(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}{show ?<span>&nbsp;The power suppliers to Uttar Pradesh Power Corporation Ltd. (UPPCL) constantly leverages innovation and technology to set new standards. It has always maintained an adequate operating margin indicating excellent profitability and cash flow. Now that Bajaj Energy aims to provide 100% electricity to villages, it is likely to increase the company's share price.<span onClick={()=>{setshow(false);}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</p>
                        </div>
                        </div>
                        <div className="ipo-strength">
                          <h4 className="title-ipo">Bajaj Energy IPO Strengths</h4>
                          <ul>
                            <li>A diversified portfolio of energy generation assets</li>
                            <li>An established player in the market</li>
                            <li>Backed by a highly successful and experienced promoters</li>
                          </ul>
                        </div>
                        <div className="ipo-weekness">
                        <h4 className="title-ipo">Bajaj Energy IPO Weaknesses</h4>
                          <ul>
                            <li>Generating power from thermal sources whereas competitors are focusing  on the renewable energy segment.</li>
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
