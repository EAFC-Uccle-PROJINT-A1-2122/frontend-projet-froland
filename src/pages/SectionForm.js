import { TextField } from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import EntityForm from "../components/EntityForm";

const SectionForm = () => {
  const [{ loading, error }, postData] = useAxios(
    {
      url: "/sections",
      method: "POST",
    },
    { manual: true }
  );
  const [sectionName, setSectionName] = React.useState("");
  const handleChange = (event) => {
    setSectionName(event.target.value);
  };
  const handleSubmit = () => {
    return postData({ data: { name: sectionName } });
  };
  return (
    <EntityForm
      listRoute="/sections"
      title="Nouvelle section"
      loading={loading}
      error={error}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Nom de la section"
        variant="outlined"
        value={sectionName}
        onChange={handleChange}
        disabled={loading}
      />
    </EntityForm>
  );
};

export default SectionForm;
