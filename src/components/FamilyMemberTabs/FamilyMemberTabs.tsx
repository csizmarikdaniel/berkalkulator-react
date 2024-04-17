import React, { FC } from "react";

import TabContainer from "./components/TabContainer";
import Tab from "./components/Tab";
import AddNewButton from "./components/AddNewButton";

type FamilyMember = {
  id: number;
  name: string;
};

const FamilyMemberTabs: FC<{
  names: FamilyMember[];
  addNewMember: () => void;
}> = ({ names, addNewMember }) => {
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
