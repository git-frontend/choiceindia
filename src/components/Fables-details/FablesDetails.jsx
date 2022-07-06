import "./fabledetails.scss"
import React, { useEffect, useState } from "react";


import Fabdetailsbanner from './FabDetailsBanner.jsx';
import Recommendation from './Recommendation.jsx';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import homeServices from '../../Services/homeServices';
function Fablesdetails() {


  const [single_detail, setSingle_Detail] = useState(() => null);
  const [allFabalData, setAllFabalData] = useState(() => {});
  const [htmlContent , sethtmlContent] = useState(() => '');
  const [IsDetail, setIsDetail] = useState(() => false);
  const [trigger, setTrigger] = useState();
  const { id } = useParams();
  let data = [];


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
        // console.log('res1',res)
        // setAllFabalData(res.data.posts);
        setAllFabalData(() => res.data.posts.filter((e) => {
          return e.id != id
        }))
        // console.log('SSS',allFabalData)
      }
    )
  }

  useEffect(() => {

    setTrigger(true)
		if (trigger === true) {
			getSingleFablesDetail();
      loadFabalList();
		}

    
  }, [id,trigger])

  // useEffect(() => {
  //   data = allFabalData;
  // },[allFabalData])


  return (
    <div>

      <Fabdetailsbanner single_data={single_detail} isdetail={IsDetail} html_content={htmlContent} />
      <Recommendation name={allFabalData} Id={id} />

    </div>
  );
}

export default Fablesdetails;
