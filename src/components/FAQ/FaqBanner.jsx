import React from "react";
import { Button, Form } from "react-bootstrap";
import image1 from "../../assets/images/Faq/faq-banner.webp";


function FaqBanner() {

    return(

        <>

        <div className="faq-main">

        <section className="banner-app">
                    <img src={image1} className="ban-img" alt='Loading' width={"1519"} height={"669"}/>
         <div className='app-banner-caption'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='caption-cont'>
                            <h1 className='big-ttl faq-title'>How can I help you ?</h1>
                            <div className="faq-search">
                            <Form.Control type="text" placeholder="Search for your issue" />
                            <Button variant="warning">Search</Button>
                            </div>
                            <div>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
         </div>
    </section>
        
        </div>
        
        
        </>
    )

}
export default FaqBanner

