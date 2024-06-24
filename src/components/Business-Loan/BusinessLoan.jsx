
import React from "react";
import Banner from './Banner.jsx'
import LoansFinance from './LoansFinance.jsx'
import TypesOfCommercial from './TypesOfCommercial.jsx'
import TypeSolarFinance from './TypeSolarFinance.jsx'
import "../Invoice-Financing/nbfc-common.scss";
import "./business-loan.scss";
import { useState,useEffect,useRef} from "react";
import meta_tags from "../../Data/MetaTags";
import { useSearchParams } from "react-router-dom";
import SolarFinanceSub from "../Solar-Finance-Sub/SolarFinanceSub.jsx";
import SupplyChainFin from "../Supply-Chain-Finance/SupplyChainFin.jsx";

function BusinessLoan() {
  
  const [rendercount, setRenderCount] = useState(() => false);
  var active = useRef('');
  const [searchParams, setSearchParams] = useSearchParams();
  active.current = searchParams.get('active') || '';
  // console.log(active.current)
 
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
        
        active.current === 'Supply-Chain-Finance'?
        
        <SupplyChainFin></SupplyChainFin>:
        active.current === 'SolarFinance'?
        <SolarFinanceSub></SolarFinanceSub>:
        <div>
        <Banner/>
          <LoansFinance/>
          <TypesOfCommercial/>
          <TypeSolarFinance/>
  
        </div>
      }  
    </div>
  );
}

export default BusinessLoan;
