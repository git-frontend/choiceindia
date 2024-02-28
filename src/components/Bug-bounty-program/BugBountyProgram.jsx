import React, { useState, useEffect } from "react";
import './bug-bounty-program.scss';
import BugBountyBanner from "./BugBountyBanner";
import BugBountyFaqs from "./BugBountyFaqs";
import BugBountyRules from "./BugBountyRules";
function BugBountyProgram() {


    return (
        <>
           <BugBountyBanner/>
           <BugBountyFaqs/>
           <BugBountyRules/>
        </>
    );
}
export default BugBountyProgram;