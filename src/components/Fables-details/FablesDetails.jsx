import "./fabledetails.scss"
import React, { useEffect, useState, useRef } from "react";

import meta_tags from "../../Data/MetaTags";
import Fabdetailsbanner from './FabDetailsBanner.jsx';
import Recommendation from './Recommendation.jsx';
import SubbrokerStickyFooter from '../Common-features/SubbrokerStickyFooter.jsx';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import homeServices from '../../Services/homeServices';
import Template1 from "../Common-features/Template1";
import { Link, useNavigate } from "react-router-dom";
function Fablesdetails() {
 let navigate = useNavigate();
  const [single_detail, setSingle_Detail] = useState(() => null);
  const [allFabalData, setAllFabalData] = useState(() => { });
  const [htmlContent, sethtmlContent] = useState(() => '');
  const [IsDetail, setIsDetail] = useState(() => false);
  const [trigger, setTrigger] = useState();
  const { id } = useParams();
const [showForm, setShowForm] = useState(false);
var formName = useRef('');


    /** to call single fabal detail */
    function getSingleFablesDetail() {
      homeServices.fablesBlog(id).then(
        res => {
          if (res.data.posts) {
            checkWhetherToShowForm(res.data.posts || {});
            setSingle_Detail( res.data.posts);
            setIsDetail( true);
            sethtmlContent(res.data.posts[0].html.replaceAll("/fables","/blog").replaceAll("/blog/content/images/","/fables/content/images/"));
          document.title = res.data.posts[0].meta_title? res.data.posts[0].meta_title: '';
          document.getElementById('meta-tags').content = res.data.posts[0].meta_description? res.data.posts[0].meta_description : '' ;
          document.getElementById('canonical-link').href = res.data.posts[0].canonical_url ? res.data.posts[0].canonical_url.replaceAll('/fables','/blog') : '';
          document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
          }else{
          
          }
        },err=>{
          if(err&&err.message&&(err.message.indexOf('404')>-1)){
            navigate(`/404`, { replace: true });
          }
        }
      )
    }

  /** to call all fabal list */
  function loadFabalList() {
    homeServices.fabalStory().then(
      res => {
        setAllFabalData(() => res.data.posts.filter((e) => {
          return e.slug !== id
        }))
      }
    )
  }

 useEffect(() => {
setTrigger(true)
    if (trigger === true) {
      getSingleFablesDetail();
      loadFabalList();
    }


  }, [id, trigger])


  function checkWhetherToShowForm(details) {
    setShowForm(false);
    if (details[0].tags) {
      details[0].tags.forEach((item, i) => {
        if (item.slug === 'form-demat' || item.slug === 'form-equity-subbroker' || item.slug === 'form-mutual-fund-distributor' || item.slug==='mf-form') {
          setShowForm(true);
          formName.current = item.slug;
        }

      })
    }
  }

  return (
    <div>
          <div className="fables-details-parent">
            <Fabdetailsbanner single_data={single_detail} isdetail={IsDetail} html_content={htmlContent} showForm={showForm || false} formName={formName.current}/>
            <Recommendation name={allFabalData} Id={id} single_data={single_detail} />
          </div>


    </div>
  );
}

export default Fablesdetails;
