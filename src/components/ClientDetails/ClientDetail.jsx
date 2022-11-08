
import React from "react";
import  ClientDetailMain from './ClientDetailMain';
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect } from "react";



function ClientDetail() {
  const [rendercount, setRenderCount] = useState(() => false);

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
    }
  }, [rendercount])


  return (
    <div>

      {
        
          <div className="code-conduct-parent investor-info-parent">
            <div className="mainwrapper">
              <ClientDetailMain />
            </div>
          </div>
      }

    </div>
  );
}

export default ClientDetail;
