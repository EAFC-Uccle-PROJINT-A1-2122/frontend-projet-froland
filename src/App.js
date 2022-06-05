import { useAuth0 } from "@auth0/auth0-react";
import { Alert } from "@mui/material";
import Axios from "axios";
import { configure } from "axios-hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import CourseList from "./pages/CourseList";
import CourseForm from "./pages/CourseForm";
import SectionForm from "./pages/SectionForm";
import SectionList from "./pages/SectionList";

function App() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  if (isAuthenticated) {
    getAccessTokenSilently().then((token) => {
      const axios = Axios.create({
        baseURL: "/api/v1",
        headers: { authorization: `Bearer ${token}` },
      });
      const defaultOptions = {
        useCache: false,
      };
      configure({ axios, defaultOptions });
    });
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/sections" />} />
        <Route path="/sections" element={<SectionList />} />
        <Route path="/sections/new" element={<SectionForm />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/new" element={<CourseForm />} />
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
