import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";

const SectionList = () => {
  const [{ data, loading, error }] = useAxios("/sections");
  return (
    <Stack spacing={2}>
      <h2>Sections</h2>
      {loading && <CircularProgress />}
      {error && (
        <Alert severity="error">
          Le chargement ne s'est pas déroulé comme prévu.
        </Alert>
      )}
      {data && (
        <>
          <Grid container spacing={2}>
            {data.map((section) => (
              <SectionListItem section={section} key={section.id} />
            ))}
          </Grid>
          <Fab
            color="primary"
            aria-label="add"
            component={Link}
            to="/sections/new"
          >
            <AddIcon />
          </Fab>
        </>
      )}
    </Stack>
  );
};

const SectionListItem = ({ section }) => {
  return (
    <Grid item sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {section.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SectionList;
