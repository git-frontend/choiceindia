import "../../assets/css/header.scss"
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  ImageSub0  from '../../assets/images/logo-old.svg';

function CampaignHeader() {
  return (
    <div className="Header">
      <header className="main-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            <Link className="navbar-brand logo-main" to="/">
              <img src={ImageSub0} width="150" height="37" className="img-fluid logo-dark" alt="Choice India" />
            </Link>
            {/* <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto nav-header">

                <li className="nav-item get-btn">
                  <button className="nav-link">Join Now</button>
                </li>
              </ul>
            </div> */}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default CampaignHeader;