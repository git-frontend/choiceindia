
import React,{useState} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Researchimg from "../../Data/Research";

function CollectionSlider() {
    const [isShown3, setIsShown3] = useState(0);
    const settings1 = {
      infinite: true,
      speed: 1000,
      vertical: true,
      focusOnSelect: true,
      touchMove: true,
      arrows: false,
      slidesToShow: 3,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1000,
      slidesToScroll: 1,
      swipeToSlide: true,
     
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
                                setIsShown3(ev)
                                
                                console.log("check id" ,ev);
                                // console.log("check id2" ,isShown2);
                              }}
        
                            >
                                {


                                    Researchimg?.map((response, index) => {

                                        let classNm = "slider-item " + ((index === isShown3) ? "active" : "")
                                        return(

                                            <div key={response.id} className={classNm} onChange={() => setIsShown3(index)} >
                                            <h3 className="headtext">{response.title}</h3>
                                            <p className="subtext">{response.description}</p>
                                            </div>

                                        )
                                    })
                                }
                                </Slider>


                                </div>
                            </div>

                            <div className="mt-5">
                                <a className="btn-bg btn-light" href="https://jiffy.choiceindia.com/baskets">Explore All</a>
                            </div>

                        </div>
                        <div className="col-xl-7 col-md-6">
                            <div className="imgwrap">
                                <img src={Researchimg[isShown3].image} alt="Collection" className="img-fluid" width={"708"} height={"645"}></img>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default CollectionSlider;
