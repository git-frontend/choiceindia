
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
    <div className="middle-box text-center">
      <div className='img-parent'>
        <img src={errorImage} className="error-img"></img>
      </div>
      <div className="error-desc">
        Sorry, but the page you are looking for has not been found.
        Try checking the URL for error, then hit the refresh button
        on your browser or try found something else in our app.<br></br>
        Let's go <Link to="/">Home</Link> and try from there.
      </div>
    </div>
  );
}

export default ErrorPage;
