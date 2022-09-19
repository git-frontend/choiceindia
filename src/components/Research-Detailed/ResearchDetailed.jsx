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

  // console.log('www',window.location.href.search('ipo-nfo-analysis'));
  const [checkIPO, setCheckIPO] = useState('');
  /**report category id */
  const name = new URLSearchParams(search).get('id');
    // console.log('NNNNN',new URLSearchParams(search).get('id'));
  // let query = useQuery();

  // console.log('EEEEEEE',id);
  // console.log('WWWWWWW',catid);

  function getSingleResearchDetail(id){
    
    //console.log('SingleResearch',id);
    // console.log('III',checkIPO)
    ResearchService.getSingleResearchDetail(id,checkIPO).then(
      res => {
        if(res){
          if(res.response.data){
            setList(res.response.data);
          }
        }
        // setList(res.response.data);
        // console.log('Detail',res);
      }
    )
  }

  useEffect(() => {
    if(window.location.href.search('ipo-nfo-analysis') != -1){
      setCheckIPO('ipo');
    }else{
      setCheckIPO('fundamental');
    }
    // console.log('Called',checkIPO)
    if(id && checkIPO){
      getSingleResearchDetail(id? id: '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
    }
    
  },[checkIPO,id])

  useEffect(() => {

  },[])

  return (
    <div className="wrapper-rsrch">

        <Banner data={list}/>
        <TrendingReports data={catid? catid: 'fundamental'} />

    </div>
  );
}

export default  ResearchDetailed;
