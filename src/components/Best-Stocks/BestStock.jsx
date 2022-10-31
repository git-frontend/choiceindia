import React from "react";
import { useState } from "react";
import "./best-stock.scss";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import "../Remisier/Remisier.scss";
import BestStockcategory from './BestStockcategory';

import BestStockOpenDematAccount from './BestStockOpenDematAccount';
import BestStockreadMore from './BestStockreadMore';


import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";
function BestStock() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [skeleton, setSkeleton] = useState(() => true);
 
  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();
  
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])
  



  return (
    <div>
      {
        skeleton ? <Template5 /> :
          <div className="sub-broker-skeleton-parent">
            <BestStockcategory />
            <BestStockOpenDematAccount />
            <BestStockreadMore />
          </div>
      }
    </div>
  );
}

export default BestStock;