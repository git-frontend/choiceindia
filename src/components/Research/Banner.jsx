
import React from "react";
import  ImageBanner  from '../../assets/images/research/banner-img.webp';

function Banner() {

  return (
    <div>
      
     
    <section className="bannersection research-banner">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                    <div className="bnr-left">
                        <h1 className="title">Research &amp; Insights</h1>
                        <p className="para">Your wealth passes by so many turbulences right from Income, to Spending, to Savings, to Debt. Managing Money requires Research.</p>
                        <p className="para pt-4">So let’s begin a journey of ReSearching your Wealth.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rightsec">
                      <img src={ImageBanner} alt="Banner Images" className="img-fluid thumb-img" width={""} height={""}></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
