
import React from "react";
import Chapterone from '../../assets/demat-images/demat-account-meaning.svg';
import Chaptertwo from '../../assets/demat-images/how-does-demat-account-works.svg';
import Chapterthree from '../../assets/demat-images/demat-account-types.svg';
import Chapterfour from '../../assets/demat-images/demat-account-benefits.svg';
import Chapterfive from '../../assets/demat-images/features-of-demat-account.svg';
import Chaptersix from '../../assets/demat-images/how-to-open-a-demat-account.svg';
import Chapterseven from '../../assets/demat-images/best-demat-account.svg';
import Chaptereight from '../../assets/demat-images/demat-account-uses.svg';
import Chapternine from '../../assets/demat-images/difference-between-demat-account-and-trading-account.svg';
import Chapterten from '../../assets/demat-images/how-to-deactivate-demat-account.svg';
import Chapterelevens from '../../assets/demat-images/demat-account-faq.svg';

function TableContent() {

  return (
    <div>
      
     
    <section className="tablecontent">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-md-12">
                    <h2 className="title">Table of Content</h2>
                </div>
               
						<div className="col-md-12">
							<div className="same-bx-list">
							
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterone} className="" alt="Meaning of Demat Account" />
										<h4>Chapter 1</h4>
										<p>Meaning of Demat Account</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chaptertwo} className="" alt="How Demat Account Works" />
										<h4>Chapter 2</h4>
										<p>How Demat Account Works</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterthree} className="" alt="Types of Demat Account" />
										<h4>Chapter 3</h4>
										<p>Types of Demat Account</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterfour} className="" alt="Advantages of Demat Account" />
										<h4>Chapter 4</h4>
										<p>Advantages of Demat Account</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterfive} className="" alt="Demat Account Featues" />
										<h4>Chapter 5</h4>
										<p>Demat Account Features</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chaptersix} className="" alt="How to Open Demat Account" />
										<h4>Chapter 6</h4>
										<p>How to Open Demat Account</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterseven} className="" alt="How to Choose Best Demat Account" />
										<h4>Chapter 7</h4>
										<p>How to Best Demat Account</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chaptereight} className="" alt="Uses of Demat Account" />
										<h4>Chapter 8</h4>
										<p>Uses of Demat Account</p>
									</div>
								</div>
                				<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapternine} className="" alt="Demat Account vs Trading Account" />
										<h4>Chapter 9</h4>
										<p>Demat Vs Trading Account</p>
									</div>
								</div>
								<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterten} className="" alt="How to Close Demat Account" />
										<h4>Chapter 10</h4>
										<p>How To Close Demat Account</p>
									</div>
								</div>
								<div className="same-bx-item">
									<div className="item-cont">
										<img src={Chapterelevens} className="" alt="Demat Account FAQs" />
										<h4>Chapter 11</h4>
										<p>Demat Account FAQs</p>
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

export default TableContent;
