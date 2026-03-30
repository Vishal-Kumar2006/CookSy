import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-block">
        <div className="footer-components">
          <FaFacebook /> Face Book
          <FaInstagram /> Face Book
          <FaYoutube /> Face Book
          <FaTwitter /> Face Book
          <MdEmail /> Face Book
        </div>
      </div>

      <div className="footer-block">
        <div className="footer-components">
          <a href="">link 1</a>
        </div>
      </div>

      <div className="footer-block">
        <div className="footer-components">
          <a href="">link 1</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
