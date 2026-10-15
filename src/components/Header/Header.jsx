import "./Header.css";

import Navbar from "react-bootstrap/Navbar";

import HeaderLogo from "./HeaderLogo";
import HeaderActions from "./HeaderActions";

function Header() {
  return (
    <header>
      <Navbar className="header-navbar">
        <div className="layout-container header-container">
          <HeaderLogo />
          <HeaderActions />
        </div>
      </Navbar>
    </header>
  );
}

export default Header;