import "./research.scss"
import Banner from './Banner';
import LongTermResearch from './LongTermResearch';
import ShortTermResearch from './ShortTermResearch';
import OurPerformance from './OurPerformance';
import CollectionSlider from './CollectionSlider';
import Expert from './Expert';
import Performance from './Performance';


function Research() {



  return (
    <div>

        <Banner />
        <LongTermResearch />
        <ShortTermResearch />
        
        <CollectionSlider />
        <Expert />
        <OurPerformance />
        
        <Performance />
    
    </div>
  );
}

export default  Research;
