import "../../assets/css/header.scss"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MenuHeader from '../Common-features/MenuHeader';


function FablesHeader() {
    return (
      <div className="Header">
        <header className="main-header">
          <MenuHeader />
        </header>
      </div>
    );
  }
  
  export default FablesHeader;
  