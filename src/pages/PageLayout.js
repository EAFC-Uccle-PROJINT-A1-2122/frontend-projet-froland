import { Container, Stack } from "@mui/material";
import MenuBar from "../components/MenuBar";

const PageLayout = ({ title, children }) => (
  <Stack>
    <MenuBar title={title} />
    <Container
      maxWidth="lg"
      sx={{
        paddingY: 3,
      }}
    >
      {children}
    </Container>
  </Stack>
);

export default PageLayout;
