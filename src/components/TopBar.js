import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const TopBar = ({ title, drawerWidth }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {isAuthenticated ? (
          <Button color="inherit" onClick={() => logout()}>
            Se déconnecter
          </Button>
        ) : (
          <Button color="inherit" onClick={() => loginWithRedirect()}>
            Se connecter
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
