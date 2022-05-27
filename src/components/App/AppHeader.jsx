import "../../assets/css/header.scss"
import MenuHeader from '../Common-features/MenuHeader';


function AppHeader() {
    return (
      <div className="Header header-light">
        <header className="main-header">
          <MenuHeader />
        </header>
      </div>
    );
  }
  
  export default AppHeader;
  