
import React from "react";
import { useState, useEffect } from "react";
import thumb1 from '../../assets/images/research/thumbnail-1.webp';
import ResearchService from "../../Services/ResearchService";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function TrendingReports(props) {
  const [isloading, setisloading] = useState(true);
  const [list, setList] = useState(null);
  const [showData, setShowData] = useState([]);
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('id');
  
  let sliceCount = Math.floor((Math.random() * 5) + 1);

  function getSingleDetail(id) {
   
    if(props.data1.report_subtype_uuid === "f890363a-512e-4797-91fd-4d40732844a3"){
      navigate({
        pathname: `/research-report/${id}-share-price-target`
        // search: `?id=${name ? name : 'f890363a-512e-4797-91fd-4d40732844a3'}`
      })
    }
    else if (props.data1.report_subtype_uuid === "66292363-0716-44d5-a129-a3fe2767690a") {
      navigate({
        pathname:`/research-report/${id}-ipo-review`
    });
    } 
    else if (props.data1.report_subtype_uuid === "1aa86611-7b88-4069-af82-1e04e80659a4") {
      navigate(
        {
          pathname:`/research-report/${id}-industry-analysis`
        }
      );
    } 
    else if (props.data1.report_subtype_uuid === "41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad") {
      navigate({
        pathname:`/research-report/${id}`
      });
    } 
    else{
       navigate({
      pathname: `/research-report/${id}`,
      // search: `?id=${name ? name : '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'}`
    })
    }
      
  }

  function goToScroll() {
    var element = document.getElementById('research-blog');
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setCheck(() => false);
  }

  function iporedirect() {
    window.open('https://finx.choiceindia.com/market/latest-ipo-list');
  }

  function loadResearch(id) {
    ResearchService.researchcategory(id).then(
      res => {
        if(res){
          setisloading(false);
        setList(res.response.data);
        setShowData(res.response.data);


        } else {
          setisloading(false);
          setList([]);
          setShowData([]);
        }
        
      }
    ).catch((error) => {
      setisloading(false);
      setList([]);
      setShowData([]);
    });
  };

  function lpoSearch() {
   
    setList([]);
    ResearchService.researchipo().then(
      res => {
        setisloading(false);
        if (res) {
          setCheck(false);
          setList(res.response.data);
          setShowData(res.response.data);

        } else {
          setisloading(false);
          setList([]);
          setShowData([]);
        }

      }
    ).catch((error) => {
      setisloading(false);
      setList([]);
      setShowData([]);
    });



  };

  /**
    * Go to Report Detail
    * @param {Report} report 
    */
   let goToDetail = (report) => {
    let api = new API_URLS()
    let url = api.getFundamentalDetailURL(report.redirect_slug)
    window.open(url)
   
  }
 



  useEffect(() => {
    (props.data== "-ipo-review") ? lpoSearch() : (props.data == "-industry-analysis") ?loadResearch('1aa86611-7b88-4069-af82-1e04e80659a4'): (props.data == "-share-price-target") ? loadResearch('f890363a-512e-4797-91fd-4d40732844a3'): loadResearch('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad')
  }, [])

  return (
    <div>


      <section className="res-trending-reports">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="heading-sec" id="research-blog">
                <h3 className="title-first">Trending Reports</h3>
              </div>
            </div>
          </div>
          {
            isloading ?
              <div className="text-center">
                <div>
                  <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                  </div>
              </div>
              :

              <div className="row">
                <div className="col-md-12">
                  {
                    list && list.length ?
                      <div className="res-detailtab-cont" >

                        {
                          check ?
                            <div className="res-detailtab-list">
                              {
                                list?.map((res, i) => {

                                  return (

                                    <div className="res-tab-itm" key={res.uuid} >

                                        <div className="tab-itm-img" >
                                          <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                                        </div>
                                        <div className="tab-itm-des">
                                          <h5 className="ttl-des cursor-pointer" onClick={() => { getSingleDetail(res.redirect_slug) }}>{res.report_subtype_name == "IPO REPORT" ? res.scrip_name || "" : res.title || ""}</h5>
                                          {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                          <div className="itm-des-text">
                                            <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
                                          </div>


                                          {res.report_subtype_name == "EQUITY RESEARCH REPORT" ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage || 0}%</span></h4> : ""}
                                          <div className="itm-des-sub">
                                            <span className="date-post">{utils.formatDate(new Date(res.publish_date), "dd MMMM , yyyy")}</span>
                                            
                                            {(res.report_subtype_name == "IPO REPORT") ? <a onClick={() => { (res.call_type_name == "Avoid") ? "" : iporedirect() }} className="btn-sm grn-btn cursor-pointer" style={{ background: (res.call_type_name == "Avoid") ? 'red' : '' }}> {res.call_type_name}</a> : (res.report_subtype_name == "EQUITY RESEARCH REPORT" ) ? <a className="btn-sm btn-ptr cursor-pointer" style={{ background: (res.call_type_name == "Buy") ? '#00B26B' : (res.call_type_name == "Sell") ? 'red' : '' }} onClick={() => (res.call_type_name === 'Buy') || (res.call_type_name === 'Sell') ? goToDetail(res) : console.log("")} >{res.call_type_name ? res.call_type_name : " "}</a> : <a onClick={() => { getSingleDetail(res.redirect_slug) }} className="post-read cursor-pointer">Read More</a>}
                                            
                                          </div>
                                        </div>
                                      </div>
                                  )
                                })
                              }
                            </div> :
                            <div className="res-detailtab-list">

                              {
                                (list || [])?.slice(0, 4)?.map((res, i) => {


                                  return (

                                    <div className="res-tab-itm" key={res.uuid} >

                                    <div className="tab-itm-img" >
                                      <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                                    </div>
                                    <div className="tab-itm-des">
                                      <h5 className="ttl-des cursor-pointer" onClick={() => { getSingleDetail(res.redirect_slug) }}>{res.report_subtype_name == "IPO REPORT" ? res.scrip_name || "" : res.title || ""}</h5>
                                      {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                      <div className="itm-des-text">
                                        <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
                                      </div>


                                      {res.report_subtype_name == "EQUITY RESEARCH REPORT" ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage || 0}%</span></h4> : ""}
                                      <div className="itm-des-sub">
                                        <span className="date-post">{utils.formatDate(new Date(res.publish_date), "dd MMMM , yyyy")}</span>
                                        {(res.report_subtype_name == "IPO REPORT") ? <a onClick={() => { (res.call_type_name == "Avoid") ? "" : iporedirect() }} className="btn-sm grn-btn cursor-pointer" style={{ background: (res.call_type_name == "Avoid") ? 'red' : '' }}> {res.call_type_name}</a> : (res.report_subtype_name == "EQUITY RESEARCH REPORT" ) ? <a className="btn-sm btn-ptr cursor-pointer" style={{ background: (res.call_type_name == "Buy") ? '#00B26B' : (res.call_type_name == "Sell") ? 'red' : '' }} onClick={() => (res.call_type_name === 'Buy') || (res.call_type_name === 'Sell') ? goToDetail(res) : console.log("")} >{res.call_type_name ? res.call_type_name : " "}</a> : <a onClick={() => { getSingleDetail(res.redirect_slug) }} className="post-read cursor-pointer">Read More</a>}

                                      </div>
                                    </div>
                                  </div>
                                  )
                                })
                              }
                            </div>

                        }

                        <div className="mt-5 d-flex justify-content-center cursor-pointer">{check ? <a className="btn-bg btn-ptr" onClick={() => { goToScroll() }}>Load Less</a> : <a className="btn-bg btn-ptr" onClick={() => { setCheck(true) }}>Load More</a>}</div>

                      </div> :
                      <div className="text-center">
                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                      </div>

                  }

                </div>
              </div>
          }

        </div>
      </section>


    </div>
  );
}

export default TrendingReports;
