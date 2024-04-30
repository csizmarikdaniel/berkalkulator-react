import React from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";
import { familyMembers as members } from "../../domain/familyMembers";
import { Member } from "../types";

const HouseholdSalaryCalculator = () => {
  const [familyMembers, setFamilyMembers] = useState<Member[]>(members);
  const [activeMember, setActiveMember] = useState(1);

  const addNewMember = () => {
    const newMember = {
      id: familyMembers.length + 1,
      name: `Tag ${familyMembers.length + 1}`,
      brutto: 0,
      szja: false,
      hazassag_datuma: undefined,
      szemelyi_kedvezmeny: false,
      csaladi_kedvezmeny: undefined,
      netto: 0,
    };
    setFamilyMembers([...familyMembers, newMember]);
    setActiveMember(newMember.id);
  };

  const updateMember = (member) => {
    const updatedMembers = familyMembers.map((m) =>
      m.id === member.id ? member : m
    );
    setFamilyMembers(updatedMembers);
  };

  return (
    <>
      <header>
        <FamilyMemberTabs
          members={familyMembers}
          activeMember={activeMember}
          addNewMember={() => addNewMember()}
          setActiveMember={setActiveMember}
        />
      </header>
      <main className="grid grid-cols-2">
        <SalaryCalculator
          member={familyMembers[activeMember - 1]}
          updateMember={updateMember}
        />
        <HouseholdSummary members={familyMembers} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
