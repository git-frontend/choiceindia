import "./Filedownload.scss"
import FileDownloadBanner from "./BannerSection";
import FileDownloadFaq from "./FileDownloadFaq";
import Template2 from '../Common-features/Template2';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";


function FileDownload() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

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
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
    }
  }, [rendercount])

  return (
  
    <div>
      {
        skeleton ? <Template2 /> :
          <div>
            {/* <FileDownloadBanner /> */}
            
            <div className="container">
            <div className="row">
						<div className="col-md-12">
            <h1 className='text-center mt-5 mb-5 title-first'>Downloads</h1>
						</div>
					</div>
          </div>
            <FileDownloadFaq />
            <section className="advisors">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="title-secnd text-center">Attention Advisors</h2>
                  </div>
                  <div className="col-md-12">
                  <p className="subtext">KYC is one time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary. Choice Equity Broking Private Limited trade in OWN/PRO account as per SEBI/MRD/SE/CIR.- 42/2003 dated November 19, 2003 as mandated by the SEBI and on the Exchange( s). Existing customers can send their Grievances to : <b>ig@choiceindia.com</b></p>
                  </div>
                </div>
              </div>
            </section>
          </div>
      }

    </div>
  );
}

export default FileDownload;
