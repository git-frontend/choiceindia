import "../assets/css/header.scss"
import MenuHeader from './MenuHeader.jsx';

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
  