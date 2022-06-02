import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      color="inherit"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Se déconnecter
    </Button>
  );
}

export default LogoutButton;
