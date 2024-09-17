
import icon1 from "../../assets/images/upcoming-ipo/calendar-tick.svg";
import icon2 from "../../assets/images/upcoming-ipo/liquidity.svg";
import icon3 from "../../assets/images/upcoming-ipo/status-up.svg";
import icon4 from "../../assets/images/upcoming-ipo/divercification.svg";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function IpoBenifits() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        },
      },
    ],
  };


  return (
    <>
        <section className='upc-ipo-benifits'>
            <div className='container'>
                  <div className='row justify-content-between'>
                      <div className="col-md-12">
                            <div className='head-ttl'>
                                <h2 className='title-secnd'>Benefits of Investing in IPOs</h2>
                            </div>
                            <Slider {...settings} className="upc-benifits-slider"> 
                                <div className="bnft-itm">
                                    <span className="img">
                                        <img src={icon1} alt="" width={31} height={32} />
                                    </span> 
                                    <h3>Early Entry</h3>
                                    <p>Upcoming IPOs offer investors an opportunity to invest in a company at the ground level, potentially benefiting from its future growth and success.</p>
                                </div>
                                <div className="bnft-itm">
                                    <span className="img">
                                        <img src={icon2} alt="" width={31} height={32} />
                                    </span> 
                                    <h3>Liquidity</h3>
                                    <p>Once listed, IPO shares become liquid, allowing investors to easily buy or sell them on the stock exchange.</p>
                                </div>
                                <div className="bnft-itm">
                                    <span className="img">
                                        <img src={icon3} alt="" width={31} height={32} />
                                    </span> 
                                    <h3>Earnings Opportunity</h3>
                                    <p>Well-performing IPOs can provide substantial returns if the company's stock price rises after listing.</p>
                                </div>
                                <div className="bnft-itm">
                                    <span className="img">
                                        <img src={icon4} alt="" width={31} height={32} />
                                    </span> 
                                    <h3>Diversification</h3>
                                    <p>IPOs allow investors to diversify their portfolios by investing in new companies and industries.</p>
                                </div>
                            </Slider>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default IpoBenifits