import React from "react";
import { useState } from "react";


function Navbar() {

   // to change burger classes
   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
   const [menu_class, setMenuClass] = useState("menu hidden")
   const [isMenuClicked, setIsMenuClicked] = useState(false)

   // toggle burger menu change
   const updateMenu = () => {
       if(!isMenuClicked) {
           setBurgerClass("burger-bar clicked")
           setMenuClass("menu visible")
       }
       else {
           setBurgerClass("burger-bar unclicked")
           setMenuClass("menu hidden")
       }
       setIsMenuClicked(!isMenuClicked)
   }


  return (
    <div>
      
     
       
      <div>
            <nav className="investor-info-menu">
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
              <div className="d-flex investor-menu-wrap">
                <ul className="investor-info-menu-list">
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Code of Conduct</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Corporate Goverannce</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">News &amp; Announcements</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Shareholding Pattern</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Financial Info</a>
                  </li>
                
                </ul>
                <ul className="investor-info-menu-list">
                 
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Voting Results</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Notices</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Annual Report</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Fact Sheet</a>
                  </li>
                  <li className="menu-itm">
                    <a href="#" className="menu-itm-link">Board of Directors</a>
                  </li>
                </ul>
                </div>
            </div>
        </div>
    
    </div>
  );
}

export default Navbar;
