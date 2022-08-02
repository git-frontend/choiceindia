
import { Link } from 'react-router-dom';
import './ErrorPage.scss';

import errorImage from '../../assets/images/error.webp'
function ErrorPage() {
  const styles = {
    middlebox: {
      maxWidth: '400px',
      zIndex: '100',
      margin: '0 auto',
      height: '60vh',
      padding: '40px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      h1: {
        lineHeight: '100%',
        marginTop: '0',
      }
    }
  }
  document.title = 'Error 404 page';
  document.getElementById('meta-tags').content = 'Error';
  return (
    <section className="errorbannersectoion ">
       <div className="container">
          <div className="row">
            <div className="col-md-12">
      <div className='text-center'>
        <img src={errorImage} className="img-fluid" width={"600"} height={"382"}></img>
      </div>
      <div className='errormessage tex-center pt-5'>
        <h2 className='pb-3'><strong>Ughhhh.....</strong></h2>
        Our Chief Innovation Officer is busy innovating this webpage to bring you something new. <br/>Meanwhile you can check out our blog section <Link to="/blog">here</Link> to have a good read.
        
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ErrorPage;
