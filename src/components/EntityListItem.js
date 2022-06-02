import { Card, CardContent, Grid, Typography } from "@mui/material";

const EntityListItem = ({ entity }) => {
  return (
    <Grid item sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {entity.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EntityListItem;
