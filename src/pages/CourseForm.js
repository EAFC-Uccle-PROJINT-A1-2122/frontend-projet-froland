import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import useAxios from "axios-hooks";
import React from "react";
import EntityForm from "../components/EntityForm";

const CourseForm = () => {
  const [{ loading: creatingCourse, error }, postData] = useAxios(
    {
      url: "/courses",
      method: "POST",
    },
    { manual: true }
  );
  const [
    { loading: loadingSections, error: errorSections, data: sectionList },
  ] = useAxios("/sections");
  const [name, setName] = React.useState("");
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const [checkedSections, setCheckedSections] = React.useState([]);
  const toggleCheckedSection = (sectionId) => {
    const isChecked = checkedSections.includes(sectionId);
    if (isChecked) {
      setCheckedSections(
        checkedSections.filter((section) => section !== sectionId)
      );
    } else {
      setCheckedSections([...checkedSections, sectionId]);
    }
  };
  const handleSubmit = () => {
    return postData({ data: { name: name, sectionIds: checkedSections } });
  };
  return (
    <EntityForm
      disabled={creatingCourse}
      error={error || errorSections}
      loading={loadingSections}
      listRoute="/courses"
      title="Nouveau cours"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Nom de l'unité d'enseignement"
        variant="outlined"
        value={name}
        onChange={handleChangeName}
        disabled={creatingCourse}
        required={true}
        autoFocus={true}
      />
      {sectionList && (
        <FormControl
          sx={{ m: 3 }}
          component="fieldset"
          variant="standard"
          disabled={creatingCourse}
        >
          <FormLabel component="legend">Sections concernées</FormLabel>
          <FormGroup>
            {sectionList.map((section) => (
              <FormControlLabel
                key={section.id}
                control={
                  <Checkbox
                    checked={checkedSections.includes(section.id)}
                    onChange={() => toggleCheckedSection(section.id)}
                  />
                }
                label={section.name}
              />
            ))}
          </FormGroup>
        </FormControl>
      )}
    </EntityForm>
  );
};

export default CourseForm;
