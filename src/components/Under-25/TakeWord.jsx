import React from 'react'
import  Img1  from '../../assets/images/under-25/image-girl-1.webp';
import  Img2  from '../../assets/images/under-25/image-family.webp';
import  Img3  from '../../assets/images/under-25/image-men-1.webp';
import  Img4  from '../../assets/images/under-25/image-girl-2.webp';
function TakeWord() {
  return (
    <>
    <section className='take-word'>
        <div className='container'>
            <div className='take-word-sec'>
                <div className='images-sec'>
                    <div className='images-sec-1'>
                        <div className='blur-1'>
                            <img src={Img1} alt='Take Word' height={127} width={88} className="img-fluid"/>
                        </div>
                       <div className='blur-2'>
                            <img src={Img2} alt='Take Word' height={127} width={88} className="img-fluid"/>
                       </div>
                    </div>
                    <div className='images-sec-2'>
                        <div className='blur-1'>
                            <img src={Img3} alt='Take Word' height={127} width={88} className="img-fluid"/>
                        </div>
                        <div className='blur-2'>
                            <img src={Img4} alt='Take Word' height={127} width={88} className="img-fluid"/>
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