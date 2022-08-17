import './NoDataFound.scss';
import { Link } from 'react-router-dom';
import Image1 from '../../assets/images/no-data-found.png';
function TermsConditions() {
  return (
      <>
      <div>
          <section className="nodata">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                    <img src={Image1} alt="no-data-found" height="500" width="500" className="img-fluid no-data-found" /> 
                    <p className="heading">No Data Found</p>
                    <p className="subtext">No Content Matched Your Criteria. Try Searching For Something Else</p>
                    </div>
                </div>
            </div>
            </section>
        </div>
      </>
  )
}

export default TermsConditions;