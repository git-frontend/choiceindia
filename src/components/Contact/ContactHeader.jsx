import "../../assets/css/header.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MenuHeader from '../Common-features/MenuHeader';


function ContactHeader() {
    return (
      <div className="Header header-light">
        <header className="main-header whitemenu">
          <MenuHeader />
        </header>
      </div>
    );
  }
  
  export default ContactHeader;
 

  