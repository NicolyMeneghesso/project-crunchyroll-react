import { Button, ButtonGroup } from "react-bootstrap";

function HeaderActions() {
  return (
    <ButtonGroup className="header-actions">

      <Button className="button-login">
        LOGIN
      </Button>

      <Button className="button-premium">
        INICIAR TESTE GRÁTIS
      </Button>

    </ButtonGroup>
  );
}

export default HeaderActions;