// import "./opentradingaccountmarathi.scss";
// import DematAccountForm from '../Common-features/DematAccountForm';
import "../OpenDematAccount/DematPage"
import MarathiOpenFreeAccountBanner from "./MarathiOpenFreeAccountBanner";
import MarathiWhyOpenFreeDematAccount from "./MarathiWhyOpenFreeDematAccount";
import MarathiDematAccountOpeningProcess from "./MarathiDematAccountOpeningProcess";
import MarathiLowBrokerageDematAccount from "./MarathiLowBrokerageDematAccount";
import MarathiWhyChoice from "./MarathiWhyChoice";
import MarathiDematFaq from "./MarathiDematFaq";
function OpenTradingAccountMarathi() {
    return (
        <>
            {/* <p>Open Trading Account Marathi</p>
            <DematAccountForm></DematAccountForm> */}
            <MarathiOpenFreeAccountBanner />
            <MarathiWhyOpenFreeDematAccount />
            <MarathiWhyChoice />
            <MarathiLowBrokerageDematAccount />
            <MarathiDematAccountOpeningProcess />
            <MarathiDematFaq />
           

        </>
    );
}

export default OpenTradingAccountMarathi;