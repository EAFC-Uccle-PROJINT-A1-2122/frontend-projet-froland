import { Container, Stack } from "@mui/material";
import Axios from "axios";
import { configure } from "axios-hooks";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import SectionForm from "./pages/SectionForm";
import SectionList from "./pages/SectionList";

function App() {
  const axios = Axios.create({
    baseURL: "http://localhost:8080/api/v1",
  });
  const defaultOptions = {
    useCache: false,
  };
  configure({ axios, defaultOptions });
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<SectionList />} />
          <Route path="/sections" element={<SectionList />} />
          <Route path="/sections/new" element={<SectionForm />} />
        </Routes>
      </Container>
    </Stack>
  );
}

export default App;
