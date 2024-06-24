


import img1 from '../../assets/images/open-demat-account/jiffy-trading-app.webp'
import React, { useEffect, useState } from "react";
import img2 from '../../assets/images/demat-images/trusted-clients.svg'
import img3 from '../../assets/images/demat-images/top-rated.svg'
import img4 from '../../assets/images/demat-images/secured-trading.svg'
import axios from "axios";
import LazyLoader from '../Common-features/LazyLoader';
import { API_URLS } from "../../Services/API-URLS";
import { Link } from "react-router-dom";
import noDataimg from '../../assets/images/no-data.webp';

function TrackRecord() {
  const [research, setResearch] = useState([]);

  function getExpertResearch(request) {
    let url = new API_URLS().getExpertResearchreportURL();
    return axios.post(url, request, {});
}

/** scroll id view */

function chapterScroll(id) {
  var element = document.getElementById(id);
  var headerOffset = 140;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

function fetchExpertResearchReport() {
    let startDate;
    let dateDiff = new Date().getDate() - 7;
    if (new Date().getMonth() === 0 && dateDiff < 0) {
        let lastMonthDate = new Date(new Date().getFullYear() - 1, 12, 0);
        startDate = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth(), lastMonthDate.getDate() - (dateDiff - 1));
    } else if (new Date().getMonth() === 0 && dateDiff === 0) {
        startDate = new Date(new Date().getFullYear() - 1, 12, 0);
    } else if (dateDiff < 0) {
        let lastMonthDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
        startDate = new Date(lastMonthDate.getFullYear(), lastMonthDate.getMonth(), lastMonthDate.getDate() - (dateDiff - 1));
    } else if (dateDiff === 0) {
        startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0);
    } else {
        startDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 6);
    }

    let request = {
        "end_date": new Date().toJSON().split('T')[0],
        "is_expert": 1,
        "research_type": "",
        "limit": 2,
        "offset": 0,
        "segment": "EQ",
        "start_date": startDate.toJSON().split('T')[0],
        "status": "target_achieved",
        "subcategory_id": "",
        "search": "",
        "id": "",
        "user_id": "",
        "timeline_enabled": 1,
        "category_id": 2
    };
    getExpertResearch(request).then((res) => {
       // console.log(res, "RES");
        if (res && res.status === 200 && res.data.status_code === 200 && res.data.response) {
            let list = res.data.response.research.map((item, i) => {
                if (item.datapoints && item.datapoints.length) {
                    item.priceData = {}
                    item.datapoints.forEach(sub => {
                        sub.key = (sub.key == 'cmp') ? 'entry_price' : sub.key;
                        item.priceData[sub.key] = sub
                    });
                }
                return item;
            });
            setResearch(list);
        } else {
            setResearch([]);
        }
    }).catch((error) => {
        setResearch([]);
    });
}

useEffect(() => {
  fetchExpertResearchReport();
}, []);
  return (
    <div>

      <section className="demat-track-order">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">our track record says it all</h2>
              {
                (research && research.length)?
                <div className="track-order-list">



                {
                  research.map((item,index)=>{
                    return (<div key={index} className="track-itm">
                    <h4>{item.scrip_name}</h4>
                    <ul>
                      <li>
                        <h4>Entry Price</h4>
                        <h3>{Number((item?.priceData?.entry_price?.value) || 0).toFixed(2)}</h3>
                      </li>
                      <li>
                        <h4>Target Price</h4>
                        <h3>{Number((item?.priceData?.target?.value) || 0).toFixed(2)}</h3>
                      </li>
                    </ul>
                    <h4 className="md-profit"><span>{
                                                                    item?.matched_price && item?.priceData?.entry_price?.value ? 
                                                                        ((item?.call_type.toLowerCase()) == 'buy' || (item?.call_type.toLowerCase()) == 'subscribe') ? ((((item?.matched_price - item?.priceData?.entry_price?.value) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'Profit: ' : 'Loss: ') : ((((item?.priceData?.entry_price?.value - item?.matched_price) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'Profit: ' : 'Loss: ')

                                                                     : ''
                                                                }{
                                                                    item?.matched_price && item?.priceData?.entry_price?.value ? <span className={((item?.call_type.toLowerCase()) == 'buy' || (item?.call_type.toLowerCase()) == 'subscribe') ? ((((item?.matched_price - item?.priceData?.entry_price?.value) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'text-success' : 'text-danger') : ((((item?.priceData?.entry_price?.value - item?.matched_price) / item?.priceData?.entry_price?.value) * 100) > 0 ? 'text-success' : 'text-danger')} style={{display:'inline'}}>
                                                                        {((item?.call_type.toLowerCase()) == 'buy' || (item?.call_type.toLowerCase()) == 'subscribe') ? (Number((((item?.matched_price - item?.priceData?.entry_price?.value) / item?.priceData?.entry_price?.value) * 100) || 0).toFixed(2)) : (Number((((item?.priceData?.entry_price?.value - item?.matched_price) / item?.priceData?.entry_price?.value) * 100 || 0)).toFixed(2))}%
                                                                    </span> : ''
                                                                }</span></h4>
                    <h4 className="trg-achv">Target Achieved</h4>
                  </div>)
                  })
                }
                
           
              </div>:
                  <div className="text-center">
                    <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                  </div>
              }
             
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mt-5 d-flex justify-content-center"><Link to="/campaign/open-demat-account" onClick={() => { chapterScroll('campaignForm')}}><span className="btn-bg">Yes , I am in </span></Link></div>
          </div>
        </div>
      </section>

      <section className="record-track-scnd">
          <div className="container">
              <div className="row flex-md-row-reverse align-items-center justify-content-between">
                  <div className="col-md-7">
                      <h2 className="title-first">One App for All Segments</h2>
                      <div className="track-scnd-list">
                          <div className="scnd-list-itm">
                            <LazyLoader src={img2} alt={"trusted clients"} className={"img-fluid"} width={"71"} height={"71"} />
                            <h3>trusted clients</h3>
                          </div>
                          <div className="scnd-list-itm">
                            <LazyLoader src={img3} alt={"top rated trading app"} className={"img-fluid"} width={"71"} height={"71"} />
                            <h3>top rated trading app</h3>
                          </div>
                          <div className="scnd-list-itm">
                            <LazyLoader src={img4} alt={"secured trading platform "} className={"img-fluid"} width={"65"} height={"78"} />
                            <h3>secured trading platform </h3>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 d-flex justify-content-center">
                      <LazyLoader src={img1} alt={"our track record"} className={"img-fluid"} width={"320"} height={"647"} />
                  </div>
              </div>
          </div>
      </section>

      <section className="record-count">
        <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="record-count-list">
                    <div className="record-count-itm">
                        <h3>5L+</h3>
                        <h4>App Downloads</h4>
                    </div>
                    <div className="record-count-itm">
                        <h3>25</h3>
                        <h4>Years of Experience</h4>
                    </div>
                    <div className="record-count-itm">
                        <h3>54</h3>
                        <h4>Local Branches</h4>
                    </div>
                    <div className="record-count-itm">
                        <h3>1500+</h3>
                        <h4>Authorised Person</h4>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </section>

    </div>
  );
}

export default TrackRecord;
