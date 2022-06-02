import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button color="inherit" onClick={() => loginWithRedirect()}>
      Se connecter
    </Button>
  );
}

export default LoginButton;
