import "./Footer.css";

function FooterComponent() {
  const footerDate = new Date().getFullYear();

  return (
    <div className="footer row">
      <div className="col">
        <p className="footer-content">
          &copy; {footerDate}, Tyler Librandi, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default FooterComponent;
