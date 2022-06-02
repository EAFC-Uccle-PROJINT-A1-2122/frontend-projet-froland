import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const LeftMenu = ({ drawerWidth }) => (
  <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/sections">
          <ListItemText primary="Sections" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/courses">
          <ListItemText primary="Courses" />
        </ListItemButton>
      </ListItem>
    </List>
  </Drawer>
);

export default LeftMenu;
