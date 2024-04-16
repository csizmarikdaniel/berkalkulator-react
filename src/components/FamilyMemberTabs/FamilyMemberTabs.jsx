import TabContainer from "./components/TabContainer";
import Tab from "./components/Tab";

const FamilyMemberTabs = ({ names }) => {
  return (
    <div>
      <TabContainer>
        {names.map((name) => (
          <Tab key={name}>{name}</Tab>
        ))}
      </TabContainer>
    </div>
  );
};

export default FamilyMemberTabs;
