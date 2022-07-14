import "./research.scss"
import Banner from './Banner';
import LongTermResearch from './LongTermResearch';
import ShortTermResearch from './ShortTermResearch';
import OurPerformance from './OurPerformance';
import CollectionSlider from './CollectionSlider';
import Expert from './Expert';
// import meta_tags from "../../Data/MetaTags";
// import {useState, useEffect} from 'react';


function Research() {
  
  // const [rendercount, setRenderCount] = useState(() => false);

  // const location = useLocation();

  // useEffect(() => {
  //   setRenderCount(true)
  //   if (rendercount === true) {
  //     // let parser = new DOMParser();
  //     // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  //     // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
  //     document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
  //     // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  //     document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
  //     document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
  //   }
  // }, [rendercount])

  return (
    <div className="wrapper-rsrch">

        <Banner />
        <LongTermResearch />
        <ShortTermResearch />
        <CollectionSlider />
        <Expert />
        <OurPerformance />
    
    </div>
  );
}

export default  Research;
