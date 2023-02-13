
import React from 'react';
import './CFPLImpact.scss';
import BannerCFPL from './BannerCFPL';
import CFPLDetails from './CFPLDetails';
import OurValueProposition from './OurValueProposition';
import LandingPartners from "./LandingPartners";
import MilestonesJourney from './MilestonesJourney';

function CFPLImpact(){
    return (
        <div className="">
           <BannerCFPL/>
           <CFPLDetails/>
           <OurValueProposition/>
           <LandingPartners/>
           <MilestonesJourney/>
        </div>
    );
};
export default CFPLImpact;