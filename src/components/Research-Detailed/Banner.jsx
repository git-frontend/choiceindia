
import React, { useEffect, useState } from "react";
import thumb2 from '../../assets/images/research/pdf-ico.svg';
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";

function Banner(props) {

  console.log('Banner',props.data);

  let api = new API_URLS();

  const [image, setImage] = useState(false);

  useEffect(() => {
    if(props?.data?.report_subtype_slug == 'equity-research-report'){
      setImage(() => true);
    } 
    //for Company Fundamentals
    if (props?.data?.report_subtype_uuid == 'f890363a-512e-4797-91fd-4d40732844a3') {
      document.title = props?.data.scrip_sec_name ? `${props?.data.scrip_sec_name.charAt(0) + props?.data.scrip_sec_name.slice(1).toLowerCase()} Share Price Target & Forecast for 2023, 2024, 2025` : '';
      document.getElementById('meta-tags').content=`Discover the projected ${props?.data.scrip_sec_name.charAt(0) + props?.data.scrip_sec_name.slice(1).toLowerCase()} share price targets & forecast for the years 2023, 2024, and 2025. Stay updated with the latest market trends and potential growth opportunities for ${props?.data.scrip_sec_name.charAt(0) + props?.data.scrip_sec_name.slice(1).toLowerCase()}.`
    }
    //for IPO/NFO Analysis
    if (props?.data?.report_subtype_uuid == '66292363-0716-44d5-a129-a3fe2767690a') {
      document.title = props?.data.scrip_name ? `${props?.data.scrip_name.charAt(0) + props?.data.scrip_name.slice(1).toLowerCase()} IPO Review & Recommendations from Choice` : '';
      document.getElementById('meta-tags').content=`Get insights into ${props?.data.scrip_name.charAt(0) + props?.data.scrip_name.slice(1).toLowerCase()} IPO! Read our expert review & recommendations from Choice Research Team. Don't miss this opportunity!`
    }
    //for Industry Analysis
    if (props?.data?.report_subtype_uuid == '1aa86611-7b88-4069-af82-1e04e80659a4') {
      document.title = props?.data.tag ? `${props?.data.tag.charAt(0) + props?.data.tag.slice(1).toLowerCase()} Industry Analysis & Overview from Choice` : '';
      document.getElementById('meta-tags').content=`Understand the latest ${props?.data.tag.charAt(0) + props?.data.tag.slice(1).toLowerCase()} Industry analysis & overview from Choice. Stay informed with expert insights.`
    }
    //for Economic Analysis
    if (props?.data?.report_subtype_uuid == '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad') {
      document.title = props?.data.title ? `${props?.data.title}` : '';
      document.getElementById('meta-tags').content=props?.data.title ? `${props?.data.title}` : '';
    }
  },[props])

  function redirectTo(id){
    // console.log('TTT',id);
    let url = api.getExpertDetailURL(id);
    window.open(url);
    // console.log('TTTURL',url);
  }

  return (
    <div>

      <section className="bannersection research-detailed">
        <div className="container">
          <div className="row gx-5 align-items-center">
            <div className="col-md-12">
            <div className="right-pdf-sec">
                <a href={props?.data?.file_url? props?.data?.file_url : '' } target="_blank" className="ico-pdf"><img src={thumb2} className='img-fluid' width="50" height="50"></img></a>
              </div>
              <div className="bnr-left">
                {/* <h1 className="title">Equity Research Report : <span>WINDLAS ( BSE )</span></h1> */}
                {
                  image? 
                  <h1 className="title"> <span>{props?.data?.title? props?.data?.title : '' }</span></h1>:
                  <h1 className="title">{props?.data?.report_name? props?.data?.report_name : ''} Report : <span>{props?.data?.title? props?.data?.title : '' }</span></h1>
                }
                
                <div className="api-cont-des" dangerouslySetInnerHTML={{__html: props?.data?.description? props?.data?.description : ''}}>
                  {/* <p>With a revenue market share of 1.5%, Windlas Biotech Ltd. (WBL) is among the top-five contract development &amp; manufacturing organization (CDMO) in the domestic pharma sector. It serves seven out of top-10 pharma formulation companies in India. The company focuses on therapeutic areas like cardiovascular, anti-diabetics, neurology, gastrointestinal, vitamins, minerals, nutrients etc. WBL operated in three verticals, namely, the CDMO services & products, the Domestic trade generics & OTC brands and the Exports segment. In FY22, these verticals generated 82.3%, 13.2% and 4.5%, respectively, to the total business from the sales of products.
                  </p>
                  <h4>Investment rationale:</h4>
                  <ul>
                    <li>Structural tailwind for the CDMO companies</li>
                    <li>Consistent focus on high-margin chronic therapeutic areas to aids business sustainability</li>
                    <li>CDMO vertical business to fall back in the growth trajectory</li>
                    <li>Other business verticals offers huge growth potential with superior profitability</li>
                    <li>Synergy across the business verticals</li>
                    <li>Anticipating an operating margin expansion by 2ppts over FY22-24E</li>
                  </ul>
                  <h4>Risk and concerns:</h4>
                  <ul>
                    <li>Unfavorable government policies and regulations</li>
                    <li>Continued subdued capacity utilization</li>
                    <li>Difficulty in adding new customers and brands</li>
                    <li>Lower than expected growth across the verticals</li>
                    <li>Competition</li>
                  </ul>
                  <h4>Valuation:</h4>
                  <p>WBL came out with an IPO (in Aug. 2021) and demanded a P/E valuation of 26.6x (to its restated FY21 EPS of Rs. 17.3). The issue was fully priced and since its listing, the share price is in a downward trend.</p>
                  <p>At CMP of Rs. 222.4, WBL’s share is trading at a TTM P/E multiple of 12x (to its TTM EPS of Rs. 17.5), which seems to be attractive considering the growth outlook and return profile. Thus, we assign a “BUY” rating on the stock with a target price of Rs. 289.4 per share.</p> */}
                </div>
              </div>
            </div>
          </div>

          {
            image? 
            <div className="row">
              <div className="col-md-12">
                  <div className="mid-box-value">
                        <div className="mid-box-left">
                            {/* <h2 className="ttl-mn">{props?.data?.title? props?.data?.title : ''} <span>Published at 4th Apr’22 09:45:32 AM</span></h2> */}
                            <h2 className="ttl-mn">{props?.data?.title? props?.data?.title : ''} <span>Published at {utils.formatDate(new Date(props?.data?.publish_date? props?.data?.publish_date: ''), "dd MMMM'yy hh:mm:ss TT")}</span></h2>
                            <div className="value-list">
                                <div className="vl-list-itm">
                                    <h4>CMP</h4>
                                    <h5>{props?.data?.cmp? props?.data?.cmp : ''}</h5>
                                </div>
                                <div className="vl-list-itm">
                                    <h4>UPSIDE POTENTIAL</h4>
                                    <h5 className="grn-txt">{props?.data?.upside_potential_percentage? props?.data?.upside_potential_percentage : ''} %</h5>
                                </div>
                                <div className="vl-list-itm">
                                    <h4>HOLDING PERIOD</h4>
                                    <h5>{props?.data?.holding_period? props?.data?.holding_period : ''}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="mid-box-right">
                            <h3 className="ttl-rght">Recommendation</h3>
                            <a className="btn-buy" onClick={() => redirectTo(props?.data?.uuid? props?.data?.uuid : '')}>{props?.data?.recommendation? props?.data?.recommendation : ''}</a>
                        </div>
                  </div>
              </div>
          </div> : '' 
          }



        </div>
      </section>


    </div>
  );
}

export default Banner;
