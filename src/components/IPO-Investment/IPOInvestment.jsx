
import React,{useState,useEffect} from "react";
import Banner from './Banner';
import IPOStocks from './IPOStocks';
import IPOBenifits from './IPOBenifits';
import IPOProcess from './IPOProcess';
import WhyChoiceIPO from './WhyChoiceIPO';
import IPOFaq from './IPOFaq';
import meta_tags from "../../Data/MetaTags";

import "./ipo-Investment.scss";


function EquityBrokingMain() {
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
    }
  }, [rendercount])
  

  

  return (
    <div>
      
      <div className="mainwrapper brokerage-charges-temp">
         
         <Banner />
         <IPOStocks />
         <IPOBenifits />
         <IPOProcess />
         <WhyChoiceIPO />
         <IPOFaq />
        
         
       </div> 
      
    
    </div>
  );
}

export default EquityBrokingMain;
