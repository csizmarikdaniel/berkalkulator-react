import React, { FC } from "react";
import { CalculatedMember } from "../../../types";

const SummaryTable: FC<{ members: CalculatedMember[] }> = ({ members }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Név</th>
          <th>Nettó jövedelem</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td>{member.name}</td>
            <td>{member.netto}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SummaryTable;
