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
import {Link} from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom';

function LongTermResearch() {
  const [toggleState, setToggleState] = useState(1);
  const [list,setList] = useState([]);
  const [data,setData] = useState('');
  const [trigger,setTrigger]= useState(false);
  const[count,setcount] = useState(1);


  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [tempid, setTempId] = useState('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');

  const navigate = useNavigate();

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
        setList(res.response.data);
        
      }
    )
  };

  function getSingleDetail(id){
    // console.log('IIIII',id);
    navigate(`/research-detailed/${id}/${tempid}`);
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
                onClick={() => {setcount(1);setTempId('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');loadResearch('41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');}}
              >
                Economic Analysis
                
              </button>
              <button
                className={count === 2  ? "tabs active-tabs" : "tabs"}
                onClick={() => {setcount(2);setTempId('f890363a-512e-4797-91fd-4d40732844a3');loadResearch('f890363a-512e-4797-91fd-4d40732844a3')}}
              >
                Company Fundamentals
                
              </button>
              <button
                className={count === 3  ? "tabs active-tabs" : "tabs"}
                onClick={() => {setcount(3);setTempId('1aa86611-7b88-4069-af82-1e04e80659a4');loadResearch('1aa86611-7b88-4069-af82-1e04e80659a4')}}
              >
                 Industry Analysis
              </button>
              <button
                className={count === 4  ? "tabs active-tabs" : "tabs"}
                onClick={() =>{ setcount(4);lpoSearch()}}
              >
                  IPO/NFO Analysis
                
              </button>
            </div>
            <div className="content-tabs">
              <div
                className="content active-content"
              >
              <div className="research-tab-cont">
              

                <div className="research-tab-list">
               {
                  list.slice(0,4).map((res,i)=>{

                  return(
                    <div className="res-tab-itm">
                      <div className="tab-itm-img">
                         <img src={res.feature_image ? res.feature_image:thumb1} alt="Banner Images" className="img-fluid thumb-img" width={"231"} height={"251"}></img>
                      </div>
                      <div className="tab-itm-des">
                          <h5 className="ttl-des">{res.title ? res.title : " "}</h5>
                  {/**  dangerouslySetInnerHTML={{__html: res.description}}*/}
                          <p>{res.status === 'pending'? 'Accept' :res.status ? res.status:" "}</p>
                          <div className="itm-des-sub">
                              <span className="date-post">03 Mar 2022</span>
                              {/* <Link to={`/research-detailed/${res[i].uuid}`} className="post-read">Read More</Link> */}
                              <a onClick={() => {getSingleDetail(res.uuid)}} className="post-read">Read More</a>
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
