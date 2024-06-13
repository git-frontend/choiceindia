import React, { useState, useEffect, useRef } from 'react'
import "../../assets/css/header.scss"
import MenuHeader from '../Common-features/MenuHeader';
import { useLocation } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

function ContactHeader() {
  const location = useLocation();
  const [isUnder25, setIsUnder25] = useState(location.pathname.includes('under25'));
  const [isScrolled, setIsScrolled] = useState(false);
  var isMobile = useRef(isMobileDevice());
  const [searchParams, setSearchParams] = useSearchParams(window.location.search);
  useEffect(() => {
    setIsUnder25(location.pathname.includes('under25'));
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("section-under25");
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function isMobileDevice() {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  }

  return (
    <>
      {/* {
        (searchParams && searchParams.get('refercode') && isMobile.current) ?
          <>

          </> : */}
          <>
            <div className="Header">
              <header className={`${isUnder25 ? 'main-header main-header-new' : 'main-header'} ${isScrolled ? 'header-scroll' : ''}`}>
                <MenuHeader />
              </header>
            </div>
          </>
      {/* } */}
    </>
  );
}

export default ContactHeader;


