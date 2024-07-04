import "../FilesDownload/Filedownload.scss"
import OfferDocumentMenu from "./offerDocumentMenu";
import Template2 from '../Common-features/Template2';
import { useState, useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";


function offerDocument() {

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
  useEffect(()=>{
    setTimeout(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },600)
    })

  return (
  
    <div>
      {
        skeleton ? <Template2 /> :
          <div>
            
            {/* <div className="container">
            <div className="row">
						<div className="col-md-12">
              
            <h1 className='text-center mt-5 mb-5 title-first'>Offer Documents</h1>
                  <p className="text"> ( Choice Capital Advisors Pvt Ltd, a SEBI Registered Category 1 Merchant Banker with license number: INM000011872 is a wholly owned subsidiary of Choice International Limited. )</p>
                  
						</div>
					  </div>
            </div> */}
            <OfferDocumentMenu />
          
          </div>
         
      }
      
            
  

    </div>
  );
}

export default offerDocument;
