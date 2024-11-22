import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing React Icons
import "../Footer/Footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      <div className="footer-logo">
  {/* Logo Image */}
  <img src="/logo.webp"  className="footer-logo-img" />
  

  <p>BUILDING YOUR LEGACY</p>

  {/* Social Icons */}
  <div className="footer-social-icons">
    <a href="#"><FaFacebook size={20} /></a>
    <a href="#"><FaInstagram size={20} /></a>
    <a href="#"><FaLinkedin size={20} /></a>
  </div>
</div>

        <div className="footer-contact">
          <h3>Get In Touch</h3>
          <p>Unit No 2201A, 22nd Floor World Trade Center (WTC Bangalore, Brigade Malleswaram West, North, Bengaluru, Karnataka 560055</p>
          <p>📞 +91 93957 48804</p>
          <p>📞 +91 90994 68492</p>
          <p>📞 +91 93805 24083</p>
          <p>📧 support@digi9.co.in</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe To Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2024 Digi9 | Powered by Digi9</p>
        <div className="footer-floating-icons"></div>
      </div>
    </footer>
  );
};
