import React from "react";
import { useState, useEffect, useRef } from "react";
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
import Slider from 'react-slick';

function LongTermResearch() {
  let urlid = ""
  const [check, setCheck] = useState();
  const [list, setList] = useState([]);
  const [list2, setList2] = useState('');
  const [data, setData] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [count, setcount] = useState(1);
  const [view, setView] = useState({
    matches: window.innerWidth < 767 ? false : true,
  });

  // console.log("check",window.location);



  // const demo_ref = useRef(null)

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,

  };

  const queryParam = window.location.search;
  const utmvalue = new URLSearchParams(queryParam);
  const activeurl = utmvalue.get('active');
  // console.log('activeurl',activeurl);

  // const [tempid, setTempId] = useState('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
  const [tempid, setTempId] = useState({ 'name': activeurl? activeurl: 'economic-analysis', 'id': '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad' });

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
    console.log("goto signal", id)
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
    let url = api.getFundamentalDetailURL(report.id || report.uuid)
    window.open(url)
  }

  function iporedirect() {
    window.open('https://jiffy.choiceindia.com/market/latest-ipo-list');
  }

  function goToScroll() {
    // console.log('GGG');
    // demo_ref.current.scrollIntoView({behavior: 'smooth'})
    var element = document.getElementById('lt-search');
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setCheck(() => false);
  }


  function changeurl(id) {
    window.history.replaceState(null, null, `/research-listing?active=${id}`);
  }




  useEffect(() => {


    setTrigger(true)
    if (trigger === true) {
      console.log("test", urlid);
      (activeurl == "company-fundamentals") ? (loadResearch('f890363a-512e-4797-91fd-4d40732844a3'), setcount(2)) : (activeurl == "industry-analysis") ? (loadResearch('1aa86611-7b88-4069-af82-1e04e80659a4'), setcount(3)) : (activeurl == "ipo-nfo-analysis") ? (lpoSearch(), setcount(4)) : (loadResearch('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'), setcount(1));

      let mediaQuery = window.matchMedia("(min-width: 770px)");
      mediaQuery.addListener(setView);
      // this is the cleanup function to remove the listener
      return () => mediaQuery.removeListener(setView);
    }
  }, [trigger])
  return (
    <div>
      <section className="research-banner-tabs" >
        <div className="container">

          <div className="row" id='lt-search'>
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
                changeurl('economic-analysis')
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
                }); loadResearch('f890363a-512e-4797-91fd-4d40732844a3');
                changeurl('company-fundamentals')

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
                }); loadResearch('1aa86611-7b88-4069-af82-1e04e80659a4');
                changeurl('industry-analysis')

              }}
            >
              Industry Analysis
            </button>
            <button
              className={count === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => {
                setcount(4);
                setTempId(preValue => {
                  return {
                    ...preValue, 'name': 'ipo-nfo-analysis',
                    'id': '0'
                  }
                }); 
                lpoSearch();
                changeurl('ipo-nfo-analysis')
              }}
            >
              IPO/NFO Analysis

            </button>
          </div>
          <div className="content-tabs" >
            <div
              className="content active-content"
            >
              {
                data ?
                  <Template6 />
                  :

                  <div className="research-tab-cont" >
                    {
                      check ?
                        <div >

                          {
                            view && !view.matches ?
                              <Slider {...settings} className="research-tab-list">


                                {
                                  list.map((res, i) => {

                                    return (

                                      <div className="res-tab-itm" key={res.uuid} >

                                        <div className="tab-itm-img" >
                                          <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                                        </div>
                                        <div className="tab-itm-des">
                                          <h5 className="ttl-des cursor-pointer" onClick={() => { getSingleDetail(res.uuid) }}>{count === 4 ? res.scrip_name || "" : res.title || ""}</h5>
                                          {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                          <div className="itm-des-text">
                                            <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
                                          </div>


                                          {count === 2 ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage || 0}%</span></h4> : ""}
                                          <div className="itm-des-sub">
                                            <span className="date-post">{utils.formatDate(new Date(res.publish_date), "dd MMMM , yyyy")}</span>
                                            {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                                            {count === 4 ? <a onClick={() => { (res.call_type_name == "Avoid") ? "" : iporedirect() }} className="btn-sm grn-btn" style={{ background: (res.call_type_name == "Avoid") ? 'red' : '' }}> {res.call_type_name}</a> : count === 2 ? <a className="btn-sm btn-ptr" style={{ background: (res.call_type_name == "Buy") ? '#00B26B' : (res.call_type_name == "Sell") ? 'red' : '' }} onClick={() => (res.call_type_name === 'Buy') || (res.call_type_name === 'Sell') ? goToDetail(res) : console.log("")} >{res.call_type_name ? res.call_type_name : " "}</a> : <a onClick={() => { getSingleDetail(res.uuid) }} className="post-read">Read More</a>}

                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </Slider>

                              :
                              <div className="research-tab-list">


                                {
                                  list.map((res, i) => {

                                    return (

                                      <div className="res-tab-itm" key={res.uuid} >

                                        <div className="tab-itm-img" >
                                          <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                                        </div>
                                        <div className="tab-itm-des">
                                          <h5 className="ttl-des cursor-pointer" onClick={() => { getSingleDetail(res.uuid) }}>{count === 4 ? res.scrip_name || "" : res.title || ""}</h5>
                                          {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                          <div className="itm-des-text">
                                            <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
                                          </div>


                                          {count === 2 ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage || 0}%</span></h4> : ""}
                                          <div className="itm-des-sub">
                                            <span className="date-post">{utils.formatDate(new Date(res.publish_date), "dd MMMM , yyyy")}</span>
                                            {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                                            {count === 4 ? <a onClick={() => { (res.call_type_name == "Avoid") ? "" : iporedirect() }} className="btn-sm grn-btn" style={{ background: (res.call_type_name == "Avoid") ? 'red' : '' }}> {res.call_type_name}</a> : count === 2 ? <a className="btn-sm btn-ptr" style={{ background: (res.call_type_name == "Buy") ? '#00B26B' : (res.call_type_name == "Sell") ? 'red' : '' }} onClick={() => (res.call_type_name === 'Buy') || (res.call_type_name === 'Sell') ? goToDetail(res) : console.log("")} >{res.call_type_name ? res.call_type_name : " "}</a> : <a onClick={() => { getSingleDetail(res.uuid) }} className="post-read">Read More</a>}

                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>

                          }
                        </div>


                        :
                        <div >

                          {
                            view && !view.matches ?
                              <Slider {...settings} className="research-tab-list">


                                {
                                  (list || []).slice(0, 4).map((res, i) => {

                                    return (

                                      <div className="res-tab-itm" key={res.uuid} >

                                        <div className="tab-itm-img" >
                                          <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                                        </div>
                                        <div className="tab-itm-des">
                                          <h5 className="ttl-des cursor-pointer" onClick={() => { getSingleDetail(res.uuid) }}>{count === 4 ? res.scrip_name || "" : res.title || ""}</h5>
                                          {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                          <div className="itm-des-text">
                                            <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
                                          </div>


                                          {count === 2 ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage || 0}%</span></h4> : ""}
                                          <div className="itm-des-sub">
                                            <span className="date-post">{utils.formatDate(new Date(res.publish_date), "dd MMMM , yyyy")}</span>
                                            {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                                            {count === 4 ? <a onClick={() => { (res.call_type_name == "Avoid") ? "" : iporedirect() }} className="btn-sm grn-btn" style={{ background: (res.call_type_name == "Avoid") ? 'red' : '' }}> {res.call_type_name}</a> : count === 2 ? <a className="btn-sm btn-ptr" style={{ background: (res.call_type_name == "Buy") ? '#00B26B' : (res.call_type_name == "Sell") ? 'red' : '' }} onClick={() => (res.call_type_name === 'Buy') || (res.call_type_name === 'Sell') ? goToDetail(res) : console.log("")} >{res.call_type_name ? res.call_type_name : " "}</a> : <a onClick={() => { getSingleDetail(res.uuid) }} className="post-read">Read More</a>}

                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </Slider>

                              :
                              <div className="research-tab-list">


                                {
                                  (list || []).slice(0, 4).map((res, i) => {

                                    return (

                                      <div className="res-tab-itm" key={res.uuid} >

                                        <div className="tab-itm-img" >
                                          <img src={res.feature_image ? res.feature_image : thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                                        </div>
                                        <div className="tab-itm-des">
                                          <h5 className="ttl-des cursor-pointer" onClick={() => { getSingleDetail(res.uuid) }}>{count === 4 ? res.scrip_name || "" : res.title || ""}</h5>
                                          {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                                          <div className="itm-des-text">
                                            <p dangerouslySetInnerHTML={{ __html: res.description }}></p>
                                          </div>


                                          {count === 2 ? <h4>Upside: <span className="grn-txt">{res.upside_potential_percentage || 0}%</span></h4> : ""}
                                          <div className="itm-des-sub">
                                            <span className="date-post">{utils.formatDate(new Date(res.publish_date), "dd MMMM , yyyy")}</span>
                                            {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                                            {count === 4 ? <a onClick={() => { (res.call_type_name == "Avoid") ? "" : iporedirect() }} className="btn-sm grn-btn" style={{ background: (res.call_type_name == "Avoid") ? 'red' : '' }}> {res.call_type_name}</a> : count === 2 ? <a className="btn-sm btn-ptr" style={{ background: (res.call_type_name == "Buy") ? '#00B26B' : (res.call_type_name == "Sell") ? 'red' : '' }} onClick={() => (res.call_type_name === 'Buy') || (res.call_type_name === 'Sell') ? goToDetail(res) : console.log("")} >{res.call_type_name ? res.call_type_name : " "}</a> : <a onClick={() => { getSingleDetail(res.uuid) }} className="post-read">Read More</a>}

                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })
                                }
                              </div>

                          }
                        </div>
                    }


                    <div className="mt-5 d-flex justify-content-center">{check ? <a className="btn-bg btn-ptr" onClick={goToScroll}>Load Less</a> : <a className="btn-bg btn-ptr" onClick={() => { setCheck(true) }}>Load More</a>}</div>
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
