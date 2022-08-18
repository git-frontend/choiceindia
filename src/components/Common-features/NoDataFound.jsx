import '../Common-features/ErrorPage.scss';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/no-data-found.png';
function TermsConditions() {
  return (
      <>
      <div>
         
     <section className="errorbannersectoion ">
       <div className="container">
          <div className="row">
            <div className="col-md-12">
      <div className='text-center'>
      <img src={Image1} alt="no-data-found" width={"600"} height={"434"} className="img-fluid no-data-found" /> 
      </div>
      <div className='errormessage tex-center pt-5'>
        <h2 className='pb-3'><strong>No Data Found</strong></h2>
        No Content Matched Your Criteria. Try Searching For Something Else.
        
        </div>
        </div>
      </div>
      </div>
    </section>
        </div>
      </>
  )
}

export default TermsConditions;