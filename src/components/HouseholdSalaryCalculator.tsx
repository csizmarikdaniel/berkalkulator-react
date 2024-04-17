import React from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";
import { familyMembers as members } from "../../domain/familyMembers";

const HouseholdSalaryCalculator = () => {
  const [familyMembers, setFamilyMembers] = useState(members);
  const [activeMember, setActiveMember] = useState(1);
  const addNewMember = () => {
    const newMember = {
      id: familyMembers.length + 1,
      name: `Tag ${familyMembers.length + 1}`,
      brutto: 0,
      szja: false,
      friss_hazas: false,
      szemelyi_kedvezmeny: false,
      csaladi_kedvezmeny: false,
    };
    setFamilyMembers([...familyMembers, newMember]);
    setActiveMember(newMember.id);
  };
  return (
    <>
      <header>
        <FamilyMemberTabs
          names={familyMembers}
          addNewMember={() => addNewMember()}
          setActiveMember={setActiveMember}
        />
      </header>
      <main>
        <SalaryCalculator
          member={familyMembers.find((member) => member.id == activeMember)}
        />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
