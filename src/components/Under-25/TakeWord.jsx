import React from 'react'
import  Img1  from '../../assets/images/under-25/image-girl-1.png';
import  Img2  from '../../assets/images/under-25/image-family.png';
import  Img3  from '../../assets/images/under-25/image-men-1.png';
import  Img4  from '../../assets/images/under-25/image-girl-2.png';
function TakeWord() {
  return (
    <>
    <section className='take-word'>
        <div className='container'>
            <div className='take-word-sec'>
                <div className='images-sec'>
                    <div className='images-sec-1'>
                        <div className='blur-1'>
                            <img alt='' src={Img1} className="img-fluid"/>
                        </div>
                       <div className='blur-2'>
                            <img alt='' src={Img2} className="img-fluid"/>
                       </div>
                    </div>
                    <div className='images-sec-2'>
                        <div className='blur-1'>
                            <img alt='' src={Img3} className="img-fluid"/>
                        </div>
                        <div className='blur-2'>
                            <img alt='' src={Img4} className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className='content-sec'>
                    <div className='caption'>
                        <h3>Don’t just take <br />our word for it</h3>
                        <p>Unlock limitless possibilities in just a few minutes, crafted specifically for you.</p>
                        <button type="submit" className="btn-bg btn btn-primary btn-get">Get FinX now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TakeWord