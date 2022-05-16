import "../../assets/css/header.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MenuHeader from '../Common-features/MenuHeader';


function HomeHeader() {
    return (
      <div className="Header">
        <header className="main-header">
          <MenuHeader />
        </header>
      </div>
    );
  }
  
  export default HomeHeader;
  