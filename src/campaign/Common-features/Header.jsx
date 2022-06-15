import "../../assets/css/header.scss";  
import MenuHeader from '../Common-features/MenuHeader';

function Header() {
    return (
      <div className="Header">
        <header className="main-header">
          <MenuHeader />
        </header>
      </div>
    );
  }
  
  export default Header;
  