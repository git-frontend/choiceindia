import "../../assets/css/header.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MenuHeader from '../../common-components/MenuHeader';


function AboutHeader() {
    return (
      <div className="Header">
        <header className="main-header">
          <MenuHeader />
        </header>
      </div>
    );
  }
  
  export default AboutHeader;
  