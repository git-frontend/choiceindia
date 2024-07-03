import {useState} from 'react';
import pdfIco from "../../assets/images/upcoming-ipo/pdf-icon.svg"
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
function PreApplyIpo() {

  const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   };


  return (
    <>
       
        <section className='pre-apply-sec'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-7 col-md-7'>
                      <div className='cont-pre'>
                          <h3>Pre-Apply Now for Upcoming IPOs at...</h3>
                          <h2>Zero Cost and <br/>In One-Click!</h2>
                      </div>
                    </div>
                    <div className='col-md-5'>
                        <div className='rightsec'>
                            <NewDematAccountForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PreApplyIpo