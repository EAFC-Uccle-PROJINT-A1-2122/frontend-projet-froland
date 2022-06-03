import { Card, CardContent, Grid, Typography } from "@mui/material";

const EntityListItem = ({ entity }) => {
  return (
    <Grid item sm={12} md={6}>
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
