import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClose, scrolling }) => {
  const [activeLink, setActiveLink] = useState('home');

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }

    setActiveLink(targetId);
  };

  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul className={`menu ${scrolling ? 'showMenuColor' : ''}`}>
          <li>
            <Link
              href="#home"
              className={`${activeLink === 'home' ? 'active' : ''}`}
              onClick={() => {
                handleNavClose();
                smoothScrollTo('home');
              }}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className={`${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => {
                handleNavClose();
                smoothScrollTo('about');
              }}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className={`${activeLink === 'contact' ? 'active' : ''}`}
              onClick={() => {
                handleNavClose();
                smoothScrollTo('contact');
              }}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="#footer-section"
              className={`${activeLink === 'footer-section' ? 'active' : ''}`}
              onClick={() => {
                handleNavClose();
                smoothScrollTo('footer-section');
              }}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
