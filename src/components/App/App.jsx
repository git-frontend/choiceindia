
import React from "react";
import BannerApp from './BannerApp';
import AppBannerBottom from './AppBannerBottom';
import AppStrategies from './AppStrategies';
import AppBenefits from './AppBenefits';
import AppTradeBenefits from './AppTradeBenefits';
import "./app.scss";
import Template3 from '../Common-features/Template3';
import { useState } from 'react';
// import AppHeader from './AppHeader.jsx';

function App() {

  const [skeleton, setSkeleton] = useState(true);

  setTimeout(myGreeting, 1000);

  
  function myGreeting() {
    setSkeleton(() => false);
  }
  
  return (
    <div>
      {
        skeleton ? <Template3 /> :
          <div>
            <BannerApp />
            <AppBannerBottom />
            <AppBenefits />
            <AppStrategies />
            <AppTradeBenefits />
          </div>
      }
    </div>
  );
}

export default App;
