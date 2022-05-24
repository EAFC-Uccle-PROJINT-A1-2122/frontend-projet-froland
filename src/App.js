import { Container, Stack } from "@mui/material";
import MenuBar from "./components/MenuBar";
import SectionList from "./pages/SectionList";

function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <SectionList />
      </Container>
    </Stack>
  );
}

export default App;
