import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {

  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  let check = window.location.pathname == "/investors" ? 'show' : "notshow";
  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible check-menu-main")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }


  return (
    <div >



      <div>
        <nav className={ (check === 'show')? "investor-info-menu check-menu":"investor-info-menu"}>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>
          </div>
        </nav>

        <div className={(check === 'show')? " menu visible check-menu-main": menu_class}>
          <h3 className="text-center"> <Link to="/investors" className="menu-itm-link-header ">Dissclosures under regulation 46 of the LODR</Link></h3>
          <div className="d-flex investor-menu-wrap">
            <ul className="investor-info-menu-list">
              <li className="menu-itm">
                <Link to="/code-of-conduct" className="menu-itm-link">Code of Conduct</Link>
              </li>
              <li className="menu-itm">
                <Link to="/corporate-governance" className="menu-itm-link">Corporate Goverannce</Link>
              </li>
              <li className="menu-itm">
                <Link to="/news-announcement" className="menu-itm-link">News &amp; Announcements</Link>
              </li>
              <li className="menu-itm">
                <Link to="/share-holding-pattern" className="menu-itm-link">Shareholding Pattern</Link>
              </li>
              <li className="menu-itm">
                <Link to="/financial-info" className="menu-itm-link">Financial Info</Link>
              </li>
              <li className="menu-itm">
                <Link to="/related-party-transaction" className="menu-itm-link">Related Party Transaction</Link>
              </li>

              <li className="menu-itm">
                <Link to="/closure-of-trading-window" className="menu-itm-link">Closure of Trading Window</Link>
              </li>



            </ul>
            <ul className="investor-info-menu-list">

              <li className="menu-itm">
                <Link to="/voting-results" className="menu-itm-link">Voting Results</Link>
              </li>
              <li className="menu-itm">
                <Link to="/notices" className="menu-itm-link">Notices</Link>
              </li>
              <li className="menu-itm">
                <Link to="/annual-report" className="menu-itm-link">Annual Report</Link>
              </li>
              <li className="menu-itm">
                <Link to="/fact-sheet" className="menu-itm-link">Fact Sheet</Link>
              </li>
              <li className="menu-itm">
                <Link to="/board-of-directors" className="menu-itm-link">Board of Directors</Link>
              </li>
              <li className="menu-itm">
                <Link to="/investor-presentation" className="menu-itm-link">Investor Presentation</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
