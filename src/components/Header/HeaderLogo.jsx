import Navbar from "react-bootstrap/Navbar";

import LogoDesktop from "./assets/LogoDesktop";
import LogoMobile from "./assets/LogoMobile";

function HeaderLogo() {
  return (
    <Navbar.Brand href="/">

      <LogoDesktop />
      <LogoMobile />

    </Navbar.Brand>
  );
}

export default HeaderLogo;