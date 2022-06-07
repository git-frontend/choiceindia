
import React from "react";
import BannerApp from './BannerApp';
import AppBannerBottom from './AppBannerBottom';
import AppStrategies from './AppStrategies';
import AppBenefits from './AppBenefits';
import AppTradeBenefits from './AppTradeBenefits';
import "./app.scss";
// import AppHeader from './AppHeader.jsx';

function App() {

  return (
    <div>
      <BannerApp />
      <AppBannerBottom />
      <AppBenefits />
      <AppStrategies />
      <AppTradeBenefits />
    </div>
  );
}

export default App;
