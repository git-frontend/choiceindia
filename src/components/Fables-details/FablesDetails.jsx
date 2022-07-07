import "./fabledetails.scss"
import React, { useEffect, useState } from "react";


import Fabdetailsbanner from './FabDetailsBanner.jsx';
import Recommendation from './Recommendation.jsx';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import homeServices from '../../Services/homeServices';
import OpenDemateAccountPopup from '../Common-features/OpenDemateAccountPopup.jsx';
import OpenDemateAccountStickyFooter from '../Common-features/OpenDemateAccountStickyFooter.jsx';

function Fablesdetails() {

  const [showOpenAccountPopup, setShowOpenAccountPopup] = useState(false);
  const [single_detail, setSingle_Detail] = useState(() => null);
  const [allFabalData, setAllFabalData] = useState(() => {});
  const [htmlContent , sethtmlContent] = useState(() => '');
  const [IsDetail, setIsDetail] = useState(() => false);
  const { id } = useParams();
  let data = [];

  function showOpenAccountAdPopup() {
    setShowOpenAccountPopup(true);
  }

  function hideOpenAccountAdPopup() {
    setShowOpenAccountPopup(false);
  }

    /** to call single fabal detail */
    function getSingleFablesDetail() {
      homeServices.fablesBlog(id).then(
        res => {
          if (res.data.posts) {
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
        console.log('res1',res)
        // setAllFabalData(res.data.posts);
        setAllFabalData(() => res.data.posts.filter((e) => {
          return e.id != id
        }))
        console.log('SSS',allFabalData)
      }
    )
  }

  useEffect(() => {
    getSingleFablesDetail();
    loadFabalList();
  }, [id])

  useEffect(() => {
    setTimeout(() => {
      showOpenAccountAdPopup();
    }, 60000);
  }, [])

  // useEffect(() => {
  //   data = allFabalData;
  // },[allFabalData])


  return (
    <div>

      <Fabdetailsbanner single_data={single_detail} isdetail={IsDetail} html_content={htmlContent} />
      <Recommendation name={allFabalData} Id={id} />
      {
        showOpenAccountPopup ? <OpenDemateAccountPopup hideComponent={hideOpenAccountAdPopup}></OpenDemateAccountPopup> : ''
      }
      <OpenDemateAccountStickyFooter></OpenDemateAccountStickyFooter>
    </div>
  );
}

export default Fablesdetails;
