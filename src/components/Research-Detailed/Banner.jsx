
import React, { useEffect, useState } from "react";
import thumb2 from '../../assets/images/research/pdf-ico.svg';
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";

function Banner(props) {


  let api = new API_URLS();

  const [image, setImage] = useState(false);
  const [ipo, setipo] = useState(false);
  const [industry, setIndustry] = useState(false);


  useEffect(() => {
    if(props?.data?.report_subtype_slug == 'equity-research-report'){
      setImage(() => true);
    } 
    //for Company Fundamentals
    if (props?.data?.report_subtype_uuid == 'f890363a-512e-4797-91fd-4d40732844a3') {
      document.title = props?.data.scrip_sec_name ? `${convertString(props?.data.scrip_sec_desc)} Share Price Target & Forecast for 2023, 2024, 2025` : '';
      document.getElementById('meta-tags').content=`Discover the projected ${convertString(props?.data.scrip_sec_desc)} share price targets & forecast for the years 2023, 2024, and 2025. Stay updated with the latest market trends and potential growth opportunities for ${convertString(props?.data.scrip_sec_desc)}.`
    }
    //for IPO/NFO Analysis
    if (props?.data?.report_subtype_uuid == '66292363-0716-44d5-a129-a3fe2767690a') {
      setipo(() => true);
      document.title = props?.data.scrip_name ? `${convertString(props?.data.scrip_name)} IPO Review & Recommendations from Choice` : '';
      document.getElementById('meta-tags').content=`Get insights into ${convertString(props?.data.scrip_name)} IPO! Read our expert review & recommendations from Choice Research Team. Don't miss this opportunity!`
    }
    //for Industry Analysis
    if (props?.data?.report_subtype_uuid == '1aa86611-7b88-4069-af82-1e04e80659a4') {
      setIndustry(() => true);
      document.title = props?.data.title ? `${convertString(props?.data.title)} Industry Analysis` : '';
      document.getElementById('meta-tags').content=`Understand the latest ${convertString(props?.data.title)} Industry analysis & overview from Choice. Stay informed with expert insights.`
    }
    //for Economic Analysis
    if (props?.data?.report_subtype_uuid == '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad') {
      document.title = props?.data.title ? `${convertString(props?.data.title)}` : '';
      document.getElementById('meta-tags').content=props?.data.title ? `${convertString(props?.data.title)}` : '';
    }
  },[props])
 
  function convertString(str) {
    const words = str.toLowerCase().split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
  }
  function redirectTo(id){
    let url = api.getExpertDetailURL(id);
    window.open(url);
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
                {
                  image? 
                  <h1 className="title"> <span>{props?.data?.scrip_sec_desc? convertString( props?.data?.scrip_sec_desc ): '' }</span> Share Price Target</h1>:
                  ipo?
                  <h1 className="title"> <span>{props?.data?.scrip_name? convertString(props?.data?.scrip_name) : '' } </span>IPO Review</h1>:
                  industry?
                  <h1 className="title"> <span>{props?.data?.title? convertString(props?.data?.title) : '' } </span></h1>:
                  <h1 className="title"><span>{props?.data?.title? convertString(props?.data?.title) : '' }</span></h1>
                }
                
                <div className="api-cont-des" dangerouslySetInnerHTML={{__html: props?.data?.description? props?.data?.description : ''}}>
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
                            <h2 className="ttl-mn">{props?.data?.scrip_sec_name? convertString(props?.data?.scrip_sec_name) : ''}  Share Price Target <span>Published at {utils.formatDate(new Date(props?.data?.publish_date? props?.data?.publish_date: ''), "dd MMMM'yy hh:mm:ss TT")}</span></h2>
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
