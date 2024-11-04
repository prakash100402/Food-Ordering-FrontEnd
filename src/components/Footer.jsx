import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className = "footer">
        <div className="footer-content">
        <p>© 2024 Food App. All rights reserved.</p>
        <nav className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
    );
};

export default Footer;