import AddIcon from "@mui/icons-material/Add";
import { Alert, CircularProgress, Fab, Grid, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const EntityList = ({ loading, error, addEntityRoute, title, children }) => {
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
          Une erreur s'est produite durant le chargement des données.
        </Alert>
      </PageLayout>
    );
  } else {
    return (
      <PageLayout title={title}>
        <Stack spacing={2}>
          <Grid container spacing={2}>
            {children}
          </Grid>
          <Fab
            color="primary"
            aria-label="add"
            component={Link}
            to={addEntityRoute}
          >
            <AddIcon />
          </Fab>
        </Stack>
      </PageLayout>
    );
  }
};

export default EntityList;
