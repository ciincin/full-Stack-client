import "./Footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <p>2024 - Cinthya Redondo Soto. All rights reserved.</p>
      <div className="contact-wrapper">
          <a className="social" href="https://www.linkedin.com/in/cinthyars/">LinkedIn</a>
          <a className="social" href="https://github.com/ciincin">Github</a>
      </div>
      <p>
        This website is intended solely for educational purposes. It is a
        project created by Cinthya Redondo Soto, full-stack developer to
        practice and demonstrate her programming skills. I do not seek to
        generate any revenue or financial gain from this website. Any
        resemblance to real businesses, services, or products is purely
        coincidental.
      </p>
    </div>
  );
}

export default Footer;
