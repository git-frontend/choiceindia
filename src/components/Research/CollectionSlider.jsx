
import React,{useState} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Research from "../../Data/Research";

function CollectionSlider() {
    const [isShown2, setIsShown2] = useState(0);
    const settings1 = {
        infinite: true,
        speed: 2500,
        vertical: true,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: false,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
            },
          },
        ],
      };
    return (
        <div>


            <section className="collectons">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className='sliderwrap'>
                                <div className="collection-slider">
                                <Slider {...settings1}
                                afterChange={(ev) => {
                                    setIsShown2(ev)
                                  }}
                                >
                                {
                                    Research.map((res,i)=>{

                                        let classNm = "slider-item " + ((i === isShown2) ? "active" : "")
                                        return(
                                            <div key={res.id} className={classNm} onChange={() => setIsShown2(i)}>
                                        <h3 className="headtext">{res.title}</h3>
                                        <p className="subtext">{res.description}</p>
                                    </div>

                                        )
                                    })
                                }
                                    {/**<div className="slider-item active">
                                        <h3 className="headtext">Collections</h3>
                                        <p className="subtext">Check out the most interesting and unique categories of Stock collections</p>
                                    </div>
                                    <div className="slider-item ">
                                        <h3 className="headtext">Baskets</h3>
                                        <p className="subtext">Curated stock Baskets from different categories to provide diversification benefits</p>
                                    </div>
                                    <div className="slider-item ">
                                        <h3 className="headtext">Our Top Picks</h3>
                                        <p className="subtext">Check out the most interesting and unique categories of Stock collections</p>
                            </div>*/}
                                </Slider>
                                </div>
                            </div>
                            <div className="mt-5">
                                <a className="btn-bg btn-light" href="https://jiffy.choiceindia.com/research-report/research/experts/EQ">Explore All</a>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="imgwrap">
                                <img src={Research[isShown2].image} alt="Collection" className="img-fluid" width={"708"} height={"645"}></img>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default CollectionSlider;
