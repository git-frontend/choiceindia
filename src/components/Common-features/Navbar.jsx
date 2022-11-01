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
        <nav className={(check === 'show') ? "investor-info-menu check-menu" : "investor-info-menu"}>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>
            <div className={burger_class} ></div>
          </div>
        </nav>

        <div className={(check === 'show') ? " menu visible check-menu-main" : menu_class}>
          {/* <h3 className="text-center"> <Link to="/investors" className="menu-itm-link-header ">Disclosures under regulation 46 of the LODR</Link></h3> */}
          <div className="d-flex investor-menu-wrap">
            <ul className="investor-info-menu-list">
              <li className="menu-itm">
                <Link to="/code-of-conduct" className="menu-itm-link"> <svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="42" viewBox="0 0 48 42" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5626 1.72656C25.5626 1.31216 25.398 0.914734 25.1049 0.621708C24.8119 0.328682 24.4145 0.164062 24.0001 0.164062C23.5857 0.164062 23.1883 0.328682 22.8952 0.621708C22.6022 0.914734 22.4376 1.31216 22.4376 1.72656V5.3724H18.3251C17.5932 5.37207 16.8782 5.59203 16.273 6.00365L12.7418 8.40781C12.6551 8.46652 12.5527 8.49774 12.448 8.4974H3.90218C3.48778 8.4974 3.09035 8.66202 2.79732 8.95504C2.5043 9.24807 2.33968 9.6455 2.33968 10.0599C2.33968 10.4743 2.5043 10.8717 2.79732 11.1648C3.09035 11.4578 3.48778 11.6224 3.90218 11.6224H7.18759L0.17301 27.6224C0.040512 27.9346 0.0115031 28.2811 0.0902344 28.611C0.168966 28.9409 0.351297 29.237 0.61051 29.4557C0.777176 29.5891 0.945926 29.7161 1.25426 29.9161C1.64176 30.1682 2.19593 30.4953 2.90426 30.8182C4.32093 31.4661 6.36676 32.1099 8.89593 32.1099C10.9627 32.1139 13.0061 31.6733 14.8876 30.8182C15.5959 30.4953 16.1501 30.1682 16.5376 29.9161C16.8501 29.7141 17.0168 29.587 17.1834 29.4516C17.4447 29.2353 17.6285 28.9398 17.7071 28.6098C17.7856 28.2798 17.7547 27.9332 17.6188 27.6224L10.6022 11.6224H12.448C13.1793 11.6224 13.8938 11.4016 14.498 10.9911L18.0313 8.58698C18.1174 8.52867 18.219 8.49747 18.323 8.4974H22.4376V38.7057H13.0897C12.6753 38.7057 12.2778 38.8704 11.9848 39.1634C11.6918 39.4564 11.5272 39.8538 11.5272 40.2682C11.5272 40.6826 11.6918 41.0801 11.9848 41.3731C12.2778 41.6661 12.6753 41.8307 13.0897 41.8307H34.9105C35.3249 41.8307 35.7223 41.6661 36.0154 41.3731C36.3084 41.0801 36.473 40.6826 36.473 40.2682C36.473 39.8538 36.3084 39.4564 36.0154 39.1634C35.7223 38.8704 35.3249 38.7057 34.9105 38.7057H25.5626V8.4974H29.6751C29.7793 8.4974 29.8834 8.52865 29.9668 8.58698L33.5022 10.9911C34.1063 11.4016 34.8209 11.6224 35.5522 11.6224H37.398L30.3813 27.6224C30.241 27.9423 30.212 28.3 30.2989 28.6384C30.3857 28.9768 30.5835 29.2763 30.8605 29.4891C30.8855 29.5078 30.8605 29.4891 30.8647 29.4891C31.0713 29.6447 31.287 29.788 31.5105 29.9182C31.8959 30.1516 32.448 30.4516 33.1563 30.7516C35.0402 31.539 37.0625 31.9413 39.1043 31.9349C41.1468 31.9409 43.17 31.5379 45.0543 30.7495C45.7584 30.4516 46.3126 30.1516 46.7001 29.9182C46.9228 29.7867 47.1384 29.6435 47.3459 29.4891C47.623 29.2763 47.8207 28.9768 47.9076 28.6384C47.9944 28.3 47.9654 27.9423 47.8251 27.6224L40.8126 11.6224H44.1001C44.5145 11.6224 44.9119 11.4578 45.205 11.1648C45.498 10.8717 45.6626 10.4743 45.6626 10.0599C45.6626 9.6455 45.498 9.24807 45.205 8.95504C44.9119 8.66202 44.5145 8.4974 44.1001 8.4974H35.5543C35.4503 8.49732 35.3487 8.46612 35.2626 8.40781L31.7272 6.00365C31.1226 5.59243 30.4084 5.37249 29.6772 5.3724H25.5626V1.72656ZM3.56884 27.6599C5.20864 28.5325 7.03843 28.9869 8.89593 28.9828C10.7534 28.9869 12.5832 28.5325 14.223 27.6599L8.89593 15.5141L3.56884 27.6599ZM33.798 27.6099C33.9688 27.6932 34.1605 27.7828 34.3709 27.8724C35.4751 28.337 37.0897 28.8099 39.1043 28.8099C40.9409 28.8151 42.7549 28.4049 44.4105 27.6099L39.1043 15.512L33.798 27.6099Z" fill="#FFCE02" />
                </svg><span className="menu_item_text">Code of Conduct</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/voting-results" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="46" viewBox="0 0 42 46" fill="none">
                  <path d="M34.5 25.253H32.97L28.47 29.753H32.7675L36.75 34.253H5.25L9.255 29.753H13.8675L9.3675 25.253H7.5L0.75 32.003V41.003C0.75 43.478 2.7525 45.503 5.2275 45.503H36.75C37.9435 45.503 39.0881 45.0289 39.932 44.185C40.7759 43.3411 41.25 42.1965 41.25 41.003V32.003L34.5 25.253ZM36.75 41.003H5.25V38.753H36.75V41.003ZM19.515 29.798C20.3925 30.6755 21.81 30.6755 22.6875 29.798L36.9975 15.488C37.2061 15.2799 37.3716 15.0326 37.4845 14.7604C37.5974 14.4882 37.6555 14.1964 37.6555 13.9018C37.6555 13.6071 37.5974 13.3153 37.4845 13.0431C37.3716 12.7709 37.2061 12.5237 36.9975 12.3155L25.86 1.17802C25.657 0.965624 25.4134 0.796168 25.1437 0.679707C24.8739 0.563247 24.5836 0.502155 24.2898 0.500056C23.996 0.497957 23.7047 0.554895 23.4334 0.667491C23.162 0.780086 22.916 0.946045 22.71 1.15552L8.3775 15.488C8.16892 15.6962 8.00343 15.9434 7.89053 16.2156C7.77762 16.4878 7.7195 16.7796 7.7195 17.0743C7.7195 17.3689 7.77762 17.6607 7.89053 17.9329C8.00343 18.2051 8.16892 18.4524 8.3775 18.6605L19.515 29.798ZM24.285 5.92552L32.25 13.8905L21.1125 25.028L13.1475 17.063L24.285 5.92552Z" fill="#CACACA" />
                </svg><span className="menu_item_text">Voting Results</span></Link>
              </li>

              <li className="menu-itm">

                <Link to="/notices" className="menu-itm-link"> <svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M19.9987 4.66927C28.4531 4.66927 35.332 11.5482 35.332 20.0026C35.332 28.457 28.4531 35.3359 19.9987 35.3359C11.5443 35.3359 4.66536 28.457 4.66536 20.0026C4.66536 11.5482 11.5443 4.66927 19.9987 4.66927ZM19.9987 0.835938C9.41295 0.835938 0.832031 9.41685 0.832031 20.0026C0.832031 30.5884 9.41295 39.1693 19.9987 39.1693C30.5844 39.1693 39.1654 30.5884 39.1654 20.0026C39.1654 9.41685 30.5844 0.835938 19.9987 0.835938ZM21.9154 25.7526H18.082V29.5859H21.9154V25.7526ZM18.082 21.9193H21.9154L22.8737 10.4193H17.1237L18.082 21.9193Z" fill="#CACACA" />
                </svg><span className="menu_item_text">Notices</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/corporate-governance" className="menu-itm-link" > <svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="33" viewBox="0 0 37 33" fill="none">
                  <path d="M18.5007 7.54167V0.375H0.583984V32.625H36.4173V7.54167H18.5007ZM14.9173 29.0417H4.16732V25.4583H14.9173V29.0417ZM14.9173 21.875H4.16732V18.2917H14.9173V21.875ZM14.9173 14.7083H4.16732V11.125H14.9173V14.7083ZM14.9173 7.54167H4.16732V3.95833H14.9173V7.54167ZM32.834 29.0417H18.5007V11.125H32.834V29.0417ZM29.2507 14.7083H22.084V18.2917H29.2507V14.7083ZM29.2507 21.875H22.084V25.4583H29.2507V21.875Z" fill="#CACACA" />
                </svg><span className="menu_item_text">Corporate Governance</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/news-announcement" className="menu-itm-link"> <svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="44" viewBox="0 0 50 44" fill="none">
                  <path d="M10.4987 34.0833H22.582V29.25H10.4987V34.0833ZM34.6654 34.0833H39.4987V29.25H34.6654V34.0833ZM10.4987 24.4167H22.582V19.5833H10.4987V24.4167ZM34.6654 24.4167H39.4987V9.91667H34.6654V24.4167ZM10.4987 14.75H22.582V9.91667H10.4987V14.75ZM5.66536 43.75C4.3362 43.75 3.19875 43.2771 2.25303 42.3314C1.3057 41.3841 0.832031 40.2458 0.832031 38.9167V5.08333C0.832031 3.75417 1.3057 2.61592 2.25303 1.66858C3.19875 0.722861 4.3362 0.25 5.66536 0.25H44.332C45.6612 0.25 46.7994 0.722861 47.7468 1.66858C48.6925 2.61592 49.1654 3.75417 49.1654 5.08333V38.9167C49.1654 40.2458 48.6925 41.3841 47.7468 42.3314C46.7994 43.2771 45.6612 43.75 44.332 43.75H5.66536ZM5.66536 38.9167H44.332V5.08333H5.66536V38.9167ZM5.66536 38.9167V5.08333V38.9167Z" fill="#CACACA" />
                </svg><span className="menu_item_text">News &amp; Announcements</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/annual-report" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M16.25 29.25H29.25V32.5H16.25V29.25ZM16.25 21.125H35.75V24.375H16.25V21.125ZM16.25 37.375H24.375V40.625H16.25V37.375Z" fill="#CACACA" />
                  <path d="M40.625 8.125H35.75V6.5C35.75 5.63805 35.4076 4.8114 34.7981 4.2019C34.1886 3.59241 33.362 3.25 32.5 3.25H19.5C18.638 3.25 17.8114 3.59241 17.2019 4.2019C16.5924 4.8114 16.25 5.63805 16.25 6.5V8.125H11.375C10.513 8.125 9.6864 8.46741 9.0769 9.0769C8.46741 9.6864 8.125 10.513 8.125 11.375V45.5C8.125 46.362 8.46741 47.1886 9.0769 47.7981C9.6864 48.4076 10.513 48.75 11.375 48.75H40.625C41.487 48.75 42.3136 48.4076 42.9231 47.7981C43.5326 47.1886 43.875 46.362 43.875 45.5V11.375C43.875 10.513 43.5326 9.6864 42.9231 9.0769C42.3136 8.46741 41.487 8.125 40.625 8.125ZM19.5 6.5H32.5V13H19.5V6.5ZM40.625 45.5H11.375V11.375H16.25V16.25H35.75V11.375H40.625V45.5Z" fill="#CACACA" />
                </svg><span className="menu_item_text">Annual Report</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/share-holding-pattern" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill nonfill" width="48" height="42" viewBox="0 0 40 42" fill="none">
                  <path d="M2 14H10V30H2V14Z" stroke="#CACACA" stroke-width="4" stroke-linejoin="round" />
                  <path d="M6 4V14M6 30V40" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M30 14H38V30H30V14Z" stroke="#CACACA" stroke-width="4" stroke-linejoin="round" />
                  <path d="M34 4V14M34 30V40" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 12H24V28H16V12Z" stroke="#CACACA" stroke-width="4" stroke-linejoin="round" />
                  <path d="M20 2V12M20 28V38" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span className="menu_item_text">Shareholding Pattern</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/fact-sheet" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill nonfill" width="48" height="40" viewBox="0 0 50 40" fill="none">
                  <path d="M45.25 2H4.75C3.50736 2 2.5 3.00736 2.5 4.25V35.75C2.5 36.9926 3.50736 38 4.75 38H45.25C46.4926 38 47.5 36.9926 47.5 35.75V4.25C47.5 3.00736 46.4926 2 45.25 2Z" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M34 21.125V29M25 11V29M16 15.5V29" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span className="menu_item_text">Fact Sheet</span></Link>
              </li>
              <li className="menu-itm">

                <Link to="/board-of-directors" className="menu-itm-link"> <svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="54" viewBox="0 0 54 54" fill="none">
                  <path d="M20.2568 13.5011C20.2568 11.7126 20.9672 9.99747 22.2318 8.73286C23.4964 7.46826 25.2116 6.75781 27 6.75781C28.7884 6.75781 30.5036 7.46826 31.7682 8.73286C33.0328 9.99747 33.7432 11.7126 33.7432 13.5011C33.7432 15.2895 33.0328 17.0047 31.7682 18.2693C30.5036 19.5339 28.7884 20.2443 27 20.2443C25.2116 20.2443 23.4964 19.5339 22.2318 18.2693C20.9672 17.0047 20.2568 15.2895 20.2568 13.5011ZM27 10.1328C26.5577 10.1328 26.1197 10.2199 25.711 10.3892C25.3024 10.5585 24.9311 10.8066 24.6183 11.1193C24.3055 11.4321 24.0574 11.8034 23.8881 12.2121C23.7189 12.6207 23.6318 13.0587 23.6318 13.5011C23.6318 13.9434 23.7189 14.3814 23.8881 14.79C24.0574 15.1987 24.3055 15.57 24.6183 15.8828C24.9311 16.1955 25.3024 16.4436 25.711 16.6129C26.1197 16.7822 26.5577 16.8693 27 16.8693C27.8933 16.8693 28.75 16.5144 29.3817 15.8828C30.0134 15.2511 30.3682 14.3944 30.3682 13.5011C30.3682 12.6077 30.0134 11.751 29.3817 11.1193C28.75 10.4877 27.8933 10.1328 27 10.1328ZM37.125 15.1886C37.125 14.5237 37.2559 13.8654 37.5104 13.2512C37.7648 12.637 38.1377 12.0789 38.6078 11.6088C39.0779 11.1387 39.636 10.7658 40.2502 10.5114C40.8644 10.257 41.5227 10.1261 42.1875 10.1261C42.8523 10.1261 43.5106 10.257 44.1248 10.5114C44.739 10.7658 45.2971 11.1387 45.7672 11.6088C46.2373 12.0789 46.6102 12.637 46.8646 13.2512C47.1191 13.8654 47.25 14.5237 47.25 15.1886C47.25 16.5312 46.7166 17.8189 45.7672 18.7683C44.8178 19.7177 43.5302 20.2511 42.1875 20.2511C40.8448 20.2511 39.5572 19.7177 38.6078 18.7683C37.6584 17.8189 37.125 16.5312 37.125 15.1886ZM42.1875 13.5011C41.7399 13.5011 41.3107 13.6789 40.9943 13.9953C40.6778 14.3118 40.5 14.741 40.5 15.1886C40.5 15.6361 40.6778 16.0653 40.9943 16.3818C41.3107 16.6983 41.7399 16.8761 42.1875 16.8761C42.6351 16.8761 43.0643 16.6983 43.3807 16.3818C43.6972 16.0653 43.875 15.6361 43.875 15.1886C43.875 14.741 43.6972 14.3118 43.3807 13.9953C43.0643 13.6789 42.6351 13.5011 42.1875 13.5011ZM11.8125 10.1261C10.4698 10.1261 9.18218 10.6594 8.23277 11.6088C7.28337 12.5582 6.75 13.8459 6.75 15.1886C6.75 16.5312 7.28337 17.8189 8.23277 18.7683C9.18218 19.7177 10.4698 20.2511 11.8125 20.2511C13.1552 20.2511 14.4428 19.7177 15.3922 18.7683C16.3416 17.8189 16.875 16.5312 16.875 15.1886C16.875 13.8459 16.3416 12.5582 15.3922 11.6088C14.4428 10.6594 13.1552 10.1261 11.8125 10.1261ZM10.125 15.1886C10.125 14.741 10.3028 14.3118 10.6193 13.9953C10.9357 13.6789 11.3649 13.5011 11.8125 13.5011C12.2601 13.5011 12.6893 13.6789 13.0057 13.9953C13.3222 14.3118 13.5 14.741 13.5 15.1886C13.5 15.6361 13.3222 16.0653 13.0057 16.3818C12.6893 16.6983 12.2601 16.8761 11.8125 16.8761C11.3649 16.8761 10.9357 16.6983 10.6193 16.3818C10.3028 16.0653 10.125 15.6361 10.125 15.1886ZM14.4045 23.6261C13.8105 24.6516 13.4985 25.816 13.5 27.0011H6.75V35.4386C6.74973 36.2781 6.95822 37.1044 7.35671 37.8433C7.75521 38.5822 8.33119 39.2104 9.03281 39.6713C9.73443 40.1323 10.5397 40.4115 11.376 40.4839C12.2124 40.5562 13.0536 40.4195 13.824 40.0859C14.0738 41.2031 14.4653 42.2696 14.9715 43.2652C13.6906 43.7824 12.3022 43.9772 10.9284 43.8324C9.55464 43.6877 8.23739 43.2079 7.09237 42.4351C5.94735 41.6623 5.00958 40.6202 4.36142 39.4003C3.71326 38.1804 3.37454 36.82 3.375 35.4386V27.0011C3.375 26.106 3.73058 25.2475 4.36351 24.6146C4.99645 23.9816 5.85489 23.6261 6.75 23.6261H14.4045ZM39.0285 43.2652C40.3094 43.7824 41.6978 43.9772 43.0716 43.8324C44.4454 43.6877 45.7626 43.2079 46.9076 42.4351C48.0527 41.6623 48.9904 40.6202 49.6386 39.4003C50.2867 38.1804 50.6255 36.82 50.625 35.4386V27.0011C50.625 26.106 50.2694 25.2475 49.6365 24.6146C49.0035 23.9816 48.1451 23.6261 47.25 23.6261H39.5955C40.1693 24.6183 40.5 25.7692 40.5 27.0011H47.25V35.4386C47.2503 36.2781 47.0418 37.1044 46.6433 37.8433C46.2448 38.5822 45.6688 39.2104 44.9672 39.6713C44.2656 40.1323 43.4603 40.4115 42.624 40.4839C41.7876 40.5562 40.9464 40.4195 40.176 40.0859C39.9229 41.2031 39.5348 42.2696 39.0285 43.2652ZM20.25 23.6227C19.3549 23.6227 18.4965 23.9783 17.8635 24.6112C17.2306 25.2441 16.875 26.1026 16.875 26.9977V37.1261C16.875 39.8114 17.9417 42.3867 19.8405 44.2855C21.7393 46.1843 24.3147 47.2511 27 47.2511C29.6853 47.2511 32.2607 46.1843 34.1595 44.2855C36.0583 42.3867 37.125 39.8114 37.125 37.1261V27.0011C37.125 26.106 36.7694 25.2475 36.1365 24.6146C35.5035 23.9816 34.6451 23.6261 33.75 23.6261H20.25V23.6227ZM20.25 26.9977H33.75V37.1261C33.75 38.9163 33.0388 40.6332 31.773 41.899C30.5071 43.1649 28.7902 43.8761 27 43.8761C25.2098 43.8761 23.4929 43.1649 22.227 41.899C20.9612 40.6332 20.25 38.9163 20.25 37.1261V27.0011V26.9977Z" fill="#CACACA" />
                </svg><span className="menu_item_text">Board of Directors</span></Link>
              </li>

              <li className="menu-itm">
                <Link to="/financial-info" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="48" height="43" viewBox="0 0 43 43" fill="none">
                  <path d="M21.5 40.3125C16.5106 40.3125 11.7256 38.3305 8.19755 34.8024C4.66953 31.2744 2.6875 26.4894 2.6875 21.5C2.6875 16.5106 4.66953 11.7256 8.19755 8.19755C11.7256 4.66953 16.5106 2.6875 21.5 2.6875C26.4894 2.6875 31.2744 4.66953 34.8024 8.19755C38.3305 11.7256 40.3125 16.5106 40.3125 21.5C40.3125 26.4894 38.3305 31.2744 34.8024 34.8024C31.2744 38.3305 26.4894 40.3125 21.5 40.3125ZM21.5 43C27.2022 43 32.6708 40.7348 36.7028 36.7028C40.7348 32.6708 43 27.2022 43 21.5C43 15.7978 40.7348 10.3292 36.7028 6.2972C32.6708 2.26517 27.2022 0 21.5 0C15.7978 0 10.3292 2.26517 6.2972 6.2972C2.26517 10.3292 0 15.7978 0 21.5C0 27.2022 2.26517 32.6708 6.2972 36.7028C10.3292 40.7348 15.7978 43 21.5 43Z" fill="#CACACA" />
                  <path d="M23.9992 17.7052L17.8449 18.4766L17.6245 19.4978L18.8339 19.7209C19.624 19.909 19.7799 20.1939 19.6079 20.9813L17.6245 30.3016C17.1031 32.7123 17.9067 33.8464 19.796 33.8464C21.2607 33.8464 22.9619 33.1691 23.7332 32.2393L23.9697 31.1213C23.4322 31.5943 22.6474 31.7824 22.1261 31.7824C21.387 31.7824 21.1182 31.2637 21.3091 30.3499L23.9992 17.7052ZM24.1874 12.0938C24.1874 12.8065 23.9042 13.4901 23.4002 13.9941C22.8962 14.4981 22.2126 14.7813 21.4999 14.7813C20.7871 14.7813 20.1035 14.4981 19.5995 13.9941C19.0955 13.4901 18.8124 12.8065 18.8124 12.0938C18.8124 11.381 19.0955 10.6974 19.5995 10.1934C20.1035 9.6894 20.7871 9.40625 21.4999 9.40625C22.2126 9.40625 22.8962 9.6894 23.4002 10.1934C23.9042 10.6974 24.1874 11.381 24.1874 12.0938Z" fill="#CACACA" />
                </svg><span className="menu_item_text"> Financial Info</span></Link>
              </li>
              <li className="menu-itm">
                <Link to="/related-party-transaction" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill nonfill" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M35 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V35C2 35.7956 2.31607 36.5587 2.87868 37.1213C3.44129 37.6839 4.20435 38 5 38H35C35.7956 38 36.5587 37.6839 37.1213 37.1213C37.6839 36.5587 38 35.7956 38 35V5C38 4.20435 37.6839 3.44129 37.1213 2.87868C36.5587 2.31607 35.7956 2 35 2Z" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17 27L22 31L30 21M10 11H30M10 19H18" stroke="#CACACA" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span className="menu_item_text"> Related Party Transaction</span></Link>
              </li>
              <li className="menu-itm">
                <Link to="/investor-presentation" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="37" height="37" viewBox="0 0 37 37" fill="none">
                  <path d="M0 0H37V2.46667H34.5333V19.7333C34.5333 20.0674 34.4691 20.3821 34.3406 20.6776C34.2122 20.9731 34.0387 21.2365 33.8203 21.4677C33.6019 21.699 33.3385 21.8788 33.0302 22.0073C32.7219 22.1358 32.4007 22.2 32.0667 22.2H19.7333V34.5333H29.6V37H7.4V34.5333H17.2667V22.2H4.93333C4.59931 22.2 4.28455 22.1358 3.98906 22.0073C3.69358 21.8788 3.43021 21.7054 3.19896 21.487C2.96771 21.2686 2.78785 21.0052 2.65937 20.6969C2.5309 20.3885 2.46667 20.0674 2.46667 19.7333V2.46667H0V0ZM32.0667 19.7333V2.46667H4.93333V19.7333H32.0667ZM27.1333 9.86667V12.3333H9.86667V9.86667H27.1333Z" fill="#CACACA" />
                </svg><span className="menu_item_text"> Investor Presentation</span></Link>
              </li>
              <li className="menu-itm">
                <Link to="/closure-of-trading-window" className="menu-itm-link"><svg xmlns="http://www.w3.org/2000/svg" className="imgfill" width="41" height="41" viewBox="0 0 41 41" fill="none">
                  <path d="M2.18982 0.375714L40.6243 38.8102C40.8649 39.0507 41 39.377 41 39.7172C41 40.0574 40.8649 40.3837 40.6243 40.6243C40.3837 40.8649 40.0574 41 39.7172 41C39.377 41 39.0507 40.8649 38.8102 40.6243L35.5586 37.3702C34.5465 38.0441 33.3294 38.4361 32.0227 38.4361H8.96197C7.26306 38.4361 5.63374 37.7612 4.43243 36.5599C3.23112 35.3586 2.55623 33.7293 2.55623 32.0303V8.96966C2.55623 7.66289 2.94826 6.4458 3.61958 5.43369L0.375714 2.18982C0.256598 2.0707 0.16211 1.92929 0.0976449 1.77366C0.0331798 1.61803 1.25509e-09 1.45122 0 1.28277C-1.25509e-09 1.11431 0.0331798 0.947506 0.0976449 0.791873C0.16211 0.636241 0.256598 0.494829 0.375714 0.375714C0.494829 0.256598 0.636241 0.16211 0.791873 0.0976449C0.947506 0.0331798 1.11431 -1.25509e-09 1.28277 0C1.45122 1.25509e-09 1.61803 0.0331798 1.77366 0.0976449C1.92929 0.16211 2.0707 0.256598 2.18982 0.375714ZM33.6856 35.4971L20.5 22.3115V26.9057C20.5 27.2455 20.365 27.5714 20.1248 27.8117C19.8845 28.0519 19.5586 28.1869 19.2189 28.1869H8.96966C8.62988 28.1869 8.30401 28.0519 8.06375 27.8117C7.82349 27.5714 7.68851 27.2455 7.68851 26.9057V16.6566C7.68851 16.3168 7.82349 15.9909 8.06375 15.7506C8.30401 15.5104 8.62988 15.3754 8.96966 15.3754H13.5639L11.0016 12.8131H5.11853V32.0303C5.11853 33.0497 5.52346 34.0273 6.24425 34.7481C6.96503 35.4689 7.94263 35.8738 8.96197 35.8738H32.0227C32.6171 35.8738 33.1808 35.738 33.6856 35.4971ZM8.43927 10.2508L5.49518 7.30673C5.24621 7.82567 5.11747 8.39408 5.11853 8.96966V10.2508H8.43927ZM16.1262 17.9377H10.2508V25.6246H17.9377V19.7492L16.1262 17.9377ZM35.8661 10.2508H15.6854L18.2477 12.8131H35.8661V30.4315L38.3669 32.9297C38.4079 32.635 38.4284 32.3353 38.4284 32.0303V12.8131H38.4361V10.2508H38.4284V8.96966C38.4284 7.27075 37.7535 5.64143 36.5522 4.44012C35.3509 3.23881 33.7216 2.56392 32.0227 2.56392H8.96197C8.6545 2.56392 8.35727 2.58441 8.06261 2.62541L10.5583 5.12621H32.0201C33.0394 5.12621 34.017 5.53115 34.7378 6.25193C35.4586 6.97272 35.8635 7.95032 35.8635 8.96966V10.2508H35.8661Z" fill="#CACACA" />
                </svg><span className="menu_item_text"> Closure of Trading Window</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
