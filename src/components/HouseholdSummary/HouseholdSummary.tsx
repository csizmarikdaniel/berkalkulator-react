import React, { FC } from "react";
import SummaryTable from "./components/SummaryTable";
import { Member } from "../../types";

const HouseholdSummary: FC<{
  members: Member[];
  setActiveMemberId: (memberId: number) => void;
}> = ({ members, setActiveMemberId }) => {
  return (
    <div>
      <h1>Háztartás összesített jövedelme</h1>
      <SummaryTable members={members} setActiveMemberId={setActiveMemberId} />
    </div>
  );
};

export default HouseholdSummary;
