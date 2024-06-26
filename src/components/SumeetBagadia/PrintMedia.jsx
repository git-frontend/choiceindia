import "./sumeetbagadia.scss"
import Image2 from '../../assets/images/sumeet-bagadia/zee-business.webp';
import Image3 from '../../assets/images/sumeet-bagadia/cnbc-awaaz.webp';
import Image4 from '../../assets/images/sumeet-bagadia/et-now.webp';
import Image5 from '../../assets/images/sumeet-bagadia/cnbc-bazaar.webp';
import Image6 from '../../assets/images/sumeet-bagadia/bloomberg.webp';
import Image7 from '../../assets/images/sumeet-bagadia/the-economic-times.webp';
import Image8 from '../../assets/images/sumeet-bagadia/NDTV-profit.webp';
import Image9 from '../../assets/images/sumeet-bagadia/Afternoon-Despatch-courier.webp';
import Image10 from '../../assets/images/sumeet-bagadia/cnbc-18-tv.webp';
import Image101 from '../../assets/images/sumeet-bagadia/business-standard.webp';
import Image11 from '../../assets/images/sumeet-bagadia/navbharat-times.webp';
import Image12 from '../../assets/images/sumeet-bagadia/financial-chronicle.webp';
import LazyLoader from "../Common-features/LazyLoader";

function PrintMedia() {



  return (
    <div>

      <section className="print-media">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 pt6">
              <div className="bg-className-left">
                <h2 className="title-sm-new mb-4">Featured On Print And Electronic Media</h2>
                <p className="sml-para">
                  Mr Sumeet Bagadia has been giving his views on Equity, Currency and Commodity on prime business channels, leading print and wire business outlets for the past 10+ years.
                </p>

              </div>

            </div>
            <div className="col-md-7">
              <ul className="reset">
                <li>
                                  <LazyLoader src={Image2} alt={"Zee Business"} width={"162"} height={"57"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image3} alt={"CNBC Awaaz"} width={"73"} height={"77"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image4} alt={"ET Now"} width={"95"} height={"77"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image5} alt={"CNBC Bazaar"} width={"78"} height={"77"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image6} alt={"Bloomberg"} width={"162"} height={"35"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image7} alt={"The Economic Times"} width={"162"} height={"28"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image8} alt={"NDTV Profit"} width={"150"} height={"53"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image9} alt={"Afternoon Despatch & Courier"} width={"176"} height={"57"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image10} alt={"CNBC 18 TV"} width={"87"} height={"77"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image101} alt={"Business Standard"} width={"174"} height={"61"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image11} alt={"Navbharat Times"} width={"166"} height={"62"} className={"img-fluid"} />
                </li>
                <li>
                                  <LazyLoader src={Image12} alt={"Financial Chronicle"} width={"162"} height={"59"} className={"img-fluid"} />
                </li>


              </ul>
            </div>
          </div>
        </div>
      </section>


     

    </div>
  );
}

export default PrintMedia;
