import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  const [navClick, setNavClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [overlay, setOverlay] = useState(false);

  // Handle nav Click
  const handleNavClick = () => {
    setNavClick((prevNavClick) => !prevNavClick);
    setOverlay((prevOverlay) => !prevOverlay);
  };

  const handleNavClose = () => {
    setNavClick(false);
    setOverlay(false);
  };

  // Change header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header-section" className={scrolling ? 'showBg' : ''}>
        <div className={`overlay ${overlay ? 'show-overlay' : ''}`}></div>

        <div className="container">
          <div className="content">
            {/* Logo */}
            <div className="logo-container">
              <Link className={`logo ${scrolling ? 'showLogo' : ''}`} to="/">
                JustAnotherUIKit
              </Link>
            </div>

            {/* NavBar Menu */}
            <NavBar
              navClick={navClick}
              handleNavClose={handleNavClose}
              scrolling={scrolling}
            />

            {/* <!--NAV BUTTONS--> */}
            <div className="menu-buttons">
              <button
                className="toggle-menu icon-btn"
                onClick={navClick ? handleNavClose : handleNavClick}
              >
                {navClick ? (
                  <i
                    className={`fa-solid fa-x icon-close icon ${
                      scrolling ? 'showIcon' : ''
                    }`}
                  ></i>
                ) : (
                  <i
                    className={`fa-solid fa-bars icon-bar icon ${
                      scrolling ? 'showIcon' : ''
                    }`}
                  ></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
