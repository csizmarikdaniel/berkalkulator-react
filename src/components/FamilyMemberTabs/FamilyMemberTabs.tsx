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
  activeMemberId: number;
  addNewMember: () => void;
  setActiveMember: (memberId: number) => void;
}> = ({ members, activeMemberId, addNewMember, setActiveMember }) => {
  return (
    <div>
      <TabContainer>
        {members.map((member) => (
          <div onClick={() => setActiveMember(member.id)} key={member.id}>
            <Tab active={activeMemberId == member.id}>{member.name}</Tab>
          </div>
        ))}
        <AddNewButton addNewTab={addNewMember} />
      </TabContainer>
    </div>
  );
};

export default FamilyMemberTabs;
