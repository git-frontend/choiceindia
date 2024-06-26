import "./research.scss"
import Banner from './Banner';
import LongTermResearch from './LongTermResearch';
import ShortTermResearch from './ShortTermResearch';
import OurPerformance from './OurPerformance';
import CollectionSlider from './CollectionSlider';
import Expert from './Expert';
import meta_tags from "../../Data/MetaTags";
import {useState, useEffect} from 'react';


function Research() {
  
  const [rendercount, setRenderCount] = useState(() => false);


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
    <div className="wrapper-rsrch">

        <Banner />
        <ShortTermResearch />
        <LongTermResearch />
        <CollectionSlider />
        <Expert />
        <OurPerformance />
    
    </div>
  );
}

export default  Research;
