import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 1300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id="footer-section">
        <div className="footer-content">
          <div className="grid">
            <div className="quick-menu menu--links m-b">
              <h3>Lorem</h3>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
            </div>

            <div className="quick-menu menu--links m-b">
              <div className="m-b">
                <h3>lorem</h3>

                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
              </div>
              <div>
                <h3>lorem</h3>

                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
              </div>
            </div>

            <div className="quick-menu menu--links m-b">
              <h3>Lorem</h3>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
              <li>
                <Link to={'/'}>Ipsum</Link>
              </li>
            </div>

            <div className="quick-menu menu--links m-b">
              <div className="m-b">
                <h3>lorem</h3>

                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
              </div>
              <div>
                <h3>lorem</h3>

                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
                <li>
                  <Link to={'/'}>Ipsum</Link>
                </li>
              </div>
            </div>
          </div>
          <div className="copyright">
            <svg width="18" height="18" viewBox="0 0 16 16">
              <path
                d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6.23125 9.76875C7.20625 10.7438 8.79062 10.7438 9.76562 9.76875C10.0594 9.475 10.5344 9.475 10.825 9.76875C11.1156 10.0625 11.1187 10.5375 10.825 10.8281C9.2625 12.3906 6.73125 12.3906 5.16875 10.8281C3.60625 9.26562 3.60625 6.73438 5.16875 5.17188C6.73125 3.60938 9.2625 3.60938 10.825 5.17188C11.1187 5.46562 11.1187 5.94062 10.825 6.23125C10.5312 6.52187 10.0562 6.525 9.76562 6.23125C8.79062 5.25625 7.20625 5.25625 6.23125 6.23125C5.25625 7.20625 5.25625 8.79062 6.23125 9.76562V9.76875Z"
                fill="white"
              />
            </svg>
            <p> 2024 </p>
          </div>
        </div>

        <div onClick={handleScrollToTop} className="page-up">
          <span className={showScrollArrow ? 'showArrow' : ''}>
            <i className="fa-solid fa-arrow-up up-icon"></i>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
