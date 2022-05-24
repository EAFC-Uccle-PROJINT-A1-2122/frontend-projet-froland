import { Container, Stack } from "@mui/material";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <p>Hello world!</p>
      </Container>
    </Stack>
  );
}

export default App;
