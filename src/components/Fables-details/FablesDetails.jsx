import "./fabledetails.scss"
import React, { useEffect, useState, useRef } from "react";


import Fabdetailsbanner from './FabDetailsBanner.jsx';
import Recommendation from './Recommendation.jsx';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import homeServices from '../../Services/homeServices';
import Template1 from "../Common-features/Template1";

function Fablesdetails() {
  console.log('FablesDetails');
  const [single_detail, setSingle_Detail] = useState(() => null);
  const [allFabalData, setAllFabalData] = useState(() => { });
  const [htmlContent, sethtmlContent] = useState(() => '');
  const [IsDetail, setIsDetail] = useState(() => false);
  const [trigger, setTrigger] = useState();
  const { id } = useParams();
  // let data = [];
const [skeleton, setSkeleton] = useState(() => true);
const [showForm, setShowForm] = useState(false);
var formName = useRef('');

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

    /** to call single fabal detail */
    function getSingleFablesDetail() {
      homeServices.fablesBlog(id).then(
        res => {
          if (res.data.posts) {
            checkWhetherToShowForm(res.data.posts || {});
            setSingle_Detail( res.data.posts);
            setIsDetail( true);
            sethtmlContent(res.data.posts[0].html);
 document.title = res.data.posts[0].meta_title? res.data.posts[0].meta_title: '';
          document.getElementById('meta-tags').content = res.data.posts[0].meta_title? res.data.posts[0].meta_title : '' ;
          document.getElementById('canonical-link').href = res.data.posts[0].canonical_url ? res.data.posts[0].canonical_url : '';

          }
        }
      )
    }

  /** to call all fabal list */
  function loadFabalList() {
    homeServices.fabalStory().then(
      res => {
        console.log('res1',res)
        console.log('IDDD',single_detail);
        // setAllFabalData(res.data.posts);
        setAllFabalData(() => res.data.posts.filter((e) => {
          return e.slug !== id
        }))
        // console.log('SSS',single_detail)
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

  // useEffect(() => {
  //   data = allFabalData;
  // },[allFabalData])

  function checkWhetherToShowForm(details) {
    if (details[0].tags) {
      details[0].tags.forEach((item, i) => {
        if (item.slug === 'form-demat' || item.slug === 'form-equity-subbroker') {
          setShowForm(true);
          formName.current = item.slug;
        }
      })
    }
  }

  return (
    <div>

      {
        skeleton ? <Template1 /> :
          <div className="fables-details-parent">
            <Fabdetailsbanner single_data={single_detail} isdetail={IsDetail} html_content={htmlContent} showForm={showForm || false} formName={formName.current}/>
            <Recommendation name={allFabalData} Id={id} single_data={single_detail} />
          </div>
      }

     {/* {
        showOpenAccountPopup ? <OpenDemateAccountPopup hideComponent={hideOpenAccountAdPopup}></OpenDemateAccountPopup> : ''
      } */}
      {/* {
        fablesDetailTitleId ? '' : <OpenDemateAccountStickyFooter openDemateAccountPopup={showOpenAccountAdPopup}></OpenDemateAccountStickyFooter>
      } */}
    </div>
  );
}

export default Fablesdetails;
