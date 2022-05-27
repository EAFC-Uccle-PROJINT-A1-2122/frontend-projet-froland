import { useAuth0 } from "@auth0/auth0-react";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import { configure } from "axios-hooks";
import { Route, Routes } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import SectionForm from "./pages/SectionForm";
import SectionList from "./pages/SectionList";

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  getAccessTokenSilently().then((token) => {
    const defaultAxios = axios.create({
      baseURL: "http://localhost:8080/api/v1",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    configure({ axios: defaultAxios, defaultOptions: { useCache: false } });
  });

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
          <NotAuthenticated />
        )}
      </Container>
    </Stack>
  );
}

const NotAuthenticated = () => (
  <p>Vous devez vous connecter pour accéder à cette application.</p>
);

export default App;
