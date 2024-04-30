import React, { FC } from "react";
import { Member } from "../../../types";

const ResultDisplay: FC<{ netto: number }> = ({ netto }) => {
  return (
    <div className="w-fit mx-auto rounded-lg py-5 px-10 mt-3 text-center bg-slate-800 text-white text-lg">
      {netto} Ft
    </div>
  );
};

export default ResultDisplay;
