import "./Footer.css";

import Row from 'react-bootstrap/Row';

import FooterColumn from "./FooterColumn/FooterColumn";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterSeo from "./FooterSeo/FooterSeo";

import { footerSections, socialLinks } from "./data/footerData";

function Footer() {
  return (
    <footer className="footer">
      <div className="layout-container">
         <Row>

          {footerSections.slice(0, 5).map((section) => (
            <FooterColumn
              key={section.title}
              section={section}
            />
          ))}

          <FooterColumn
            section={footerSections[5]}
            socialLinks={socialLinks}
          />

        </Row>
        <FooterBottom />
        <FooterSeo />
      </div>

    </footer>
  );
}

export default Footer;