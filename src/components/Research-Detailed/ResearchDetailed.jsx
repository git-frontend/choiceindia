import "./research-detailed.scss"
import Banner from './Banner';
import TrendingReports from './TrendingReports';
import {
  BrowserRouter as Router,
  Link,
  useParams,
  useLocation
} from "react-router-dom";
import ResearchService from "../../Services/ResearchService";
import { useState, useEffect } from "react";


function ResearchDetailed() {

  const [list, setList] = useState(null);

  /**report id */
  const { id } = useParams();

  /**report category name */
  const { catid } = useParams();
  const search = useLocation().search;

  const [checkIPO, setCheckIPO] = useState('');
  /**report category id */
  // const name = new  (search).get('id');

  function getSingleResearchDetail(id) {
    const hasSharePriceTarget = window.location.pathname.includes('-share-price-target');
    const hasIPOReview = window.location.pathname.includes('-ipo-review');
    const hasINdReview = window.location.pathname.includes('-industry-analysis');
    console.log("c",hasINdReview)
    
    let id2;

    // let id2 = id.split('-share-price-target')[0]
    // console.log(id2,"iddddddddddddddddd");

    
    if (hasSharePriceTarget) {
      id2 = id.split('-share-price-target')[0];
    } else if (hasIPOReview) {
      id2 = id.split('-ipo-review')[0];
    }
    else if (hasINdReview) {
      id2 = id.split('-industry-analysis')[0];
    }
    else {
      return; 
    }
    console.log("id",id2)

    ResearchService.getSingleResearchDetail(id2, checkIPO).then(
      res => {
        console.log("checkIPO",checkIPO)
        if (res) {
          if (res.response.data) {
            setList(res.response.data);
          }
        }
        // setList(res.response.data);
        // console.log('Detail',res);
      }
    )
  }

  useEffect(() => {
    if (window.location.href.search('-ipo-review') != -1) {
      setCheckIPO('ipo');
    } else {
      setCheckIPO('fundamental');
    }
    // console.log('Called',checkIPO)
    if (id && checkIPO) {
      getSingleResearchDetail(id ? id : '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
    }

  }, [checkIPO, id])

  useEffect(() => {

  }, [])

  return (
    <div className="wrapper-rsrch">

      <Banner data={list} />
      <TrendingReports data={catid ? catid : 'fundamental' } data1={list}/>

    </div>
  );
}

export default ResearchDetailed;
