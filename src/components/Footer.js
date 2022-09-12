function Footer() {
  const date = new Date();
  let thisYear = date.getFullYear();

  return (
    <>
      <div className="footer">
        <p className="footer-title">Follow us on social media!</p>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/uottawasesa/"
            style={{ paddingRight: "30px" }}
          >
            <i className="fa-lg fa-brands fa-instagram icon"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/UOttawaSESA/"
            style={{ paddingRight: "30px" }}
          >
            <i className="fa-lg fa-brands fa-facebook icon"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="/contact">
            <i className="fa-lg fa-solid fa-envelope icon"></i>
          </a>
        </div>
        <div>
          <p style={{ paddingTop: "12px", fontSize: "12px" }}>
            University of Ottawa
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/demianoportus/"
          >
            <p style={{ marginBottom: "10px" }} className="copyright">
              © {thisYear}, SESA
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
