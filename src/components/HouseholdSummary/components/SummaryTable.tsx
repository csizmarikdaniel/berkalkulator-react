import React, { FC } from "react";
import { Member } from "../../../types";

const SummaryTable: FC<{
  members: Member[];
  setActiveMemberId: (memberId: number) => void;
}> = ({ members, setActiveMemberId }) => {
  return (
    <table className="table bg-white">
      <thead>
        <tr>
          <th>Név</th>
          <th>Nettó jövedelem</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member) => (
          <tr
            key={member.id}
            onClick={() => setActiveMemberId(member.id)}
            className="hover"
          >
            <td>{member.name}</td>
            <td>{member.netto}</td>
          </tr>
        ))}
        <tr>
          <td>Összesen</td>
          <td>{members.reduce((sum, member) => sum + member.netto, 0)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SummaryTable;
