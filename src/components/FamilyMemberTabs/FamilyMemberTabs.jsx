import TabContainer from "./components/TabContainer";
import Tab from "./components/Tab";
import AddNewButton from "./components/AddNewButton";

const FamilyMemberTabs = ({ names, addNewMember }) => {
  return (
    <div>
      <TabContainer>
        {names.map((name) => (
          <Tab key={name.id}>{name.name}</Tab>
        ))}
        <AddNewButton addNewTab={addNewMember} />
      </TabContainer>
    </div>
  );
};

export default FamilyMemberTabs;
