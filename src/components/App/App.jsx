
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
  const myTimeout = setTimeout(myGreeting, 2000);
  function myGreeting() {
    setSkeleton(() => false);
  }


  return (
    <div>
    {
      skeleton? <Template3></Template3>:
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
