import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";

const MenuBar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
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
    </Box>
  );
};

export default MenuBar;
