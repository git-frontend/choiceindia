import "../FilesDownload/Filedownload.scss";
import Template2 from '../Common-features/Template2';

import { useState, useEffect } from 'react';

import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";


function trackRecords() {
  const [toggleState, setToggleState] = useState(1);
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
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

  return (

    <div>
      {
        skeleton ? <Template2 /> :
          <section className="track-records-banner">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className='text-center mt-5 mb-5 title-first'>Track Record</h1>
                </div>
                <div className="d-flex align-items-center" >
                  <div className="track-record-tabs">
                    <button
                      className={toggleState === 1 ? "trackbtn tabs active" : "trackbtn"}
                      onClick={() => { toggleTab(1); }}
                    >
                      Mainboard IPO
                    </button>
                    <button
                      className={toggleState === 2 ? "trackbtn tabs active" : "trackbtn"}
                      onClick={() => { toggleTab(2)}}
                    >
                      SME IPO
                    </button>

                  </div>

                </div>
              </div>
            </div>


          </section>

      }




    </div>
  );
}

export default trackRecords;
