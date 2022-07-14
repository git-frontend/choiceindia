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
  console.log('EEEEEEE',id);


  function loadResearch(id) {
    ResearchService.researchcategory(id).then(
      res => {
        setList(res.response.data);
        console.log('Detailed',res.response.data)
      }
    )
  };

  useEffect(() => {
    loadResearch(id);
  },[])

  return (
    <div className="wrapper-rsrch">

        <Banner />
        <TrendingReports />

    </div>
  );
}

export default  ResearchDetailed;
