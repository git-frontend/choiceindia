import React from "react";
import { useState } from "react";
import "./best-stock.scss";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import "../Remisier/Remisier.scss";
import rest from "../../Services/rest";
import utils from "../../Services/utils";
import { API_URLS } from "../../Services/API-URLS";
import "../Remisier/Remisier.scss";
import BestStockOpenDematAccount from './BestStockOpenDematAccount';
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter"; 
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import noDataimg from '../../assets/images/no-data.webp';
import  { useRef } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";

function BestStockcategory() {
  
  let tokenList = [{}]
  let multiValue = [{}]
  let AllFilesValue = {};
  let tokens="";
  let storefile;
 
  const [toggleState, setToggleState] = useState(1);
  const [list, setlist] = useState();
  const [Data1, setData1] = useState();
  const [rendercount, setRenderCount] = useState(() => false);
  const [skeleton, setSkeleton] = useState(() => true);
  /**Show loader */
  const [showLoader, setShowLoader] = useState(false)

  const toggleTab = (index) => {
    setToggleState(index);
  };
  function chapterScroll(id) {
    console.log("called",id)
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
function urlLink(){
  const queryParam = window.location.search;
  const utmvalue = new URLSearchParams(queryParam);
  const activeurl = utmvalue.get('active');
  ((activeurl == "-to-buy")?AllStocks():(activeurl == "-intraday-stocks-to-buy")?generateSessionId():(activeurl == "-term-stocks-to-buy")?ShortTermStocks():(activeurl == "-for-long-term-investment")?LongTermStocks():"");
}
  
  /**
   * Generate Session Id
   */
  function generateSessionId() {
    console.log("check");
    
    let api = new API_URLS()
    fetch(api.getSessionUrl())
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res.Status == 'Success') {
          IntraStocks(res.Response);
          setData1(res.Response);


        } else {
          IntraStocks()
        }

      }, err => {
        IntraStocks()
      })

  }
  
  function AllStocks() {
    setToggleState(0)
    setlist([]);
    storefile='';
    tokens='';
    tokenList=[];
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "Medium To Long Term",
      "limit": 10,
      "offset": 0,
      "segment": "",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "target_achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 1



    }
    rest.expertReportData(request).then(
      res => {
        if (res) {
          setShowLoader(false)
          storefile=res.response.research;
          setlist(res.response.research);

          res.response.research.forEach(ele => {
            tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })  
        });
        for (let i = 1; i < tokenList.length; i++) {
           tokens += tokenList[i].SegmentId + "@" + tokenList[i].Token + ",";
            
          
        }
        console.log("SegmentId",tokens);
        // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
        const payload = {
          'UserId': 'guest',
          'SessionId': Data1,
          'MultipleTokens': tokens
        }

        rest.multipleTokensURLData(payload).then(
          res => {
            if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
              res.Response.lMT.forEach((ele,index) => {
              
                ele['LTP'] = ele['LTP'] /100;
                ele.PrevClose = ele.PC/100;
                ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                for(let i=0;i<storefile.length;i++){
                 
                  if(storefile[i].token ==ele.Tok && storefile[i].segment_id ==ele.Seg){
                    AllFilesValue = Object.assign(storefile[i],ele);
                    multiValue.push(AllFilesValue)
                  }else{
                    AllFilesValue = [];
                   
  
                  }
                }  
                
            })
            setlist(multiValue) ;
    
            }
          })
      }
    })
    .catch((error) => {
      setShowLoader(false)
      setlist([]);
    });
  }


  function LongTermStocks() {
    setToggleState(3)
    setlist([]);
    tokens='';
    storefile='';
    tokenList=[];
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "Medium To Long Term",
      "limit": 10,
      "offset": 0,
      "segment": "EQ",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "target_achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 1



    }
    rest.expertReportData(request).then(
      res => {
        if (res) {
          setShowLoader(false)
          storefile=res.response.research;
          setlist(res.response.research);

          res.response.research.forEach(ele => {

            tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token }) 
        });
        for (let i = 1; i < tokenList.length; i++) {
           tokens += tokenList[i].SegmentId + "@" + tokenList[i].Token + ",";
            
          
        }
        console.log("SegmentId",tokens);
        // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
        const payload = {
          'UserId': 'guest',
          'SessionId': Data1,
          'MultipleTokens': tokens
        }

        rest.multipleTokensURLData(payload).then(
          res => {
            if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
              res.Response.lMT.forEach((ele,index) => {
              
                ele['LTP'] = ele['LTP'] /100;
                ele.PrevClose = ele.PC/100;
                ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                for(let i=0;i<storefile.length;i++){
                 
                  if(storefile[i].token ==ele.Tok && storefile[i].segment_id ==ele.Seg){
                    AllFilesValue = Object.assign(storefile[i],ele);
                    multiValue.push(AllFilesValue)
                  }else{
                    AllFilesValue = [];
                   
  
                  }
                }
                
            })
            setlist(multiValue) ;
    
            }
          })
      }
    })
   
    .catch((error) => {
      setShowLoader(false)
      setlist([]);
    });
  }

  function ShortTermStocks() {
    setToggleState(2)
    console.log("change",toggleState)
    setlist([]);
    tokens='';
    tokenList=[];
    storefile='';
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "",
      "limit": 10,
      "offset": 0,
      "segment": "EQ",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "target_achieved",
      "subcategory_id": "",
      "search": "",
      "id": "",
      "user_id": "",
      "timeline_enabled": 1,
      "category_id": 2
    }
    rest.expertReportData(request).then(

      res => {
        setShowLoader(false)
        if (res) {
          console.log("checkdd",res.response.research);
          storefile=res.response.research;
          // setlist(res.response.research);

          res.response.research.forEach(ele => {

            tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
            
        });
        for (let i = 1; i < tokenList.length; i++) {
           tokens += tokenList[i].SegmentId + "@" + tokenList[i].Token + ",";
            
          
        }
        console.log("SegmentId",tokens);
        // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
        const payload = {
          'UserId': 'guest',
          'SessionId': Data1,
          'MultipleTokens': tokens
        }

        rest.multipleTokensURLData(payload).then(
          res => {
            if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
              
              res.Response.lMT.forEach((ele,index) => {
              
                ele['LTP'] = ele['LTP'] /100;
                ele.PrevClose = ele.PC/100;
                ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                for(let i=0;i<storefile.length;i++){
                 
                  if(storefile[i].token ==ele.Tok && storefile[i].segment_id ==ele.Seg){
                    AllFilesValue = Object.assign(storefile[i],ele);
                    multiValue.push(AllFilesValue)
                  }else{
                    AllFilesValue = [];
                   
  
                  }
                }
            })
         
            setlist(multiValue) ;
    
            }
          })
      }
    })
   
    .catch((error) => {
      setShowLoader(false)
      setlist([]);
    });
  }

  function IntraStocks (session){
    setToggleState(1)
    setlist([]);
    tokens='';
    tokenList=[];
    storefile='';
    setShowLoader(true)
    let request = {
      "Count": 10,
      "endDate": utils.formatDate(new Date(), "dd-MM-yyyy"),
      "SessionId": session,
      "Start": 0,
      "startDate": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "dd-MM-yyyy"),
      "status": "T1",
      "type": "EQ",
      "UserId": "guest",
      "search": ""
    }
    rest.signalReportData(request).then(
      res => {
        setShowLoader(false)
        if (res) {
          storefile=res.Response.Data
          res.Response.Data.forEach(ele => {

            tokenList.push({ 'SegmentId': ele.Seg, 'Token': ele.Tok }) 
        });
        for (let i = 1; i < tokenList.length; i++) {
           tokens += tokenList[i].SegmentId + "@" + tokenList[i].Token + ",";
            
          
        }
        console.log("SegmentId",tokens);
       
        // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
        const payload = {
          'UserId': 'guest',
          'SessionId': session,
          'MultipleTokens': tokens
        }

        rest.multipleTokensURLData(payload).then(
          res => {
            
            if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
             res.Response.lMT.forEach((ele,index) => {
              
              ele['LTP'] = ele['LTP'] /100;
              ele.PrevClose = ele.PC/100;
              ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
              ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
              // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
              for(let i=0;i<storefile.length;i++){
               
                if(storefile[i].Tok == ele.Tok && storefile[i].Seg == ele.Seg){
                  AllFilesValue = Object.assign(storefile[i],ele);
                  multiValue.push(AllFilesValue)
                }else{
                  AllFilesValue = [];
                 

                }
              }
          })
          
          setlist(multiValue) ;
            }else{
              setlist([])
            }
          }) 
      }
    })
    // )
    .catch((error) => {
      setShowLoader(false)
      setlist([]);
    });
  }

 




  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {

      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';

      generateSessionId();
      
      // multipletokens();
    }
  }, [rendercount])


  function redirectLink() {
    window.open("https://finx.choiceindia.com/market/latest-ipo-list");
  }

  function changeurl(id) {
    window.history.replaceState(null, null, `/best-stocks?active=${id}`);
    urlLink();
  
  }



  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <section className="mainhead">
              <div className="container">
                <div className="row d-flex justify-content-center ">
                  <div className="col-md-12 ">
                    <h2 className="title-secnd1">Best Stocks to Buy Today</h2>
                    <p className="title_para">Choose the best stocks to buy today according to the holding period.</p>
                    <p className="title_para res_para ">Get the list of best stocks to buy today for intraday trading!</p>
                  </div>
                  <div className="col-xl-8 col-md-12" id="best-stock">
                    <ul className="list-group list_group1">
                      <li className={toggleState === 0 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { AllStocks(); toggleTab(0) }}>All Stocks</li>
                      <li className={toggleState === 1 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { generateSessionId(); toggleTab(1) }}>Intraday Stocks</li>
                      <li className={toggleState === 2 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { ShortTermStocks(); toggleTab(2)}}>Short Term Stocks</li>
                      <li className={toggleState === 3 ? "list-group-item list listsec " : "list-group-item list"} onClick={() => { LongTermStocks(); toggleTab(3); }}>Long Term Stocks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            

            <section className="main">
              <div className="container">
                <div  className="content-tabs best-stock-tabs-cont active-content">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                    <div>
                                 {showLoader?
                          
                          <div className="text-center">
                        <div>
                          {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                          <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                          </div>
                      </div>:
                      <div>
                      {
                        list.length ?
                                <div className="row gx-5">
                                  {
                                    (list || []).slice(1, 5).map((response, index) => {


                                      return (


                                        <div className="col-xl-6" key={index}>
                                          <div className="main-left" >

                                            <div className="top-section" >
                                              <div className="top-left">
                                                <h6 className="top-text">Reco Date</h6>
                                                {
                                                  toggleState==1?
                                                  <div>
                                                  <h6 className="top-date">{utils.formatDate(new Date(response.TATime), "dd MMMM , yyyy")}</h6>
                                                  </div>:
                                                  <div>
                                                  <h6 className="top-date">{utils.formatDate(new Date(response.updated_datetime), "dd MMMM , yyyy")}</h6></div>
                                                }
                                                
                                              </div>
                                              {
                                                toggleState == 1?
                                                <div className="top-right"><button className="btn-buy sellbtn" onClick={() => redirectLink()}>Sell</button></div>:
                                                <div className="top-right"><button className="btn-buy" onClick={() => redirectLink()}>{response.call_type}</button></div>
                                              }
                                              
                                            </div>
                                            
                                            <div className="middle-section">
                                              <div className="middle-left">
                                                {
                                                  toggleState==1?
                                                  <div>
                                                  <h4 className="big-text">{response.Sym}</h4>
                                                  <span className="small-text">{response.Name}</span>
                                                  </div>:
                                                  <div> <h4 className="big-text">{response.scrip_name}</h4>
                                                  <span className="small-text">{response.scrip_sec_desc}</span></div>


                                                }
                                               
                                              </div>
                                              <div className="middle-right">
                                              <span className="right-big-text">{response.LTP}</span>
                                              <h6 className={"right-small-text " + ((response.ChangePer<0) ? 'text_red' :(response.ChangePer >0) ? 'text_green':'')}>{Math.abs((response.Change||0)).toFixed(2) +"(" +Math.abs((response.ChangePer||0)).toFixed(2) +'%'+")"}</h6>
                                              </div>
                                            </div>
                                            {
                                              toggleState == 1 ?
                                              <div className="bottom-section">
                                          <div className="d-flex justify-content-between pt-3">
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Stop Loss</h6>
                                              <h4 className="bottom_big_text">{((response.SL / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">Entry Price</h6>
                                              <h4 className="bottom_big_text">{((response.EP / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                              {/* <h4 className="bottom_big_text">{(response.EP/100).toFixed(2)}</h4> */}
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text"> Target Price </h6>
                                              <h4 className="bottom_big_text" >{((response.TP1 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">2nd Target</h6>
                                              <h4 className="bottom_big_text">{((response.TP2 / 100).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                            </div>
                                            <div className="bottom">
                                              <h6 className="bottom_small_text">3rd Target</h6>
                                              <h4 className="bottom_big_text">-</h4>
                                            </div>
                                          </div>
                                        </div>:
                                        toggleState ==2 ?
                                        <div className="bottom-section">
                                            <div className="d-flex justify-content-between pt-3">
                                              <div className="bottom">
                                                <h6 className="bottom_small_text">Stop Loss</h6>
                                                <h4 className="bottom_big_text" >{parseFloat((response.datapoints||[])[2].value).toFixed(2)}</h4>
                                              </div>
                                              <div className="bottom">
                                                <h6 className="bottom_small_text">Entry Price</h6>
                                                <h4 className="bottom_big_text">{parseFloat((response.datapoints||[])[0].value).toFixed(2)}</h4>
                                              </div>
                                              <div className="bottom">
                                                <h6 className="bottom_small_text"> Target Price </h6>
                                                <h4 className="bottom_big_text">{parseFloat((response.datapoints||[])[1].value).toFixed(2)}</h4>
                                              </div>
                                            </div>
                                          </div>:
                                           <div className="bottom-section">
                                           <div className="d-flex justify-content-between pt-3">
                                             <div className="bottom">
                                               <h6 className="bottom_small_text">Entry Price</h6>
                                               <h4 className="bottom_big_text">{(parseFloat((response.datapoints||[])[0].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                             </div>
                                             <div className="bottom">
                                               <h6 className="bottom_small_text">Potential Price</h6>
                                               <h4 className="bottom_big_text" >{(parseFloat((response.datapoints||[])[1].value).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
                                             </div>
                                             <div className="bottom">
                                               <h6 className="bottom_small_text">Exp. Returns</h6>
                                               <h4 className="bottom_big_text">{utils.formatDate(new Date(response.report_expiry), "dd MMM , yyyy")}</h4>
                                             </div>
                                           </div>
                                         </div>



                                            }

                                           

                                          </div>
                                        </div>


                                      )
                                    })
                                  }
                                </div>
                                  :
                                  <div className="text-center">
                                  <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                </div>
                                }
                                  
                                  </div>
} 
                                </div>

                    </div>
                  </div>

                  {/* <div className="row d-flex justify-content-center">
                      <div className="col-md-12">
                        <div className="row gx-5">
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">JSW Steel Ltd.</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">755.90</span>
                                  <h6 className="right-small-text text_color">-11.5 (1.50%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">757.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >810.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">7.16%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">12th Apr '22</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">buy</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">Bandhan Bank Ltd</h4>
                                  <span className="small-text">BANDHANBANK</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">333.45</span>
                                  <h6 className="right-small-text">+10.6 (3.28%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">327.30</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >350.00</h4>
                                  </div>
                                  <div className="bottom">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">4.96%</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                </div>
              </div>
            </section>
            <OpenDemateAccountStickyFooter/>
            <section className="readmoresection readmorecontent">
              <div className="container">
                {
                 
                    toggleState === 1 ?
                      <div className="row">
                        <div className="col-md-12">
                          <h2 className="secttitle text-center">Get the Best Intraday Stocks to Buy Today with Choice</h2>
                        </div>
                        <div className="col-md-12">
                          <div className="para px-3">
                            <input type="checkbox" className="read-more-state" id="post-1" />
                            <span className="read-more-wrap restext"> Choice India , a part of Choice Group has excelled in providing various strategies 
                            over a span of 25+ years serving the finance industry. In this section, we bring to you the best intraday stocks to buy 
                            today with expert research recommendations from one of our features - Signal.
                              <span className="read-more-target restext">
                              Signal, an Automated Research Engine that provides research advisory with customised strategies for all types of Traders
                               has been back tested by our in-house advisory with a proven track record that has been in existence for almost a decade 
                               now to provide the best intraday stocks to buy and sell.
                                <br />
                                <br />
                                Signal, as a feature, was designed  after continuous testing and analyzing for app users with no human intervention. Hence, the research calls are completely unbiased and are a projection of complete analysis
                                <br />
                                <br />
                                The feature is an initiative as a solution to the question’ which is the <span className="urllinks" onClick={()=>{changeurl('-to-buy');chapterScroll('best-stock')}}> best stock to buy </span> in intraday’
                                 as it is created to generate Intraday Research Calls for Intraday traders based on pattern breakout on a 
                                 multi-time frame along with volume criteria.
                                <br />
                                <br />
                                The USP of the Intraday stocks to buy today is they come with a Stop Loss as well as targets. However, there is no auto-execution system. It is upto the traders discretion to execute it or not.
                                <br />
                                <br />
                                The basket of stocks to buy today for intraday has been well researched by our expert Mr. Kkunal Parar who is also the developer of the feature. Therefore, the recommendations hold a high success ratio. Here, you can get a variety of stock recommendations that are subjective to intraday trades only. 
                                <br/>
                                <br/>
                                For all stock recommendations for intra day trades, short-term trades and long-term trades , you can refer to the segment providing you with the latest research calls from the experts. <Link to="/open-free-demat-account"> Open a free demat account  </Link> with us to get the best intraday stocks to buy today in India.

                              </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                          </div>
                        </div>
                      </div> :
                      toggleState === 2 ?

                      <div className="row">
                      <div className="col-md-12">
                        <h2 className="secttitle text-center">C-Quant Offers the Best Stocks to Buy Today in India for Short Term</h2>
                      </div>
                      <div className="col-md-12">
                        <div className="para px-3">
                          <input type="checkbox" className="read-more-state" id="post-1" />
                          <span className="read-more-wrap restext "> Choice Group  introduced C-Quant to facilitate the reach of short-term research
                            calls for all those traders who wish to churn their holdings at a specific pace. Keeping in mind the perspective
                            of best stocks to buy in India for short-term trades, C-Quant was developed.
                            <span className="read-more-target restext">
                              C-Quant employs quantitative and statistical techniques to generate trading calls from the top 100 stocks listed on
                              the NSE ranked by market capitalization and average daily traded volume thus making it one of the desired features
                              for short term stocks to buy today aiming to provide short term trading strategy for traders looking at gains from 1%
                              and above within 5 trading days of trade execution.
                              <br />
                              <br />
                              The feature gives weekly calls in which the returns on each call are more than 1%. The risk to reward ratio
                              is 2:1. These calls have been thoroughly back-tested on historical market data and have a high probability
                              of achieving the target price. The concept has been back-tested for the last six years and has gained its
                              presence to outperform a simple buy-and-hold strategy.
                              <br />
                              <br />
                              The T+5 strategy of C-Quant is devised as a part of our larger offering to serve the requirements of weekly
                              stock recommendations, especially for stocks to buy today for short-term positions. It employs a combination
                              of momentum and correlation of the stock’s daily price to its historical price to forecast price targets.
                              <br />
                              <br />
                              With C-Quant you can  get access to short term trading ideas having a quantitative edge and receive live
                              recommendations here for best stocks to buy for short-term trades that shall enhance  trading/investment
                              experience and thereby, fulfil the requirement as per your trading style. You can also view the bundle of  
                              <span className="urllinks" onClick={()=>{changeurl('-to-buy');chapterScroll('best-stock')}}> best stocks to buy </span> today in the ‘All Stocks’ section.
                              <br />
                              <br />
                              Open your <Link to='/open-free-demat-account'>free demat account</Link> with Choice and get the best stocks to buy today in India for a short term time horizon.


                            </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                        </div>
                      </div>
                    </div>:
                        toggleState === 3 ?
                          <div className="row">
                            <div className="col-md-12">
                              <h2 className="secttitle text-center">Explore Best Stocks to Buy Today in India for Long Term</h2>
                            </div>
                            <div className="col-md-12">
                              <div className="para px-3">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap restext "> Choice has been backed by a strong research cell since 25+years gaining investor confidence, hereby, providing fundamental and technical calls. It has been on the forefront to serve its investors in the best suitable way by giving enhanced trading experience through the app, hassle-free processes to register and expert research recommendations that would be beneficial to the trader.
                                
                                  <span className="read-more-target restext">
                                  In addition, it also sources research recommendations hereby bifurcating the universal data to put it in best use for every kind of positional traders that would support them to buy best stocks for intraday trades, best stocks to buy in short term trades and best stocks to buy in long-term trades. The ‘ All Stocks’ segment is the know-how of the stocks to buy in India today for sorts of  positional research recommendations under one roof.
                                    <br />
                                    <br />
                                    The end-to-end solutions as a service provider, the organisations Research section works day-in and day-out to put together the right research methodology to bridge the gap from being just a broking house to gauging maximum exposure on research recommendations.
                                    <br />
                                    <br />
                                    In order to reap the benefits, be ready with your demat and trading account at Choice and start getting the <span className="urllinks" onClick={()=>{changeurl('-to-buy');chapterScroll('best-stock')}}> best stocks to buy today </span> in India for long term investment.

                                  </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                              </div>
                            </div>
                          </div> :
                           <div className="row">
                           <div className="col-md-12">
                             <h2 className="secttitle text-center">Best Stocks to Buy Today in India</h2>
                           </div>
                           <div className="col-md-12">
                             <div className="para px-3">
                               <input type="checkbox" className="read-more-state" id="post-1" />
                               <span className="read-more-wrap restext"> Choice Group, in the year 2018, invented Jiffy, the trading app to facilitate
                                 the new gen trading needs. The platform was established to simplify the needs of the traders with regards to
                                 which stocks to buy today in India, where to find the right research recommendations etc.
     
                                 <span className="read-more-target restext">
                                   Research is the backbone of investing and a strong research requires experienced professionals,
                                   identifying the type of research, historical data analysis, performance tracking, addressing real-time
                                   situations, and most importantly, collation and apt analysis of data, thereby giving out research calls
                                   that can be fruitful, and that’s what we are known for. In this section, you can get a glimpse of the best
                                   stocks to buy in India today.
                                   <br />
                                   <br />
                                   We believe in providing investors with every kind of research information for all types of traders such as
                                   intraday traders, short term traders, and long term traders.
                                   <br />
                                   <br />
                                   <h2 className="font-bold">Get the Best Intraday Stocks to Buy Today</h2>
                                   Intraday is a part of our Signal feature in the ‘Research’ Section. Signal,  an Automated Research Engine that provides
                                   research advisory with customised strategies for all types of Traders
                                   with a multi time frame breakout strategy based on the pattern breakout without any human intervention.
                                   Subscribe and get the  <span className="urllinks" onClick={()=>{changeurl('-intraday-stocks-to-buy');chapterScroll('best-stock')}}>best intraday stocks to buy today.</span>
                                   <br />
                                   <br />
                                   <h2 className="font-bold">Explore Best Short Term Stocks to Buy Today with C_Quant</h2>
                                   The short-term trades are provided by our C-Quant feature with T+5  short term trading ideas based on
                                   quantitative analysis and statistically tested trading strategy. C_Quant employs quantitative and statistical
                                   techniques to generate trading calls from the top 100 stocks listed on the NSE ranked by market capitalization
                                   and average daily traded volume. Follow our C_Quant strategies and get the <span className="urllinks" onClick={()=>{changeurl('-term-stocks-to-buy');chapterScroll('best-stock')}}> best stocks to buy today in India
                                     for the short term.</span>
                                   <br />
                                   <br />
                                   <h2 className="font-bold">Get Best Stocks to Buy Today in India for Long Term</h2>
                                   If you're looking for the best stocks to buy today in India for the long-term, you are at the right place.
                                   This segment provides you with long-term research calls recommended by our Executive Director -Sumeet Bagadia.
                                   With his expert advice, one can find solutions for long-term financial goals in investing with targets and stop loss in place.
                                   Open a free demat account with Choice and get the <span className="urllinks" onClick={()=>{changeurl('-for-long-term-investment');chapterScroll('best-stock')}}> best stocks to buy today in India for long term investment.</span>
     
                                 </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                             </div>
                           </div>
                         </div>

                }
              </div>
            </section>

          </div>


      }
    </div>
  );
}

export default BestStockcategory;
