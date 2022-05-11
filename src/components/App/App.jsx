
import React from "react";
import BannerApp from './BannerApp';
import AppBannerBottom from './AppBannerBottom';
import AppBenefits from './AppBenefits';
import "../../assets/css/app.scss";
import AppHeader from './AppHeader.jsx';

function App() {

  return (
    <div>
      <AppHeader />
      <BannerApp />
      <AppBannerBottom />
      <AppBenefits />
    </div>
  );
}

export default App;
