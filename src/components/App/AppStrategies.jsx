import React from 'react';
import { useState } from 'react';
import imageData from '../../Data/Strategies';


function AppStrategies() {
//   const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(0);
  console.log("image", imageData)
  return (
    <div className='App-main'>
      
            <div className='app-strategies-bottom'>
                <div className='container'>
                  <div className='row'>
                      <div className='col-md-12'>
                      <div className="heading-sec">
                        <h2 className="title-secnd">App for Real-time Trading Strategies</h2>
                      </div>
                      </div>
                  </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-9'>
                        <div className="row app-trade-easy-div d-flex align-items-center">
                    
                    <div className='col-md-5'>
                            
                            <div className="trade-easy-images-div">
                               <img src={imageData[isShown2].image}
                                
                                    className="single-trade-easy-images"></img> 
                            </div>
                    
    
                        
                    </div>
    
                        <div className='col-md-7'>
                            <div className='content-list'>
                            <div className="content-list-itm list-itm-active"
                                
                                onClick={()=> setIsShown2(0)}
                            >
                                
                                <h4 className="single-ttl">C Quant</h4>
                                <p className="para">
                                Effective Positional Calls based on our Algorithm for better trade results
                                </p>
                            </div>
    
                            <div className="content-list-itm"
                            onClick={() => setIsShown2(1)}
                            
                            >
                                
                                <h4 className="single-ttl">Expert Recommendations</h4>
                                <p className="para">
                                Get accurate Research Calls by our team who have proven their worth over time
                                </p>
                            </div>
    
                            <div className="content-list-itm"
                            onClick={() => setIsShown2(2)}
                                >
                                <h4 className="single-ttl">Short Term &amp; Positional Calls</h4>
                                <p className="para">
                                Set and achieve your smaller target for a rapid succession in the long run
                                </p>
                            </div>
                            <div className="content-list-itm"
                            onClick={() => setIsShown2(3)}
                                >
                                <h4 className="single-ttl">Long Term Research Calls</h4>
                                <p className="para">
                                Bear the fruits of investment in long term with quality stocks recommendations
                                </p>
                            </div>
                            
                            </div>
    
                       </div>
                        
                 </div>
                        </div>
                    </div>
                </div>
            </div>
             

  

    

      
    
    </div>
  );
}

export default AppStrategies;
