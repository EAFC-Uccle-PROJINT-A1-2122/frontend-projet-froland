import { Alert, Button, CircularProgress, Stack } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const EntityForm = ({
  disabled = false,
  error = false,
  loading = false,
  onSubmit,
  listRoute,
  title,
  children,
}) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit().then(() => {
      navigate(listRoute);
    });
  };

  if (loading) {
    return (
      <PageLayout title={title}>
        <CircularProgress />
      </PageLayout>
    );
  } else if (error) {
    return (
      <PageLayout title={title}>
        <Alert severity="error">
          Une erreur s'est produite durant le chargement du formulaire.
        </Alert>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout title={title}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {children}
            <Stack direction="row" spacing={1}>
              <Button variant="contained" type="submit" disabled={disabled}>
                Créer
              </Button>
              <Button
                variant="outlined"
                LinkComponent={Link}
                to={listRoute}
                disabled={disabled}
              >
                Annuler
              </Button>
            </Stack>
            {error && <Alert severity="error">Une erreur s'est produite</Alert>}
          </Stack>
        </form>
      </PageLayout>
    );
  }
};

export default EntityForm;
