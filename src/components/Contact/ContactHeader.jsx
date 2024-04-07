import React, { useState,useEffect } from 'react'
import "../../assets/css/header.scss"
import MenuHeader from '../Common-features/MenuHeader';


function ContactHeader() {
  const [isUnder25, setIsUnder25] = useState(window.location.pathname.includes('under25'));
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleNavLinkClick = () => {
      setIsUnder25(false); 
    };

   
    document.querySelectorAll('.nav-link').forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });
    return () => {
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="Header">
       <header className={`${isUnder25 ? 'main-header main-header-new' : 'main-header'} ${isScrolled ? 'header-scroll' : ''}`}>
        <MenuHeader />
      </header>
    </div>
    );
  }
  
  export default ContactHeader;
 

  