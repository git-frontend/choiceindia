import React from "react";
import { Link } from "react-router-dom";
function MfBenifits() {

 /** scroll id view */

function chapterScroll(id) {
  var element = document.getElementById(id);
  var headerOffset = 140;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

  return (
    <div>
      <section className="get-start">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="get-start-sub">
                        <h3>हमारे साथ 100% मुफ़्त खाता खोलें</h3>
                        <Link to="/hindi/mutual-funds-investment"><span onClick={() => { chapterScroll('mutualid')}} className="btn-bg btn-bg-dark">अब खोलो</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    

   
    
    </div>
  );
}

export default MfBenifits;
