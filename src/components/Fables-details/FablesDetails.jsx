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
import OpenDemateAccountPopup from '../Common-features/OpenDemateAccountPopup.jsx';
import OpenDemateAccountStickyFooter from '../Common-features/OpenDemateAccountStickyFooter.jsx';

function Fablesdetails() {

  const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
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
 function showOpenAccountAdPopup() {
    setShowOpenAccountPopup(true);
  }

  function hideOpenAccountAdPopup() {
    setShowOpenAccountPopup(false);
    callOpenAccountAdPopupAgain();
  }

  function callOpenAccountAdPopupAgain() {
    //after 15min
    setTimeout(()=>{
      showOpenAccountAdPopup();
    },900000)
  }

    /** to call single fabal detail */
    function getSingleFablesDetail() {
      homeServices.fablesBlog(id).then(
        res => {
          if (res.data.posts) {
            checkWhetherToShowForm(res.data.posts || {});
            setSingle_Detail( res.data.posts);
            setIsDetail( true);
            sethtmlContent(res.data.posts[0].html);
          }
        }
      )
    }

  /** to call all fabal list */
  function loadFabalList() {
    homeServices.fabalStory().then(
      res => {
        // console.log('res1',res)
        // setAllFabalData(res.data.posts);
        setAllFabalData(() => res.data.posts.filter((e) => {
          return e.id !== id
        }))
        // console.log('SSS',allFabalData)
      }
    )
  }

 useEffect(() => {

     setTimeout(() => {
      showOpenAccountAdPopup();
    }, 60000);
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
            <Recommendation name={allFabalData} Id={id} />
          </div>
      }

     {
        showOpenAccountPopup ? <OpenDemateAccountPopup hideComponent={hideOpenAccountAdPopup}></OpenDemateAccountPopup> : ''
      }
      <OpenDemateAccountStickyFooter openDemateAccountPopup={showOpenAccountAdPopup}></OpenDemateAccountStickyFooter>
    </div>
  );
}

export default Fablesdetails;
