import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";
import { familyMembers as members } from "../../domain/familyMembers";

const HouseholdSalaryCalculator = () => {
  const [familyMembers, setFamilyMembers] = useState(members);
  const addNewMember = () => {
    console.log("Új tag hozzáadása");
    const newMember = {
      id: familyMembers.length + 1,
      name: `Tag ${familyMembers.length + 1}`,
    };
    setFamilyMembers([...familyMembers, newMember]);
  };
  return (
    <>
      <header>
        <FamilyMemberTabs
          names={familyMembers}
          addNewMember={() => addNewMember()}
        />
      </header>
      <main>
        <SalaryCalculator index={familyMembers.length} />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
