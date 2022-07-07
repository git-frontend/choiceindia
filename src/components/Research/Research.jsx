import "./research.scss"
import Banner from './Banner';
import LongTermResearch from './LongTermResearch';
import ShortTermResearch from './ShortTermResearch';
import OurPerformance from './OurPerformance';
import CollectionSlider from './CollectionSlider';
import Expert from './Expert';



function Research() {



  return (
    <div className="wrapper-rsrch">

        <Banner />
        <LongTermResearch />
        <ShortTermResearch />
        <CollectionSlider />
        <Expert />
        <OurPerformance />
    
    </div>
  );
}

export default  Research;
