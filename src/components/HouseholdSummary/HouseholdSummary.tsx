import React, { FC } from "react";
import SummaryTable from "./components/SummaryTable";
import { Member } from "../../types";

const HouseholdSummary: FC<{ members: Member[] }> = ({ members }) => {
  return (
    <div>
      <h1>Háztartás összesített jövedelme</h1>
      <SummaryTable members={members} />
    </div>
  );
};

export default HouseholdSummary;
