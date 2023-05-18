
// import React from 'react';
import React from "react";
import { useState, useEffect } from "react";
import '../Best-Stocks/best-stock.scss';
import Slider from 'react-slick';
import rest from "../../Services/rest";
import utils from "../../Services/utils";
import noDataimg from '../../assets/images/no-data.webp';
function ResearchCalls() {
  let tokenList = [{}];
  let tokens = "";
  let storefile;
  const [list, setlist] = useState();
  const [showLoader, setShowLoader] = useState(false)
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 2,
    arrows: false,
    autoplay: false,
    dots: false,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }

    ]

  };

  function LongTermStocks() {

    setlist([]);
    tokens = '';
    storefile = '';
    tokenList = [];
    setShowLoader(true)
    let request = {

      "end_date": utils.formatDate(new Date(), "yyyy-MM-dd"),
      "is_expert": 0,
      "research_type": "Medium To Long Term",
      "limit": 10,
      "offset": 0,
      "segment": "FO",
      "start_date": utils.formatDate(new Date(new Date().setFullYear(new Date().getFullYear() - 1)), "yyyy-MM-dd"),
      "status": "",
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
          console.log("res",res)

          storefile = res.response.research;
          // setlist(res.response.research);

          res.response.research.forEach(ele => {

            tokenList.push({ 'SegmentId': ele.segment_id, 'Token': ele.token })
          });

          let unique = []
          for (let i = 0; i < tokenList.length; i++) {
            unique.push(tokenList[i].SegmentId + "@" + tokenList[i].Token + ",");
          }
          unique.forEach(element => {
            if (!tokens.includes(element)) {
              tokens += element
            }
          });


          // console.log("SegmentId",tokens);
          // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
          const payload = {
            'UserId': 'guest',
            'SessionId': Data1,
            'MultipleTokens': tokens
          }

          rest.multipleTokensURLData(payload).then(
            res => {
              if (res && res.Response && res.Response.lMT && res.Response.lMT.length) {
                res.Response.lMT.forEach((ele, index) => {

                  ele['LTP'] = ele['LTP'] / 100;
                  ele.PrevClose = ele.PC / 100;
                  ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                  ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                  // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                  for (let i = 0; i < storefile.length; i++) {

                    if (storefile[i].token == ele.Tok && storefile[i].segment_id == ele.Seg) {
                      setShowLoader(false)
                      AllFilesValue = Object.assign(storefile[i], ele);
                      multiValue.push(AllFilesValue)
                    } else {



                    }
                  }

                })
                setlist(multiValue);

              }
            })
        }
      })

      .catch((error) => {
        setShowLoader(false)
        setlist([]);
      });
  }
  useEffect(() => {
    LongTermStocks()
  }, [])
  return (
    <>
      <section className="research-calls main-parent">
        <div className="container">
          <h2 className="title-first research-title">Our Recent Research Calls</h2>
          <div className="">
            <Slider {...settings} className="research-calls-tab">
              {
                list && list.length ?
                  <div className="calls-tab-item">
                    {
                      (list || []).slice(0, 4).map((response, index) => {


                        return (
                          <div className="main-left" key={index}>
                            <div className="top-section">
                              <div className="top-left">
                                <h6 className="top-text">Reco Date</h6>
                                <h6 className="top-date">15 November ,23</h6>
                              </div>
                              <div className="top-right"><button className="btn-buy">BUY, Add on Dips</button></div>
                            </div>
                            <div className="middle-section">
                              <div className="middle-left">
                                <h4 className="big-text">BANKBARODA</h4>
                                <span className="small-text">BANK OF BARODA</span>
                              </div>
                              <div className="middle-right">
                                <span className="right-big-text">165.65</span>
                                <h6 className="right-small-text text_color">6.95(4.37%)</h6>
                              </div>
                            </div>

                            <div className="bottom-section">
                              <div className="d-flex justify-content-between pt-3">
                                <div className="bottom fandores">
                                  <h6 className="bottom_small_text">Entry Price</h6>
                                  <h4 className="bottom_big_text">165.00</h4>
                                </div>
                                <div className="bottom fandores">
                                  <h6 className="bottom_small_text">Potential Price</h6>
                                  <h4 className="bottom_big_text" >182.00</h4>
                                </div>
                                <div className="bottom fandores">
                                  <h6 className="bottom_small_text">Exp. Returns</h6>
                                  <h4 className="bottom_big_text">15 Nov, 2023</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  :
                  <div className="text-center">
                                  <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                </div>}

              {/* <div className="calls-tab-item">
                            <div className="main-left">
                              <div className="top-section">
                                <div className="top-left">
                                  <h6 className="top-text">Reco Date</h6>
                                  <h6 className="top-date">17 March’23</h6>
                                </div>
                                <div className="top-right"><button className="btn-buy">BUY</button></div>
                              </div>
                              <div className="middle-section">
                                <div className="middle-left">
                                  <h4 className="big-text">SIGACHI</h4>
                                  <span className="small-text">SIGACHI INDUSTRIES LIMITE</span>
                                </div>
                                <div className="middle-right">
                                  <span className="right-big-text">291</span>
                                  <h6 className="right-small-text">22.70(7.24%)</h6>
                                </div>
                              </div>

                              <div className="bottom-section">
                                <div className="d-flex justify-content-between pt-3">
                                  <div className="bottom fandores">
                                    <h6 className="bottom_small_text">Entry Price</h6>
                                    <h4 className="bottom_big_text">242.40</h4>
                                  </div>
                                  <div className="bottom fandores">
                                    <h6 className="bottom_small_text">Potential Price</h6>
                                    <h4 className="bottom_big_text" >324.82</h4>
                                  </div>
                                  <div className="bottom fandores">
                                    <h6 className="bottom_small_text">Exp. Returns</h6>
                                    <h4 className="bottom_big_text">23 Jun ,2023</h4>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default ResearchCalls;