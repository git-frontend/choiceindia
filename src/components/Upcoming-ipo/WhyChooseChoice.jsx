import { useState } from "react";
import img1 from "../../assets/images/upcoming-ipo/invest-img1.png";
import img2 from "../../assets/images/upcoming-ipo/invest-img2.png";

function WhyChooseChoice() {


    const [activeIndex, setActiveIndex] = useState(1);

    const handleMouseOver = (index) => {
        setActiveIndex(index);
      };
    
      const handleMouseOut = () => {
        setActiveIndex(0);
      };

  return (
    <>
        <section className='why-invt-choose'>
            <div className='container'>
                  <div className='row justify-content-between'>
                      <div className="col-md-12">
                            <div className='head-ttl'>
                                <h2 className='title-secnd'>Why Investors Choose Choice</h2>
                            </div>
                            <div className="resn-list">
                                <div className={`lst-itmnn ${activeIndex === 0 ? "active" : ""}`}
              onMouseOver={() => handleMouseOver(0)}
              onMouseLeave={handleMouseOut}>
                                    <h3>Zero</h3>
                                    <h4>Account <br/>Opening Fee</h4>
                                </div>
                                <div className={`lst-itmnn ${activeIndex === 1 ? "active" : ""}`}
              onMouseOver={() => handleMouseOver(1)}
              onMouseLeave={handleMouseOut}>
                                    <h3>Zero</h3>
                                    <h4>AMC for <br/> 1st Year</h4>
                                </div>
                                <div className={`lst-itmnn ${activeIndex === 2 ? "active" : ""}`}
              onMouseOver={() => handleMouseOver(2)}
              onMouseLeave={handleMouseOut}>
                                    <h3>Free</h3>
                                    <h4>Expert <br/>Research</h4>
                                </div>
                                <div className={`lst-itmnn ${activeIndex === 3 ? "active" : ""}`}
              onMouseOver={() => handleMouseOver(3)}
              onMouseLeave={handleMouseOut}>
                                    <h3>Low</h3>
                                    <h4>DP <br/> Charges</h4>
                                </div>
                                <div className={`lst-itmnn ${activeIndex === 4 ? "active" : ""}`}
              onMouseOver={() => handleMouseOver(4)}
              onMouseLeave={handleMouseOut}>
                                    <h3>Low</h3>
                                    <h4>Brokerage <br/>Charges</h4>
                                </div>
                                <div className={`lst-itmnn ${activeIndex === 5 ? "active" : ""}`}
              onMouseOver={() => handleMouseOver(5)}
              onMouseLeave={handleMouseOut}>
                                    <h3>Pre-Apply</h3>
                                    <h4>BSE SME/ <br/>Upcoming IPOs</h4>
                                </div>
                            </div>
                      </div>
                  </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseChoice