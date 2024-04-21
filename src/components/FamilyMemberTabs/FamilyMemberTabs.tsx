import React, { FC } from "react";

import TabContainer from "./components/TabContainer";
import Tab from "./components/Tab";
import AddNewButton from "./components/AddNewButton";

type FamilyMember = {
  id: number;
  name: string;
};

const FamilyMemberTabs: FC<{
  members: FamilyMember[];
  activeMember: number;
  addNewMember: () => void;
  setActiveMember: (member: number) => void;
}> = ({ members, activeMember, addNewMember, setActiveMember }) => {
  return (
    <div>
      <TabContainer>
        {members.map((member) => (
          <div onClick={() => setActiveMember(member.id)} key={member.id}>
            <Tab active={activeMember == member.id}>{member.name}</Tab>
          </div>
        ))}
        <AddNewButton addNewTab={addNewMember} />
      </TabContainer>
    </div>
  );
};

export default FamilyMemberTabs;
