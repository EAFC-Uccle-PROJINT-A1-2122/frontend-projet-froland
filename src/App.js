import { useAuth0 } from "@auth0/auth0-react";
import { Container, Stack } from "@mui/material";
import Axios from "axios";
import { configure } from "axios-hooks";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import SectionForm from "./pages/SectionForm";
import SectionList from "./pages/SectionList";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (isAuthenticated) {
    getAccessTokenSilently().then((token) => {
      const headers = { Authorization: `Bearer ${token}` };
      const axios = Axios.create({
        baseURL: "http://localhost:8080/api/v1",
        headers: headers,
      });
      const defaultOptions = {
        useCache: false,
      };
      configure({ axios, defaultOptions });
    });
  }
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<SectionList />} />
            <Route path="/sections" element={<SectionList />} />
            <Route path="/sections/new" element={<SectionForm />} />
          </Routes>
        ) : (
          <p>Vous devez vous connecter.</p>
        )}
      </Container>
    </Stack>
  );
}

export default App;
