import React from "react";
import { useState, useEffect } from "react";
import EconomicAnalysis from './EconomicAnalysis';
import CompanyFundamentals from './CompanyFundamentals';
import IndustryAnalysis from './IndustryAnalysis';
import IpoNfoAnalysis from './IpoNfoAnalysis';
import ResearchService from "../../Services/ResearchService";
import thumb1 from '../../assets/images/research/thumbnail-img1.webp';
import thumb2 from '../../assets/images/research/thumbnail-img2.webp';
import thumb3 from '../../assets/images/research/thumbnail-img3.webp';
import thumb4 from '../../assets/images/research/thumbnail-img4.webp';
import { Link } from 'react-router-dom';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import Template6 from "../Common-features/Template6";
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";

function LongTermResearch() {
  const [check, setCheck] = useState();
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [data, setData] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [count, setcount] = useState(1);



  // const [tempid, setTempId] = useState('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
  const [tempid, setTempId] = useState({ 'name': 'economic-analysis', 'id': '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad' });

  const navigate = useNavigate();

  function loadResearch(id) {
    setList([]);
    setData(true);
    
    ResearchService.researchcategory(id).then(
      res => {
        setData(false)
        if (res) {
        
          setCheck(false)
          setList(res.response.data);

        } else {
          setList([]);
        }

      }
    ).catch((error) => {
      setList([]);
    });

  };

  function lpoSearch() {
    setData(true)
    setList([]);
    ResearchService.researchipo().then(
      res => {
        setData(false)
        if (res) {
          setCheck(false);
          setList(res.response.data);

        } else {
          setList([]);
        }

      }
    ).catch((error) => {
      setList([]);
    });



  };

  function getSingleDetail(id) {
    // console.log('IIIII',id);
    // navigate(`/research-new/${id}/${tempid}`);
    navigate({
      pathname: `/research-new/${id}/${tempid.name}`,
      search: `?id=${tempid.id}`
    })
  }

   /**
     * Go to Report Detail
     * @param {Report} report 
     */
    let goToDetail = (report) => {
      let api = new API_URLS()
      let url = api.getExpertDetailURL(report.id)
      window.open(url)
  }

  function iporedirect(){
    window.open('https://jiffy.choiceindia.com/market/latest-ipo-list');
  }

  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      loadResearch('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
    }
  }, [trigger])
  return (
    <div>
      <section className="research-banner-tabs">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="heading-sec heading-sec-top" id="longterm-scroll">
                <h3 className="title-first" >Long Term Research </h3>
              </div>
            </div>
          </div>
          <div className="research-bloc-tabs">
            <button
              className={count === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                setcount(1); setTempId(preValue => {
                  return {
                    ...preValue, 'name': 'economic-analysis',
                    'id': '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'
                  }
                }); loadResearch('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
              }}
            >
              Economic Analysis

            </button>
            <button
              className={count === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                setcount(2); setTempId(preValue => {
                  return {
                    ...preValue, 'name': 'company-fundamentals',
                    'id': '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'
                  }
                }); loadResearch('f890363a-512e-4797-91fd-4d40732844a3')
              }}
            >
              Company Fundamentals

            </button>
            <button
              className={count === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                setcount(3); setTempId(preValue => {
                  return {
                    ...preValue, 'name': 'industry-analysis',
                    'id': '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'
                  }
                }); loadResearch('1aa86611-7b88-4069-af82-1e04e80659a4')
              }}
            >
              Industry Analysis
            </button>
            <button
              className={count === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                setcount(4); 
                // setTempId(preValue => {
                //   return {
                //     ...preValue, 'name': 'ipo-nfo-analysis',
                //     'id': '0'
                //   }
                // }); 
                lpoSearch()
              }}
            >
              IPO/NFO Analysis

            </button>
          </div>
          <div className="content-tabs">
            <div
              className="content active-content"
            >
              {
                  data? 
                  <Template6 />
                  :

              <div className="research-tab-cont">
                {
                  check ?
                   <div className="research-tab-list">
                    
                  
                  {
                    list.map((res, i) => {

                      return (
                        <div className="res-tab-itm" key={res.uuid} >
                          <div className="tab-itm-img" >
                            <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                          </div>
                          <div className="tab-itm-des">
                            <h5 className="ttl-des">{count === 4 ? res.scrip_name||"" : res.title||""}</h5>
                            {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                            <p dangerouslySetInnerHTML={{__html: res.description}}></p>
                            {count === 2 ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage||0}%</span></h4> :""}
                            <div className="itm-des-sub">
                            <span className="date-post">{utils.formatDate(new Date(res.publish_date),"dd MMMM , yyyy")}</span>
                                  {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                                  {count === 4 ? <a  onClick={()=>{(res.call_type_name == "Avoid") ? "":iporedirect()}} className="btn-sm grn-btn" style={{ background: (res.call_type_name == "Avoid") ? 'red': '' }}> {res.call_type_name}</a> : count === 2 ? <a  className="btn-sm btn-ptr" style={{ background: (res.call_type_name == "Buy") ? '#00B26B': (res.call_type_name == "Sell") ? 'red':'' }}  onClick={() => (res.call_type_name === 'Buy')||(res.call_type_name === 'Sell') ?  goToDetail(res) :console.log("check") } >{res.call_type_name ? res.call_type_name: " "}</a> : <a onClick={() => { getSingleDetail(res.uuid) }} className="post-read">Read More</a>}

                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                 </div>
              
               
                    :
                    <div className="research-tab-list">

                      {
                        list.slice(0, 4).map((res, i) => {

                          return (
                            <div className="res-tab-itm" key={res.uuid}>
                              <div className="tab-itm-img">
                                <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                              </div>
                              <div className="tab-itm-des">
                                <h5 className="ttl-des" >{count === 2 ? res.scrip_sec_name||"" :count === 4 ? res.scrip_name||"": res.title||""}</h5>
                                {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                <p dangerouslySetInnerHTML={{__html: res.description}}></p>
                                {count === 2 ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage||0}%</span></h4> :""}
                                <div className="itm-des-sub">
                                  <span className="date-post">{utils.formatDate(new Date(res.publish_date),"dd MMMM , yyyy")}</span>
                                  {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                                  {count === 4 ? <a  onClick={()=>{(res.call_type_name == "Avoid") ? "":iporedirect()}} className="btn-sm grn-btn" style={{ background: (res.call_type_name == "Avoid") ? 'red': '' }}> {res.call_type_name}</a> : count === 2 ? <a  className="btn-sm btn-ptr" style={{ background: (res.call_type_name == "Buy") ? '#00B26B': (res.call_type_name == "Sell") ? 'red':'' }}  onClick={() => (res.call_type_name === 'Buy')||(res.call_type_name === 'Sell') ?  goToDetail(res) :console.log("check") } >{res.call_type_name ? res.call_type_name: " "}</a> : <a onClick={() => { getSingleDetail(res.uuid) }} className="post-read">Read More</a>}

                                </div>
                              </div>
                            </div>
                          )
                        })
                      }

                    </div>
                }

                
                <div className="mt-5 d-flex justify-content-center">{check?<a className="btn-bg btn-ptr" onClick={()=>{setCheck(false)}}>Load Less</a>:<a className="btn-bg btn-ptr" onClick={()=>{setCheck(true)}}>Load More</a>}</div>
              </div>
}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default LongTermResearch;
