import "./sumeetbagadia.scss"
import Image2 from '../../assets/images/sumeet-bagadia/zee-business.webp';
import Image3 from '../../assets/images/sumeet-bagadia/CNBC_Awaaz_logo.webp';
import Image4 from '../../assets/images/sumeet-bagadia/ETNOW_Logo_2D_FINAL2.webp';
import Image5 from '../../assets/images/sumeet-bagadia/CNBC_Bajar.webp';
import Image6 from '../../assets/images/sumeet-bagadia/bloomberg.webp';
import Image7 from '../../assets/images/sumeet-bagadia/The_Economic_Times_logo.webp';
import Image8 from '../../assets/images/sumeet-bagadia/NDTV-profit.webp';
import Image9 from '../../assets/images/sumeet-bagadia/Afternoon-Despatch-courier.webp';
import Image10 from '../../assets/images/sumeet-bagadia/CNBC-TV-18.webp';
import Image101 from '../../assets/images/sumeet-bagadia/Business_Standard.webp';
import Image11 from '../../assets/images/sumeet-bagadia/Navbharat_Times.webp';
import Image12 from '../../assets/images/sumeet-bagadia/FC.webp';

function PrintMedia() {



  return (
    <div>

      <section className="print-media">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 pt6">
              <div className="bg-class-left">
                <h3 className="title-sm-new">Featured On Print And Electronic Media</h3>
                <p className="sml-para">
                  Mr Sumeet Bagadia has been giving his views on Equity, Currency and Commodity on prime business channels, leading print and wire business outlets for the past 10+ years.
                </p>

              </div>

            </div>
            <div className="col-md-7">
              <ul className="reset">
                <li>
                  <img src={Image2} alt="Become a Stock Market Agent" width="162" height="57" className="img-fluid" />
                </li>
                <li>
                  <img src={Image3} alt="Become a Stock Market Agent" width="73" height="77" className="img-fluid" />
                </li>
                <li>
                  <img src={Image4} alt="Become a Stock Market Agent" width="95" height="77" className="img-fluid" />
                </li>
                <li>
                  <img src={Image5} alt="Become a Stock Market Agent" width="78" height="77" className="img-fluid" />
                </li>
                <li>
                  <img src={Image6} alt="Become a Stock Market Agent" width="162" height="35" className="img-fluid" />
                </li>
                <li>
                  <img src={Image7} alt="Become a Stock Market Agent" width="162" height="28" className="img-fluid" />
                </li>
                <li>
                  <img src={Image8} alt="Become a Stock Market Agent" width="150" height="53" className="img-fluid" />
                </li>
                <li>
                  <img src={Image9} alt="Become a Stock Market Agent" width="176" height="57" className="img-fluid" />
                </li>
                <li>
                  <img src={Image10} alt="Become a Stock Market Agent" width="87" height="77" className="img-fluid" />
                </li>
                <li>
                  <img src={Image101} alt="Become a Stock Market Agent" width="174" height="61" className="img-fluid" />
                </li>
                <li>
                  <img src={Image11} alt="Become a Stock Market Agent" width="166" height="62" className="img-fluid" />
                </li>
                <li>
                  <img src={Image12} alt="Become a Stock Market Agent" width="162" height="59" className="img-fluid" />
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