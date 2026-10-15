import "./FooterColumn.css";

import { Col } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

import SocialIcons from "../assets/SocialIcons";

function FooterColumn({ section, socialLinks }) {
  return (
    <Col xs={6} md={4} lg={2} className="footer-column">

      <h5>{section.title}</h5>

      <ListGroup>

        {section.links.map((link) => (
          <ListGroup.Item key={link.label}>
            <a href={link.url}>
              {link.label}
            </a>
          </ListGroup.Item>
        ))}

      </ListGroup>

      {socialLinks && (
        <div className="footer-social ">

          <h5 className="text-conecte">Conecte-se Conosco</h5>

          <div className="footer-social-links d-grid gap-2">

        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            aria-label={social.label}
          >
            <SocialIcons icon={social.icon} />
            <span>{social.label}</span>
          </a>
        ))}

          </div>

        </div>
      )}

    </Col>
  );
}

export default FooterColumn;