import React from 'react';
import { useRef } from 'react';
import { useState,useEffect } from 'react';

function MilestonesJourney() {
    const [detect ,setdetect] =useState(false)	
    const [trigger ,setTrigger]=useState(false)	
    const myRef1 = useRef(null);	
    function isInViewport() {	
        const element = document.getElementById("startcount");	
        const rect = element.getBoundingClientRect();	
        const check = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)	
        if (check && !detect) {	
            setdetect(true);	
        }	
    }	
    useEffect(() => {	
        window.addEventListener('scroll', isInViewport);	
    }, []);	
    useEffect(() => {	
        if (detect) {	
            digitalCounting();	
        }	
    }, [detect]);	
    function digitalCounting() {	
        let valueShow = document.querySelectorAll(".counterValue");	
        let interval = 5000;	
        valueShow.forEach((value) => {	
            let startValue = 0;	
            let endValue = parseInt(value.getAttribute("data-val"));	
            let duration = Math.floor(interval / endValue);	
            let counter = setInterval(() => {	
                startValue += 1;	
                value.textContent = startValue;	
                if (startValue == endValue) {	
                    clearInterval(counter);	
                }	
            }, duration);	
        });	
    }

  return (
    <div>
        <section className='milestones-journey'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12' >
                        <h2 className="title-secnd">Milestones in Our <br /> Journey</h2>
                    </div>
                </div>
                <div className="row justify-content-center" ref={myRef1} >
                <div className="col-xl-12">
                    <div className="counter-section">
                        <div className="carditem-count">
                            <h3 className="card-ttl counterValue"  data-val="25">00</h3>
                            <p className="subtext" id='startcount'>Branches</p>
                        </div>
                        <div className="carditem-count">
                            <h3 className="card-ttl counterValue"  data-val="100">000</h3>
                            <p className="subtext">Cities & Towns</p>
                        </div>
                        <div className="carditem-count">
                            <h3 className="card-ttl counterValue"  data-val="300">000 Cr</h3>
                            <p className="subtext">Loan book value</p>
                        </div>
                        <div className="carditem-count">
                            <h3 className="card-ttl counterValue"  data-val="400">000</h3>
                            <p className="subtext">Employees</p>
                        </div>
                    </div>
                </div>
          </div>
            </div>
        </section>
    </div>
  )
}

export default MilestonesJourney