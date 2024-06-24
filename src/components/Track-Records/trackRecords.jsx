import "../FilesDownload/Filedownload.scss";
import Template2 from '../Common-features/Template2';
import cmsService from "../../Services/cmsService";
import noDataimg from '../../assets/images/no-data.webp';
import { useState, useEffect } from 'react';
import download from '../../assets/images/file-download/export.webp';

import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import './trackRecords.scss';


function trackRecords() {
  const [datalist, setDatalist] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [isloading, setisloading] = useState(true);
  let values;
  let AllFilesValue = {};
  const [toggleState, setToggleState] = useState(1);
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);
  const [mainboard,setMainboard] = useState([])
  const [sme,setSme] = useState([])
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if (!(document.getElementById('link1') == null)) {
        document.getElementById('link1').remove();
        document.getElementById('link2').remove();
        document.getElementById('link3').remove();
        document.getElementById('link4').remove();
        document.getElementById('link5').remove();
        document.getElementById('link6').remove();

      }
    }
  }, [rendercount])
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 600)
  })

  function loadFileDownload() {
    cmsService.trackdocumentList().
      then(
        res => {
          if (res && res.data && res.data.data) {
            setisloading(false)
            values = res.data.data;
            setMainboard(values?.filter(e => e.select_ipo === "mainboard IPO"))
            setSme(values?.filter(e => e.select_ipo === "sme IPO"))
            setDatalist(values);
          } else {
            setisloading(false)
            setDatalist([]);

          }

        }
      ).catch((error) => {
        setisloading(false)
        setDatalist([]);
      });
  }
  useEffect(() => {
    setTrigger(true)

    if (trigger === true) {
      loadFileDownload()
    }

  }, [trigger])
  return (

    <div>
      {
        skeleton ? <Template2 /> :
          <section className="track-records-banner">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className='text-center mt-5 mb-4 big-ttl'>Track Record</h1>
                  <p class="subtext text-center"> (Choice Capital Advisors Pvt Ltd, a SEBI Registered Category 1 Merchant Banker with license number: INM000011872 is a wholly owned subsidiary of Choice International Limited.)</p>
                </div>
                
                <div className="col-xl-4 col-md-6 mx-auto" >
                  <div className="track-record-tabs  text-center">
                    <button
                      className={toggleState === 1 ? "trackbtn tabs active" : "trackbtn"}
                      onClick={() => { toggleTab(1),loadFileDownload() }}
                    >
                      Mainboard IPO
                    </button>
                    <button
                      className={toggleState === 2 ? "trackbtn tabs active" : "trackbtn"}
                      onClick={() => { toggleTab(2),loadFileDownload() }}
                    >
                      SME IPO
                    </button>

                  </div>

                </div>
              </div>
            </div>


          </section>



      }
      <section className="tracktabcontent filedownloadfaq" >
        <div className="container">
          <div className="row ">
            <div className="col-md-12">
              {
                toggleState == 1 ?
                  <div>
                    <h2 className="title text-center">Mainboard IPO</h2>
                    <div className="quicklinkswrap">

                    <p className="mainboard-txt">Click on the following links to download :</p>
                    <div className="listing">
                      {
                        mainboard.length > 0 ? (
                          <ul>
                            {mainboard.map((res, index) => {

                              return (
                                <li key={index} className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                  <div className="text">{res.title}</div>
                                  {res.track_file ? (
                                    <div
                                      className="cursor-pointer"
                                      onClick={() => {
                                        window.open(`https://cmsapi.choiceindia.com/assets/${res.track_file}`)
                                      }}
                                    >
                                      <img
                                        src={download}
                                        className={"img-fluid"}
                                        alt={"Loading"}
                                        width={""}


                                        height={""}
                                      />
                                      <span className="downloadtext">Download</span>
                                    </div>
                                  ) : (
                                    <div></div>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <div className="text-center">
                            <img
                              src={noDataimg}
                              className="img-fluid"
                              alt="No Data Found"
                              height={250}
                              width={250}
                            />
                          </div>
                        )
                      }
                    </div>
                    </div>
                  </div> :
                  toggleState == 2 ?
                  <div>
                  <h2 className="title text-center">SME IPO</h2>
                  <div className="quicklinkswrap">

                  <p className="mainboard-txt">Click on the following links to download :</p>
                  <div className="listing">
                    {
                      sme.length > 0 ? (
                        <ul>
                          {sme.map((res, index) => {

                            return (
                              <li key={index} className="border-bottom d-flex justify-content-between pb-3 pt-3">
                                <div className="text">{res.title}</div>
                                {res.track_file ? (
                                  <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                      window.open(`https://cmsapi.choiceindia.com/assets/${res.track_file}`)
                                    }}
                                  >
                                    <img
                                      src={download}
                                      className={"img-fluid"}
                                      alt={"Loading"}
                                      width={""}


                                      height={""}
                                    />
                                    <span className="downloadtext">Download</span>
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        <div className="text-center">
                          <img
                            src={noDataimg}
                            className="img-fluid"
                            alt="No Data Found"
                            height={250}
                            width={250}
                          />
                        </div>
                      )
                    }
                  </div>
                  </div>
                </div>  : ""}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default trackRecords;
