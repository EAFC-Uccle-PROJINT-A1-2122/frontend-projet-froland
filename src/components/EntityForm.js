import { Alert, Button, Stack } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const EntityForm = ({ loading, error, onSubmit, listUrl, title, children }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit().then(() => {
      navigate("/courses");
    });
  };

  return (
    <PageLayout title={title}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          {children}
          <Stack direction="row" spacing={1}>
            <Button variant="contained" type="submit" disabled={loading}>
              Créer
            </Button>
            <Button
              variant="outlined"
              LinkComponent={Link}
              to={listUrl}
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

export default EntityForm;
