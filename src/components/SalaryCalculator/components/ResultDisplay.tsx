import React, { FC } from "react";
import { Member } from "../../../types";

const ResultDisplay: FC<{ netto: number }> = ({ netto }) => {
  return <div>{netto}</div>;
};

export default ResultDisplay;
