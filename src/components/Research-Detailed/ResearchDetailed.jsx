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

  /**report category id */
  const name = new URLSearchParams(search).get('id');
    // console.log('NNNNN',new URLSearchParams(search).get('id'));
  // let query = useQuery();

  // console.log('EEEEEEE',id);
  // console.log('WWWWWWW',catid);

  function getSingleResearchDetail(id){
    
    console.log('SingleResearch',id);
    ResearchService.getSingleResearchDetail(id).then(
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
    getSingleResearchDetail(id? id: '41041eaf-c9f1-41b3-a2fc-b6c20d29c4ad');
  },[id])

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
