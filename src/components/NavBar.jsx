import { NavLink } from 'react-router-dom';

const Navbar = ({ navClick, handleNavClose, scrolling }) => {
  const handleNavLinkClick = () => {
    handleNavClose();
    window.scrollTo(0, 0);
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav className={`nav ${navClick ? 'showMenu' : ''}`}>
        <ul className={`menu ${scrolling ? 'showMenuColor' : ''}`}>
          <li>
            <NavLink to="/" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('about');
              }}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('contact');
              }}
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#blog"
              onClick={() => {
                handleNavClose();
                smoothScrollTo('blog');
              }}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
