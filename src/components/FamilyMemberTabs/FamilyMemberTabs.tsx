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
  setActiveMember: (member: number) => void;
}> = ({ names, addNewMember, setActiveMember }) => {
  return (
    <div>
      <TabContainer>
        {names.map((name) => (
          <div onClick={() => setActiveMember(name.id)} key={name.id}>
            <Tab>{name.name}</Tab>
          </div>
        ))}
        <AddNewButton addNewTab={addNewMember} />
      </TabContainer>
    </div>
  );
};

export default FamilyMemberTabs;
