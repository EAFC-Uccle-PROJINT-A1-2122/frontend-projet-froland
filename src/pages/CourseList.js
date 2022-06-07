import { Grid, Pagination } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import EntityList from "../components/EntityList";
import EntityListItem from "../components/EntityListItem";

const CourseList = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const [{ data, loading, error }] = useAxios({
    url: "/courses",
    params: {
      page: currentPage,
      size: 9,
    },
  });
  return (
    <EntityList
      title="Cours"
      addEntityRoute="/courses/new"
      loading={loading}
      error={error}
    >
      {data &&
        data.map((course) => (
          <EntityListItem entity={course} key={course.id} />
        ))}
      <Grid item lg={12}>
        <Pagination count={10} page={currentPage} onChange={handlePageChange} />
      </Grid>
    </EntityList>
  );
};

export default CourseList;
