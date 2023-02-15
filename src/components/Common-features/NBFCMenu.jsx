import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Common-features/nbfc-menu.scss";



function NBFCMenu() {

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
    <div className="nbfc-info-menu-main">




      <nav className={(check === 'show') ? "nbfc-info-menu check-menu" : "nbfc-info-menu"}>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
          <div className={burger_class} ></div>
        </div>
      </nav>

      <div className={(check === 'show') ? " menu visible check-menu-main" : menu_class}>
        {/* <h3 className="text-center"> <Link to="/investors" className="menu-itm-link-header ">Disclosures under regulation 46 of the LODR</Link></h3> */}
        <div className="d-flex nbfc-info-menu-wrap">
          <ul className="nbfc-info-menu-list">
            <li className="menu-itm">
              <Link to="/business-loan" className="menu-itm-link">
                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3307 17.3333V16H2.01073V24H25.9974V16H16.6641V17.3333H11.3307ZM27.3307 5.33333H19.3307V2.66667L16.6641 0H11.3307L8.66406 2.66667V5.33333H0.664062V14.6667H11.3307V12H16.6641V14.6667H27.3307V5.33333ZM16.6641 5.33333H11.3307V2.66667H16.6641V5.33333Z" fill="black" />
                </svg>


                <span className="menu_item_text">Business Loans</span></Link>
            </li>
            <li className="menu-itm">
              <Link to="/individual-loan" className="menu-itm-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C10.35 12 8.9375 11.4125 7.7625 10.2375C6.5875 9.0625 6 7.65 6 6C6 4.35 6.5875 2.9375 7.7625 1.7625C8.9375 0.5875 10.35 0 12 0C13.65 0 15.0625 0.5875 16.2375 1.7625C17.4125 2.9375 18 4.35 18 6C18 7.65 17.4125 9.0625 16.2375 10.2375C15.0625 11.4125 13.65 12 12 12ZM0 24V19.8C0 18.95 0.219 18.1685 0.657 17.4555C1.094 16.7435 1.675 16.2 2.4 15.825C3.95 15.05 5.525 14.4685 7.125 14.0805C8.725 13.6935 10.35 13.5 12 13.5C13.65 13.5 15.275 13.6935 16.875 14.0805C18.475 14.4685 20.05 15.05 21.6 15.825C22.325 16.2 22.906 16.7435 23.343 17.4555C23.781 18.1685 24 18.95 24 19.8V24H0Z" fill="black" />
                </svg>


                <span className="menu_item_text">Individual Loans</span></Link>
            </li>
            {/* <li className="menu-itm">
                <Link to="" className="menu-itm-link"> 
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icom">
                <path d="M8.167 25.333H10.375V21.792H13.958V19.542H10.375V16H8.167V19.542H4.625V21.792H8.167V25.333ZM16.917 23.958H25.292V21.75H16.917V23.958ZM16.917 19.583H25.292V17.375H16.917V19.583ZM18.542 12.958L21.042 10.458L23.5 12.958L25.083 11.375L22.625 8.875L25.083 6.375L23.5 4.792L21.042 7.292L18.542 4.792L16.958 6.375L19.458 8.875L16.958 11.375L18.542 12.958ZM5.167 9.958H13.375V7.75H5.167V9.958ZM2.792 30C2.042 30 1.389 29.7223 0.833 29.167C0.277667 28.611 0 27.958 0 27.208V2.792C0 2.042 0.277667 1.389 0.833 0.833C1.389 0.277667 2.042 0 2.792 0H27.208C27.958 0 28.611 0.277667 29.167 0.833C29.7223 1.389 30 2.042 30 2.792V27.208C30 27.958 29.7223 28.611 29.167 29.167C28.611 29.7223 27.958 30 27.208 30H2.792ZM2.792 27.208H27.208V2.792H2.792V27.208ZM2.792 2.792V27.208V2.792Z" fill="black"/>
                </svg>
              
              <span className="menu_item_text">Calculators</span></Link>
              </li> */}
            {/* <li className="menu-itm">
                <Link to="" className="menu-itm-link"> 
                <svg width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75875 13.1333C7.78542 11.28 9.75875 10.1867 10.9054 8.54667C12.1188 6.82667 11.4388 3.61333 7.99875 3.61333C5.74542 3.61333 4.63875 5.32 4.17208 6.73333L0.71875 5.28C1.66542 2.44 4.23875 0 7.98542 0C11.1187 0 13.2654 1.42667 14.3588 3.21333C15.2921 4.74667 15.8387 7.61333 14.3987 9.74667C12.7987 12.1067 11.2654 12.8267 10.4388 14.3467C10.1054 14.96 9.97208 15.36 9.97208 17.3333H6.11875C6.10542 16.2933 5.94542 14.6 6.75875 13.1333ZM10.6654 22.6667C10.6654 24.1333 9.46542 25.3333 7.99875 25.3333C6.53208 25.3333 5.33208 24.1333 5.33208 22.6667C5.33208 21.2 6.53208 20 7.99875 20C9.46542 20 10.6654 21.2 10.6654 22.6667Z" fill="black"/>
                </svg>

              <span className="menu_item_text">FAQs</span></Link>
              </li> */}
            {/* <li className="menu-itm">
                <Link to="" className="menu-itm-link"> 
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.0783 1.965C28.795 3.78833 29.7167 5.83333 29.7167 9.14833C29.7167 14.9817 25.6217 20.21 19.6667 22.795L18.1783 20.4983C23.7367 17.4917 24.8233 13.59 25.2567 11.13C24.3617 11.5933 23.19 11.755 22.0417 11.6483C19.035 11.37 16.665 8.90167 16.665 5.83333C16.665 4.28624 17.2796 2.80251 18.3735 1.70854C19.4675 0.614582 20.9512 0 22.4983 0C24.2867 0 25.9967 0.816666 27.0783 1.965ZM10.4117 1.965C12.1283 3.78833 13.05 5.83333 13.05 9.14833C13.05 14.9817 8.955 20.21 3 22.795L1.51167 20.4983C7.07 17.4917 8.15667 13.59 8.59 11.13C7.695 11.5933 6.52333 11.755 5.375 11.6483C2.36833 11.37 0 8.90167 0 5.83333C0 4.28624 0.614581 2.80251 1.70854 1.70854C2.80251 0.614582 4.28624 0 5.83333 0C7.62167 0 9.33167 0.816666 10.4133 1.965H10.4117Z" fill="black"/>
                </svg>


                <span className="menu_item_text">Quotes</span></Link>
              </li> */}
            {/* <li className="menu-itm"> 
                <Link to="" className="menu-itm-link">
                <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9001 17.0457L22.7384 16.1532V15.8416L23.8718 14.9491C24.0984 14.7791 24.1551 14.4674 24.0134 14.2266L22.8093 12.1299C22.7597 12.0425 22.6875 11.9701 22.6002 11.9202C22.513 11.8704 22.4139 11.8449 22.3134 11.8466C22.2426 11.8466 22.1718 11.8607 22.1009 11.8891L20.7551 12.4274C20.6418 12.3566 20.5993 12.3282 20.4859 12.2716L20.2734 10.8407C20.2569 10.7014 20.1904 10.5729 20.0861 10.4791C19.9818 10.3852 19.847 10.3325 19.7068 10.3307H17.2843C17.0009 10.3307 16.7601 10.5432 16.7176 10.8124L16.5193 12.2432C16.4768 12.2716 16.4201 12.2857 16.3776 12.3141L16.2501 12.3991L14.9043 11.8607C14.7771 11.8083 14.6351 11.8038 14.5049 11.8481C14.3746 11.8924 14.2648 11.9824 14.1959 12.1016L12.9918 14.1982C12.8501 14.4391 12.9068 14.7507 13.1334 14.9207L14.2668 15.8132V16.1391L13.1334 17.0316C13.0252 17.1135 12.9509 17.2325 12.9247 17.3658C12.8986 17.499 12.9225 17.6373 12.9918 17.7541L14.1959 19.8507C14.2951 20.0349 14.4934 20.1341 14.6918 20.1341C14.7626 20.1341 14.8334 20.1199 14.9043 20.0916L16.2501 19.5674C16.3634 19.6382 16.4201 19.6666 16.5334 19.7232L16.7459 21.1541C16.7884 21.4374 17.0293 21.6357 17.3126 21.6357H19.7351C20.0184 21.6357 20.2593 21.4232 20.3018 21.1541L20.5143 19.7232C20.5568 19.6949 20.6134 19.6807 20.6559 19.6524L20.7834 19.5674L22.1293 20.1057C22.2565 20.1582 22.3984 20.1627 22.5287 20.1184C22.659 20.0741 22.7687 19.984 22.8376 19.8649L24.0418 17.7682C24.1111 17.6514 24.135 17.5132 24.1088 17.3799C24.0827 17.2467 24.0084 17.1277 23.9001 17.0457ZM18.5026 18.1224C17.3268 18.1224 16.3776 17.1732 16.3776 15.9974C16.3776 14.8216 17.3268 13.8724 18.5026 13.8724C19.6784 13.8724 20.6276 14.8216 20.6276 15.9974C20.6276 17.1732 19.6784 18.1224 18.5026 18.1224ZM17.0859 24.4974H2.91927V7.4974H17.0859V8.91406H19.9193V3.2474C19.9193 1.68906 18.6443 0.414062 17.0859 0.414062H2.91927C1.36094 0.414062 0.0859375 1.68906 0.0859375 3.2474V28.7474C0.0859375 30.3057 1.36094 31.5807 2.91927 31.5807H17.0859C18.6443 31.5807 19.9193 30.3057 19.9193 28.7474V23.0807H17.0859V24.4974ZM2.91927 3.2474H17.0859V4.66406H2.91927V3.2474ZM17.0859 28.7474H2.91927V27.3307H17.0859V28.7474Z" fill="black"/>
</svg>

                <span className="menu_item_text">Download App</span></Link>
              </li> */}
            <li className="menu-itm">

              <Link to="/about-choice-finserv?active=NBFC" className="menu-itm-link" >
                <svg width="25" height="24" viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.839426 9.82857C1.38752 10.5143 2.07263 11.0857 3.03179 11.4286H8.51269C8.92376 11.3143 9.1978 11.0857 9.47185 10.8571C10.8421 9.71429 11.3902 8 10.7051 6.51429L10.568 6.28571C10.431 5.94286 10.157 5.71429 9.88291 5.48571C9.74589 5.25714 9.47185 5.14286 9.33482 4.91429C8.78673 4.57143 8.23864 4.22857 7.69055 3.77143C6.45735 2.74286 6.32033 1.14286 7.00544 0C6.32033 0.114286 5.63522 0.457143 5.08712 0.914286C3.03179 2.28571 2.20965 4.68571 3.16881 6.85714V7.08571C3.16881 7.2 3.03179 7.31429 2.89476 7.42857C2.75774 7.54286 2.4837 7.42857 2.34667 7.31429L2.20965 7.2C1.38752 6.28571 1.25049 4.91429 1.79858 3.77143C0.56538 4.68571 -0.119733 6.17143 0.0172898 7.65714C0.0172898 8 0.154312 8.34286 0.291335 8.68571C0.291335 9.02857 0.565381 9.48572 0.839426 9.82857ZM5.90926 8.11429C6.04628 7.54286 5.77224 7.08571 5.63522 6.62857C5.49819 6.17143 5.49819 5.71429 5.77224 5.25714L6.18331 5.94286C6.7314 6.62857 7.69055 6.85714 7.9646 7.77143V8.11429C7.9646 8.68571 7.69055 9.25714 7.27949 9.6C7.00544 9.71429 6.7314 9.94286 6.45735 9.94286C5.63521 10.1714 4.67606 9.82857 4.12797 9.37143C5.22415 9.37143 5.77224 8.68571 5.90926 8.11429ZM9.60887 12.5714V14.8571H8.23864L6.86842 24H4.12797L2.75774 14.8571H1.38752V12.5714H9.60887Z" fill="black" />
                </svg>


                <span className="menu_item_text">CFPL Impact</span></Link>
            </li>
            <li className="menu-itm">

              <Link to="/contact-us?active=NBFC" className="menu-itm-link" >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.5417 25C20.5556 25 17.6449 24.3343 14.8097 23.0028C11.9736 21.6722 9.46204 19.913 7.275 17.725C5.08704 15.538 3.32778 13.0264 1.99722 10.1903C0.665741 7.35509 0 4.44444 0 1.45833C0 1.04167 0.138889 0.694444 0.416667 0.416667C0.694444 0.138889 1.04167 0 1.45833 0H7.08333C7.40741 0 7.69676 0.104167 7.95139 0.3125C8.20602 0.520833 8.35648 0.787037 8.40278 1.11111L9.30556 5.97222C9.35185 6.2963 9.3463 6.5912 9.28889 6.85694C9.23055 7.12361 9.09722 7.36111 8.88889 7.56944L5.55556 10.9722C6.52778 12.6389 7.74306 14.2014 9.20139 15.6597C10.6597 17.1181 12.2685 18.3796 14.0278 19.4444L17.2917 16.1806C17.5 15.9722 17.7722 15.8157 18.1083 15.7111C18.4435 15.6074 18.7731 15.5787 19.0972 15.625L23.8889 16.5972C24.213 16.6667 24.4792 16.8227 24.6875 17.0653C24.8958 17.3088 25 17.5926 25 17.9167V23.5417C25 23.9583 24.8611 24.3056 24.5833 24.5833C24.3056 24.8611 23.9583 25 23.5417 25Z" fill="black" />
                </svg>

                <span className="menu_item_text">Contact Us</span></Link>
            </li>
            <li className="menu-itm">

              <Link to="/digital-lending-partners?active=NBFC" className="menu-itm-link" >
                <svg width="25" height="25" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.664062 27.3267V20.6607C0.664062 19.7994 0.962396 19.077 1.55906 18.4937C2.1564 17.9104 2.87173 17.6187 3.70506 17.6187H9.45506C9.95506 17.6187 10.4344 17.7437 10.8931 17.9937C11.3511 18.2437 11.7331 18.577 12.0391 18.9937C12.8444 20.1324 13.8581 21.0214 15.0801 21.6607C16.3027 22.2994 17.6084 22.6187 18.9971 22.6187C20.3857 22.6187 21.6984 22.2994 22.9351 21.6607C24.1711 21.0214 25.1917 20.1324 25.9971 18.9937C26.3304 18.577 26.7124 18.2437 27.1431 17.9937C27.5737 17.7437 28.0391 17.6187 28.5391 17.6187H34.2891C35.1224 17.6187 35.8377 17.9104 36.4351 18.4937C37.0317 19.077 37.3301 19.7994 37.3301 20.6607V27.3267H26.2051V22.7437C25.2331 23.605 24.1291 24.2577 22.8931 24.7017C21.6571 25.1464 20.3584 25.3687 18.9971 25.3687C17.6637 25.3687 16.3791 25.1397 15.1431 24.6817C13.9071 24.223 12.7891 23.577 11.7891 22.7437V27.3267H0.664062ZM5.66406 15.1187C4.35806 15.1187 3.24673 14.6534 2.33006 13.7227C1.4134 12.792 0.955062 11.674 0.955062 10.3687C0.955062 9.06338 1.4134 7.95238 2.33006 7.03571C3.24673 6.11905 4.35806 5.66071 5.66406 5.66071C6.9974 5.66071 8.1154 6.11905 9.01806 7.03571C9.92073 7.95238 10.3721 9.06338 10.3721 10.3687C10.3721 11.674 9.92073 12.792 9.01806 13.7227C8.1154 14.6534 6.9974 15.1187 5.66406 15.1187ZM32.3301 15.1187C31.0247 15.1187 29.9137 14.6534 28.9971 13.7227C28.0804 12.792 27.6221 11.674 27.6221 10.3687C27.6221 9.06338 28.0804 7.95238 28.9971 7.03571C29.9137 6.11905 31.0247 5.66071 32.3301 5.66071C33.6634 5.66071 34.7817 6.11905 35.6851 7.03571C36.5877 7.95238 37.0391 9.06338 37.0391 10.3687C37.0391 11.674 36.5877 12.792 35.6851 13.7227C34.7817 14.6534 33.6634 15.1187 32.3301 15.1187ZM18.9971 0.660714C18.9971 0.65803 18.9971 0.65803 18.9971 0.660714C18.9971 0.65803 18.9971 0.660714 18.9971 0.65803C18.9971 0.652817 18.9971 0.660714 18.9971 0.660714C18.9971 0.65803 18.9971 0.65803 18.9971 0.660714C18.9971 0.660714 18.9971 0.660714 18.9971 0.65803C18.9971 0.660714 18.9971 0.65803 18.9971 0.660714Z" fill="black" />
                </svg>

                <span className="menu_item_text">Lending Partners</span></Link>
            </li>
            {/* <li className="menu-itm">

              <Link to="" className="menu-itm-link"><svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icom">
              <path d="M0.666992 27.333V20.667C0.666992 19.8057 0.965325 19.0833 1.56199 18.5C2.15933 17.9167 2.87466 17.625 3.70799 17.625H9.45799C9.95799 17.625 10.4373 17.75 10.896 18C11.354 18.25 11.736 18.5833 12.042 19C12.8473 20.1387 13.861 21.0277 15.083 21.667C16.3057 22.3057 17.6113 22.625 19 22.625C20.3887 22.625 21.7013 22.3057 22.938 21.667C24.174 21.0277 25.1947 20.1387 26 19C26.3333 18.5833 26.7153 18.25 27.146 18C27.5767 17.75 28.042 17.625 28.542 17.625H34.292C35.1253 17.625 35.8407 17.9167 36.438 18.5C37.0347 19.0833 37.333 19.8057 37.333 20.667V27.333H26.208V22.75C25.236 23.6113 24.132 24.264 22.896 24.708C21.66 25.1527 20.3613 25.375 19 25.375C17.6667 25.375 16.382 25.146 15.146 24.688C13.91 24.2293 12.792 23.5833 11.792 22.75V27.333H0.666992ZM19 20.375C18 20.375 17.0417 20.146 16.125 19.688C15.2083 19.2293 14.4583 18.5833 13.875 17.75C13.4303 17.0833 12.8817 16.5557 12.229 16.167C11.5763 15.7777 10.861 15.5413 10.083 15.458C10.833 14.5413 12.111 13.84 13.917 13.354C15.7223 12.868 17.4167 12.625 19 12.625C20.5833 12.625 22.2847 12.868 24.104 13.354C25.9233 13.84 27.1943 14.5413 27.917 15.458C27.167 15.5413 26.4653 15.7777 25.812 16.167C25.1593 16.5557 24.611 17.0833 24.167 17.75C23.5837 18.5833 22.8337 19.2293 21.917 19.688C21.0003 20.146 20.028 20.375 19 20.375ZM5.66699 15.125C4.36099 15.125 3.24966 14.6597 2.33299 13.729C1.41633 12.7983 0.957992 11.6803 0.957992 10.375C0.957992 9.06966 1.41633 7.95866 2.33299 7.04199C3.24966 6.12533 4.36099 5.66699 5.66699 5.66699C7.00033 5.66699 8.11833 6.12533 9.02099 7.04199C9.92366 7.95866 10.375 9.06966 10.375 10.375C10.375 11.6803 9.92366 12.7983 9.02099 13.729C8.11833 14.6597 7.00033 15.125 5.66699 15.125ZM32.333 15.125C31.0277 15.125 29.9167 14.6597 29 13.729C28.0833 12.7983 27.625 11.6803 27.625 10.375C27.625 9.06966 28.0833 7.95866 29 7.04199C29.9167 6.12533 31.0277 5.66699 32.333 5.66699C33.6663 5.66699 34.7847 6.12533 35.688 7.04199C36.5907 7.95866 37.042 9.06966 37.042 10.375C37.042 11.6803 36.5907 12.7983 35.688 13.729C34.7847 14.6597 33.6663 15.125 32.333 15.125ZM19 10.125C17.6947 10.125 16.5837 9.65966 15.667 8.72899C14.7503 7.79833 14.292 6.68033 14.292 5.37499C14.292 4.06966 14.7503 2.95866 15.667 2.04199C16.5837 1.12533 17.6947 0.666992 19 0.666992C20.3333 0.666992 21.4513 1.12533 22.354 2.04199C23.2567 2.95866 23.708 4.06966 23.708 5.37499C23.708 6.68033 23.2567 7.79833 22.354 8.72899C21.4513 9.65966 20.3333 10.125 19 10.125Z" fill="black"/>
              </svg>
              <span className="menu_item_text">Partnership Module</span></Link>
              </li> */}
            <li className="menu-itm">



              <Link to="/nach-cancellation" className="menu-itm-link">

                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.14739 18.5391L12.4974 14.1891L16.8474 18.5391L18.5391 16.8474L14.1891 12.4974L18.5391 8.14739L16.8474 6.45573L12.4974 10.8057L8.14739 6.45573L6.45573 8.14739L10.8057 12.4974L6.45573 16.8474L8.14739 18.5391ZM12.4974 24.5807C10.8259 24.5807 9.25503 24.2633 7.7849 23.6286C6.31476 22.9946 5.03594 22.1339 3.94844 21.0464C2.86094 19.9589 2.0002 18.68 1.36623 17.2099C0.731451 15.7398 0.414062 14.1689 0.414062 12.4974C0.414062 10.8259 0.731451 9.25503 1.36623 7.7849C2.0002 6.31476 2.86094 5.03594 3.94844 3.94844C5.03594 2.86094 6.31476 1.9998 7.7849 1.36502C9.25503 0.731049 10.8259 0.414062 12.4974 0.414062C14.1689 0.414062 15.7398 0.731049 17.2099 1.36502C18.68 1.9998 19.9589 2.86094 21.0464 3.94844C22.1339 5.03594 22.9946 6.31476 23.6286 7.7849C24.2633 9.25503 24.5807 10.8259 24.5807 12.4974C24.5807 14.1689 24.2633 15.7398 23.6286 17.2099C22.9946 18.68 22.1339 19.9589 21.0464 21.0464C19.9589 22.1339 18.68 22.9946 17.2099 23.6286C15.7398 24.2633 14.1689 24.5807 12.4974 24.5807Z" fill="black" />
                </svg>

                <span className="menu_item_text">NACH Cancel Request</span></Link>
            </li>

          </ul>
        </div>
      </div>

    </div>
  );
}

export default NBFCMenu;
