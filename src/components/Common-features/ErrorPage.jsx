
import { Link } from 'react-router-dom';
import './ErrorPage.scss';
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
  return (
  //   <div>
  //   <h1>404 - Not Found!</h1>
  //   <Link to="/">Go Home</Link>
  // </div>
    <div class="middle-box text-center">
      <h1>404</h1>
      <h3 class="font-bold">Page Not Found</h3>

      <div class="error-desc">
        Sorry, but the page you are looking for has note been found.
        Try checking the URL for error, then hit the refresh button
        on your browser or try found something else in our app.
        Let's go <Link to="/">home</Link> and try from there.
        {/* <p>Let's go <Link to="/">home</Link> and try from there.</p> */}
      </div>
    </div>
  );
}

export default ErrorPage;
