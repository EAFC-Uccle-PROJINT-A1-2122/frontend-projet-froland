import { Grid, Pagination } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import EntityList from "../components/EntityList";
import EntityListItem from "../components/EntityListItem";

const CourseList = () => {
  const [page, setPage] = React.useState(1);
  const [{ data, loading, error }] = useAxios({
    url: "/courses",
    params: { page: page - 1, size: 10 },
  });

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <EntityList
      title="Cours"
      addEntityRoute="/courses/new"
      loading={loading}
      error={error}
    >
      {data &&
        data.content.map((course) => (
          <EntityListItem entity={course} key={course.id} />
        ))}

      {data && (
        <Grid item xs={12}>
          <Pagination
            count={data.totalPages}
            onChange={handlePageChange}
            page={page}
          />
        </Grid>
      )}
    </EntityList>
  );
};

export default CourseList;
