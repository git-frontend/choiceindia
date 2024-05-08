

import React,{useState} from "react";
import Finxtoolsimg from "../../Data/FinxTools";
import Slider from 'react-slick';
import { useEffect } from "react";
function FinxTools() {

    const [isShown3, setIsShown3] = useState(0);
    const [trigger, setTrigger] = useState(false);
   
    const settings11 = {
      infinite: true,
      speed:2000,
      vertical: true,
      slidesToShow: 5,
      arrows:false,
      autoplay: true,
      dots: false,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      swipeToSlide: true,
    };


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
                                      afterChange={(ev) => {
                                        setIsShown3(ev)
                                      }}
                                    >
                                    {
                                        Finxtoolsimg?.map((response, index) => {

                                            let classNm = "slider-item " + ((index === isShown3) ? "slider-item-active" : "")
                                            return(
                                               <div onMouseOver={()=>setIsShown3(index)} >
                                              <div key={response.id} className={classNm} >
                                               
                                               <img src={response.imageico} alt={response.alt} className="icon-img"></img>
                                               <h3 className={(index === isShown3) ? "subtext-active":"subtext"}>{response.title}</h3>
                                               </div>
                                               </div>
                                                

                                            )
                                        })
                                    }
                                    </Slider>
                                </div>
                                <div className="slider-cont-main">
                                      <img src={Finxtoolsimg[isShown3].image} width={708} height={645} alt={Finxtoolsimg[isShown3].alt} />
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