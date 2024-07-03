
import img1 from "../../assets/images/upcoming-ipo/invest-img1.png";
import img2 from "../../assets/images/upcoming-ipo/invest-img2.png";
import img3 from "../../assets/images/upcoming-ipo/invest-img3.png";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function WhoCanInvest() {

  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };


  return (
    <>
        <section className='who-can-invest'>
            <div className='container'>
                  <div className='row justify-content-between'>
                      <div className="col-md-12">
                            <div className='head-ttl'>
                                <h2 className='title-secnd'>Who can Invest in IPOs?</h2>
                            </div>
                            <Slider {...settings} className="invest-slider"> 
                                <div className="invest-itm">
                                    <span className="img">
                                    <img src={img1} alt="" width={388} height={216} />
                                    </span> 
                                    <h3>Retail Individual Investors</h3>
                                    <p>Investors with net worth below ₹2 lakhs. Minimum 35% IPO shares reserved. One lot minimum or</p>
                                </div>
                                <div className="invest-itm">
                                    <span className="img">
                                    <img src={img2} alt="" width={388} height={216} />
                                    </span> 
                                    <h3>HNI & Non-Institutional  Investors</h3>
                                    <p>Individuals investing between ₹2-5 lakhs or non-SEBI institutions investing above ₹2 lakhs. 15%</p>
                                </div>
                                <div className="invest-itm">
                                    <span className="img">
                                        <img src={img3} alt="" width={388} height={216} />
                                    </span> 
                                    <h3>Qualified Institutional Buyers</h3>
                                    <p>Banks, mutual funds, pension funds, foreign investors, SEBI-registered entities. 90-day lock-in for</p>
                                </div>
                            </Slider>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default WhoCanInvest