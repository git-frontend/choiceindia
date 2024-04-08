import React, { useState,useEffect } from 'react'
import "../../assets/css/header.scss"
import MenuHeader from '../Common-features/MenuHeader';
import { useLocation } from 'react-router-dom';

function ContactHeader() {
  const location = useLocation();
  const [isUnder25, setIsUnder25] = useState(location.pathname.includes('under25'));
  const [isScrolled, setIsScrolled] = useState(false);

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
  
  return (
    <div className="Header">
       <header className={`${isUnder25 ? 'main-header main-header-new' : 'main-header'} ${isScrolled ? 'header-scroll' : ''}`}>
        <MenuHeader />
      </header>
    </div>
    );
  }
  
  export default ContactHeader;
 

  