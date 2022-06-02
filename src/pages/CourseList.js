import AddIcon from "@mui/icons-material/Add";
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
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

const CourseList = () => {
  const [{ data, loading, error }] = useAxios("/courses");
  return (
    <PageLayout title="Courses">
      <Stack spacing={2}>
        {loading && <CircularProgress />}
        {error && (
          <Alert severity="error">
            Le chargement ne s'est pas déroulé comme prévu.
          </Alert>
        )}
        {data && (
          <>
            <Grid container spacing={2}>
              {data.map((course) => (
                <CourseListItem course={course} key={course.id} />
              ))}
            </Grid>
            <Fab
              color="primary"
              aria-label="add"
              component={Link}
              to="/courses/new"
            >
              <AddIcon />
            </Fab>
          </>
        )}
      </Stack>
    </PageLayout>
  );
};

const CourseListItem = ({ course }) => {
  return (
    <Grid item sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {course.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CourseList;
