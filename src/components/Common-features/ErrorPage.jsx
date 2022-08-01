
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
        <img src={errorImage} className="img-fluid" width={"957"} height={"638"}></img>
      </div>
      <div className='errormessage tex-center'>
        <h2 className='pb-3'><strong>Ughhhh.....</strong></h2>
        Sorry, but the page you are looking for has not been found.<br></br>
        Try checking the URL for error, then hit the refresh button
        on your browser or try found something else in our app.<br></br>
        Let's go <Link to="/">Home</Link> and try from there.
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default ErrorPage;
