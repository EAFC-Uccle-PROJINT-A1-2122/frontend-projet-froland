import { TextField } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import EntityForm from "../components/EntityForm";

const CourseForm = () => {
  const [{ loading, error }, postData] = useAxios(
    {
      url: "/courses",
      method: "POST",
    },
    { manual: true }
  );
  const [courseName, setCourseName] = React.useState("");
  const handleChange = (event) => {
    setCourseName(event.target.value);
  };
  const handleSubmit = () => {
    return postData({ data: { name: courseName } });
  };
  return (
    <EntityForm
      listRoute="/courses"
      title="Nouveau cours"
      loading={loading}
      error={error}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Nom de l'unité d'enseignement"
        variant="outlined"
        value={courseName}
        onChange={handleChange}
        disabled={loading}
      />
    </EntityForm>
  );
};

export default CourseForm;
