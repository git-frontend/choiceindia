
import React from "react";
import "../../components/Brokerage-Calculator/brokerage-calculator.scss";
import "./margin-calculator.scss";
import Banner from "./Banner";

import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function MarginCalculator() {
  const location = useLocation();
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
  return (
    <div>
        <Banner />
        
    </div>
  );
}

export default MarginCalculator;
