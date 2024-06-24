

import React,{useState} from "react";
import Finxtoolsimg from "../../Data/FinxTools";
import Slider from 'react-slick';
import { useEffect } from "react";
function FinxTools() {

    const [isShown3, setIsShown3] = useState(0);
    const [nav,setNav]=useState();
    const [nav1,setNav1]=useState();
    const [trigger, setTrigger] = useState(false);
    const [slider1,setslider1]=useState();
    const [slider2,setslider2]=useState();

    const settings11 = {
      infinite: true,
      speed: 1000,
      vertical: true,
      slidesToShow: 5,
      arrows:false,
      autoplay: true,
      dots: false,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      swipeToSlide: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      draggable:false,
      responsive: [
        {
          breakpoint:767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false,
            autoplaySpeed: 3000,
            adaptiveHeight: false,
            dots: true,
          }
        }
        
      ]
    };


    const settings12 = {
        arrows:false
      };
      
      useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
         
          setNav(slider1)
          setNav1(slider2)
    
    
        }
    
      }, [trigger])


    return (
        <>
            <section className="finx-tools">
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 col-md-10'>
                            <div className="heading-sec text-center">
                                <h2 className="title-secnd">Choice FinX Your Ultimate Tool</h2>
                                <p>A super app to empower your trading journey, on the go.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-12">
                            <div className="finx-tools-data">
                                <div className="collection-slider">
                                    <Slider {...settings11}
                                    focusOnSelect={true}
                                    asNavFor={nav1}
                                    ref={slider => setslider1(slider)}
                                    
                                    >
                                    {
                                        Finxtoolsimg?.map((response, index) => {

                                            let classNm = "slider-item " + ((index === isShown3) ? "active" : "")
                                            return(

                                                <div key={response.id} className={classNm} >
                                               
                                                <img src={response.imageico} alt={response.alt} className="icon-img"></img>
                                                <h3 className="subtext">{response.title}</h3>
                                                </div>

                                            )
                                        })
                                    }
                                    </Slider>
                                </div>
                                <div className="slider-cont-main">
                                    <Slider {...settings12}
                                        asNavFor={nav}
                                        ref={slider => setslider2(slider)}
                                        >
                                        {
                                            Finxtoolsimg?.map((response, index) => {
                                                        return(
                                            <div className="imgwrap" key={response.id}>
                                                <img src={response.image} alt={response.alt} className="img-fluid" width={"708"} height={"645"}></img>
                                            </div>
                                                        )
                                                    }
                                        
                                        )
                                                }
                                
                                        </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default FinxTools;
