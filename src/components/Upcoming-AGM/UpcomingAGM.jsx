import React from "react";
import { useState } from "react";
import "../Best-Stocks/best-stock.scss"
import "../Share-Market-Holidays/share-marlet-holiday.scss";
import Template5 from '../Common-features/Template5';
import "../Remisier/Remisier.scss";
import Holidayscategory from "./Holidayscategory";
import { useEffect } from "react";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
function Sharemarketholidays(holiday) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  if(holiday.ischeck){
    // console.log(holiday,'prop')
  }else{
    // console.log('fsdprop')
  }

  const [skeleton, setSkeleton] = useState(() => true);
 
  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();

  useEffect(() => {
    // console.log('tttt');
    document.title =
      holiday && holiday.holiday && holiday.holiday.title
        ? holiday.holiday.title
        : meta_tags[location.pathname.replace('/', '')]
        ? meta_tags[location.pathname.replace('/', '')].title
        : '';
    document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', '')]
      ? meta_tags[location.pathname.replace('/', '')].content
      : '';
    document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', '')]
      ? meta_tags[location.pathname.replace('/', '')].link
      : '';
    document.getElementById('language').lang = meta_tags[location.pathname.replace('/', '')]
      ? meta_tags[location.pathname.replace('/', '')].lang
      : '';
    if (!(document.getElementById('link1') == null)) {
      document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
    }
  }, [holiday, location]);
  return (
    <div>
      {
        skeleton ? <Template5 /> :
        holiday.ischeck ? "":
          <div className="sub-broker-skeleton-parent">

            <Holidayscategory  />
           
          </div>
      }
    </div>
  );
}

export default Sharemarketholidays;