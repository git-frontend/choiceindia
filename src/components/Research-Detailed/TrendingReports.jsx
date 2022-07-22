
import React from "react";
import {useState, useEffect } from "react";
import thumb1 from '../../assets/images/research/thumbnail-1.webp';
import ResearchService from "../../Services/ResearchService";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';

function TrendingReports(props) {

  const [list, setList] = useState(null);
  const navigate = useNavigate();
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('id');
  // console.log('BBBBBBBBBBB',props);
  let sliceCount = Math.floor((Math.random() * 5) + 1);

  function getSingleDetail(id){
    console.log('IIIII',id);
    
      // navigate(`/research-new/${id}/${props.data}`);
      navigate({
        pathname: `/research-new/${id}/${props.data}`,
        search: `?id=${name? name: '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad'}`
      })
  }

  // function getSingleResearchDetail(id){

  //   ResearchService.getSingleResearchDetail(id).then(
  //     res => {
  //       if(res){
  //         if(res.response.data){
  //           setList(res.response.data);
  //         }
  //       }
  //       // setList(res.response.data);
  //       console.log('Detail',res);
  //     }
  //   )
  // }

  function loadResearch(id) {
    ResearchService.researchcategory(id).then(
      res => {
        // console.log('YYYYY',res.response.totalCount);
        setList(res.response.data);
      }
    )
  };

  useEffect(() => {
    loadResearch(name? name: '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad')
  },[])

  return (
    <div>


      <section className="res-trending-reports">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              
              <div className="heading-sec">
                <h3 className="title-first">Trending Reports</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="res-detailtab-cont">
                <div className="res-detailtab-list">

                  {
                    list?.slice(sliceCount,9)?.map((res,i)=> {
                      
                      console.log('RESPONSE',res)
                      return(
                        
                        <div className="res-tab-itm">
                        <div className="tab-itm-img">
                        <img src={res?.feature_image? res?.feature_image : ''  } alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                          {/* <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img> */}
                        </div>
                        <div className="tab-itm-des">
                        <h3 className="ttl-des">{res?.title? res?.title : ''} </h3>
                          {/* <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3> */}
                          <p className="tag-pref">{res?.report_name? res?.report_name : ''}</p>
                          <div className="itm-des-sub">
                            <span className="date-post">03 Mar 2022</span>
                            <a onClick={() => {getSingleDetail(res.uuid)}} className="post-read">Read More</a>
                            {/* <a href="#" className="post-read">Read More</a> */}
                          </div>
                        </div>
                      </div>
                      )
                    })
                  }

                  {/* <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a onClick={() => {getSingleDetail(res.uuid)}} className="post-read">Read More</a>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a onClick={() => {getSingleDetail(res.uuid)}} className="post-read">Read More</a>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a onClick={() => {getSingleDetail(res.uuid)}} className="post-read">Read More</a>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="res-tab-itm">
                    <div className="tab-itm-img">
                      <img src={thumb1} alt="Banner Images" className="img-fluid thumb-img" width="237" height="257"></img>
                    </div>
                    <div className="tab-itm-des">
                      <h3 className="ttl-des">Equity Research Report <span className="info-txt">WINDLAS ( BSE )</span> </h3>
                      <p className="tag-pref">FUNDAMENTAL</p>
                      <div className="itm-des-sub">
                        <span className="date-post">03 Mar 2022</span>
                        <a onClick={() => {getSingleDetail(res.uuid)}} className="post-read">Read More</a>
                        <a href="#" className="post-read">Read More</a>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="mt-5 d-flex justify-content-center">
                  <a className="btn-bg" href="/">Explore All</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default TrendingReports;
