import { useAuth0 } from "@auth0/auth0-react";
import { Alert } from "@mui/material";
import Axios from "axios";
import { configure } from "axios-hooks";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import SectionForm from "./pages/SectionForm";
import SectionList from "./pages/SectionList";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (isAuthenticated) {
    getAccessTokenSilently().then((token) => {
      const headers = { Authorization: `Bearer ${token}` };
      const axios = Axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
        headers: headers,
      });
      const defaultOptions = {
        useCache: false,
      };
      configure({ axios, defaultOptions });
    });
    return (
      <Routes>
        <Route path="/" element={<SectionList />} />
        <Route path="/sections" element={<SectionList />} />
        <Route path="/sections/new" element={<SectionForm />} />
      </Routes>
    );
  } else {
    return (
      <PageLayout title="Gestion des présences">
        <Alert severity="info">
          Vous devez vous connecter pour accéder au reste de l'application.
        </Alert>
      </PageLayout>
    );
  }
}

export default App;
