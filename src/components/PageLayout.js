import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import LeftMenu from "./LeftMenu";
import TopBar from "./TopBar";

const drawerWidth = 240;

const PageLayout = ({ title, children }) => (
  <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <TopBar title={title} drawerWidth={drawerWidth} />
    <LeftMenu drawerWidth={drawerWidth} />
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
    >
      <Toolbar />
      <Container maxWidth="lg">{children}</Container>
    </Box>
  </Box>
);

export default PageLayout;
