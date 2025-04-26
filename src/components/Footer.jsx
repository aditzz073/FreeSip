import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Benefits', to: 'benefits' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>FreeSip</h2>
            <p className="tagline">Marketing that quenches.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-nav">
              <h4>Navigation</h4>
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="mailto:info@freesip.com">info@freesip.com</a>
                </li>
                <li>
                  <a href="tel:+12345678900">+1 (234) 567-8900</a>
                </li>
                <li>
                  123 Hydration Street<br />
                  Splash City, SF 94105
                </li>
              </ul>
            </div>
            
            <div className="footer-legal">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>
                <li>
                  <a href="/sustainability">Sustainability Commitment</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} FreeSip. All rights reserved.</p>
          <p className="sustainability-note">
            Our bottles are made from 100% recyclable materials.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;