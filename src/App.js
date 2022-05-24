import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import MenuBar from "./components/MenuBar";
import AddIcon from "@mui/icons-material/Add";

function App() {
  return (
    <Stack>
      <MenuBar />
      <Container maxWidth="md">
        <Stack spacing={2}>
          <h2>Sections</h2>
          <Grid container spacing={2}>
            <Grid item sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Informatique de gestion
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Informatique de gestion
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Informatique de gestion
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Informatique de gestion
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Stack>
      </Container>
    </Stack>
  );
}

export default App;
