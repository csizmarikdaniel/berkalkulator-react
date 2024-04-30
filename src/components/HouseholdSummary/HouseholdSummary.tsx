import React, { FC } from "react";
import SummaryTable from "./components/SummaryTable";
import { Member } from "../../types";

const HouseholdSummary: FC<{
  members: Member[];
  setActiveMemberId: (memberId: number) => void;
}> = ({ members, setActiveMemberId }) => {
  return (
    <div className="bg-slate-200 rounded-md m-3 p-3">
      <h2 className="text-center text-2xl mb-5">
        Háztartás összesített jövedelme
      </h2>
      <SummaryTable members={members} setActiveMemberId={setActiveMemberId} />
    </div>
  );
};

export default HouseholdSummary;
