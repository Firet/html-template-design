import Image from "next/image";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logos-section">Firm Logos</div>
        <div className="footer-social-media-section">Social Media</div>
        <div className="footer-nav-section">
          <div className="nav-column">
            <Image
              src={"./chicks-logo-large.svg"}
              alt="Chick Logo"
              className="chick-logo"
              unoptimized
              width={125}
              height={125}
            />
          </div>
          <div className="nav-column">
            <div>Chicks Gold</div>
            <div>Games</div>
            <div>About Us</div>
            <div>Blogs</div>
            <div>Sitemap</div>
          </div>
          <div className="nav-column">
            <div>Support</div>
            <div>Contact Us</div>
            <div>FAQ</div>
          </div>
          <div className="nav-column">
            <div>Legal</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Copyright Polic</div>
          </div>
          <div className="nav-column">Truspilot reviews</div>
        </div>
        <div className="copyright-section">
          <p>© 2017-2020, ChicksGold.com. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
