import React from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";
import { familyMembers as members } from "../../domain/familyMembers";
import { Member } from "../types";

const HouseholdSalaryCalculator = () => {
  const [familyMembers, setFamilyMembers] = useState<Member[]>(members);
  const [activeMemberId, setActiveMemberId] = useState(1);

  const [lastId, setLastId] = useState(familyMembers.length + 1);
  const addNewMember = () => {
    const newMember = {
      id: lastId,
      name: `Tag ${lastId}`,
      brutto: 0,
      szja: false,
      hazassag_datuma: undefined,
      szemelyi_kedvezmeny: false,
      csaladi_kedvezmeny: undefined,
      netto: 0,
    };
    setFamilyMembers([...familyMembers, newMember]);
    setActiveMemberId(newMember.id);
    setLastId(lastId + 1);
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
          activeMemberId={activeMemberId}
          addNewMember={() => addNewMember()}
          setActiveMember={setActiveMemberId}
        />
      </header>
      <main className="grid grid-cols-2">
        <SalaryCalculator
          member={
            familyMembers.find((member) => member.id === activeMemberId) ??
            familyMembers[0]
          }
          updateMember={updateMember}
          deleteMember={(id) => {
            setFamilyMembers(
              familyMembers.filter((member) => member.id !== id)
            );
            setActiveMemberId(familyMembers[0].id);
          }}
        />
        <HouseholdSummary
          members={familyMembers}
          setActiveMemberId={setActiveMemberId}
        />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
