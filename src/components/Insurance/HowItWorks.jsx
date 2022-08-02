
import React from "react";
import FirstStep from '../../assets/images/insurance/all-online.svg';
import SecndStep from '../../assets/images/insurance/smart-compare.svg';
import ThirdStep from '../../assets/images/insurance/all-done.svg';
import LazyLoader from '../Common-features/LazyLoader';
import { useRef, useState, useEffect } from 'react';

function HowItWorks() {

    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);

    const [name, setName ] = useState('');
    const [name2, setName2 ] = useState('');
    const [name3, setName3 ] = useState('');
  

    const getPosition = () => {



        const element = document.getElementById("how1");
        const element2 = document.getElementById("how2");
        const element3 = document.getElementById("how3");
        
        if(element && element2 && element3){
            const rect = element.getBoundingClientRect();
            const rect2 = element.getBoundingClientRect();
            const rect3 = element.getBoundingClientRect();

            if(rect.top.toFixed() > 140 && rect.top.toFixed() <350){
                setName('steps-itm-active');
                // console.log('inside name', name);
            }else{
                setName('');
            }
            if(rect2.top.toFixed() < 150 && rect2.top.toFixed() > -200 ){
                setName2('steps-itm-active');
            }else{
                setName2('');
            }
            if(rect3.top.toFixed() < -200 && rect3.top.toFixed() > -600 ){
                setName3('steps-itm-active');
            }else{
                setName3('');
            }
        }
        
        // setState( rect.top.toFixed());

        // console.log('top',rect2.top.toFixed());

        // console.log('RRR',myRef1.current?.offsetLeft,'RRR2',myRef1.current?.offsetTop);
        // const x = myRef1.current?.offsetLeft;
        // setX(x);

        // const y = myRef1.current?.offsetTop;
        // setY(y);

    };

    // Get the position of the red box in the beginning
    // useEffect(() => {
    //     getPosition();
    // }, []);

    // Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);

    return (
        <div id='how-it-works'>


            <section className="ins-how-works" onScroll={getPosition}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-sec text-center">
                                <h2 className="title-first">How it Works ?</h2>
                                <p>3 Easy steps to accurate need - based insurance cover</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" onScroll={getPosition}>
                        <div className="col-md-9">
                            <div className="how-works-steps">
                                <div ref={myRef1} className={"works-steps-itm " + name} id="how1">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={FirstStep} alt={"Banner Images"} className={"img-fluid"} width={"154"} height={"198"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>01</h2>
                                        <h3>All Online</h3>
                                        <p>Use “ Get Quote “ to tell us what you’re looking for</p>
                                    </div>
                                </div>
                                <div ref={myRef2} className={"works-steps-itm steps-itm-reverse " + name2} id="how2">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={SecndStep} alt={"Banner Images"} className={"img-fluid"} width={"154"} height={"229"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>02</h2>
                                        <h3>Smart Compare</h3>
                                        <p>Requirements matched against hundreds of suitable schemes</p>
                                    </div>
                                </div>
                                <div ref={myRef3} className={"works-steps-itm " + name3} id="how3">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={ThirdStep} alt={"Banner Images"} className={"img-fluid"} width={"154"} height={"185"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>03</h2>
                                        <h3>And Done</h3>
                                        <p>Best suited option is selected for you</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default HowItWorks;
