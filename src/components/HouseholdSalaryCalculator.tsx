import React from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";
import { familyMembers as members } from "../../domain/familyMembers";

const HouseholdSalaryCalculator = () => {
  const [familyMembers, setFamilyMembers] = useState(members);
  const [activeMember, setActiveMember] = useState(1);
  familyMembers.map((m) => updateCalculation(m.id));
  const addNewMember = () => {
    const newMember = {
      id: familyMembers.length + 1,
      name: `Tag ${familyMembers.length + 1}`,
      brutto: 0,
      szja: false,
      friss_hazas: false,
      szemelyi_kedvezmeny: false,
      csaladi_kedvezmeny: false,
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
    updateCalculation(member.id);
  };

  const updateCalculation = (id) => {
    const member = familyMembers.find((m) => m.id === id) ?? familyMembers[0];
    const szja = member.brutto * 0.15;
    const tb = member.brutto * 0.185;
    member.netto = member.brutto - szja - tb;

    if (member.szja && member.brutto < 499952) {
      member.netto += szja;
    }
    if (member.szemelyi_kedvezmeny) {
      member.netto +=
        member.brutto - member.netto > 77300
          ? 77300
          : member.brutto - member.netto;
    }
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
