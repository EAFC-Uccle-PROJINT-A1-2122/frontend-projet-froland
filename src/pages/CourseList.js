import useAxios from "axios-hooks";
import EntityList from "../components/EntityList";
import EntityListItem from "../components/EntityListItem";

const CourseList = () => {
  const [{ data, loading, error }] = useAxios("/courses");
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
    </EntityList>
  );
};

export default CourseList;
