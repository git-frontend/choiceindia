import StckImage from '../assets/images/partner/partners-stock-banner.gif';
import MutualFundsImage from '../assets/images/partner/partners-mutual-funds-banner.gif';
import InsuranceImage from '../assets/images/partner/partners-insurance-banner.gif';
import LoansImage from '../assets/images/partner/partners-loans-banner.gif';
import ImageSub2 from '../assets/images/icons/stock-market-investing.svg';
import ImageSub3 from '../assets/images/icons/mutual-funds-investment.svg';
import ImageSub4 from '../assets/images/icons/insurance.svg';
import ImageSub5 from '../assets/images/icons/loan.svg';

const partnerBanner =[

    {
        "title":"Become a Stock Market Agent",
        "description":"Build a great portfolio for the clients through stock market investments.",
        "image":`${StckImage}`,
        "button":"Stocks",
        "icon":`${ImageSub2}`,
        "id":1

    },
    {
        "title":"Become a Mutual Fund Agent",
        "description":"Help people to achieve financial freedom by selling mutual funds through us.",
        "image":`${MutualFundsImage}`,
        "button":"Mutual Funds",
        "icon":`${ImageSub3}`,
        "id":2


    },

    {
        "title":"Become an Insurance Agent",
        "description":"Assist customers to buy the best insurance which suits all their needs.",
        "image":`${InsuranceImage}`,
        "button":"Insurance",
        "icon":`${ImageSub4}`,
        "id":3

    },


    {
        "title":"Become a Loan Agent",
        "description":"Disburse the loan of different companies at the lowest interest rate & earn a good commission.",
        "image":`${LoansImage}`,
        "button":"Loans",
        "icon":`${ImageSub5}`,
        "id":4

    },


];

export default partnerBanner;