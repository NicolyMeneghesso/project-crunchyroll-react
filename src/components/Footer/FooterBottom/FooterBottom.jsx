import "./FooterBottom.css";

import Dropdown from "react-bootstrap/Dropdown";

import LogoSony from "../assets/LogoSony";

const languages = [
  "English",
  "Bahasa Indonesia",
  "Deutsch",
  "Español (América Latina)",
  "Español",
  "Français",
  "Italiano",
  "Português (Brasil)",
  "Русский",
  "العربية",
  "हिन्दी",
  "한국어",
  "Polski",
  "ไทย",
  "繁體中文",
];

function FooterBottom() {
  return (
    <div className="footer-bottom">

      <div className="footer-bottom-left">
        <LogoSony />

        <span className="footer-divider"></span>
        <span>© Crunchyroll, LLC</span>
      </div>

      <div className="footer-language-wrapper">
        <Dropdown align="end" drop="up">

          <Dropdown.Toggle variant="link" className="footer-language">

            <svg className="footer-language-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 10h10l-5 5z"></path>
            </svg>

            <span className="footer-language-text">Português (Brasil)</span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="footer-language-menu" data-bs-theme="dark">
            {languages.map((language) => (
              <Dropdown.Item key={language}>
                {language}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>

        </Dropdown>
      </div>
    </div>
  );
}

export default FooterBottom;