import "./research-detailed.scss"
import Banner from './Banner';
import TrendingReports from './TrendingReports';
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import ResearchService from "../../Services/ResearchService";
import { useState } from "react";
import { useEffect } from "react";

function ResearchDetailed() {

  const [list, setList] = useState(null);
  const { id } = useParams();
  const { catid } = useParams();
  console.log('EEEEEEE',id);
  console.log('WWWWWWW',catid);

  function getSingleResearchDetail(id){

    ResearchService.getSingleResearchDetail(id).then(
      res => {
        if(res){
          if(res.response.data){
            setList(res.response.data);
          }
        }
        // setList(res.response.data);
        console.log('Detail',res);
      }
    )
  }

  useEffect(() => {
    getSingleResearchDetail(id);
  },[])

  return (
    <div className="wrapper-rsrch">

        <Banner data={list}/>
        <TrendingReports data={catid} />

    </div>
  );
}

export default  ResearchDetailed;
