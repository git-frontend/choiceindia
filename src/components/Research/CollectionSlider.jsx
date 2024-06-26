
import React,{useState} from "react";
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Researchimg from "../../Data/Research";
import { useEffect } from "react";

function CollectionSlider() {
    const [isShown3, setIsShown3] = useState(0);
    const [nav,setNav]=useState();
    const [nav1,setNav1]=useState();
    const [trigger, setTrigger] = useState(false);
    const [slider1,setslider1]=useState();
    const [slider2,setslider2]=useState();

    const settings1 = {
      infinite: true,
      speed: 1500,
      vertical: true,
      slidesToShow: 3,
      arrows:false,
      autoplay: true,
      dots: false,
      autoplaySpeed: 1500,
      slidesToScroll: 1,
      swipeToSlide: true,
     
    };


    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        autoplay: true,
        arrows:false,
        dots: false,
        fade:true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        swipeToSlide: true,
       
      };
      useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
         
          setNav(slider1)
          setNav1(slider2)
    
    
        }
    
      }, [trigger])


   
    return (
        <div>


            <section className="collectons">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className='sliderwrap'>
                                <div className="collection-slider">

                              <Slider {...settings1}
                              asNavFor={nav1}
                              ref={slider => setslider1(slider)}
                            >
                                {
                                    Researchimg?.map((response, index) => {

                                        let classNm = "slider-item " + ((index === isShown3) ? "active" : "")
                                        return(

                                            <div key={response.id} className={classNm} onChange={() => setIsShown3(response.id)} >
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
                                <a className="btn-bg btn-light" href="https://finx.choiceindia.com/baskets" target="_blank">Explore All</a>
                            </div>

                        </div>
                        <div className="col-xl-7 col-md-6">
                        <Slider {...settings}
                        asNavFor={nav}
                        ref={slider => setslider2(slider)}
                        >
                        {
                                    Researchimg?.map((response, index) => {
                                        return(
                            <div className="imgwrap" key={response.id}>
                                <img src={response.image} alt="Collection" className="img-fluid" width={"708"} height={"645"}></img>
                            </div>
                                        )
                                    }
                        
                        )
                                }
                
                            </Slider>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default CollectionSlider;
