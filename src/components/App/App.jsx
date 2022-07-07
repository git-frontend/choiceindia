
import React,{useState} from "react";
import BannerApp from './BannerApp';
import AppBannerBottom from './AppBannerBottom';
import AppStrategies from './AppStrategies';
import AppBenefits from './AppBenefits';
import AppTradeBenefits from './AppTradeBenefits';
import "./app.scss";
import Template3  from '../Common-features/Template3';
// import AppHeader from './AppHeader.jsx';

function App() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)


  return (
    <div>
    {
      skeleton? <Template3></Template3>:
      <div className="app-skeleton-parent">
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
