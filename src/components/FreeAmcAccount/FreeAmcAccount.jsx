// import "./opentradingaccount.scss";
// import DematAccountForm from '../Common-features/DematAccountForm';
import "../OpenDematAccount/DematPage"
import FreeAmcAccountBanner from "./FreeAmcAccountBanner";
import WhyOpenFreeAmcAccount from "./WhyOpenFreeAmcAccount";
import AmcAccountOpeningProcess from "./AmcAccountOpeningProcess";
import LowBrokerageAMCAccount from "./LowBrokerageAMCAccount";
import WhyChoiceamc from "./WhyChoiceamc";
import AmcFaq from "./AmcFaq";
function FreeAmcAccount() {
    return (
        <>
            {/* Open Trading Account
            <DematAccountForm></DematAccountForm> */}
            <FreeAmcAccountBanner />
            <WhyOpenFreeAmcAccount />
            <WhyChoiceamc />
            <LowBrokerageAMCAccount />
            <AmcAccountOpeningProcess />
            <AmcFaq />
          

        </>
    );
}

export default FreeAmcAccount;