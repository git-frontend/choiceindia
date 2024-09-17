
import img1 from "../../assets/images/upcoming-ipo/blog1.png";
import img2 from "../../assets/images/upcoming-ipo/blog2.png";
import img3 from "../../assets/images/upcoming-ipo/blog3.png";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function IpoBlog() {

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
        <section className='ipo-blog-sec'>
            <div className='container'>
                  <div className='row justify-content-between'>
                      <div className="col-md-12">
                            <div className='head-ttl'>
                                <h2 className='title-secnd'>IPO Blogs</h2>
                                <p>Stay ahead with the latest information on upcoming IPOs.</p>
                            </div>
                            <div className="ipo-blog-list"> 
                                <div className="blog-itm">
                                    <span className="img">
                                      <img src={img1} alt="" width={388} height={280} />
                                    </span> 
                                    <h4 className="date-blog">03/06/2023</h4>
                                    <div className="des">
                                      <h3>Reverse IPO, have you missed this opportunity?</h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore et dolore</p>
                                    </div>
                                </div>
                                <div className="blog-itm">
                                    <span className="img">
                                      <img src={img2} alt="" width={388} height={280} />
                                    </span> 
                                    <h4 className="date-blog">03/06/2023</h4>
                                    <div className="des">
                                      <h3>Reverse IPO, have you missed this opportunity?</h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore et dolore</p>
                                    </div>
                                </div>
                                <div className="blog-itm">
                                    <span className="img">
                                        <img src={img3} alt="" width={388} height={280} />
                                    </span> 
                                    <h4 className="date-blog">03/06/2023</h4>
                                    <div className="des">
                                      <h3>Reverse IPO, have you missed this opportunity?</h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. tempor incididunt ut labore et dolore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flx-btn">
                                <a href="#" className="btn-bg">Read More</a>
                            </div>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default IpoBlog