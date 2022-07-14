
import React from "react";
import { useState,useEffect } from "react";
import EconomicAnalysis from './EconomicAnalysis';
import CompanyFundamentals from './CompanyFundamentals';
import IndustryAnalysis from './IndustryAnalysis';
import IpoNfoAnalysis from './IpoNfoAnalysis';
import ResearchService from "../../Services/ResearchService";
import thumb1 from '../../assets/images/research/thumbnail-img1.webp';
import thumb2 from '../../assets/images/research/thumbnail-img2.webp';
import thumb3 from '../../assets/images/research/thumbnail-img3.webp';
import thumb4 from '../../assets/images/research/thumbnail-img4.webp';




function LongTermResearch() {

  const [toggleState, setToggleState] = useState(1);
  const [list,setList] = useState([]);
  const [data,setData] = useState('');
  const [trigger,setTrigger]= useState(false);


  const toggleTab = (index) => {
    setToggleState(index);
  };

  function loadResearch(id) {
    ResearchService.researchcategory(id).then(
      res => {
        setList(res.response.data);
      }
    )
  };

  function lpoSearch() {
    ResearchService.researchipo().then(
      res => {
        setList(res);
      }
    )
  };

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
							<div className="heading-sec heading-sec-top">
								<h3 className="title-first" >Long Term Research </h3>
							</div>
						</div>
					</div>
        <div className="research-bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => {toggleTab(1);loadResearch('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad')}}
              >
                Economic Analysis
                
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => {toggleTab(2);loadResearch('f890363a-512e-4797-91fd-4d40732844a3')}}
              >
                Company Fundamentals
                
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => {toggleTab(3);loadResearch('1aa86611-7b88-4069-af82-1e04e80659a4')}}
              >

                 Industry Analysis

              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() =>{ toggleTab(4);lpoSearch()}}
              >
                  IPO/NFO Analysis
                
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
              <div className="research-tab-cont">
              <div className="research-tab-list">
               {
                list.slice(0,4).map((res,i)=>{

                  return(

                    <div className="res-tab-itm">
                      <div className="tab-itm-img">
                         <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                      </div>
                      <div className="tab-itm-des">
                          <h5 className="ttl-des">{res.title}</h5>
                          <p dangerouslySetInnerHTML={{__html: res.description}}></p>
                          <div className="itm-des-sub">
                              <span className="date-post">03 Mar 2022</span>
                              <a href="#" className="post-read">Read More</a>
                          </div>
                      </div>
                  </div>


                  )
                })
               }
                  
              </div>
              </div>
              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
              <div className="research-tab-cont">
              <div className="research-tab-list">
               {
                list.slice(0,4).map((res,i)=>{

                  return(

                    <div className="res-tab-itm">
                      <div className="tab-itm-img">
                         <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                      </div>
                      <div className="tab-itm-des">
                          <h5 className="ttl-des">{res.title}</h5>
                          <p dangerouslySetInnerHTML={{__html: res.description}}></p>
                          <div className="itm-des-sub">
                              <span className="date-post">03 Mar 2022</span>
                              <a href="#" className="post-read">Read More</a>
                          </div>
                      </div>
                  </div>


                  )
                })
               }
                  
              </div>
              </div>
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
              <div className="research-tab-cont">
              <div className="research-tab-list">
               {
                list.slice(0,4).map((res,i)=>{

                  return(

                    <div className="res-tab-itm">
                      <div className="tab-itm-img">
                         <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                      </div>
                      <div className="tab-itm-des">
                          <h5 className="ttl-des">{res.title}</h5>
                          <p dangerouslySetInnerHTML={{__html: res.description}}></p>
                          <div className="itm-des-sub">
                              <span className="date-post">03 Mar 2022</span>
                              <a href="#" className="post-read">Read More</a>
                          </div>
                      </div>
                  </div>


                  )
                })
               }
                  
              </div>
              </div>
              </div>

              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
              <div className="research-tab-cont">
              <div className="research-tab-list">
               {
                list.slice(0,4).map((res,i)=>{

                  return(

                    <div className="res-tab-itm">
                      <div className="tab-itm-img">
                         <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                      </div>
                      <div className="tab-itm-des">
                          <h5 className="ttl-des">{res.title}</h5>
                          <p dangerouslySetInnerHTML={{__html: res.description}}></p>
                          <div className="itm-des-sub">
                              <span className="date-post">03 Mar 2022</span>
                              <a href="#" className="post-read">Read More</a>
                          </div>
                      </div>
                  </div>


                  )
                })
               }
                  
              </div>
              </div>
              </div>
            </div>

            
          </div>
        </section>

        

        
    
    </div>
  );
}

export default  LongTermResearch;
