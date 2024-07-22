
import React from "react";
import  CEBPLPoliciesMain from './CEBPLPoliciesMain';
import { useState, useEffect } from 'react';
import{ useLocation
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import CommonCMS from '../Common-CMS/CommonCMS';
import CMSData from "../Common-CMS/CMSData";

function CEBPLPolicies() {

  
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

 

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
      <CommonCMS data={CMSData.CEBPLData} methodName="CebplPolicy"/>
{/* 
          <div className="code-conduct-parent investor-info-parent">
            <div className="mainwrapper">
              <CEBPLPoliciesMain />
            </div>
          </div>
  */}
    </div>
  );
}

export default CEBPLPolicies;
