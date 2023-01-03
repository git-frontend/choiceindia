
import React,{useState,useEffect} from "react";
import bannerimg from '../../assets/images/nbfc-indivial-loan/flexi-credit-banner.webp';
import LazyLoader from '../Common-features/LazyLoader';


function Banner() {
/** scroll purpose */
function chapterScroll(id) {
    console.log("check",id);
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const [name, setName ] = useState('hideform');
  /** hide and show section */
  const getPosition = () => {
    const element = document.getElementById("showForm");
    if(element){
        const rect = element.getBoundingClientRect();
        
        if(rect.top.toFixed() < 259){
            setName('visibleform');
        }else{
            setName('hideform');
        }   
    }
};

  useEffect(() => {
    window.addEventListener('scroll', getPosition);
}, []);
  return (
    <div>
      
     
   <section className="inv-fin-banner individual-loans-banner">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-6">
                    <div className="fin-banner-caption">
                    <h1 className="big-ttl">Individual Loan</h1>
                    <p className="para">At Choice Finserv we understand the value of personal aspirations and the value of assistance that is often required to fulfil such aspirations. That’s why we offer various individual loans with easy terms.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="rightsec">
                        <LazyLoader src={bannerimg} alt={"Apply for individual Loan"} className={"img-fluid"} width={"586"} height={"366"} />
                    </div>
                </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default Banner;
