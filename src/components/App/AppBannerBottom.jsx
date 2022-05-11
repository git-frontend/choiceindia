import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import imageData from '../../Data/images';


function AppBannerBottom() {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(0);
  console.log("image", imageData)
  return (
    <div className='App-main'>
      
            <div className='app-banner-bottom'>
                <div className='container'>
                <Row className="app-trade-easy-div">
                    
                    

                    <Col className='col-md-4'>
                        <div className='content-list'>
                        <div className="content-list-itm"
                            
                            onClick={()=> setIsShown2(0)}
                        >
                            
                            <h4 className="single-ttl">Trading Simplified</h4>
                            <p className="para">
                              Smoothly grow your investment portfolio with mutual funds
                            </p>
                        </div>

                        <div className="content-list-itm"
                        onClick={() => setIsShown2(1)}
                        
                        >
                            
                            <h4 className="single-ttl">Trading Simplified</h4>
                            <p className="para">
                              Smoothly grow your investment portfolio with mutual funds
                            </p>
                        </div>

                        <div className="content-list-itm"
                        onClick={() => setIsShown2(2)}
                            >
                            <h4 className="single-ttl">Trading Simplified</h4>
                            <p className="para">
                              Smoothly grow your investment portfolio with mutual funds
                            </p>
                        </div>
                        </div>


                    </Col>
                    <Col className='col-md-8'>
                        
                            <div className="trade-easy-images-div">
                               <img src={imageData[isShown2].image}
                                
                                    className="single-trade-easy-images"></img> 
                            </div>
                    

                        
                    </Col>
             </Row>
                </div>
            </div>
             

  

    

      
    
    </div>
  );
}

export default AppBannerBottom;
