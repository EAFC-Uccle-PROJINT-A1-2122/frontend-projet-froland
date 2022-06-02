import useAxios from "axios-hooks";
import EntityList from "../components/EntityList";
import EntityListItem from "../components/EntityListItem";

const SectionList = () => {
  const [{ data, loading, error }] = useAxios("/sections");
  return (
    <EntityList
      title="Sections"
      addEntityRoute="/sections/new"
      loading={loading}
      error={error}
    >
      {data &&
        data.map((section) => (
          <EntityListItem entity={section} key={section.id} />
        ))}
    </EntityList>
  );
};

export default SectionList;
