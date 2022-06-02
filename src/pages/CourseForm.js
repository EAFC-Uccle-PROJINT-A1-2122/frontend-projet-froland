import { Alert, Button, Stack, TextField } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const CourseForm = () => {
  const [{ loading, error }, postData] = useAxios(
    {
      url: "/courses",
      method: "POST",
    },
    { manual: true }
  );
  const navigate = useNavigate();
  const [sectionName, setSectionName] = React.useState("");
  const handleChange = (event) => {
    setSectionName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postData({ data: { name: sectionName } }).then(() => {
      navigate("/courses");
    });
  };
  return (
    <PageLayout title="Nouveau cours">
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Nom de l'unité d'enseignement"
            variant="outlined"
            value={sectionName}
            onChange={handleChange}
            disabled={loading}
          />
          <Stack direction="row" spacing={1}>
            <Button variant="contained" type="submit" disabled={loading}>
              Créer
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                navigate("/sections");
              }}
              disabled={loading}
            >
              Annuler
            </Button>
          </Stack>
          {error && <Alert severity="error">Une erreur s'est produite</Alert>}
        </Stack>
      </form>
    </PageLayout>
  );
};

export default CourseForm;
