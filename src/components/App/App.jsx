
import React from "react";
import BannerApp from './BannerApp';
import AppBannerBottom from './AppBannerBottom';
import AppStrategies from './AppStrategies';
import AppBenefits from './AppBenefits';
import AppTradeBenefits from './AppTradeBenefits';
import "../../assets/css/app.scss";
import AppHeader from './AppHeader.jsx';

function App() {

  return (
    <div>
      <AppHeader />
      <BannerApp />
      <AppBannerBottom />
      <AppBenefits />
      <AppStrategies />
      <AppTradeBenefits />
    </div>
  );
}

export default App;
